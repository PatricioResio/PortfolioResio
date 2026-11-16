import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { github } from '../assets'
import { styles } from '../styles';
import { SectionWrapper } from './hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useLang } from '../i18n/LanguageContext';

const linkBtn =
  'inline-flex items-center justify-center gap-2 min-h-[40px] px-4 rounded-lg text-[14px] font-semibold transition duration-300';

const ProjectCard = ({ index, id, name, tags, image, source_code_link, live_link }) => {
  const { t } = useLang();
  const description = t.works.items[id].description;
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className='w-full sm:w-auto'>
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            loading='lazy'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Botones siempre visibles (en mobile no hay hover) */}
        {(source_code_link || live_link) && (
          <div className='mt-auto pt-5 flex gap-3'>
            {source_code_link && (
              <a
                href={source_code_link}
                target='_blank'
                rel='noopener noreferrer'
                className={`${linkBtn} flex-1 black-gradient text-white`}
              >
                <img src={github} alt='' className='w-4 h-4 object-contain' /> {t.works.code}
              </a>
            )}
            {live_link && (
              <a
                href={live_link}
                target='_blank'
                rel='noopener noreferrer'
                className={`${linkBtn} flex-1 bg-[#915eff] text-white hover:bg-[#7f4ae6]`}
              >
                {t.works.demo}
              </a>
            )}
          </div>
        )}
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const { t } = useLang();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.works.sub}</p>
        <h3 className={styles.sectionHeadText}>{t.works.title}</h3>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t.works.intro}
        </motion.p>
      </div>
      <div className='mt-14 sm:mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
