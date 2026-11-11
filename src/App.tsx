import { useLayoutEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation, type Location } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SmoothScroll, resetLenisScroll, resumeLenis } from './components/common/SmoothScroll';
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
      {/* Core SOLUM / Atlas Studio Routes */}
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
 * Stutter-Free Page Container:
 * - Resets scroll position synchronously inside useLayoutEffect on pathname change
 *   while the `<Preloader />` curtain covers the viewport at `y: 0%`.
 * - Never sets `opacity: 0` or persistent transforms on the page container,
 *   guaranteeing 0 invisible elements and 100% compatibility with `position: sticky`.
 */
function PageTransition() {
  const location = useLocation();
  const isFirstMountRef = useRef(true);

  useLayoutEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      return;
    }
    resetLenisScroll();
    resumeLenis();
  }, [location.pathname]);

  return (
    <div className="flex-1 w-full relative min-h-screen bg-[#EDEAE4] text-[#111111]">
      <AppRoutes location={location} />
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EDEAE4] text-[#111111] selection:bg-[#111111] selection:text-white relative">
      {/* Universal Omnya Lab × Atlas Studio Curtain Transition on initial load & every route change */}
      <Preloader />

      {/* Lenis smooth scroll & scroll restoration */}
      <SmoothScroll />
      <ScrollToTop />

      {/* Fixed Header & Accessible Fullscreen Overlay Menu */}
      <Navbar />

      {/* Main Route Viewport */}
      <PageTransition />

      {/* 4-Column Architectural Footer & Back to Top */}
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
