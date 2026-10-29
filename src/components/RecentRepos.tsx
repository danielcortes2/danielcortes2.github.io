import { useEffect, useState } from 'react';

const MAX_REPOS = 4;
const CACHE_TTL = 60 * 60 * 1000;

const TIME_UNITS: Array<[Intl.RelativeTimeFormatUnit, number]> = [
  ['year', 31536000],
  ['month', 2592000],
  ['week', 604800],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
];

interface Repo {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  pushedAt: string;
  fork: boolean;
  archived: boolean;
}

function normalizeUrl(url: string) {
  return url.replace(/\/+$/, '').toLowerCase();
}

function readCache(key: string): Repo[] | null {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as { time: number; data: Repo[] };
    if (entry && Date.now() - entry.time < CACHE_TTL) return entry.data;
  } catch {
    // sessionStorage no disponible (modo privado estricto, cookies bloqueadas…).
  }
  return null;
}

function writeCache(key: string, data: Repo[]) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ time: Date.now(), data }));
  } catch {
    // Igual que arriba: sin caché, la próxima visita vuelve a pedir los datos.
  }
}

async function getRepos(user: string): Promise<Repo[]> {
  const cacheKey = `github-repos:${user}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=pushed&per_page=30`,
      { headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal },
    );
    if (!response.ok) throw new Error(`GitHub API respondió ${response.status}`);

    const repos: Repo[] = (
      (await response.json()) as Array<Record<string, unknown>>
    ).map((repo) => ({
      name: repo.name as string,
      url: repo.html_url as string,
      description: (repo.description as string | null) ?? null,
      language: (repo.language as string | null) ?? null,
      pushedAt: repo.pushed_at as string,
      fork: repo.fork as boolean,
      archived: repo.archived as boolean,
    }));
    writeCache(cacheKey, repos);
    return repos;
  } finally {
    clearTimeout(timer);
  }
}

function timeAgo(date: Date) {
  const relativeTime = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
  const seconds = (date.getTime() - Date.now()) / 1000;
  for (const [unit, size] of TIME_UNITS) {
    if (Math.abs(seconds) >= size) return relativeTime.format(Math.round(seconds / size), unit);
  }
  return 'hace un momento';
}

function metaText(repo: Repo) {
  const updated = `actualizado ${timeAgo(new Date(repo.pushedAt))}`;
  return repo.language
    ? `${repo.language}, ${updated}`
    : updated.charAt(0).toUpperCase() + updated.slice(1);
}

export function RecentRepos({
  user,
  linkedUrls,
  hidden = [],
}: {
  user: string;
  linkedUrls: string[];
  hidden?: string[];
}) {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    let active = true;
    const linkedOnPage = new Set(linkedUrls.map(normalizeUrl));
    const hiddenNames = new Set(hidden.map((name) => name.toLowerCase()));

    getRepos(user)
      .then((all) => {
        if (!active) return;
        const recent = all
          .filter((repo) => !repo.fork && !repo.archived)
          .filter((repo) => !/\.github\.io$/i.test(repo.name))
          .filter((repo) => !hiddenNames.has(repo.name.toLowerCase()))
          .filter((repo) => !linkedOnPage.has(normalizeUrl(repo.url)))
          .slice(0, MAX_REPOS);
        setRepos(recent);
      })
      .catch(() => {
        // Sin conexión o límite de peticiones de la API: se queda solo el enlace al perfil.
      });

    return () => {
      active = false;
    };
  }, [user, linkedUrls, hidden]);

  return (
    <div className="github">
      <h3 className="github-title">Más en GitHub</h3>
      <p>
        Todo mi código público está en{' '}
        <a href={`https://github.com/${user}`}>github.com/{user}</a>.
      </p>
      <ul className="repo-list" hidden={repos.length === 0}>
        {repos.map((repo) => (
          <li className="repo" key={repo.url}>
            <a className="repo-name" href={repo.url}>
              {repo.name}
            </a>
            {repo.description && <p className="repo-desc">{repo.description}</p>}
            <p className="repo-meta">{metaText(repo)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
