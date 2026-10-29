# danielcortes2.github.io

Mi web personal: una sola página con presentación, experiencia, proyectos, formación, tecnologías y contacto.

Está hecha con React y TypeScript sobre Vite. El contenido vive separado del maquetado, así que para actualizar un proyecto o un puesto solo hay que tocar un archivo de datos, no el HTML.

## Puesta en marcha

Necesitas Node 20 o superior.

```sh
npm install
npm run dev
```

Vite levanta el servidor en http://localhost:5173 con recarga en caliente.

Para generar la versión de producción en `dist/` y servirla tal cual se publica:

```sh
npm run build
npm run preview
```

## Organización

El texto de la página está en `src/content.ts`: los arrays `experience`, `projects`, `education` y `skills`. Los datos de la portada (nombre, correo, LinkedIn) son constantes al principio de `src/App.tsx`.

```
src/
  App.tsx            La página y sus secciones
  content.ts         Experiencia, proyectos, formación y tecnologías
  styles.css         Estilos
  lib/               Hooks (animación del nombre, media query, scroll)
  components/        Iconos, navegación móvil y repos de GitHub
public/
  assets/            Fuentes e imágenes
  404.html           Página de error
```

Cada proyecto lleva un enlace: `{ kind: 'web' }` para una web publicada, `{ kind: 'code' }` para un repositorio o `{ kind: 'private' }` cuando el código no es público.

Al final de Proyectos se listan los repositorios públicos más recientes de GitHub, que se piden a la API en el navegador. Se descartan los forks y los que ya aparecen como proyecto destacado; para ocultar alguno más, se añade su nombre a `HIDDEN_REPOS` en `src/content.ts`.

## Detalles

- El nombre de la portada se ensancha al cargar usando el eje de anchura de la tipografía Archivo. Ese mismo gesto se repite al pasar el ratón por las tecnologías.
- En móvil hay una barra de navegación fija abajo que resalta la sección en la que estás.
- Todo respeta `prefers-color-scheme` (claro/oscuro) y `prefers-reduced-motion`.

## Despliegue

Cada push a `main` dispara el workflow de `.github/workflows/deploy.yml`, que compila el proyecto y lo publica en GitHub Pages. En GitHub, la fuente de Pages debe estar en *Settings → Pages → Build and deployment → GitHub Actions*.

## Créditos

- Tipografía [Archivo](https://github.com/Omnibus-Type/Archivo) (SIL Open Font License 1.1).
- Iconos de [Bootstrap Icons](https://icons.getbootstrap.com/) (MIT).
