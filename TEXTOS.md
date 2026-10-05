# Textos listos para usar

## 1. About / Overview (para `About.jsx`)

Hi, I'm Patricio, a front-end developer specialized in React. I've been building and maintaining production web apps since 2023, working with remote teams and real clients. I care about responsive, accessible interfaces and fast load times. I'm currently learning TypeScript and backend with Node.js, and as a hobby I play with Unity and C#.

## 2. Descripciones de proyectos (para `constants/index.js`)

**Ciencia Cerca**
Website for a Spanish science-communication brand that publishes news and papers. Built in a 5-person remote team during the "Adopta un Junior" program. I worked on the navbar, buttons and cards, following the brand's visual identity. Stack: React, Vite, Tailwind, Firebase, Material UI.

**Trashumar Ediciones**
Web app for a publishing house. [Completar: qué hace realmente, ej. catálogo, panel, buscador]. I developed and maintain the front end with React, focusing on responsive design and cross-browser compatibility. Stack: React, Firebase, Material UI.

**La Casa de los Vientos**
Single-page app for an inn that hosts international travelers: browse the place, make reservations, pay online and contact the owners. Built together with a back-end developer. Stack: Next.js, React, TypeScript, Material UI.

## 3. Textos de experiencia (corregidos, para `experiences`)

- Trashumar Ediciones (May 2023 - Present): Build and maintain React web apps. Implement responsive layouts and ensure cross-browser compatibility.
- Adopta un Junior (May - Jun 2024): Delivered UI components for a real client in a 5-person remote team using React, Vite and Tailwind.
- La Casa de los Vientos (Jan 2026 - Present): Develop and maintain a reservation web app, coordinating with a back-end developer.

## 4. Commit y PR de performance

**Commit**
perf(hero): cut first-load weight and defer 3D canvases

**PR**
### What
- Compress hero model 15.7 MB to 1.1 MB (Draco + WebP 1024px), planet 3 MB to 330 KB
- Convert hero background PNG to WebP (930 KB to 48 KB)
- Lazy-load Computers, Stars, Ball and Earth canvases; mount hero canvas on idle
- Fix invalid media query (`max-width:500`) so `isMobile` actually works
- Cap dpr at 1.5, disable antialias on mobile, remove shadows and `preserveDrawingBuffer`

### Result
Main bundle 1.77 MB to 297 KB (530 KB to 103 KB gzip).

### Test plan
- [ ] Lighthouse mobile, Slow 4G: compare LCP and TBT before/after
- [ ] Check the hero model looks right after compression

## 5. Mensaje de LinkedIn / postulación

**Mensaje corto a recruiter**
Hola [Nombre], te escribo por la búsqueda de [puesto] en [empresa]. Soy desarrollador front-end con React, trabajo en proyectos reales desde 2023 y hoy estoy sumando TypeScript. Te dejo mi portafolio: https://patricio-resio.netlify.app y el código en GitHub. Si te parece, me encantaría coordinar una charla. ¡Gracias!

**Titular de LinkedIn**
Front-end Developer | React · TypeScript · Tailwind | Building fast, responsive web apps

**Extracto "Acerca de"**
Soy desarrollador front-end especializado en React. Desde 2023 desarrollo y mantengo aplicaciones web para clientes reales, trabajando en equipos remotos y junto a perfiles de back-end. Me enfoco en interfaces responsive, buen rendimiento y código prolijo. Hoy estoy profundizando en TypeScript y Node.js.
