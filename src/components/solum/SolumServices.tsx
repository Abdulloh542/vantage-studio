import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  headline: string;
  description: string;
  businessImpact: string;
  deliverables: string[];
  image: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'arch-cgi',
    number: '01',
    title: 'Architectural Visualization',
    category: 'PHOTOREALISTIC STILLS',
    tag: 'UP TO 16K STILLS',
    headline: 'Museum-grade CGI capturing material physics and daylight.',
    description:
      'Sensory exterior and interior stills capturing daylight, dusk, and natural surface reflections.',
    businessImpact: 'Secures planning permits and anchor investor commitments.',
    deliverables: [
      'Daylight & Dusk Exterior CGI',
      'Tactile Luxury Interior Stills',
      '16K Master Print Hoarding Files',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
  },
  {
    id: 'real-estate-films',
    number: '02',
    title: 'Real Estate Films & AI Motion',
    category: 'CINEMATIC MOTION',
    tag: '4K BROADCAST & AI MOTION',
    headline: 'Cinematic films engineered to pre-sell unbuilt developments.',
    description:
      'Sweeping 4K drone choreography and fluid interior Steadicam paths that sell luxury spaces before groundbreaking.',
    businessImpact: '+340% off-plan pre-sales velocity.',
    deliverables: [
      '4K Cinematic Launch Trailers',
      'Virtual Architectural Walkthroughs',
      'Spatial Audio & Drone Choreography',
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
  },
  {
    id: 'ai-enhancement',
    number: '03',
    title: 'AI Architectural Enhancement',
    category: 'NEURAL ACCELERATION',
    tag: 'PROPRIETARY PIPELINE',
    headline: 'Rough sketches transformed into photoreal visuals in days.',
    description:
      'Proprietary neural relighting pipeline delivering high-converting architectural imagery at 3x standard speed.',
    businessImpact: 'Reduces visual production cycles by 60%.',
    deliverables: [
      'Neural Concept Variations',
      'Atmospheric Weather Simulation',
      'Rapid Pre-Marketing Teasers',
    ],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85',
  },
  {
    id: 'spatial-vr',
    number: '04',
    title: '3D Spatial Modeling & VR',
    category: 'INTERACTIVE SALES',
    tag: 'REAL-TIME VR SUITE',
    headline: 'BIM models converted into touchscreen apps and VR suites.',
    description:
      'Interactive real-time environments for sales gallery kiosks, web unit configurators, and VR headsets.',
    businessImpact: 'Empowers remote international off-plan sales.',
    deliverables: [
      'Sales Gallery Touchscreen Apps',
      'Web-Based 3D Unit Navigators',
      'Unreal Engine VR Walkthroughs',
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85',
  },
];

export function SolumServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Normalized scroll progress across 400vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track 4 quadrants (0–24.99%, 25–49.99%, 50–74.99%, 75–100%)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.25) {
      setActiveIdx(0);
    } else if (latest < 0.5) {
      setActiveIdx(1);
    } else if (latest < 0.75) {
      setActiveIdx(2);
    } else {
      setActiveIdx(3);
    }
  });

  const activeService = SERVICES_DATA[activeIdx];

  // Manual jump by clicking indicator
  const scrollToState = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / 4 + 0.03) * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* DESKTOP PINNED SCROLL SERVICE SEQUENCE (400vh outer wrapper + sticky stage) */}
      {/* ========================================================================= */}
      <section
        ref={containerRef}
        className="hidden md:block relative h-[400vh] bg-[#111111] text-[#F6F6F2] select-none"
      >
        {/* Sticky 100vh Viewport Stage */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 lg:py-12 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#111111]">
          {/* 4-Column Hairline Grid */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-4 px-6 md:px-12 lg:px-16 z-0">
            <div className="border-r border-white/[0.08] h-full" />
            <div className="border-r border-white/[0.08] h-full" />
            <div className="border-r border-white/[0.08] h-full" />
            <div className="h-full" />
          </div>

          {/* Top Bar: Stationary Header in 4-Column Alignment */}
          <div className="relative z-10 grid grid-cols-4 gap-6 items-end pb-6 border-b border-white/12">
            <div className="col-span-2 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-white/60 font-medium">
                  02 // SERVICES
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-[-0.04em] text-white leading-none">
                WHAT WE DO.
              </h2>
            </div>

            <div className="col-span-1 hidden lg:block">
              <p className="font-sans text-xs lg:text-sm text-white/60 font-light leading-relaxed">
                Photorealistic CGI and cinematic films that pre-sell unbuilt developments.
              </p>
            </div>

            <div className="col-span-1 flex justify-end">
              <Link
                to="/contact"
                className="solum-btn px-5 py-3 border border-white text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-colors duration-180"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 inline-block ml-2" />
              </Link>
            </div>
          </div>

          {/* Center Stage: Stationary Grid with Dynamic Service Crossfade */}
          <div className="relative z-10 my-auto py-6 grid grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Dynamic Copy State (Columns 1-5) */}
            <div className="col-span-5 min-h-[360px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <div>
                    <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-2">
                      DISCIPLINE {activeService.number} &bull; {activeService.category}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl font-semibold uppercase tracking-tight text-white leading-tight">
                      {activeService.headline}
                    </h3>
                  </div>

                  <p className="font-sans text-sm lg:text-base text-white/75 font-light leading-relaxed max-w-md">
                    {activeService.description}
                  </p>

                  {/* Outcome Highlight */}
                  <div className="py-2.5 px-4 bg-white/[0.04] border-l-2 border-white border-y border-r border-white/10 font-mono text-xs text-white/90 inline-block">
                    <span className="text-white/40 mr-2">OUTCOME:</span>
                    <span className="font-medium text-white">{activeService.businessImpact}</span>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    {activeService.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2.5 font-mono text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* Commission Link */}
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-white border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition-colors"
                    >
                      <span>COMMISSION THIS SERVICE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Clipped Media Frame with Crossfade Transition (Columns 6-12) */}
            <div className="col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-white/15 shadow-2xl">
                {SERVICES_DATA.map((srv, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <motion.div
                      key={srv.id}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1.0 : 1.04,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover filter brightness-95 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                    </motion.div>
                  );
                })}

                {/* Active Tag in Corner */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white bg-black/75 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                    {activeService.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Interactive 01–04 State Indicator & Scroll Progress Line */}
          <div className="relative z-10 pt-4 border-t border-white/12 space-y-3">
            {/* Proportional Scroll Progress Line */}
            <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-white origin-left w-full"
              />
            </div>

            {/* 4 Interactive Discipline Step Buttons */}
            <div className="grid grid-cols-4 gap-4">
              {SERVICES_DATA.map((srv, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={srv.id}
                    onClick={() => scrollToState(idx)}
                    className="flex items-center gap-3 py-2 text-left cursor-pointer group transition-all"
                  >
                    <span
                      className={`font-mono text-xs transition-colors duration-200 ${
                        isActive ? 'text-white font-bold' : 'text-white/30 group-hover:text-white/60'
                      }`}
                    >
                      {srv.number}
                    </span>
                    <span
                      className={`font-mono text-xs uppercase tracking-wider truncate transition-colors duration-200 ${
                        isActive ? 'text-white font-semibold' : 'text-white/30 group-hover:text-white/60'
                      }`}
                    >
                      {srv.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MOBILE STACKED SERVICE PANELS (Normal stacked layout for performance)      */}
      {/* ========================================================================= */}
      <section className="block md:hidden w-full bg-[#111111] text-[#F6F6F2] py-16 px-6 border-b border-white/12 select-none">
        {/* Mobile Header */}
        <div className="pb-8 border-b border-white/12 space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-white/60 font-medium">
            02 // SERVICES
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-white">
            WHAT WE DO.
          </h2>
          <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
            Photorealistic CGI and cinematic films that pre-sell unbuilt developments.
          </p>
        </div>

        {/* 4 Stacked Panels */}
        <div className="divide-y divide-white/12">
          {SERVICES_DATA.map((srv) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="py-10 space-y-4"
            >
              {/* Media */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-white/15">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-black/80 px-2.5 py-1 border border-white/20">
                    {srv.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] text-white/50 uppercase tracking-widest block">
                  {srv.number} &bull; {srv.category}
                </span>
                <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-white">
                  {srv.headline}
                </h3>
                <p className="font-sans text-xs text-white/75 font-light leading-relaxed">
                  {srv.description}
                </p>

                <div className="py-2 px-3 bg-white/[0.04] border-l-2 border-white border-y border-r border-white/10 font-mono text-[11px] text-white/90">
                  <span className="text-white/40 mr-1.5">OUTCOME:</span>
                  <span>{srv.businessImpact}</span>
                </div>

                <div className="pt-2 space-y-1.5">
                  {srv.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 font-mono text-[11px] text-white/80">
                      <CheckCircle2 className="w-3 h-3 text-white/40 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-white border-b border-white pb-0.5"
                  >
                    <span>COMMISSION THIS SERVICE</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
