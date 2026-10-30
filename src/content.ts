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

// El contenido traducible (experiencia, proyectos, formación, tecnologías y los
// textos de la interfaz) vive en src/i18n/. Aquí se mantienen solo los tipos y las
// constantes que no dependen del idioma.
