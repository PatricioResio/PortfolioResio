import { lazy, Suspense } from 'react';
import { Contact, Education, Experience, Hero, Navbar, Tech, Works } from './components';
import Footer from './components/Footer';
import { useIsMobile } from './hooks/useMediaQuery';
import { LanguageProvider } from './i18n/LanguageContext';

const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const Page = () => {
  const isMobile = useIsMobile();

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <Experience />
      <Works />
      <Tech />
      <Education />
      <div className='relative z-0'>
        <Contact />
        {/* El campo de estrellas (5000 puntos WebGL) solo en desktop */}
        {!isMobile && (
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        )}
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <LanguageProvider>
    <Page />
  </LanguageProvider>
);

export default App;
