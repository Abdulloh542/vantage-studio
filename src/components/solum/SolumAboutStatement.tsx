import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { optimizeCloudinaryImage, optimizeCloudinaryVideo } from '../../utils/media';
import { RevealFrame } from '../common/RevealFrame';

interface CapabilityItem {
  id: string;
  title: string;
  category: string;
  deliverables: string[];
  image: string;
  video?: string;
  description: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'archviz',
    title: 'Architectural Visualization',
    category: 'Architectural Visualization',
    deliverables: [
      'Exterior Visualization',
      'Interior Visualization',
      '3D Modeling',
      'Photorealistic Enhancement',
    ],
    image:
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
    video:
      'https://res.cloudinary.com/mvmsbgon/video/upload/v1789990140/projects/volga-park/volga_park_film_v1.mp4',
    description: 'Translating architectural blueprints and designs into photorealistic CGI elevations and daylight renders.',
  },
  {
    id: 'ai-films',
    title: 'AI Architectural Films',
    category: 'AI Architectural Films',
    deliverables: [
      'Cinematic Architectural Films',
      'AI Walkthroughs',
      'Image-to-Video & Render-to-Video',
      'Concept Films',
    ],
    image:
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990851/projects/effect-archi/A_high-end_architectural__aadba3.jpg',
    video:
      'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992406/projects/architecture-insight/architecture_insight_film_9x16.mp4',
    description: 'Directing cinematic walkthroughs and AI-driven camera choreographies engineered for viral visual impact.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Marketing',
    category: 'Real Estate Marketing',
    deliverables: [
      'Property Presentation Films',
      'Development Marketing',
      'Location & Infrastructure Videos',
      'Map Animations & Social Reels',
    ],
    image:
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992496/projects/lotus-mall/lotus-mall_still_2.jpg',
    video:
      'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992494/projects/lotus-mall/lotus-mall_film.mp4',
    description: 'Prestige commercial and residential CGI campaigns that accelerate pre-sales and secure institutional investors.',
  },
  {
    id: 'renovation',
    title: 'Renovation & Construction',
    category: 'Renovation & Construction',
    deliverables: [
      'Before / After Films',
      'Construction Timelapse',
      'Renovation Visualization',
      'Existing → Proposed Transformation',
    ],
    image:
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982051/projects/bunker-37/add_rooftop_on_first_image_202606191833.jpg',
    video:
      'https://res.cloudinary.com/mvmsbgon/video/upload/v1789983235/projects/bunker-37/bunker_37_film_v2.mp4',
    description: 'Visualizing architectural transformations, adaptive reuse of historic structures, and construction sequencing.',
  },
];

function CapabilityCard({ cap, idx }: { cap: CapabilityItem; idx: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const v = videoRef.current;
    if (v) {
      if (v.readyState >= 1) {
        v.currentTime = 0;
      }
      v.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/projects?category=${encodeURIComponent(cap.category)}`}
        className="block focus:outline-none"
      >
        <RevealFrame
          shutterColor="#141413"
          delay={0}
          className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 border border-white/15 group-hover:border-white/40 transition-colors"
        >
          <img
            src={optimizeCloudinaryImage(cap.image, 1200)}
            alt={cap.title}
            loading="lazy"
            className={`w-full h-full object-cover scale-[1.035] group-hover:scale-[1.07] transition-all duration-500 ease-out ${
              cap.video && isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {cap.video && (
            <video
              ref={videoRef}
              src={optimizeCloudinaryVideo(cap.video, 960)}
              muted
              loop
              playsInline
              preload="none"
              className={`absolute inset-0 w-full h-full object-cover scale-[1.035] pointer-events-none transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          <div className="absolute top-3 right-3 w-8 h-8 bg-black/70 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </RevealFrame>

        <div className="pt-3.5 flex items-center justify-between border-b border-white/15 pb-3">
          <h3 className="font-logo text-lg sm:text-xl uppercase tracking-[0.03em] text-white group-hover:text-[#F5EDE2] transition-colors">
            {cap.title}
          </h3>
          <span className="font-mono text-xs text-neutral-500">
            0{idx + 1}
          </span>
        </div>
      </Link>
    </div>
  );
}

export function SolumAboutStatement() {
  return (
    <section className="w-full bg-[#0E0E0D] text-white border-b border-white/10 select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 md:pb-16 border-b border-white/10 items-end">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#F5EDE2] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F5EDE2] font-semibold">
                CORE DISCIPLINES
              </span>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-9 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-logo text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.03em] leading-[1.06] text-white max-w-2xl">
              Four Specialized Visual Production Pipelines
            </h2>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#F5EDE2] pb-1 border-b border-[#F5EDE2]/40 hover:border-white transition-colors group self-start sm:self-auto"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="pt-12 md:pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <CapabilityCard key={cap.id} cap={cap} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
