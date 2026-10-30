import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { dictionaries, LANGS, type Dictionary, type Lang } from './dictionary';

const STORAGE_KEY = 'lang';

// Determina el idioma a partir del código de la región/idioma del navegador.
// El navegador reporta la región del usuario (es-ES, es-MX, fr-FR, en-US…), así que
// basta con mirar el subtag principal: español para España y Latinoamérica,
// francés para regiones francófonas, e inglés en el resto.
function matchLang(tag: string): Lang | null {
  const primary = tag.toLowerCase().split('-')[0];
  if (primary === 'es') return 'es';
  if (primary === 'fr') return 'fr';
  if (primary === 'en') return 'en';
  return null;
}

function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as string[]).includes(value);
}

function detectLang(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of candidates) {
    const match = matchLang(tag ?? '');
    if (match) return match;
  }
  return 'en';
}

function readStored(): Lang | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isLang(value) ? value : null;
  } catch {
    return null;
  }
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // La elección guardada manda; si no hay, se detecta por la región del navegador.
  const [lang, setLangState] = useState<Lang>(() => readStored() ?? detectLang());

  useEffect(() => {
    document.documentElement.lang = dictionaries[lang].htmlLang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sin almacenamiento disponible: el cambio se mantiene solo durante la visita.
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  return context;
}

// Atajo para los componentes que solo necesitan los textos.
export function useT(): Dictionary {
  return useLanguage().t;
}
