import { useActiveSection } from '../lib/useActiveSection';
import { useT } from '../i18n/LanguageContext';
import { Icon } from './Icons';

const NAV_ITEMS = [
  { id: 'experiencia', labelKey: 'experience', icon: 'work' },
  { id: 'proyectos', labelKey: 'projects', icon: 'projects' },
  { id: 'contacto', labelKey: 'contact', icon: 'mail' },
] as const;

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export function MobileNav() {
  const active = useActiveSection(NAV_IDS);
  const t = useT();

  return (
    <nav className="mobile-nav" aria-label={t.navAria}>
      <ul>
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={isActive ? 'is-active' : undefined}
                aria-current={isActive ? 'true' : undefined}
              >
                <Icon name={item.icon} />
                <span>{t.nav[item.labelKey]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
