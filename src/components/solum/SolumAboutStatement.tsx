import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { optimizeCloudinaryImage, optimizeCloudinaryVideo } from '../../utils/media';

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
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992495/projects/lotus-mall/lotus-mall_still_1.jpg',
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
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/projects?category=${encodeURIComponent(cap.category)}`}
        className="block focus:outline-none"
      >
        {/* Visual Card Image / Video */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-white/30 transition-colors">
          <img
            src={optimizeCloudinaryImage(cap.image, 800)}
            alt={cap.title}
            loading="lazy"
            className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out ${
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
              className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#2563EB] group-hover:border-transparent transition-all">
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Clean Classic Typography Under Card */}
        <div className="pt-3 flex items-center justify-between">
          <h3 className="font-sans text-sm sm:text-base font-medium text-white group-hover:text-neutral-300 transition-colors">
            {cap.title}
          </h3>
          <span className="font-mono text-xs text-neutral-500">
            0{idx + 1}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function SolumAboutStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#000000] text-white border-b border-white/10 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28">
        
        {/* ========================================================= */}
        {/* 1) EDITORIAL STATEMENT (Brick Visual reference)           */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-16 md:pb-24 border-b border-white/10">
          
          {/* Left Column: Blue Indicator + What We Do */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#2563EB] inline-block" />
              <h2 className="font-sans text-xl sm:text-2xl font-medium text-white tracking-tight">
                What We Do
              </h2>
            </div>
          </div>

          {/* Right Column: Classic, Eye-Pleasing Editorial Text */}
          <div className="md:col-span-8 lg:col-span-9 space-y-5">
            <motion.p
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-lg sm:text-xl md:text-[22px] text-white/95 font-normal leading-relaxed max-w-3xl"
            >
              Vantage is an international architectural visualization and creative production studio that translates unbuilt architecture into high-end visual solutions and cinematic marketing films.
            </motion.p>

            <motion.p
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-3xl"
            >
              Driven by a team of highly skilled 3D artists, art directors, and powered by cutting-edge visual technology, we deliver innovative and refined visual narratives, with the capacity and competence required for large-scale, prestige developments.
            </motion.p>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-white pb-1 border-b border-white hover:text-neutral-400 hover:border-neutral-400 transition-colors group"
              >
                <span>More about our studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2) 4 CORE DISCIPLINES & DELIVERABLES                      */}
        {/* ========================================================= */}
        <div className="pt-16 md:pt-20">
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
