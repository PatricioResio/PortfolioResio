import { logo } from "../assets";
import { socials } from "../constants";
import { useLang } from "../i18n/LanguageContext";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "./SocialLinks";

const iconLink =
  "flex items-center justify-center w-11 h-11 rounded-full text-white hover:text-[#915eff] hover:bg-white/5 transition duration-300";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="w-full bg-primary py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left */}
        <div className="text-center md:text-left">
          <div className="flex flex-row items-center justify-center md:justify-start">
            <img src={logo} alt="" className="w-14 h-14 object-contain" />
            <h2 className="text-white text-2xl font-bold">Patricio Resio</h2>
          </div>
          <p className="text-gray-400 mt-2 max-w-md">
            {t.footer.tagline}
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-2">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
              <GithubIcon className="w-7 h-7" />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
              <LinkedinIcon className="w-7 h-7" />
            </a>
            <a href={`mailto:${socials.email}`} aria-label="Email" className={iconLink}>
              <MailIcon className="w-7 h-7" />
            </a>
            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={iconLink}>
              <WhatsappIcon className="w-7 h-7" />
            </a>
          </div>
          <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-sm">
            {socials.phone}
          </a>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Patricio Resio. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
