import { useNameReveal } from './lib/useNameReveal';
import { useMediaQuery } from './lib/useMediaQuery';
import { useInView } from './lib/useInView';
import type { CSSProperties } from 'react';
import { IconSprite, Icon } from './components/Icons';
import { RecentRepos } from './components/RecentRepos';
import { MobileNav } from './components/MobileNav';
import { LangSwitcher } from './components/LangSwitcher';
import { useT } from './i18n/LanguageContext';
import { GITHUB_USER, HIDDEN_REPOS, type Entry, type Project } from './content';

const LINKEDIN = 'https://www.linkedin.com/in/daniel-cort%C3%A9s-890423324/';
const GITHUB = `https://github.com/${GITHUB_USER}`;
const EMAIL = 'danielcortescasadas6@gmail.com';
const CURRENT_YEAR = new Date().getFullYear();

function ProjectLink({ project }: { project: Project }) {
  const t = useT();
  switch (project.link.kind) {
    case 'web':
      return <a href={project.link.href}>{t.project.web}</a>;
    case 'code':
      return <a href={project.link.href}>{t.project.code}</a>;
    case 'private':
      return <span>{t.project.private}</span>;
  }
}

function TimelineEntry({ entry }: { entry: Entry }) {
  return (
    <li className="entry">
      <p className="entry-date">{entry.date}</p>
      <div className="entry-body">
        <h3 className="entry-title">{entry.title}</h3>
        {entry.org && (
          <p className="entry-org">
            {entry.orgHref ? <a href={entry.orgHref}>{entry.org}</a> : entry.org}
          </p>
        )}
        {entry.description && <p>{entry.description}</p>}
        {entry.points && (
          <ul className="points">
            {entry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {entry.stack && <p className="stack">{entry.stack}</p>}
      </div>
    </li>
  );
}

function ProjectPoints({ points }: { points: string[] }) {
  return (
    <ul className="points">
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

export default function App() {
  useNameReveal();
  const compact = useMediaQuery('(max-width: 51.99rem)');
  const skillsView = useInView<HTMLDListElement>();
  const t = useT();
  let tagIndex = 0;

  const projectGithubLinks = t.projects
    .filter((project) => project.link.kind === 'code')
    .map((project) => (project.link as { href: string }).href);
  const linkedUrls = [GITHUB, ...projectGithubLinks, `${GITHUB}/danielcortes2.github.io`];

  return (
    <>
      <IconSprite />

      <a className="skip-link" href="#contenido">
        {t.skipLink}
      </a>

      <header className="site-header">
        <div className="wrap header-inner">
          <nav className="site-nav" aria-label={t.navAria}>
            <ul>
              <li>
                <a href="#experiencia">{t.nav.experience}</a>
              </li>
              <li>
                <a href="#proyectos">{t.nav.projects}</a>
              </li>
              <li>
                <a href="#contacto">{t.nav.contact}</a>
              </li>
            </ul>
          </nav>
          <LangSwitcher />
        </div>
      </header>

      <main id="contenido">
        <section className="hero" aria-labelledby="nombre">
          <div className="wrap">
            <h1 className="hero-name" id="nombre">
              <span>Daniel</span> <span>Cortés</span>
            </h1>
            <p className="hero-role">{t.hero.role}</p>
            <p className="hero-intro">{t.hero.intro}</p>
            <ul className="hero-actions">
              <li>
                <a className="button button-solid" href={LINKEDIN} rel="me">
                  <Icon name="linkedin" />
                  {t.hero.linkedin}
                </a>
              </li>
              <li>
                <a className="button" href={GITHUB} rel="me">
                  <Icon name="github" />
                  {t.hero.github}
                </a>
              </li>
              <li>
                <a className="button" href={`mailto:${EMAIL}`}>
                  <Icon name="mail" />
                  {t.hero.email}
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="experiencia" aria-labelledby="experiencia-titulo">
          <div className="wrap section-grid">
            <h2 className="section-title" id="experiencia-titulo">
              {t.sections.experience}
            </h2>
            <ol className="timeline">
              {t.experience.map((entry) => (
                <TimelineEntry entry={entry} key={entry.title} />
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="proyectos" aria-labelledby="proyectos-titulo">
          <div className="wrap section-grid">
            <h2 className="section-title" id="proyectos-titulo">
              {t.sections.projects}
            </h2>
            <div className="projects">
              {t.projects.map((project) => (
                <article className="project" key={project.title}>
                  <header className="project-head">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-year">{project.year}</p>
                  </header>
                  <p className="project-kind">{project.kind}</p>
                  <p>{project.summary}</p>
                  {compact ? (
                    <details className="project-details">
                      <summary>{t.project.details}</summary>
                      <ProjectPoints points={project.points} />
                    </details>
                  ) : (
                    <ProjectPoints points={project.points} />
                  )}
                  <p className="stack">{project.stack}</p>
                  <p className="project-links">
                    <ProjectLink project={project} />
                  </p>
                </article>
              ))}

              <RecentRepos user={GITHUB_USER} linkedUrls={linkedUrls} hidden={HIDDEN_REPOS} />
            </div>
          </div>
        </section>

        <section className="section" id="formacion" aria-labelledby="formacion-titulo">
          <div className="wrap section-grid">
            <h2 className="section-title" id="formacion-titulo">
              {t.sections.education}
            </h2>
            <ol className="timeline">
              {t.education.map((entry) => (
                <TimelineEntry entry={entry} key={entry.title} />
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="tecnologias" aria-labelledby="tecnologias-titulo">
          <div className="wrap section-grid">
            <h2 className="section-title" id="tecnologias-titulo">
              {t.sections.skills}
            </h2>
            <dl className={`skills${skillsView.inView ? ' is-revealed' : ''}`} ref={skillsView.ref}>
              {t.skills.map((group) => (
                <div key={group.area}>
                  <dt>{group.area}</dt>
                  <dd>
                    <ul className="tags">
                      {group.items.map((item) => (
                        <li
                          className="tag"
                          key={item}
                          data-label={item}
                          style={{ '--i': tagIndex++ } as CSSProperties}
                        >
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="contacto" aria-labelledby="contacto-titulo">
          <div className="wrap section-grid">
            <h2 className="section-title" id="contacto-titulo">
              {t.sections.contact}
            </h2>
            <div className="contact">
              <p className="contact-intro">{t.contact.intro}</p>
              <a className="contact-email" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <ul className="contact-links">
                <li>
                  <a href={LINKEDIN} rel="me">
                    <Icon name="linkedin" />
                    {t.hero.linkedin}
                  </a>
                </li>
                <li>
                  <a href={GITHUB} rel="me">
                    <Icon name="github" />
                    {t.hero.github}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>© {CURRENT_YEAR} Daniel Cortés</p>
          <p>
            <a href={`${GITHUB}/danielcortes2.github.io`}>{t.footer.code}</a>
          </p>
        </div>
      </footer>

      <MobileNav />
    </>
  );
}
