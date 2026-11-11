import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { optimizeCloudinaryImage } from '../utils/media';
import { RevealFrame } from '../components/common/RevealFrame';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  pills: string[];
  image: string;
  hasDemo?: boolean;
  demoUrl?: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Visual Content & 4K CGI',
    tagline:
      'Photorealistic exterior & interior renders, 4K cinema animations, and 9:16 social reels that turn architectural blueprints into experiences that sell.',
    pills: ['4K CGI Rendering', 'Cinematic Walkthroughs', '9:16 Reels'],
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
      1800
    ),
    hasDemo: true,
    demoUrl: '/projects/volga-park',
  },
  {
    number: '02',
    title: 'Real Estate Sales Campaigns',
    tagline:
      'High-converting visual packages for residential towers, commercial malls, and resort masterplans — giving buyers and investors the confidence to commit before construction.',
    pills: ['Property Launch Films', 'Masterplan Visualization', 'Investor Decks'],
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992496/projects/lotus-mall/lotus-mall_still_2.jpg',
      1800
    ),
    hasDemo: true,
    demoUrl: '/projects/lotus-mall',
  },
  {
    number: '03',
    title: 'Renovation & Before/After Transformation',
    tagline:
      'From raw construction sites, CAD floorplans, or historic structures to completed luxury architecture — side-by-side transformation studies and timelapse films.',
    pills: ['3D Floorplan Cutaways', 'Before / After Films', 'Adaptive Reuse CGI'],
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982051/projects/bunker-37/add_rooftop_on_first_image_202606191833.jpg',
      1800
    ),
    hasDemo: true,
    demoUrl: '/projects/bunker-37',
  },
];

export function ServicesPage() {
  return (
    <main className="w-full bg-[#EDEAE4] text-[#111111] pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        {/* ========================================================= */}
        {/* 1) HERO INTRO (OMNYA LAB TWO-TONE EDITORIAL)              */}
        {/* ========================================================= */}
        <div className="max-w-4xl mb-14 sm:mb-20 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#B86B4B]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B6761]">
              Atlas Studio // Capabilities & Deliverables
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-[#111111] leading-[1.06]"
          >
            What we deliver{' '}
            <span className="text-[#87837D]">from concept to close.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base lg:text-lg text-[#6B6761] font-normal max-w-2xl leading-relaxed"
          >
            From photorealistic 3D architectural stills to 4K cinema walkthroughs and 9:16 vertical reels — engineered by one dedicated studio team.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 2) MINIMALISTIC CINEMATIC CARDS WITH CURTAIN REVEAL        */}
        {/* ========================================================= */}
        <div className="space-y-8 sm:space-y-12">
          {SERVICES.map((service, index) => (
            <RevealFrame
              key={service.number}
              shutterColor="#DFDBD2"
              delay={index * 0.06}
              className="group relative w-full rounded-[12px] overflow-hidden min-h-[380px] sm:min-h-[450px] lg:min-h-[520px] flex flex-col justify-end p-6 sm:p-10 lg:p-12 border border-[#111111]/10 bg-zinc-950 shadow-xl"
            >
              {/* Background Architectural Render */}
              <img
                src={service.image}
                alt={service.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.82] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Bottom-Aligned Content */}
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-2xl space-y-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C48B71]">
                    Service // {service.number}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-[-0.03em]">
                    {service.title}
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-white/85 font-normal leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Pills Row */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {service.pills.map((pill, pIdx) => (
                      <span
                        key={pill}
                        className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide ${
                          pIdx === 0
                            ? 'bg-[#EDEAE4] text-[#111111] font-medium'
                            : 'bg-black/45 backdrop-blur-md border border-white/20 text-white/90'
                        }`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Clean Pill Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0 self-start lg:self-end">
                  {service.hasDemo && (
                    <Link
                      to={service.demoUrl || '/projects'}
                      className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-sans font-medium text-white transition-all duration-200"
                    >
                      View case study
                    </Link>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#B86B4B] hover:bg-[#A35B3D] text-white text-xs sm:text-sm font-sans font-medium transition-all duration-200"
                  >
                    <span>Start a project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </RevealFrame>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 3) CLOSING FOOTER STATEMENT                               */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#111111]/12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#111111] leading-tight">
              Show your project <span className="text-[#87837D]">the way it will be.</span>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6B6761]">
              First views in 1–2 days &middot; Finished 4K visuals in 5 days.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111111] hover:bg-[#B86B4B] text-white font-sans text-xs sm:text-sm font-medium transition-all duration-300 self-start md:self-auto"
          >
            <span>Talk to us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
