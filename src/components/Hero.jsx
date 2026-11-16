import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useIsMobile } from "../hooks/useMediaQuery";
import { HeroActions } from "./SocialLinks";
import { useLang } from "../i18n/LanguageContext";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  const isMobile = useIsMobile();
  const { t } = useLang();

  // Monta el canvas solo en desktop y cuando el navegador está libre.
  // En mobile ni siquiera se descarga el modelo 3D.
  const [showCanvas, setShowCanvas] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setShowCanvas(false);
      return;
    }
    const start = () => setShowCanvas(true);
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(start, { timeout: 800 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(start, 200);
    return () => clearTimeout(t);
  }, [isMobile]);

  return (
    <section className="relative w-full min-h-[100svh] md:h-screen mx-auto">
      {/* Glow decorativo en CSS: reemplaza al canvas en mobile */}
      {isMobile && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-24 w-72 h-72 rounded-full bg-[#915eff]/25 blur-[90px]"
        />
      )}

      <div
        className={`${styles.paddingX} ${
          isMobile
            ? "relative pt-32 pb-16 min-h-[100svh] justify-center"
            : "absolute inset-0 top-[120px]"
        } max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-52 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t.hero.greeting} <span className="text-[#915eff]">Patricio</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t.hero.role}
          </p>
          <p className="mt-4 mb-8 max-w-md text-secondary text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px]">
            {t.hero.tagline}
          </p>
          <HeroActions />
        </div>
      </div>

      {showCanvas && (
        <Suspense fallback={null}>
          <ComputersCanvas />
        </Suspense>
      )}

      {/* Indicador de scroll: solo desktop, en mobile se pisaría con los botones */}
      <div className="absolute bottom-10 w-full hidden md:flex justify-center items-center z-10">
        <a href="#work" aria-label={t.hero.scroll}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
