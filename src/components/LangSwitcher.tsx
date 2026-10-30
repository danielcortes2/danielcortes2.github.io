import { useLanguage } from '../i18n/LanguageContext';
import { LANGS, LANG_LABELS, LANG_NAMES } from '../i18n/dictionary';

export function LangSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label={t.langSwitcherAria}>
      {LANGS.map((code) => {
        const isActive = code === lang;
        return (
          <button
            key={code}
            type="button"
            className={`lang-option${isActive ? ' is-active' : ''}`}
            lang={code}
            aria-pressed={isActive}
            aria-label={LANG_NAMES[code]}
            onClick={() => setLang(code)}
          >
            {LANG_LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
