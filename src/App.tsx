import { lazy, Suspense, useEffect, useLayoutEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation, type Location } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SmoothScroll, resetLenisScroll, resumeLenis } from './components/common/SmoothScroll';
import { BackToTopButton } from './components/common/BackToTopButton';
import { Preloader } from './components/common/Preloader';

// Eager HomePage for instant 0ms initial paint on "/"
import { HomePage } from './pages/HomePage';

// Code-split secondary routes to cut initial JS parse/compile payload in half,
// paired with idle background prefetch so subsequent clicks remain instantaneous.
const loadAboutPage = () => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }));
const loadProjectsPage = () => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage }));
const loadProjectDetailPage = () =>
  import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage }));
const loadServicesPage = () => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }));
const loadPricingPage = () => import('./pages/PricingPage').then((m) => ({ default: m.PricingPage }));
const loadContactPage = () => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }));
const loadTermsPage = () => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage }));
const loadPrivacyPage = () => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }));
const loadNotFoundPage = () => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }));

const AboutPage = lazy(loadAboutPage);
const ProjectsPage = lazy(loadProjectsPage);
const ProjectDetailPage = lazy(loadProjectDetailPage);
const ServicesPage = lazy(loadServicesPage);
const PricingPage = lazy(loadPricingPage);
const ContactPage = lazy(loadContactPage);
const TermsPage = lazy(loadTermsPage);
const PrivacyPage = lazy(loadPrivacyPage);
const NotFoundPage = lazy(loadNotFoundPage);

function AppRoutes({ location }: { location: Location }) {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-white" />}>
      <Routes location={location}>
        {/* Core Atlas Studio Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
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
    </Suspense>
  );
}

/**
 * Lightweight, Stutter-Free Page Container:
 * - Resets scroll position cleanly inside useLayoutEffect on pathname change.
 * - Prefetches secondary page chunks during idle time after initial load.
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

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void Promise.allSettled([
        loadProjectsPage(),
        loadProjectDetailPage(),
        loadServicesPage(),
        loadPricingPage(),
        loadAboutPage(),
        loadContactPage(),
      ]);
    }, 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 w-full relative min-h-screen bg-white text-[#101010]">
      <AppRoutes location={location} />
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101010] selection:bg-[#101010] selection:text-white relative">
      {/* White Minimalist Curtain Transition */}
      <Preloader />

      {/* Lenis smooth scroll & scroll restoration */}
      <SmoothScroll />
      <ScrollToTop />

      {/* Fixed Transparent Header & Accessible Fullscreen Overlay Menu */}
      <Navbar />

      {/* Active Route Stage */}
      <PageTransition />

      {/* Atlas Studio Footer & Back to Top */}
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
