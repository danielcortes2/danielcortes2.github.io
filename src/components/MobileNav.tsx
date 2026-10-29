import { useActiveSection } from '../lib/useActiveSection';
import { Icon } from './Icons';

const NAV_ITEMS = [
  { id: 'experiencia', label: 'Experiencia', icon: 'work' },
  { id: 'proyectos', label: 'Proyectos', icon: 'projects' },
  { id: 'contacto', label: 'Contacto', icon: 'mail' },
] as const;

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export function MobileNav() {
  const active = useActiveSection(NAV_IDS);

  return (
    <nav className="mobile-nav" aria-label="Secciones">
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
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
