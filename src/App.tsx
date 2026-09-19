import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SmoothScroll } from './components/common/SmoothScroll';
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

export function App() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

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
      <div className="flex-1 w-full relative overflow-x-clip min-h-screen">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
            animate={{ y: '0%', opacity: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, transition: { duration: 0.1 } }
            }
            transition={{
              duration: 1.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
            className="w-full min-h-screen bg-white text-[#101010]"
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
      </div>

      {/* Solum 4-Column Footer & Back to Top */}
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
