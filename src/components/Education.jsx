import { motion } from "framer-motion";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLang } from "../i18n/LanguageContext";

const CapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path d="M22 9L12 4 2 9l10 5 10-5z" />
    <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
    <path d="M22 9v5" />
  </svg>
);

const EducationCard = ({ index, institution, inProgress, text, badge }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 0.75)}
    className="bg-tertiary rounded-2xl p-6 flex flex-col gap-3 h-full"
  >
    <div className="flex items-center justify-between">
      <div className="w-12 h-12 rounded-full bg-[#915eff]/20 text-[#915eff] flex items-center justify-center">
        <CapIcon />
      </div>
      {inProgress && (
        <span className="text-[12px] font-semibold px-3 py-1 rounded-full bg-[#915eff] text-white">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-white text-[20px] font-bold leading-snug">{institution}</h3>
    <p className="text-secondary text-[14px] leading-[22px]">{text.degree}</p>
    <p className="mt-auto pt-2 text-white-100 text-[14px] font-medium">{text.date}</p>
  </motion.div>
);

const Education = () => {
  const { t } = useLang();
  const e = t.education;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{e.sub}</p>
        <h2 className={styles.sectionHeadText}>{e.title}</h2>
      </motion.div>

      <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
        {education.map((item, index) => (
          <EducationCard
            key={item.id}
            index={index}
            institution={item.institution}
            inProgress={item.inProgress}
            text={e.items[item.id]}
            badge={e.inProgress}
          />
        ))}
      </div>

      {/* Idiomas */}
      <motion.div
        variants={fadeIn("up", "spring", 0.6, 0.75)}
        className="mt-8 bg-black-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4"
      >
        <h3 className="text-white text-[18px] font-bold sm:mr-4">{e.languagesTitle}</h3>
        <ul className="flex flex-wrap gap-3 list-none">
          {e.languages.map((lang) => (
            <li
              key={lang.name}
              className="px-4 py-2 rounded-xl bg-tertiary text-[14px] text-white-100"
            >
              <span className="text-white font-semibold">{lang.name}</span>
              <span className="text-secondary"> — {lang.level}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
