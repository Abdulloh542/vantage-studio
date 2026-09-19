import { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroStatement } from '../components/home/IntroStatement';
import { SelectedWorkSection } from '../components/home/SelectedWorkSection';
import { EditorialServiceIndex } from '../components/home/EditorialServiceIndex';
import { CinematicFilmSection } from '../components/home/CinematicFilmSection';
import { BeforeAfterFeature } from '../components/home/BeforeAfterFeature';
import { ProcessSection } from '../components/home/ProcessSection';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { JournalSection } from '../components/home/JournalSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { VideoLightbox } from '../components/common/VideoLightbox';
import { PROJECTS } from '../data/projects';

export function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({
    url: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4',
    title: 'Vantage Studio — 2026 Showreel',
  });

  const handleOpenShowreel = () => {
    setCurrentVideo({
      url: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4',
      title: 'Vantage Studio — 2026 Showreel',
    });
    setLightboxOpen(true);
  };

  const handleOpenFilm = (url: string, title: string) => {
    setCurrentVideo({ url, title });
    setLightboxOpen(true);
  };

  return (
    <main className="w-full overflow-hidden bg-[#050505]">
      {/* 01 HERO VIDEO & POSITIONING (Dark) */}
      <HeroSection onOpenShowreel={handleOpenShowreel} />

      {/* 02 MANIFESTO & PROPOSITION (Light #F4F2EE) */}
      <IntroStatement />

      {/* 03 SELECTED PROJECTS (Light #FAF9F6) */}
      <SelectedWorkSection projects={PROJECTS} />

      {/* 04 CINEMATIC FILM DIRECTION (Dark #0B0B0A) */}
      <CinematicFilmSection onOpenFilm={handleOpenFilm} />

      {/* 05 BEFORE / AFTER TRANSFORMATION (Light #F4F2EE) */}
      <BeforeAfterFeature />

      {/* 06 SERVICES & DISCIPLINES (Light #FAF9F6) */}
      <EditorialServiceIndex />

      {/* 07 PRODUCTION METHODOLOGY (Light #F4F2EE) */}
      <ProcessSection />

      {/* 08 TESTIMONIALS & TRUST (Light #FAF9F6) */}
      <TestimonialSection />

      {/* 09 ARCHITECTURAL DISCOURSE / JOURNAL (Light #F4F2EE) */}
      <JournalSection />

      {/* 10 FREQUENTLY ASKED QUESTIONS (Light #FAF9F6) */}
      <FAQSection />

      {/* 11 INITIATE ENGAGEMENT / FINAL CTA (Dark #050505) */}
      <FinalCTASection />

      {/* Lightbox Modal */}
      <VideoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        videoUrl={currentVideo.url}
        title={currentVideo.title}
      />
    </main>
  );
}
