import type { Entry, Project, SkillGroup } from '../content';

export type Lang = 'es' | 'en' | 'fr';

export const LANGS: Lang[] = ['es', 'en', 'fr'];

export const LANG_LABELS: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
};

export const LANG_NAMES: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
};

export interface Dictionary {
  // Atributos del documento
  htmlLang: string;
  // Locale para Intl.RelativeTimeFormat (bloque de GitHub)
  intlLocale: string;

  skipLink: string;
  navAria: string;
  langSwitcherAria: string;

  nav: { experience: string; projects: string; contact: string };

  hero: {
    role: string;
    intro: string;
    linkedin: string;
    github: string;
    email: string;
  };

  sections: {
    experience: string;
    projects: string;
    education: string;
    skills: string;
    contact: string;
  };

  project: {
    details: string;
    web: string;
    code: string;
    private: string;
  };

  github: {
    title: string;
    introBefore: string; // texto antes del enlace a github.com/usuario
    introAfter: string; // texto tras el enlace
    updated: string; // prefijo, p. ej. "actualizado"
    moment: string; // "hace un momento"
  };

  contact: {
    intro: string;
  };

  footer: {
    code: string;
  };

  experience: Entry[];
  projects: Project[];
  education: Entry[];
  skills: SkillGroup[];
}

const es: Dictionary = {
  htmlLang: 'es',
  intlLocale: 'es',
  skipLink: 'Saltar al contenido',
  navAria: 'Secciones',
  langSwitcherAria: 'Cambiar idioma',
  nav: { experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
  hero: {
    role: 'Desarrollador de software',
    intro:
      'Desarrollo aplicaciones web de principio a fin: base de datos, API, interfaz y despliegue. Actualmente trabajo en Inetum como desarrollador aplicando IA y estudio Ingeniería Informática.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Correo',
  },
  sections: {
    experience: 'Experiencia',
    projects: 'Proyectos',
    education: 'Formación',
    skills: 'Tecnologías',
    contact: 'Contacto',
  },
  project: {
    details: 'Ver detalles',
    web: 'Ver web',
    code: 'Ver código',
    private: 'Código privado',
  },
  github: {
    title: 'Más en GitHub',
    introBefore: 'Todo mi código público está en ',
    introAfter: '.',
    updated: 'actualizado',
    moment: 'hace un momento',
  },
  contact: {
    intro:
      '¿Buscas a alguien para tu equipo o tienes un proyecto en mente? Escríbeme por correo o por LinkedIn.',
  },
  footer: {
    code: 'Código de esta web',
  },
  experience: [
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
  ],
  projects: [
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
  ],
  education: [
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
  ],
  skills: [
    {
      area: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    { area: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'] },
    { area: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma', 'SQLAlchemy'] },
    { area: 'Sistemas', items: ['Linux', 'Bash', 'Apache', 'Redes', 'Git'] },
    { area: 'IA', items: ['LLMs', 'RAG', 'Agentes', 'LangChain'] },
  ],
};

const en: Dictionary = {
  htmlLang: 'en',
  intlLocale: 'en',
  skipLink: 'Skip to content',
  navAria: 'Sections',
  langSwitcherAria: 'Change language',
  nav: { experience: 'Experience', projects: 'Projects', contact: 'Contact' },
  hero: {
    role: 'Software developer',
    intro:
      'I build web applications end to end: database, API, interface and deployment. I currently work at Inetum as a developer applying AI, and I study Computer Engineering.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  sections: {
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    skills: 'Technologies',
    contact: 'Contact',
  },
  project: {
    details: 'View details',
    web: 'Visit site',
    code: 'View code',
    private: 'Private code',
  },
  github: {
    title: 'More on GitHub',
    introBefore: 'All my public code is at ',
    introAfter: '.',
    updated: 'updated',
    moment: 'just now',
  },
  contact: {
    intro:
      'Looking for someone for your team or have a project in mind? Reach out by email or on LinkedIn.',
  },
  footer: {
    code: 'Source code of this site',
  },
  experience: [
    {
      date: 'September 2024 – present',
      title: 'Software developer',
      org: 'Inetum',
      orgHref: 'https://www.inetum.com/',
      description:
        'I build web applications powered by artificial intelligence: RAG systems, agents and the integration of LLM models into products, as well as automating tasks and generating documentation.',
      points: [
        'I currently work on a VIGÍA: a multi-agent advisory system that answers questions by querying the company’s internal APIs.',
        'I integrate LLM models into applications and automate workflows, from information retrieval to document generation.',
      ],
      stack: 'Python, React, Angular, PostgreSQL, LangChain, LLMs',
    },
  ],
  projects: [
    {
      title: 'NOX TPV',
      year: '2026',
      kind: 'Point-of-sale terminal',
      summary:
        'Touch POS for bars and shops that runs locally, without relying on the internet: sales, open tabs, cash counts, refunds and ticket printing.',
      points: [
        'Every charge carries an idempotency key: the same payment never creates two sales, and questionable charges are held until they are reconciled.',
        'Admin and cashier permissions enforced on the server, an audit log, and automatic backups with integrity verification.',
      ],
      stack: 'Node.js, Express, SQLite, WebSocket, ESC/POS',
      link: { kind: 'private' },
    },
    {
      title: 'gob',
      year: '2026',
      kind: 'Scheduling and bookings for barbershops, in development',
      summary:
        'SaaS for small barbershops: customers book appointments from a public website and each business manages its schedule from a dashboard.',
      points: [
        'TypeScript monorepo: a Next.js web app and a NestJS API that share contracts and domain logic.',
        'Double bookings for the same professional are prevented in the database itself with a PostgreSQL EXCLUDE constraint.',
      ],
      stack: 'Next.js, NestJS, TypeScript, Prisma, PostgreSQL, Tailwind CSS',
      link: { kind: 'private' },
    },
    {
      title: 'Stratek Shop',
      year: '2026',
      kind: 'Single-product online store',
      summary:
        'A store with Stripe checkout designed to switch products by editing a single file: copy, prices, SEO and legal pages are generated from it.',
      points: [
        'The price is always validated on the server and the Stripe webhook records each order exactly once.',
        'Technical SEO (structured data, sitemap, Open Graph images) and GA4 analytics with cookie consent under the GDPR.',
      ],
      stack: 'Next.js, React, TypeScript, Stripe, Prisma, MySQL',
      link: { kind: 'web', href: 'https://www.stratek.es/' },
    },
    {
      title: 'El Chaco Costillares',
      year: '2026',
      kind: 'Website for a local business',
      summary:
        'Website for an Argentine barbecue delivery service in Calafell (Tarragona), published and in use.',
      points: [
        'Prerendered at build time so it loads fast and Google indexes it without relying on JavaScript.',
        'Images optimized automatically with sharp and restaurant structured data for search engines.',
      ],
      stack: 'React, Vite, sharp, Vercel',
      link: { kind: 'web', href: 'https://chacocostillares.com/' },
    },
    {
      title: 'Linux services deployment',
      year: '2025',
      kind: 'Server automation',
      summary:
        'A Bash script that sets up an Ubuntu server with NFS, SSHFS, Apache with HTTPS and FTP, with the firewall configured from the start.',
      points: [
        'Advanced options: static IP, fail2ban protection, netdata monitoring and daily backups with rsync and cron.',
      ],
      stack: 'Bash, Ubuntu Server, Apache, vsftpd, ufw',
      link: { kind: 'code', href: 'https://github.com/danielcortes2/script_deploy_linux_services' },
    },
  ],
  education: [
    {
      date: 'In progress',
      title: "Bachelor's Degree in Computer Engineering",
      org: 'UNIR',
    },
    {
      date: 'Sep 2023 – Jun 2025',
      title: 'Higher Diploma in Networked Computer Systems Administration (ASIX)',
      org: 'INS Camí de Mar',
      description: 'Networks, Linux and Windows servers, network services, databases and security.',
    },
  ],
  skills: [
    {
      area: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    { area: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'] },
    { area: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma', 'SQLAlchemy'] },
    { area: 'Systems', items: ['Linux', 'Bash', 'Apache', 'Networks', 'Git'] },
    { area: 'AI', items: ['LLMs', 'RAG', 'Agents', 'LangChain'] },
  ],
};

const fr: Dictionary = {
  htmlLang: 'fr',
  intlLocale: 'fr',
  skipLink: 'Aller au contenu',
  navAria: 'Sections',
  langSwitcherAria: 'Changer de langue',
  nav: { experience: 'Expérience', projects: 'Projets', contact: 'Contact' },
  hero: {
    role: 'Développeur logiciel',
    intro:
      'Je développe des applications web de bout en bout : base de données, API, interface et déploiement. Je travaille actuellement chez Inetum en tant que développeur appliquant l’IA, et j’étudie l’ingénierie informatique.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'E-mail',
  },
  sections: {
    experience: 'Expérience',
    projects: 'Projets',
    education: 'Formation',
    skills: 'Technologies',
    contact: 'Contact',
  },
  project: {
    details: 'Voir les détails',
    web: 'Voir le site',
    code: 'Voir le code',
    private: 'Code privé',
  },
  github: {
    title: 'Plus sur GitHub',
    introBefore: 'Tout mon code public se trouve sur ',
    introAfter: '.',
    updated: 'mis à jour',
    moment: 'à l’instant',
  },
  contact: {
    intro:
      'Vous cherchez quelqu’un pour votre équipe ou vous avez un projet en tête ? Écrivez-moi par e-mail ou sur LinkedIn.',
  },
  footer: {
    code: 'Code source de ce site',
  },
  experience: [
    {
      date: 'Septembre 2024 – aujourd’hui',
      title: 'Développeur logiciel',
      org: 'Inetum',
      orgHref: 'https://www.inetum.com/',
      description:
        'Je développe des applications web avec de l’intelligence artificielle : systèmes RAG, agents et intégration de modèles LLM dans le produit, en plus d’automatiser des tâches et de générer de la documentation.',
      points: [
        'Je travaille actuellement sur un VIGÍA : un système multi-agents de conseil qui répond en interrogeant les API internes de l’entreprise.',
        'J’intègre des modèles LLM dans les applications et j’automatise les flux de travail, de la recherche d’information à la génération de documents.',
      ],
      stack: 'Python, React, Angular, PostgreSQL, LangChain, LLMs',
    },
  ],
  projects: [
    {
      title: 'NOX TPV',
      year: '2026',
      kind: 'Terminal de point de vente',
      summary:
        'Caisse tactile pour bars et commerces qui fonctionne en local, sans dépendre d’internet : ventes, additions ouvertes, clôtures de caisse, remboursements et impression de tickets.',
      points: [
        'Chaque encaissement porte une clé d’idempotence : un même paiement ne crée jamais deux ventes, et les encaissements douteux sont bloqués jusqu’à leur rapprochement.',
        'Droits d’administrateur et de caissier vérifiés côté serveur, journal d’audit et sauvegardes automatiques avec vérification d’intégrité.',
      ],
      stack: 'Node.js, Express, SQLite, WebSocket, ESC/POS',
      link: { kind: 'private' },
    },
    {
      title: 'gob',
      year: '2026',
      kind: 'Agenda et réservations pour salons de coiffure, en développement',
      summary:
        'SaaS pour petits salons de coiffure : les clients prennent rendez-vous depuis un site public et chaque établissement gère son agenda depuis un tableau de bord.',
      points: [
        'Monorepo en TypeScript : site en Next.js et API en NestJS qui partagent contrats et logique métier.',
        'Les doubles réservations d’un même professionnel sont empêchées dans la base de données elle-même grâce à une contrainte EXCLUDE de PostgreSQL.',
      ],
      stack: 'Next.js, NestJS, TypeScript, Prisma, PostgreSQL, Tailwind CSS',
      link: { kind: 'private' },
    },
    {
      title: 'Stratek Shop',
      year: '2026',
      kind: 'Boutique en ligne de produit unique',
      summary:
        'Boutique avec paiement Stripe conçue pour changer de produit en modifiant un seul fichier : textes, prix, SEO et pages légales en sont générés.',
      points: [
        'Le prix est toujours validé côté serveur et le webhook Stripe enregistre chaque commande une seule fois.',
        'SEO technique (données structurées, sitemap, images Open Graph) et analytique GA4 avec consentement aux cookies conforme au RGPD.',
      ],
      stack: 'Next.js, React, TypeScript, Stripe, Prisma, MySQL',
      link: { kind: 'web', href: 'https://www.stratek.es/' },
    },
    {
      title: 'El Chaco Costillares',
      year: '2026',
      kind: 'Site web pour un commerce local',
      summary:
        'Site d’un service de barbecue argentin à domicile à Calafell (Tarragone), publié et utilisé.',
      points: [
        'Prérendu au build pour un chargement rapide et une indexation par Google sans dépendre de JavaScript.',
        'Images optimisées automatiquement avec sharp et données structurées de restaurant pour les moteurs de recherche.',
      ],
      stack: 'React, Vite, sharp, Vercel',
      link: { kind: 'web', href: 'https://chacocostillares.com/' },
    },
    {
      title: 'Déploiement de services Linux',
      year: '2025',
      kind: 'Automatisation de serveurs',
      summary:
        'Script Bash qui prépare un serveur Ubuntu avec NFS, SSHFS, Apache en HTTPS et FTP, avec le pare-feu configuré dès le départ.',
      points: [
        'Options avancées : IP statique, protection fail2ban, supervision avec netdata et sauvegardes quotidiennes avec rsync et cron.',
      ],
      stack: 'Bash, Ubuntu Server, Apache, vsftpd, ufw',
      link: { kind: 'code', href: 'https://github.com/danielcortes2/script_deploy_linux_services' },
    },
  ],
  education: [
    {
      date: 'En cours',
      title: 'Licence en ingénierie informatique',
      org: 'UNIR',
    },
    {
      date: 'Sep 2023 – juin 2025',
      title: 'BTS en administration de systèmes informatiques en réseau (ASIX)',
      org: 'INS Camí de Mar',
      description:
        'Réseaux, serveurs Linux et Windows, services réseau, bases de données et sécurité.',
    },
  ],
  skills: [
    {
      area: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    { area: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'] },
    { area: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma', 'SQLAlchemy'] },
    { area: 'Systèmes', items: ['Linux', 'Bash', 'Apache', 'Réseaux', 'Git'] },
    { area: 'IA', items: ['LLMs', 'RAG', 'Agents', 'LangChain'] },
  ],
};

export const dictionaries: Record<Lang, Dictionary> = { es, en, fr };
