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
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
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
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/404" element={<NotFoundPage />} />

      {/* Backwards-compatibility aliases */}
      <Route path="/work" element={<Navigate to="/projects" replace />} />
      <Route path="/work/:slug" element={<ProjectDetailPage />} />
      <Route path="/journal" element={<Navigate to="/blog" replace />} />
      <Route path="/journal/:slug" element={<BlogDetailPage />} />
      <Route path="/services/:slug" element={<ServicesPage />} />
      <Route path="/process" element={<Navigate to="/about" replace />} />
      <Route path="/studio" element={<Navigate to="/about" replace />} />

      {/* 404 catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

/**
 * Solum Single-Instance Stacking Page Transition:
 * - When navigating to a new route:
 *   1. Outgoing page stays frozen in the background at its exact scroll position (zero jump).
 *   2. Incoming page is mounted ONCE and permanently (never unmounted or remounted).
 *   3. Incoming page smoothly glides up from bottom (100% -> 0%) over 1.1 seconds.
 *   4. Upon arrival, the background page is silently cleared.
 *   5. The incoming page NEVER shifts, never reloads, and never jitters because its DOM tree is preserved.
 */
function PageTransition() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // The outgoing page kept frozen in the background during ascension
  const [prevLocation, setPrevLocation] = useState<Location | null>(null);
  const [savedScrollY, setSavedScrollY] = useState(0);

  const currentLocationRef = useRef<Location>(location);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    // Only trigger on real pathname changes
    if (location.pathname !== currentLocationRef.current.pathname) {
      if (shouldReduceMotion) {
        currentLocationRef.current = location;
        resetLenisScroll();
        return;
      }

      // 1. Capture exact scroll position of outgoing view
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setSavedScrollY(scrollY);

      // 2. Preserve outgoing location for the background layer
      setPrevLocation(currentLocationRef.current);
      currentLocationRef.current = location;
      isNavigatingRef.current = true;

      // 3. Reset scroll so new incoming page is at top: 0
      resetLenisScroll();
      pauseLenis();
    }
  }, [location, shouldReduceMotion]);

  const handleAnimationComplete = () => {
    // Ascension completed: unmount outgoing background layer
    setPrevLocation(null);
    isNavigatingRef.current = false;
    resumeLenis();
  };

  // Safety fallback ensuring background layer is cleared even if animation frame is throttled
  useEffect(() => {
    if (prevLocation) {
      const timer = setTimeout(() => {
        handleAnimationComplete();
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [prevLocation]);

  return (
    <div className="flex-1 w-full relative overflow-x-clip min-h-screen">
      {/* 1. OUTGOING BACKGROUND LAYER (Frozen at its exact scroll position) */}
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

      {/* 2. PERMANENT INCOMING PAGE (Mounted ONCE, slides up 100% -> 0%, never remounts or shifts) */}
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion || !prevLocation ? false : { y: '100%' }}
        animate={{ y: '0%' }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        onAnimationComplete={handleAnimationComplete}
        style={{
          willChange: prevLocation ? 'transform' : 'auto',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          position: 'relative',
          zIndex: 10,
        }}
        className="w-full min-h-screen bg-white text-[#101010]"
      >
        {/* Subtle physical hairline top border during ascension */}
        {prevLocation && (
          <div className="absolute top-0 left-0 right-0 h-px bg-[#101010]/15 pointer-events-none z-50" />
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
