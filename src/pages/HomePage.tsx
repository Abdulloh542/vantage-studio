import { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroStatement } from '../components/home/IntroStatement';
import { SelectedWorkSection } from '../components/home/SelectedWorkSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { CinematicFilmSection } from '../components/home/CinematicFilmSection';
import { BeforeAfterFeature } from '../components/home/BeforeAfterFeature';
import { HowWeWorkSection } from '../components/home/HowWeWorkSection';
import { AIWorkflowSection } from '../components/home/AIWorkflowSection';
import { TargetIndustriesSection } from '../components/home/TargetIndustriesSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { TrustSection } from '../components/home/TrustSection';
import { StudioPreview } from '../components/home/StudioPreview';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { VideoLightbox } from '../components/common/VideoLightbox';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';

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
    <main className="w-full overflow-hidden">
      {/* 01 Hero Video (Dark with Quick Services Ticker) */}
      <HeroSection onOpenShowreel={handleOpenShowreel} />

      {/* 02 Intro Statement (Light) */}
      <IntroStatement />

      {/* 03 Selected Work (Large Case Studies) */}
      <SelectedWorkSection projects={PROJECTS} />

      {/* 04 What We Do / Services (Light) */}
      <ServicesOverview services={SERVICES} />

      {/* 05 Cinematic Film (Black) */}
      <CinematicFilmSection onOpenFilm={handleOpenFilm} />

      {/* 06 Before / After (4-Scenario Interactive Slider) */}
      <BeforeAfterFeature />

      {/* 07 How We Work (4-Step Frictionless Collaboration) */}
      <HowWeWorkSection />

      {/* 08 AI Workflow & Technology + Craft (Dark) */}
      <AIWorkflowSection />

      {/* 09 Built for Industry Leaders (Target Industries Grid) */}
      <TargetIndustriesSection />

      {/* 10 Capabilities & Typologies (Light) */}
      <CapabilitiesSection />

      {/* 11 Trust / Clients / Global Locations (Light) */}
      <TrustSection />

      {/* 12 About Atelier Culture & Experience (Light) */}
      <StudioPreview />

      {/* 13 Have a Project in Mind? (Monumental Black Final CTA) */}
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
