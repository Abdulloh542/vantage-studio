import { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroStatement } from '../components/home/IntroStatement';
import { SelectedWorkSection } from '../components/home/SelectedWorkSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { CinematicFilmSection } from '../components/home/CinematicFilmSection';
import { BeforeAfterFeature } from '../components/home/BeforeAfterFeature';
import { ProcessSnapshot } from '../components/home/ProcessSnapshot';
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
      {/* 01 Hero Video (Dark) */}
      <HeroSection onOpenShowreel={handleOpenShowreel} />

      {/* 02 Intro Statement (Light) */}
      <IntroStatement />

      {/* 03 Selected Work (Light) */}
      <SelectedWorkSection projects={PROJECTS} />

      {/* 04 Services (Light) */}
      <ServicesOverview services={SERVICES} />

      {/* 05 Cinematic Film (Black) */}
      <CinematicFilmSection onOpenFilm={handleOpenFilm} />

      {/* 06 Before / After (Light) */}
      <BeforeAfterFeature />

      {/* 07 Process Snapshot (Dark) */}
      <ProcessSnapshot />

      {/* 08 Capabilities (Light) */}
      <CapabilitiesSection />

      {/* 09 Trust / Clients / Locations (Light) */}
      <TrustSection />

      {/* 10 About Atelier Preview (Light) */}
      <StudioPreview />

      {/* 11 Final Monumental CTA (Black) */}
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
