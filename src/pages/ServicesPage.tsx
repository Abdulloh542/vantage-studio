import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
      2200
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
      2200
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
      2200
    ),
    hasDemo: true,
    demoUrl: '/projects/bunker-37',
  },
];

export function ServicesPage() {
  return (
    <main className="w-full bg-[#F5EDE2] text-[#321E13] pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* ========================================================= */}
        {/* 1) HERO INTRO                                             */}
        {/* ========================================================= */}
        <div className="max-w-4xl mb-14 sm:mb-20 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#321E13]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#321E13]/70">
              Atlas Studio // Capabilities &amp; Deliverables
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-logo text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-[0.04em] text-[#321E13] leading-[1.02]"
          >
            What We Deliver
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base lg:text-lg text-[#321E13]/75 font-normal max-w-2xl leading-relaxed"
          >
            From photorealistic 3D architectural stills to 4K cinema walkthroughs and 9:16 vertical reels — engineered by our dedicated visualization studio.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 2) MINIMALISTIC CINEMATIC CARDS WITH CURTAIN REVEAL        */}
        {/* ========================================================= */}
        <div className="space-y-8 sm:space-y-12">
          {SERVICES.map((service, index) => (
            <RevealFrame
              key={service.number}
              shutterColor="#EAE2D6"
              delay={0}
              className="group relative w-full overflow-hidden min-h-[380px] sm:min-h-[450px] lg:min-h-[520px] flex flex-col justify-end p-6 sm:p-10 lg:p-12 border border-[#321E13]/15 bg-zinc-950 shadow-xl"
            >
              {/* Background Architectural Render (scale-[1.035] trims any letterbox edge) */}
              <img
                src={service.image}
                alt={service.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover scale-[1.035] group-hover:scale-[1.065] transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Bottom Gradient Overlay for Text Readability */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* Bottom-Aligned Content */}
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-2xl space-y-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5EDE2]/80">
                    Service // {service.number}
                  </span>
                  <h2 className="font-logo text-3xl sm:text-4xl lg:text-5xl font-normal uppercase text-white tracking-[0.03em]">
                    {service.title}
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-white/90 font-normal leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Architectural Tags Row */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {service.pills.map((pill, pIdx) => (
                      <span
                        key={pill}
                        className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider ${
                          pIdx === 0
                            ? 'bg-[#F5EDE2] text-[#321E13] font-semibold'
                            : 'bg-black/50 backdrop-blur-md border border-white/25 text-white/90'
                        }`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Atlas Studio Sharp Architectural Buttons */}
                <div className="flex flex-wrap items-center gap-3 flex-shrink-0 self-start lg:self-end">
                  {service.hasDemo && (
                    <Link
                      to={service.demoUrl || '/projects'}
                      className="px-5 py-3 bg-black/55 hover:bg-black/80 backdrop-blur-md border border-white/35 text-xs font-mono uppercase tracking-[0.14em] text-white transition-all duration-200"
                    >
                      View Case Study
                    </Link>
                  )}

                  <Link
                    to="/contact"
                    className="group/btn inline-flex items-stretch bg-[#F5EDE2] hover:bg-white text-[#321E13] border border-[#F5EDE2] transition-all duration-200"
                  >
                    <span className="px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                      Start a Project
                    </span>
                    <span className="w-10 border-l border-[#321E13]/20 flex items-center justify-center bg-[#321E13] text-[#F5EDE2]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </RevealFrame>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 3) CLOSING FOOTER STATEMENT                               */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#321E13]/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="font-logo text-2xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-[0.03em] text-[#321E13] leading-tight">
              Ready To Visualize Your Next Project?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#321E13]/70">
              Send us your drawings or 3D model for a bespoke production proposal.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-stretch bg-[#321E13] hover:bg-[#101010] text-[#F5EDE2] transition-colors duration-200 self-start md:self-auto"
          >
            <span className="px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.16em]">
              Talk To Us
            </span>
            <span className="w-11 border-l border-[#F5EDE2]/20 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
