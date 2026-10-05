# Patricio Resio · Front-end Portfolio

Personal portfolio of a React front-end developer. Single-page site with a 3D hero, work experience timeline, projects and a contact form.

**Live:** https://patricio-resio.netlify.app

<!-- TODO: add a screenshot or GIF here: ![Portfolio preview](./docs/preview.png) -->

## Stack

- **React 18** + **Vite**
- **Tailwind CSS** for styling
- **Three.js** via **@react-three/fiber** and **drei** (hero, tech balls, stars, planet)
- **Framer Motion** for animations
- **EmailJS** for the contact form

## Performance work

The first version blocked the first render on mobile 4G. Fixes applied:

| What | Before | After |
| --- | --- | --- |
| Hero 3D model | 15.7 MB (`.gltf` + textures) | 1.1 MB (`.glb`, Draco + WebP, 1024px) |
| Planet model | 3 MB | 330 KB |
| Hero background | 930 KB PNG | 48 KB WebP |
| Main JS bundle | 1.77 MB (530 KB gzip) | 297 KB (103 KB gzip) |

- Canvases are code-split with `React.lazy`; the hero canvas mounts on idle so text and background paint first.
- `dpr` capped at 1.5, antialias off on mobile, no shadows or `preserveDrawingBuffer`.

## Run locally

```bash
git clone https://github.com/PatricioResio/PortfolioResio.git
cd PortfolioResio
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Contact form setup

Create a `.env` file with your EmailJS keys (check `Contact.jsx` for the variable names you use).

## Credits

Based on the structure of the JavaScript Mastery 3D portfolio tutorial. 3D models are under their original licenses (see `public/*/license.txt`).

## Author

**Patricio Resio** · Front-end developer (React) · [GitHub](https://github.com/PatricioResio) · [LinkedIn](#)
