import {
  intership,
  trashumarLogo,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  threejs,
  trashumar,
  inprogress,
  cienciaCerca,
} from "../assets";

// Orden del navbar = orden de las secciones. Los títulos vienen de i18n (t.nav[id]).
export const navLinks = [
  { id: "work" },
  { id: "projects" },
  { id: "tech" },
  { id: "education" },
  { id: "contact" },
];

// Links personales (Hero, Navbar y Footer)
export const socials = {
  github: "https://github.com/PatricioResio",
  linkedin: "https://www.linkedin.com/in/patricio-resio/",
  email: "patricio.resio@gmail.com",
  // Formato WhatsApp Argentina: 54 + 9 + código de área + número, sin espacios
  whatsapp: "https://wa.me/5491167448855",
  phone: "+54 11 6744-8855",
  // Un PDF por idioma, en /public
  cv: {
    es: `${import.meta.env.BASE_URL}CV-Patricio-Resio-ES.pdf`,
    en: `${import.meta.env.BASE_URL}CV-Patricio-Resio-EN.pdf`,
  },
};

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
];

// Del más reciente al más antiguo. Título, fecha y puntos: ver i18n/translations.js
const experiences = [
  // Cuando tengas el logo de la página, guardalo en src/assets/company/ (ej. casa.png),
  // importalo en assets/index.js y reemplazá `icon: reactjs` por ese import.
  { id: "casa", company_name: "La Casa de los Vientos", icon: reactjs, iconBg: "#383E56" },
  { id: "adopta", company_name: "Adopta Un Junior", icon: reactjs, iconBg: "#383E56" },
  { id: "trashumar", company_name: "Trashumar Ediciones", icon: trashumarLogo, iconBg: "#ffffff" },
  { id: "escuela", company_name: "E.E.T. N.º 2 de Lomas de Zamora", icon: intership, iconBg: "#E6DEDD" },
];

const projects = [
  {
    id: "casa",
    name: "La Casa de los Vientos",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: inprogress,
    source_code_link: "https://github.com/AleMot94/Hostal-CDLV-Beta",
    live_link: null,
  },
  {
    id: "trashumar",
    name: "Trashumar Ediciones",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "material UI", color: "pink-text-gradient" },
    ],
    image: trashumar,
    source_code_link: "https://github.com/PatricioResio/TrashumarEdiciones",
    live_link: null,
  },
  {
    id: "ciencia",
    name: "Ciencia Cerca",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "material UI", color: "pink-text-gradient" },
    ],
    image: cienciaCerca,
    source_code_link: null,
    // Antes estaba como "source code": en realidad es un video
    live_link: "https://www.youtube.com/watch?v=-ROs9nPT3Dk&t=2338s",
  },
];

// Más reciente primero. Título y fechas: ver i18n/translations.js
const education = [
  { id: "unla", institution: "Universidad Nacional de Lanús (UNLa)", inProgress: true },
  { id: "coderhouse", institution: "Coderhouse", inProgress: false },
  { id: "eet", institution: "E.E.T. N.º 2 de Lomas de Zamora", inProgress: false },
];

export { technologies, experiences, projects, education };
