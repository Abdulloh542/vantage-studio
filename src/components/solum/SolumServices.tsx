import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServicePanel {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const SERVICES: ServicePanel[] = [
  {
    number: '01',
    title: 'Architecture',
    description:
      'From first concept to final structure, we craft photorealistic architectural imagery and masterplans that respond to site, daylight, and material physics, balancing form, atmosphere, and commercial durability.',
    bullets: [
      'New building visualization & masterplanning',
      'Site analysis & environmental daylight studies',
      'Concept development & schematic 3D design',
      'Structural & technical BIM CGI drawings',
      'Permit & planning authority documentation',
    ],
    image: 'https://framerusercontent.com/images/rIjy0DwlLemTQ2s2BTHaMSII2Fg.jpg?width=2400&height=1600',
  },
  {
    number: '02',
    title: 'Interior Design',
    description:
      'We shape the spaces inside a building with the same care given to its architecture, considering natural light, tactile materials, circulation flow, and how people actually live or work in the space day to day.',
    bullets: [
      'Space planning & bespoke layout design',
      'Material & luxury finish curation',
      'Custom furniture & architectural fixture design',
      'Natural & artificial lighting choreography',
      'Styling & museum-grade final staging',
    ],
    image: 'https://framerusercontent.com/images/NK9CCeVqA1QfjxGwAkHn5lv7QR8.jpg?width=1920&height=2880',
  },
  {
    number: '03',
    title: 'Space Planning & Consulting',
    description:
      'For developers and architects who need expert visual guidance without a full design build, we help optimize unbuilt developments, solve spatial marketing challenges, and advise on key design decisions before ground is broken.',
    bullets: [
      'Layout & off-plan circulation assessment',
      'Pre-construction feasibility consulting',
      'Zoning & architectural code compliance',
      'Spatial efficiency & unit mix optimization',
      'Design direction & cinematic concept consulting',
    ],
    image: 'https://framerusercontent.com/images/yznMxGotqqcgsULHwIRkmlRFPNg.jpg?width=1920&height=2880',
  },
  {
    number: '04',
    title: 'Project Management & Renovation',
    description:
      'We oversee the full visual journey from initial blueprint to final handover, coordinating 3D pipelines, production timelines, and marketing milestones so the vision on paper becomes a sold reality.',
    bullets: [
      'Production sourcing & pipeline coordination',
      'Campaign budget & milestone delivery management',
      'On-site drone supervision & quality control',
      'Adaptive reuse & historical remodel oversight',
      'Final 16K master file & cinematic film handover',
    ],
    image: 'https://framerusercontent.com/images/ex3qqvYls9dRO4lkffiTeOs6hI.jpg?width=1920&height=2562',
  },
];

function ServiceCard({ service, index }: { service: ServicePanel; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={{ zIndex: index + 1 }}
      className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex flex-col md:flex-row bg-[#121212] overflow-hidden shadow-[0_-8px_20px_rgba(0,0,0,0.7)] md:shadow-[0_-24px_48px_rgba(0,0,0,0.95)]"
    >
      {/* Editorial Content Column (Top flex-1 on mobile, Left 50% on desktop) */}
      <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-24 py-4 sm:py-8 md:py-16 bg-[#121212] z-10 overflow-y-auto sm:overflow-visible">
        <div className="max-w-xl space-y-3 sm:space-y-4 md:space-y-6 my-auto">
          {/* Number & Phase Tag */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 10 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="font-sans text-lg sm:text-xl md:text-2xl text-white/40 block font-normal">
              {service.number}
            </span>
            <span className="w-6 sm:w-8 h-px bg-white/20 inline-block" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/50">
              Phase 0{index + 1}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.08]"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 10 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-white/75 text-xs sm:text-sm md:text-base leading-relaxed font-light line-clamp-3 sm:line-clamp-none"
          >
            {service.description}
          </motion.p>

          {/* 5 Bullet Items */}
          <ul className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-white/10">
            {service.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="flex items-center gap-2.5 font-sans text-[11px] sm:text-xs md:text-sm text-white/85"
              >
                <span className="w-1.5 h-1.5 bg-white/40 inline-block flex-shrink-0" />
                <span className="leading-tight sm:leading-normal">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Media Field (Bottom on mobile, Right 50% on desktop) */}
      <div className="w-full md:w-1/2 h-[36svh] sm:h-[42svh] md:h-full relative overflow-hidden bg-black flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover filter brightness-95 select-none"
        />
      </div>
    </div>
  );
}

export function SolumServices() {
  return (
    <section id="services" className="w-full bg-[#121212] text-white select-none relative overflow-visible">
      {/* ========================================================= */}
      {/* 1) NORMAL NON-STICKY INTRODUCTION BLOCK                   */}
      {/* ========================================================= */}
      <div className="w-full py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#121212]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white/60 inline-block rounded-full" />
              <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                02 // SERVICES
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.04em] text-white">
              WHAT WE DO.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl font-light leading-relaxed">
              From first concept to final finish, Vantage Studio offers a full range of architecture and visual design services for unbuilt spaces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              VANTAGE STUDIO&reg;
            </span>
            <Link
              to="/contact"
              className="solum-btn inline-flex items-center gap-3 px-6 py-3.5 border border-white text-white font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2) VERTICAL SERVICES LIST (Sticky Stacking in Flow)        */}
      {/* ========================================================= */}
      <div className="relative w-full overflow-visible">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
