# Portafolio — Mauricio Reyes

Sitio personal para mostrar experiencia, skills y proyectos. SPA con React, TypeScript, Tailwind CSS y Vite; navegación con React Router y formulario de contacto conectado a una API.

**Demo:** https://github.com/MauricioDev1998/portafolio-mauricio

## Stack

- React 19 + TypeScript
- React Router 7
- Tailwind CSS 4
- Vite 7

## Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo (puerto 3009)
npm run build    # build de producción (tsc + vite build)
npm run preview  # previsualiza el build
npm run lint     # ESLint
```

Variables de entorno (`.env`, no versionado):

```
VITE_API_URL=<url de la API que recibe el formulario de contacto>
```

## Estructura

```
src/
  api/          # llamadas a la API (contacto)
  components/   # componentes compartidos (transición de página, etc.)
  data/         # contenido editable: proyectos y redes sociales
  layouts/      # layout general de la app
  pages/        # Home, About, Skills, Projects, Contact, NotFound
  routes/       # definición de rutas (React Router)
  types/        # tipos compartidos
```

Para agregar o editar un proyecto, modifica `src/data/projects.ts`.
