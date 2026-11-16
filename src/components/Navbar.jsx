import { useState } from "react";
import { styles } from "../styles";
import { navLinks, socials } from "../constants";
import { logo, menu, close } from "../assets";
import { useLang } from "../i18n/LanguageContext";
import LangToggle from "./LangToggle";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { lang, t } = useLang();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-[1800px] mx-auto">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Patricio Resio logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Patricio Resio&nbsp;
            <span className="hidden 2xl:block">| {t.nav.role}</span>
          </p>
        </a>

        {/* Desktop */}
        <ul className="list-none hidden xl:flex flex-row items-center gap-6 2xl:gap-10 whitespace-nowrap">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{t.nav[link.id]}</a>
            </li>
          ))}
          <li>
            <a
              href={socials.cv[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-[#915eff] text-white text-[16px] font-medium hover:bg-[#915eff] transition duration-300"
            >
              {t.nav.cv}
            </a>
          </li>
          <li>
            <LangToggle />
          </li>
        </ul>

        {/* Mobile */}
        <div className="xl:hidden flex flex-1 justify-end items-center gap-3">
          <LangToggle />
          <button
            type="button"
            aria-label={toggle ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
            className="p-2 -mr-2"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-[28px] h-[28px] object-contain"
            />
          </button>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? "text-white" : "text-secondary"
                  } font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{t.nav[link.id]}</a>
                </li>
              ))}
              <li>
                <a
                  href={socials.cv[lang]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setToggle(false)}
                  className="inline-block px-4 py-2 rounded-lg bg-[#915eff] text-white text-[15px] font-semibold"
                >
                  {t.nav.viewCv}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
