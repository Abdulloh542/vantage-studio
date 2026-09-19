import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../data/services';

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
];

export function SolumServices() {
  const outerWrapperRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const displayServices = SERVICES.slice(0, 4);

  // Detect viewport width (breakpoint: 810px per Solum spec)
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 810);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Normalized scroll progress through the 400vh desktop wrapper
  const { scrollYProgress } = useScroll({
    target: outerWrapperRef,
    offset: ['start start', 'end end'],
  });

  // Calculate active service state according to Solum exact scroll zones:
  // 0–24.99% => State 01
  // 25–49.99% => State 02
  // 50–74.99% => State 03
  // 75–100% => State 04
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      let idx = 0;
      if (latest < 0.25) {
        idx = 0;
      } else if (latest < 0.5) {
        idx = 1;
      } else if (latest < 0.75) {
        idx = 2;
      } else {
        idx = 3;
      }
      setActiveIdx((prev) => (prev !== idx ? idx : prev));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeService = displayServices[activeIdx] || displayServices[0];

  // =========================================================
  // TABLET / MOBILE FALLBACK (< 810px)
  // Disable pinning & 400vh wrapper; render 4 stacked dark panels
  // =========================================================
  if (isMobile) {
    return (
      <section className="w-full bg-[#111111] text-[#F6F6F2] py-20 px-6 border-b border-white/12">
        <div className="max-w-xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="space-y-4 pb-8 border-b border-white/12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F6F6F2] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#F6F6F2]">
                SERVICES
              </span>
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-white uppercase">
              WHAT WE DO
            </h2>
            <p className="font-sans text-sm text-white/70 leading-relaxed font-light">
              We translate unbuilt spatial concepts, architectural CAD drawings and BIM models into photorealistic imagery, cinematic films and pre-sales marketing assets.
            </p>
          </div>

          {/* 4 Distinct Sequential Stacked Dark Panels */}
          <div className="space-y-16">
            {displayServices.map((srv, idx) => (
              <motion.div
                key={srv.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 pt-6 border-t border-white/10"
              >
                {/* Panel Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border border-white/12">
                  <motion.img
                    src={SERVICE_IMAGES[idx]}
                    alt={srv.title}
                    initial={{ scale: 1.04, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Panel Content */}
                <div>
                  <span className="font-mono text-xs text-white/50 block mb-2 font-medium">
                    0{idx + 1} // DISCIPLINE
                  </span>
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-[-0.04em] text-white mb-3">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 font-light">
                    {srv.shortDescription}
                  </p>

                  <ul className="space-y-2 border-t border-white/10 pt-4 mb-6">
                    {srv.deliverables.slice(0, 3).map((d) => (
                      <li key={d.name} className="flex items-center gap-2 text-xs font-mono text-white/80">
                        <span className="w-1.5 h-1.5 bg-white/40 inline-block" />
                        <span>{d.name}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white border-b border-white pb-1"
                  >
                    <span>Inquire for {srv.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =========================================================
  // DESKTOP: 400vh PINNED SCROLL SERVICE SEQUENCE
  // Outer wrapper: 400vh (4 * 100vh), Sticky stage: 100vh pinned top:0
  // =========================================================
  return (
    <div
      ref={outerWrapperRef}
      className="relative w-full min-h-[400vh] bg-[#111111] text-[#F6F6F2] select-none"
    >
      {/* Pinned 100vh Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-6 md:px-10 py-10 md:py-14 z-10">
        {/* 4-Column Visible Hairline Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-4 px-6 md:px-10 z-0">
          <div className="border-r border-white/[0.08] h-full" />
          <div className="border-r border-white/[0.08] h-full" />
          <div className="border-r border-white/[0.08] h-full" />
          <div className="h-full" />
        </div>

        {/* ---------------------------------------------------- */}
        {/* STATIC STAGE SHELL: Header remains mounted at all times */}
        {/* ---------------------------------------------------- */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto pb-8 border-b border-white/12">
          <div className="grid grid-cols-4 gap-8 items-end">
            {/* Col 1: Label */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#F6F6F2] inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#F6F6F2] font-medium">
                  SERVICES
                </span>
              </div>
              <span className="font-mono text-xs text-white/50 block">
                04 CORE DISCIPLINES
              </span>
            </div>

            {/* Col 2 & 3: What We Do Permanent Heading */}
            <div className="col-span-2">
              <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-[-0.06em] text-white uppercase leading-[0.95]">
                WHAT WE DO
              </h2>
            </div>

            {/* Col 4: Split Start a Project Button */}
            <div className="col-span-1 flex justify-end">
              <Link
                to="/contact"
                className="solum-btn px-6 py-3.5 border border-white text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-colors duration-180"
              >
                <span>START A PROJECT</span>
                <span className="btn-arrow ml-3">
                  <ArrowRight className="w-4 h-4 inline-block transition-transform duration-160 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* CENTER STAGE: Content (Cols 1-2) + Media (Cols 3-4)   */}
        {/* ---------------------------------------------------- */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto my-auto py-6">
          <div className="grid grid-cols-4 gap-8 lg:gap-12 items-center">
            {/* Col 1-2: State Indicator + Copy Layer */}
            <div className="col-span-2 flex gap-8 lg:gap-12 items-start">
              {/* Vertical 01-04 State Indicator & Proportional Line */}
              <div className="flex flex-col items-center gap-4 pt-2">
                <div className="space-y-6 font-mono text-xs">
                  {displayServices.map((_, i) => {
                    const isActive = activeIdx === i;
                    return (
                      <div
                        key={i}
                        className={`transition-colors duration-240 ${
                          isActive ? 'text-white font-bold scale-110' : 'text-white/30'
                        }`}
                      >
                        0{i + 1}
                      </div>
                    );
                  })}
                </div>
                {/* Thin vertical progress track */}
                <div className="w-[1.5px] h-28 bg-white/15 relative overflow-hidden mt-2">
                  <motion.div
                    className="w-full bg-white origin-top"
                    style={{
                      height: `${((activeIdx + 1) / displayServices.length) * 100}%`,
                      transition: 'height 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </div>
              </div>

              {/* Dynamic Service Copy (Fades and shifts vertically) */}
              <div className="flex-1 min-h-[340px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 28 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -16 }
                    }
                    transition={{
                      duration: 0.48,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="font-mono text-xs sm:text-sm text-white/50 block mb-3 font-medium">
                        DISCIPLINE 0{activeIdx + 1} // MASTER ATELIER
                      </span>
                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-white uppercase leading-tight">
                        {activeService.title}
                      </h3>
                    </div>

                    <p className="font-sans text-base sm:text-lg text-white/75 leading-relaxed font-light max-w-lg">
                      {activeService.shortDescription}
                    </p>

                    {/* Deliverables Bullet List with slight stagger */}
                    <div className="pt-6 border-t border-white/12">
                      <span className="font-mono text-xs uppercase tracking-wider text-white/50 block mb-3">
                        DELIVERABLE SPECIFICATIONS:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeService.deliverables.slice(0, 4).map((d, dIdx) => (
                          <motion.li
                            key={d.name}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.35,
                              delay: 0.12 + dIdx * 0.045,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-white/85"
                          >
                            <span className="w-1.5 h-1.5 bg-white/60 inline-block" />
                            <span>{d.name}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider font-medium text-white border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition-colors"
                      >
                        <span>COMMISSION {activeService.title.toUpperCase()}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Col 3-4: State Media Layer (Scale & Crossfade) */}
            <div className="col-span-2">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-950 border border-white/15 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 1.04 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 1.03 }
                    }
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={SERVICE_IMAGES[activeIdx]}
                      alt={activeService.title}
                      className="w-full h-full object-cover filter brightness-95 contrast-105 will-change-transform"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Corner Tag */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="font-mono text-xs uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/15">
                        PHASE 0{activeIdx + 1} &bull; {activeService.slug.toUpperCase()}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* BOTTOM FOOTER OF PINNED STAGE: Scroll hint & guide   */}
        {/* ---------------------------------------------------- */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto pt-6 border-t border-white/12 flex items-center justify-between font-mono text-xs text-white/50">
          <div>
            SCROLL TO ADVANCE SERVICES (0{activeIdx + 1} / 04)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>INTERACTIVE STAGE PINNED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
