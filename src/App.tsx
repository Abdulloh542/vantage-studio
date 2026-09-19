import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SmoothScroll } from './components/common/SmoothScroll';
import { BackToTopButton } from './components/common/BackToTopButton';
import { Preloader } from './components/common/Preloader';

// Code-split pages for peak Lighthouse performance
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then((m) => ({ default: m.BlogDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

// Architectural minimal loader
function PageLoader() {
  return (
    <div className="w-full min-h-[70vh] bg-white text-[#101010] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-5 h-5 border border-[#101010]/20 border-t-[#101010] animate-spin" />
        <span className="text-xs tracking-[0.25em] uppercase text-[#757575] font-mono">
          VANTAGE STUDIO
        </span>
      </div>
    </div>
  );
}

export function App() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101010] selection:bg-[#101010] selection:text-white relative overflow-x-clip">
      {/* Session-only Neutral Full-Page Preloader */}
      <Preloader />

      {/* Scroll restoration & Lenis smooth scroll */}
      <ScrollToTop />
      <SmoothScroll />

      {/* Fixed Transparent Header & Accessible Fullscreen Overlay Menu */}
      <Navbar />

      {/* Global Page Transition: Vertical Travel translateY 100vh to 0 (What We Do stacking style) */}
      <div className="flex-1 w-full relative overflow-x-clip">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { y: '100vh', opacity: 1 }
              }
              animate={{ y: 0, opacity: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -24, transition: { duration: 0.18, ease: 'easeIn' } }
              }
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              onAnimationComplete={() => {
                window.scrollTo(0, 0);
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0, { immediate: true });
                }
              }}
              className="w-full bg-white text-[#101010]"
            >
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
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </div>

      {/* Solum 4-Column Footer & Back to Top */}
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
