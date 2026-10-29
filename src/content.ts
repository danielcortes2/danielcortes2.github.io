export type ProjectLink =
  | { kind: 'web'; href: string }
  | { kind: 'code'; href: string }
  | { kind: 'private' };

export interface Project {
  title: string;
  year: string;
  kind: string;
  summary: string;
  points: string[];
  stack: string;
  link: ProjectLink;
}

export interface Entry {
  date: string;
  title: string;
  org?: string;
  orgHref?: string;
  description?: string;
  points?: string[];
  stack?: string;
}

export interface SkillGroup {
  area: string;
  items: string[];
}

export const GITHUB_USER = 'danielcortes2';

// Repos públicos que no quieres que aparezcan en el bloque "Más en GitHub".
export const HIDDEN_REPOS = ['time-clock-app'];

export const experience: Entry[] = [
  {
    date: 'Septiembre 2024 – actualidad',
    title: 'Desarrollador de software',
    org: 'Inetum',
    orgHref: 'https://www.inetum.com/',
    description:
      'Desarrollo aplicaciones web con inteligencia artificial: sistemas RAG, agentes e integración de modelos LLM en producto, además de automatizar tareas y generar documentación.',
    points: [
      'Actualmente trabajo en un VIGÍA: un sistema multiagente consultor que responde consultando las APIs internas de la empresa.',
      'Integro modelos LLM en las aplicaciones y automatizo flujos de trabajo, desde la recuperación de información hasta la generación de documentos.',
    ],
    stack: 'Python, React, Angular, PostgreSQL, LangChain, LLMs',
  },
];

export const projects: Project[] = [
  {
    title: 'NOX TPV',
    year: '2026',
    kind: 'Terminal de punto de venta',
    summary:
      'TPV táctil para bares y comercios que funciona en local, sin depender de internet: ventas, cuentas abiertas, arqueos de caja, devoluciones e impresión de tickets.',
    points: [
      'Cada cobro lleva una clave de idempotencia: un mismo pago nunca crea dos ventas, y los cobros dudosos se bloquean hasta conciliarlos.',
      'Permisos de administrador y cajero comprobados en el servidor, registro de auditoría y copias de seguridad automáticas con verificación de integridad.',
    ],
    stack: 'Node.js, Express, SQLite, WebSocket, ESC/POS',
    link: { kind: 'private' },
  },
  {
    title: 'gob',
    year: '2026',
    kind: 'Agenda y reservas para barberías, en desarrollo',
    summary:
      'SaaS para barberías pequeñas: los clientes reservan cita desde una web pública y cada negocio gestiona su agenda desde un panel.',
    points: [
      'Monorepo en TypeScript: web en Next.js y API en NestJS que comparten contratos y lógica de dominio.',
      'Las dobles reservas de un mismo profesional se impiden en la propia base de datos con una restricción EXCLUDE de PostgreSQL.',
    ],
    stack: 'Next.js, NestJS, TypeScript, Prisma, PostgreSQL, Tailwind CSS',
    link: { kind: 'private' },
  },
  {
    title: 'Stratek Shop',
    year: '2026',
    kind: 'Tienda online de producto único',
    summary:
      'Tienda con pago por Stripe pensada para cambiar de producto editando un solo archivo: textos, precios, SEO y páginas legales se generan a partir de él.',
    points: [
      'El precio se valida siempre en el servidor y el webhook de Stripe registra cada pedido una sola vez.',
      'SEO técnico (datos estructurados, sitemap, imágenes Open Graph) y analítica GA4 con consentimiento de cookies según el RGPD.',
    ],
    stack: 'Next.js, React, TypeScript, Stripe, Prisma, MySQL',
    link: { kind: 'web', href: 'https://www.stratek.es/' },
  },
  {
    title: 'El Chaco Costillares',
    year: '2026',
    kind: 'Web para un negocio local',
    summary:
      'Web de un servicio de barbacoa argentina a domicilio en Calafell (Tarragona), publicada y en uso.',
    points: [
      'Prerenderizada en el build para que cargue rápido y Google la indexe sin depender de JavaScript.',
      'Imágenes optimizadas automáticamente con sharp y datos estructurados de restaurante para buscadores.',
    ],
    stack: 'React, Vite, sharp, Vercel',
    link: { kind: 'web', href: 'https://chacocostillares.com/' },
  },
  {
    title: 'Despliegue de servicios Linux',
    year: '2025',
    kind: 'Automatización de servidores',
    summary:
      'Script en Bash que deja listo un servidor Ubuntu con NFS, SSHFS, Apache con HTTPS y FTP, con el cortafuegos configurado desde el principio.',
    points: [
      'Opciones avanzadas: IP estática, protección con fail2ban, monitorización con netdata y copias diarias con rsync y cron.',
    ],
    stack: 'Bash, Ubuntu Server, Apache, vsftpd, ufw',
    link: { kind: 'code', href: 'https://github.com/danielcortes2/script_deploy_linux_services' },
  },
];

export const education: Entry[] = [
  {
    date: 'En curso',
    title: 'Grado en Ingeniería Informática',
    org: 'UNIR',
  },
  {
    date: 'Sep 2023 – jun 2025',
    title: 'CFGS en Administración de Sistemas Informáticos en Red (ASIX)',
    org: 'INS Camí de Mar',
    description: 'Redes, servidores Linux y Windows, servicios de red, bases de datos y seguridad.',
  },
];

export const skills: SkillGroup[] = [
  {
    area: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  { area: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'] },
  { area: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma', 'SQLAlchemy'] },
  { area: 'Sistemas', items: ['Linux', 'Bash', 'Apache', 'Redes', 'Git'] },
  { area: 'IA', items: ['LLMs', 'RAG', 'Agentes', 'LangChain'] },
];
