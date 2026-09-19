import { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BrandSection } from '../components/home/BrandSection';
import { JourneySection } from '../components/home/JourneySection';
import { FramerServicesSection } from '../components/home/FramerServicesSection';
import { FramerProcessSection } from '../components/home/FramerProcessSection';
import { FramerProjectsSection } from '../components/home/FramerProjectsSection';
import { FramerTeamSection } from '../components/home/FramerTeamSection';
import { FramerTestimonialsSection } from '../components/home/FramerTestimonialsSection';
import { FramerFAQSection } from '../components/home/FramerFAQSection';
import { FramerConsultationSection } from '../components/home/FramerConsultationSection';
import { FramerJournalSection } from '../components/home/FramerJournalSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { VideoLightbox } from '../components/common/VideoLightbox';

export function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({
    url: 'https://framerusercontent.com/assets/8Dw7CceCBzCnlWKOSnlDEADgwQ8.mp4',
    title: 'Vantage Studio — 2026 Showreel',
  });

  const handleOpenShowreel = () => {
    setCurrentVideo({
      url: 'https://framerusercontent.com/assets/8Dw7CceCBzCnlWKOSnlDEADgwQ8.mp4',
      title: 'Vantage Studio — 2026 Showreel',
    });
    setLightboxOpen(true);
  };

  return (
    <main className="w-full overflow-hidden bg-[#050505]">
      {/* 01 HERO SECTION (Interio: Video, Rating Capsule, Discipline Ticker, Blur Reveal) */}
      <HeroSection onOpenShowreel={handleOpenShowreel} />

      {/* 02 BRAND SECTION (Interio: COLLABORATING PARTNERS // *(2014 - 2026)) */}
      <BrandSection />

      {/* 03 OUR JOURNEY SECTION (Interio: OUR JOURNEY // *(ARCHITECTURAL CRAFT)) */}
      <JourneySection />

      {/* 04 SERVICE SECTION (Interio: WHAT WE DELIVER // S E R V I C E S with 5 MP4 Video Cards) */}
      <FramerServicesSection />

      {/* 05 WORK SECTION (Interio: HOW WE WORK // P R O C E S S *(BEHIND THE DESIGN)) */}
      <FramerProcessSection />

      {/* 06 PROJECT SECTION (Interio: OUR BEST WORK // P R O J E C T S *(COMPLETED DESIGNS)) */}
      <FramerProjectsSection />

      {/* 07 TEAM SECTION (Interio: MEET OUR TEAM // E X P E R T S *(ARCHITECTURAL SPECIALISTS)) */}
      <FramerTeamSection />

      {/* 08 TESTIMONIALS SECTION (Interio: WHAT CLIENTS SAY // T E S T I M O N I A L S) */}
      <FramerTestimonialsSection />

      {/* 09 FAQ SECTION (Interio: FREQUENTLY ASKED // I N Q U I R I E S) */}
      <FramerFAQSection />

      {/* 10 CONSULTATION SECTION (Interio: START YOUR JOURNEY // C O N S U L T A T I O N) */}
      <FramerConsultationSection />

      {/* 11 BLOG / JOURNAL SECTION (Interio: EXPERT INSIGHTS // J O U R N A L) */}
      <FramerJournalSection />

      {/* 12 FINAL ARCHITECTURAL CALL TO ACTION */}
      <FinalCTASection />

      {/* Video Modal Lightbox */}
      <VideoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        videoUrl={currentVideo.url}
        title={currentVideo.title}
      />
    </main>
  );
}
