import { useLang } from "../i18n/LanguageContext";

// Selector ES | EN
const LangToggle = () => {
  const { lang, setLang, t } = useLang();

  const btn = (code) =>
    `px-2.5 py-1 text-[13px] font-semibold rounded-md transition duration-300 ${
      lang === code ? "bg-[#915eff] text-white" : "text-secondary hover:text-white"
    }`;

  return (
    <div
      role="group"
      aria-label={t.nav.switchTo}
      className="inline-flex items-center gap-1 p-1 rounded-lg border border-white/15"
    >
      <button type="button" className={btn("es")} aria-pressed={lang === "es"} onClick={() => setLang("es")}>
        ES
      </button>
      <button type="button" className={btn("en")} aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
};

export default LangToggle;
