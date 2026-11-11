import { useLayoutEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation, type Location } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SmoothScroll, resetLenisScroll, resumeLenis } from './components/common/SmoothScroll';
import { BackToTopButton } from './components/common/BackToTopButton';
import { Preloader } from './components/common/Preloader';

// Direct eager page imports for zero-flash, zero-suspense synchronous route switching
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppRoutes({ location }: { location: Location }) {
  return (
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
  );
}

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
