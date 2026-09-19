import { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroStatement } from '../components/home/IntroStatement';
import { SelectedWorkSection } from '../components/home/SelectedWorkSection';
import { CinematicFilmSection } from '../components/home/CinematicFilmSection';
import { BeforeAfterFeature } from '../components/home/BeforeAfterFeature';
import { EditorialServiceIndex } from '../components/home/EditorialServiceIndex';
import { ProcessSection } from '../components/home/ProcessSection';
import { StudioPreview } from '../components/home/StudioPreview';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { FAQSection } from '../components/home/FAQSection';
import { JournalSection } from '../components/home/JournalSection';
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
      {/* 01 DARK HERO: 96vh Architectural Film Loop, Left-aligned Headline, 01/STUDIO, Actions */}
      <HeroSection onOpenShowreel={handleOpenShowreel} />

      {/* 02 LIGHT EDITORIAL MANIFESTO: "VISUALIZE BEFORE IT EXISTS" + Real Stats (40+, 14, 6+, 8) */}
      <IntroStatement />

      {/* 03 LIGHT SELECTED WORK: 5 Varied Compositions (21:9 Panoramas, 70/30 Splits, Vertical + Giant Type) */}
      <SelectedWorkSection projects={PROJECTS} />

      {/* 04 DARK CINEMATIC FILM: "ARCHITECTURE IN MOTION" 4K Video Player & Lightbox */}
      <CinematicFilmSection onOpenFilm={handleOpenFilm} />

      {/* 05 LIGHT BEFORE / AFTER TRANSFORMATION: 4 Scenarios with 1px Hairline Slider (SOURCE / FINAL) */}
      <BeforeAfterFeature />

      {/* 06 LIGHT NUMBERED SERVICE INDEX: 01–06 with Real-Time Desktop Hover Image Preview Swap */}
      <EditorialServiceIndex />

      {/* 07 WARM/OFF-WHITE PROCESS: 7 Production Phases with Desktop Sticky Preview & Mobile Accordion */}
      <ProcessSection />

      {/* 08 DARK ATELIER MANIFESTO: "We build visual experiences for architecture that has not been built yet" */}
      <StudioPreview />

      {/* 09 LIGHT TESTIMONIALS & TRUST: 01/04 Quote Slider + Global Architectural Partner Marquee */}
      <TestimonialSection />

      {/* 10 LIGHT FREQUENTLY ASKED QUESTIONS: Real Client Concerns (BIM Formats, Turnaround, Revisions) */}
      <FAQSection />

      {/* 11 LIGHT ARCHITECTURAL DISCOURSE: 1 Featured Essay + 2 Supporting Research Cards */}
      <JournalSection />

      {/* 12 DARK MONUMENTAL FINAL CTA: "HAVE A PROJECT IN MIND?" + Direct Desk & Mutual NDA */}
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
