import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "./hoc";
import { textVariant } from "../utils/motion";
import { useLang } from "../i18n/LanguageContext";

const ExperienceCard = ({ experience, text }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={text.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      experience.icon ? (
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[100%] object-contain"
        />
      ) : (
        // Sin logo: inicial de la empresa
        <div className="w-full h-full flex items-center justify-center text-white text-[22px] font-bold">
          {experience.initial}
        </div>
      )
    }
  >
    <div>
      <h3 className="text-white text-[20px] sm:text-[24px] font-bold">
        {text.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {text.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { t } = useLang();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.experience.sub}</p>
        <h2 className={styles.sectionHeadText}>{t.experience.title}</h2>
      </motion.div>
      <div className="mt-12 sm:mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              text={t.experience.items[experience.id]}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
