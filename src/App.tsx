import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation, type Location } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SmoothScroll, resetLenisScroll, pauseLenis, resumeLenis } from './components/common/SmoothScroll';
import { BackToTopButton } from './components/common/BackToTopButton';
import { Preloader } from './components/common/Preloader';

// Direct eager page imports for instant, zero-delay, zero-suspense navigation
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppRoutes({ location }: { location: Location }) {
  return (
    <Routes location={location}>
      {/* Core SOLUM Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/404" element={<NotFoundPage />} />

      {/* Backwards-compatibility aliases */}
      <Route path="/blog" element={<Navigate to="/projects" replace />} />
      <Route path="/blog/*" element={<Navigate to="/projects" replace />} />
      <Route path="/journal" element={<Navigate to="/projects" replace />} />
      <Route path="/journal/*" element={<Navigate to="/projects" replace />} />
      <Route path="/work" element={<Navigate to="/projects" replace />} />
      <Route path="/work/:slug" element={<ProjectDetailPage />} />
      <Route path="/services/:slug" element={<ServicesPage />} />
      <Route path="/process" element={<Navigate to="/about" replace />} />
      <Route path="/studio" element={<Navigate to="/about" replace />} />

      {/* 404 catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

/**
 * What We Do Stacking Page Transition:
 * - When clicking to navigate:
 *   1. The outgoing page STAYS VISIBLE underneath at its exact scroll position (ZERO white flash!).
 *   2. The target page begins ascending DIRECTLY from the bottom of the screen (100% -> 0%).
 *   3. When the target page completely covers the screen, the background layer is silently cleaned up.
 *   4. The target page was mounted once and remains permanent, so zero elements shift or reload.
 */
function PageTransition() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const isFirstMountRef = useRef(true);
  const lastPathnameRef = useRef(location.pathname);
  const lastLocationRef = useRef<Location>(location);

  const [prevLocation, setPrevLocation] = useState<Location | null>(null);
  const [savedScrollY, setSavedScrollY] = useState(0);

  // Synchronous state adjustment during render when pathname changes
  if (location.pathname !== lastPathnameRef.current) {
    const scroll = window.scrollY || document.documentElement.scrollTop || 0;
    setSavedScrollY(scroll);
    setPrevLocation(lastLocationRef.current);
    lastPathnameRef.current = location.pathname;
    lastLocationRef.current = location;
    resetLenisScroll();
    pauseLenis();
  }

  const isFirstMount = isFirstMountRef.current;
  useEffect(() => {
    isFirstMountRef.current = false;
  }, []);

  const handleAnimationComplete = () => {
    setPrevLocation(null);
    resumeLenis();
  };

  // Safety fallback ensuring background is cleared
  useEffect(() => {
    if (prevLocation) {
      const timer = setTimeout(() => {
        handleAnimationComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [prevLocation]);

  return (
    <div className="flex-1 w-full relative overflow-x-clip min-h-screen">
      {/* 1. OUTGOING PAGE: Kept in background at exact visual position (NO WHITE FLASH!) */}
      {prevLocation && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: `${-savedScrollY}px`,
            left: 0,
            right: 0,
            width: '100%',
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          className="w-full bg-white text-[#101010]"
        >
          <AppRoutes location={prevLocation} />
        </div>
      )}

      {/* 2. INCOMING PAGE: Ascends directly from the bottom (100% -> 0%) over the outgoing page */}
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion || isFirstMount ? false : { y: '100%' }}
        animate={{ y: '0%' }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
        onAnimationComplete={handleAnimationComplete}
        style={{
          willChange: prevLocation ? 'transform' : 'auto',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          position: 'relative',
          zIndex: 20,
        }}
        className="w-full min-h-screen bg-white text-[#101010]"
      >
        {/* Subtle physical card top edge while rising */}
        {prevLocation && (
          <div className="absolute top-0 left-0 right-0 h-px bg-[#101010]/20 pointer-events-none z-30" />
        )}
        <AppRoutes location={location} />
      </motion.div>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101010] selection:bg-[#101010] selection:text-white relative overflow-x-clip">
      {/* Session-only Neutral Full-Page Preloader */}
      <Preloader />

      {/* Lenis smooth scroll & scroll restoration */}
      <SmoothScroll />
      <ScrollToTop />

      {/* Fixed Transparent Header & Accessible Fullscreen Overlay Menu */}
      <Navbar />

      {/* Global Page Transition: Vertical Travel (What We Do stacking style) */}
      <PageTransition />

      {/* Solum 4-Column Footer & Back to Top */}
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
