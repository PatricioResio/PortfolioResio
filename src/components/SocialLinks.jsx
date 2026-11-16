import { socials } from "../constants";
import { useLang } from "../i18n/LanguageContext";

// Íconos (los mismos SVG que ya tenías en el Footer, ahora reutilizables)
export const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.82-2.16 3.75-2.16 4 0 4.75 2.63 4.75 6.05V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z" />
  </svg>
);

export const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 13.5L0 6.75V18a2 2 0 002 2h20a2 2 0 002-2V6.75L12 13.5zm12-9a2 2 0 00-2-2H2a2 2 0 00-2 2l12 6.75L24 4.5z" />
  </svg>
);

export const WhatsappIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8a9.8 9.8 0 01-5-1.37l-.36-.21-3.72.98 1-3.63-.23-.37a9.8 9.8 0 1118.1-5.2c0 5.4-4.4 9.8-9.8 9.8zM12.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.9 11.9 0 005.7 1.45c6.55 0 11.88-5.33 11.88-11.88C23.93 5.33 18.6 0 12.05 0z" />
  </svg>
);

export const DownloadIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
  </svg>
);

const base =
  "inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl font-semibold text-[15px] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff]";
const primary = `${base} bg-[#915eff] text-white shadow-lg shadow-[#915eff]/30 hover:bg-[#7f4ae6]`;
const secondary = `${base} border border-white/20 bg-white/5 text-white backdrop-blur hover:border-[#915eff] hover:bg-white/10`;

// Botones del Hero: CV (principal) + LinkedIn + GitHub
export const HeroActions = () => {
  const { lang, t } = useLang();
  return (
  <div className="flex flex-wrap gap-3 pointer-events-auto">
    <a
      href={socials.cv[lang]}
      target="_blank"
      rel="noopener noreferrer"
      className={`${primary} w-full sm:w-auto`}
    >
      <DownloadIcon /> {t.nav.viewCv}
    </a>
    <a
      href={socials.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={`${secondary} flex-1 sm:flex-none`}
    >
      <LinkedinIcon /> LinkedIn
    </a>
    <a
      href={socials.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`${secondary} flex-1 sm:flex-none`}
    >
      <GithubIcon /> GitHub
    </a>
  </div>
  );
};
