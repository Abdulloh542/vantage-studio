import { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroStatement } from '../components/home/IntroStatement';
import { SelectedWorkSection } from '../components/home/SelectedWorkSection';
import { CinematicFilmSection } from '../components/home/CinematicFilmSection';
import { EditorialServiceIndex } from '../components/home/EditorialServiceIndex';
import { BeforeAfterFeature } from '../components/home/BeforeAfterFeature';
import { TestimonialSection } from '../components/home/TestimonialSection';
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
      {/* 01 DARK HERO: Cinematic Film Loop, Short Clear AI Archviz Headline, Actions, Stats Strip */}
      <HeroSection onOpenShowreel={handleOpenShowreel} />

      {/* 02 ABOUT US & HOW WE WORK: What we do & 4-Stage Production Pipeline */}
      <IntroStatement />

      {/* 03 SERVICES & DISCIPLINES: 01–06 Numbered Index with Live Contextual Image Hover Preview */}
      <EditorialServiceIndex />

      {/* 04 SELECTED WORK: Architectural Case Studies with Alternating Side-in Animations */}
      <SelectedWorkSection projects={PROJECTS} />

      {/* 05 CINEMATIC DIRECTION: "ARCHITECTURE IN MOTION" 4K Video Player & Lightbox */}
      <CinematicFilmSection onOpenFilm={handleOpenFilm} />

      {/* 06 BEFORE / AFTER TRANSFORMATION: 4 Scenarios with Interactive Hairline Slider */}
      <BeforeAfterFeature />

      {/* 07 CLIENT VOICES & TRUST: Endorsements & Architectural Partner Marquee */}
      <TestimonialSection />

      {/* 08 PROJECT PROTOCOLS & FAQ: Key B2B Operational Questions */}
      <FAQSection />

      {/* 09 MONUMENTAL FINAL CTA: "READY TO VISUALIZE THE UNBUILT?" + Conversion Desk */}
      <FinalCTASection />

      {/* Video Lightbox Modal */}
      <VideoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        videoUrl={currentVideo.url}
        title={currentVideo.title}
      />
    </main>
  );
}
