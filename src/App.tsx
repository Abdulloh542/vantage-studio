import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SmoothScroll } from './components/common/SmoothScroll';
import { BackToTopButton } from './components/common/BackToTopButton';

// Code-split pages for peak Lighthouse performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then(m => ({ default: m.WorkPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then(m => ({ default: m.ProcessPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const JournalPage = lazy(() => import('./pages/JournalPage').then(m => ({ default: m.JournalPage })));
const JournalDetailPage = lazy(() => import('./pages/JournalDetailPage').then(m => ({ default: m.JournalDetailPage })));

// Architectural minimal loader
function PageLoader() {
  return (
    <div className="w-full min-h-[70vh] bg-[#0c0c0d] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 border border-white/20 border-t-white animate-spin" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-mono">
          VANTAGE STUDIO
        </span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0d] selection:bg-white selection:text-black">
      {/* Scroll restoration & Lenis smooth scroll */}
      <ScrollToTop />
      <SmoothScroll />

      {/* Desktop micro cursor */}
      <CustomCursor />

      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Page Routing with Suspense */}
      <div className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<ProjectDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/studio" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/:slug" element={<JournalDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>

      {/* Global Editorial Footer & Back to Top */}
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
