# 🌐 Web3 Blog

Un blog moderno, rápido y optimizado para SEO temático sobre el ecosistema Web3. Construido con **Astro 5** y **Tailwind CSS 4**, este proyecto cuenta con una arquitectura de alto rendimiento y un diseño limpio y premium.

## 🎯 Intención

Este proyecto sirve como una plataforma dedicada a la **educación y el intercambio de conocimientos sobre Web3**. Su objetivo es proporcionar información clara y de alta calidad sobre tecnologías descentralizadas, desarrollo en blockchain y el panorama digital en evolución, ayudando tanto a principiantes como a desarrolladores experimentados a mantenerse informados.

## 🚀 Características

- **Alto Rendimiento**: Construido con Astro 5 para una entrega ultrarrápida y un JavaScript mínimo.
- **Estilo Moderno**: Diseñado con Tailwind CSS 4, con un elegante tema oscuro.
- **Funcionalidad de Búsqueda**: Búsqueda en el lado del cliente impulsada por **Fuse.js**.
- **Basado en Contenido**: Entradas de blog gestionadas a través de Astro Content Collections usando Markdown/MDX.
- **Optimizado para SEO**: Generación automática de sitemap y metadatos optimizados.
- **Diseño Responsivo**: Diseño totalmente responsivo que se adapta a cualquier tamaño de pantalla.

## 🛠️ Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Motor de Búsqueda**: [Fuse.js](https://www.fusejs.io/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)

## 📥 Estructura del Proyecto

```text
/
├── public/          # Activos estáticos (imágenes, iconos)
├── src/
│   ├── components/  # Componentes de UI reutilizables (Header, Footer, Search)
│   ├── content/     # Entradas del blog (Markdown/MDX)
│   ├── layouts/     # Layouts de página
│   ├── pages/       # Páginas de rutas
│   └── styles/      # CSS global y directivas de Tailwind
├── astro.config.mjs # Configuración de Astro
├── package.json     # Dependencias y scripts de Node.js
└── tsconfig.json    # Configuración de TypeScript
```

## 🧞 Desarrollo Local

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio de producción en `./dist/`    |
| `npm run preview`         | Previsualiza la construcción localmente          |
| `npm run astro ...`       | Ejecuta comandos de CLI como `astro add`, `astro check` |

## 📝 Escribir Entradas

Para añadir una nueva entrada al blog, crea un nuevo archivo Markdown en:
`src/content/posts/titulo-de-tu-post.md`

Asegúrate de incluir las propiedades requeridas en el frontmatter (title, publishDate, description, etc.) según lo definido en `src/content/config.ts`.
