import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from './hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { useIsMobile } from '../hooks/useMediaQuery'
import { useLang } from '../i18n/LanguageContext'

const BallCanvas = lazy(() => import('./canvas/Ball'))

const Tech = () => {
  const isMobile = useIsMobile()
  const { t } = useLang()

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.tech.sub}</p>
        <h2 className={styles.sectionHeadText}>{t.tech.title}</h2>
      </motion.div>

      {isMobile ? (
        // Mobile: grilla liviana en vez de 7 canvas WebGL (los celulares limitan los contextos)
        <ul className='mt-10 grid grid-cols-3 gap-4 list-none'>
          {technologies.map((technology) => (
            <li
              key={technology.name}
              className='flex flex-col items-center gap-2 rounded-2xl bg-tertiary py-5 px-2'
            >
              <img
                src={technology.icon}
                alt=''
                loading='lazy'
                className='w-12 h-12 object-contain'
              />
              <span className='text-secondary text-[12px] font-medium text-center'>
                {technology.name}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className='mt-16 flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <Suspense fallback={null}>
                <BallCanvas icon={technology.icon} />
              </Suspense>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
