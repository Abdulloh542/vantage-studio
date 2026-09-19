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
 * Solum Page Transition:
 * Mirrored after the tactile stacking panel motion in "What We Do":
 * - The current page remains frozen in place at its exact scroll position (no white flashes, no jumps).
 * - The incoming page mounts at y: 100vh and smoothly slides up over the current page into full view.
 * - When the slide-up completes (y: 0), scroll is reset cleanly to 0, and the new page seamlessly takes over.
 */
function PageTransition() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Currently committed page in normal document flow
  const [displayLocation, setDisplayLocation] = useState<Location>(location);
  // Incoming page sliding up over displayLocation
  const [incomingLocation, setIncomingLocation] = useState<Location | null>(null);

  const displayLocationRef = useRef(displayLocation);
  displayLocationRef.current = displayLocation;

  const incomingLocationRef = useRef(incomingLocation);
  incomingLocationRef.current = incomingLocation;

  useEffect(() => {
    // Only trigger transition on actual pathname changes
    if (location.pathname !== displayLocationRef.current.pathname) {
      if (shouldReduceMotion) {
        setDisplayLocation(location);
        resetLenisScroll();
      } else {
        pauseLenis();
        setIncomingLocation(location);
      }
    }
  }, [location.pathname, shouldReduceMotion]);

  const commitTransition = () => {
    const target = incomingLocationRef.current;
    if (target) {
      // 1. Reset scroll to top while the incoming page is covering the viewport
      resetLenisScroll();
      // 2. Resume Lenis smooth scroll
      resumeLenis();
      // 3. Promote target to base page and clean up overlay
      setDisplayLocation(target);
      setIncomingLocation(null);
    }
  };

  // Safety fallback timer ensuring transition commits even if browser throttles animations
  useEffect(() => {
    if (incomingLocation) {
      const timer = setTimeout(() => {
        commitTransition();
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [incomingLocation]);

  return (
    <div className="flex-1 w-full relative">
      {/* Base Page: sits in normal document flow at current scroll position */}
      <div className={`w-full bg-white text-[#101010] ${incomingLocation ? 'pointer-events-none select-none' : ''}`}>
        <AppRoutes location={displayLocation} />
      </div>

      {/* Incoming Page: slides up from bottom (100% -> 0) over the Base Page, silky smooth and 100% GPU accelerated */}
      {incomingLocation && (
        <motion.div
          key={incomingLocation.pathname}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{
            duration: 0.86,
            ease: [0.19, 1, 0.22, 1],
          }}
          onAnimationComplete={commitTransition}
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          }}
          className="fixed inset-0 z-40 bg-white text-[#101010] overflow-hidden border-t border-[#101010]/15"
        >
          {/* Zero-overhead physical top depth edge */}
          <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-black/12 to-transparent pointer-events-none" />
          <AppRoutes location={incomingLocation} />
        </motion.div>
      )}
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
