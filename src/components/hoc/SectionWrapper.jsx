import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { staggerContainer } from '../../utils/motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        // amount bajo: en mobile las secciones son muy altas (ej. Experience) y con 0.25
        // podían no llegar nunca al umbral y quedarse invisibles.
        viewport={{ once: true, amount: 0.1 }}
        // Faltaba el espacio antes de max-w-7xl: la clase nunca se aplicaba
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
