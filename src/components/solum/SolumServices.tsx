import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServicePanel {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  category: string;
}

const SERVICES: ServicePanel[] = [
  {
    number: '01',
    title: 'Architectural Visualization',
    category: 'Architectural Visualization',
    description:
      'Translating architectural designs, masterplans, and unbuilt spatial concepts into high-fidelity photorealistic CGI stills and elevations, calibrated with natural daylight physics and tactile materiality.',
    bullets: [
      'Exterior Visualization',
      'Interior Visualization',
      '3D Modeling & Spatial Calibration',
      'Photorealistic Enhancement',
      'Atmospheric Daylight & Sun Angle Studies',
    ],
    image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
  },
  {
    number: '02',
    title: 'AI Architectural Films',
    category: 'AI Architectural Films',
    description:
      'Directing cinematic motion narratives and AI-driven camera choreographies that bring unbuilt architecture to life with fluid walkthroughs, soundscapes, and viral social media engagement.',
    bullets: [
      'Cinematic Architectural Films',
      'AI Walkthroughs & Steadicam Sweeps',
      'Image-to-Video & Render-to-Video',
      'Concept Films & Story-Driven Narratives',
      'Social Media 9:16 Vertical Reels',
    ],
    image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990854/projects/effect-archi/A_photorealistic__highly__e6837b.jpg',
  },
  {
    number: '03',
    title: 'Real Estate Marketing',
    category: 'Real Estate Marketing',
    description:
      'Empowering property developers and brokers with prestige visual collateral that drives pre-sales, captures high-net-worth buyers, and communicates lifestyle, location, and long-term value.',
    bullets: [
      'Property Presentation Films',
      'Development Marketing Campaigns',
      'Location & Infrastructure Videos',
      'Map & Urban Infrastructure Animations',
      'Pre-Sales Exhibition CGI',
    ],
    image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992495/projects/lotus-mall/lotus-mall_still_1.jpg',
  },
  {
    number: '04',
    title: 'Renovation & Construction',
    category: 'Renovation & Construction',
    description:
      'Visualizing architectural transformation, adaptive reuse of historic structures, and step-by-step construction sequencing to build municipal consensus and stakeholder confidence.',
    bullets: [
      'Before / After Transformation Films',
      'Construction Timelapse Simulation',
      'Renovation Visualization & Adaptive Reuse',
      'Existing → Proposed Transformation Comparison',
      'Historical Conservation 3D Documentation',
    ],
    image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982051/projects/bunker-37/add_rooftop_on_first_image_202606191833.jpg',
  },
];

function ServiceCard({ service, index }: { service: ServicePanel; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={{ zIndex: index + 1 }}
      className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex flex-col md:flex-row bg-[#0d0d0d] overflow-hidden shadow-[0_-8px_20px_rgba(0,0,0,0.7)] md:shadow-[0_-24px_48px_rgba(0,0,0,0.95)] border-t border-white/10"
    >
      {/* Editorial Content Column */}
      <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-6 sm:py-10 md:py-16 bg-[#0d0d0d] z-10 overflow-y-auto sm:overflow-visible">
        <div className="max-w-xl space-y-3 sm:space-y-4 md:space-y-5 my-auto">
          {/* Number & Phase Tag */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 10 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="font-sans text-base sm:text-lg text-white/40 block font-normal">
              {service.number}
            </span>
            <span className="w-6 sm:w-8 h-px bg-white/20 inline-block" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/60">
              Discipline 0{index + 1}
            </span>
          </motion.div>

          {/* Title in Classic Refined Typography */}
          <motion.h3
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 10 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal line-clamp-3 sm:line-clamp-none"
          >
            {service.description}
          </motion.p>

          {/* 5 Bullet Items */}
          <ul className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-white/10">
            {service.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="flex items-center gap-2.5 font-sans text-xs sm:text-sm text-neutral-300"
              >
                <span className="w-1.5 h-1.5 bg-[#2563EB] inline-block flex-shrink-0" />
                <span className="leading-tight sm:leading-normal">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Link
              to={`/projects?category=${encodeURIComponent(service.category)}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-neutral-300 transition-colors group"
            >
              <span>Explore {service.title} Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Media Field */}
      <div className="w-full md:w-1/2 h-[36svh] sm:h-[42svh] md:h-full relative overflow-hidden bg-black flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export function SolumServices() {
  return (
    <section id="services" className="w-full bg-[#0d0d0d] text-white select-none relative overflow-visible">
      {/* Introduction Block */}
      <div className="w-full py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-[#0d0d0d] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2563EB] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block">
                02 // Core Capabilities
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              What We Deliver
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
              From architectural massing to broadcast-grade 4K films, Vantage Studio provides end-to-end CGI production tailored to global developers and architects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white text-white font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Vertical Services List (Sticky Stacking) */}
      <div className="relative w-full overflow-visible">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
