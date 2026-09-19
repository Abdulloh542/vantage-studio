import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from 'framer-motion';
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

export function SolumServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll tracking across the 400vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track active index for HUD
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.28) setActiveIndex(0);
    else if (latest < 0.58) setActiveIndex(1);
    else if (latest < 0.86) setActiveIndex(2);
    else setActiveIndex(3);
  });

  // Stacking transitions (curtain wipe/slide-up over previous panel)
  // Panel 1: Stationary, dims and slightly scales down when Panel 2 enters
  const p1Opacity = useTransform(scrollYProgress, [0.12, 0.32], [1, 0.4]);
  const p1Scale = useTransform(scrollYProgress, [0.12, 0.32], [1, 0.97]);

  // Panel 2: Slides up from 100% to 0% over Panel 1
  const p2Y = useTransform(scrollYProgress, [0.12, 0.35], ['100%', '0%']);
  const p2Opacity = useTransform(scrollYProgress, [0.42, 0.62], [1, 0.4]);
  const p2Scale = useTransform(scrollYProgress, [0.42, 0.62], [1, 0.97]);

  // Panel 3: Slides up from 100% to 0% over Panel 2
  const p3Y = useTransform(scrollYProgress, [0.42, 0.65], ['100%', '0%']);
  const p3Opacity = useTransform(scrollYProgress, [0.72, 0.90], [1, 0.4]);
  const p3Scale = useTransform(scrollYProgress, [0.72, 0.90], [1, 0.97]);

  // Panel 4: Slides up from 100% to 0% over Panel 3
  const p4Y = useTransform(scrollYProgress, [0.72, 0.94], ['100%', '0%']);

  return (
    <section id="services" className="w-full bg-[#121212] text-white select-none relative">
      {/* ========================================================= */}
      {/* 1) SERVICES INTRO HEADER                                   */}
      {/* ========================================================= */}
      <div className="w-full py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 border-b border-white/10 bg-[#121212]">
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

          <div>
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
      {/* 2) 4-PANEL STACKING CURTAIN SCROLL SEQUENCE               */}
      {/* ========================================================= */}
      {shouldReduceMotion ? (
        // Reduced motion fallback: simple non-sticky layout
        <div className="w-full flex flex-col">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="w-full min-h-screen flex flex-col md:flex-row border-b border-white/10"
            >
              <div className="w-full md:w-1/2 p-8 sm:p-14 md:p-16 lg:p-24 flex flex-col justify-center bg-[#121212]">
                <span className="font-sans text-2xl text-white/40 block mb-3">{service.number}</span>
                <h3 className="font-sans font-bold text-4xl text-white mb-4">{service.title}</h3>
                <p className="font-sans text-white/75 text-base mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-white/85 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 h-[50vh] md:h-auto">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* High-End Scroll-Driven Stacking Card Track (400vh) */
        <div ref={containerRef} className="relative w-full h-[400vh] bg-[#121212]">
          {/* Sticky 100vh Viewport Window */}
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
            
            {/* Active Service Breadcrumb HUD */}
            <div className="absolute top-6 left-6 sm:left-12 md:left-16 lg:left-24 z-50 flex items-center gap-4 pointer-events-none">
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                Phase {SERVICES[activeIndex].number} // {SERVICES[activeIndex].title}
              </span>
              <div className="flex items-center gap-1.5">
                {SERVICES.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* PANEL 01: ARCHITECTURE (Base Layer z-10) */}
            <motion.div
              style={{ opacity: p1Opacity, scale: p1Scale }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row z-10 bg-[#121212] origin-center"
            >
              {/* Left 50% */}
              <div className="w-full md:w-1/2 h-[52vh] md:h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-16 bg-[#121212]">
                <div className="max-w-xl space-y-4 sm:space-y-6">
                  <span className="font-sans text-xl sm:text-2xl text-white/40 block font-normal">
                    {SERVICES[0].number}
                  </span>
                  <h3 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.05]">
                    {SERVICES[0].title}
                  </h3>
                  <p className="font-sans text-white/75 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                    {SERVICES[0].description}
                  </p>
                  <ul className="space-y-2 sm:space-y-2.5 pt-4 border-t border-white/10">
                    {SERVICES[0].bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 font-sans text-xs sm:text-sm text-white/85">
                        <span className="w-1.5 h-1.5 bg-white/40 inline-block flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Right 50% */}
              <div className="w-full md:w-1/2 h-[48vh] md:h-full relative overflow-hidden bg-black">
                <img
                  src={SERVICES[0].image}
                  alt={SERVICES[0].title}
                  className="w-full h-full object-cover filter brightness-95"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* PANEL 02: INTERIOR DESIGN (Slides UP over Panel 01 z-20) */}
            <motion.div
              style={{ y: p2Y, opacity: p2Opacity, scale: p2Scale }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row z-20 bg-[#121212] border-t border-white/20 shadow-[0_-30px_70px_rgba(0,0,0,0.95)] origin-center"
            >
              {/* Left 50% */}
              <div className="w-full md:w-1/2 h-[52vh] md:h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-16 bg-[#121212]">
                <div className="max-w-xl space-y-4 sm:space-y-6">
                  <span className="font-sans text-xl sm:text-2xl text-white/40 block font-normal">
                    {SERVICES[1].number}
                  </span>
                  <h3 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.05]">
                    {SERVICES[1].title}
                  </h3>
                  <p className="font-sans text-white/75 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                    {SERVICES[1].description}
                  </p>
                  <ul className="space-y-2 sm:space-y-2.5 pt-4 border-t border-white/10">
                    {SERVICES[1].bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 font-sans text-xs sm:text-sm text-white/85">
                        <span className="w-1.5 h-1.5 bg-white/40 inline-block flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Right 50% */}
              <div className="w-full md:w-1/2 h-[48vh] md:h-full relative overflow-hidden bg-black">
                <img
                  src={SERVICES[1].image}
                  alt={SERVICES[1].title}
                  className="w-full h-full object-cover filter brightness-95"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* PANEL 03: SPACE PLANNING & CONSULTING (Slides UP over Panel 02 z-30) */}
            <motion.div
              style={{ y: p3Y, opacity: p3Opacity, scale: p3Scale }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row z-30 bg-[#121212] border-t border-white/20 shadow-[0_-30px_70px_rgba(0,0,0,0.95)] origin-center"
            >
              {/* Left 50% */}
              <div className="w-full md:w-1/2 h-[52vh] md:h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-16 bg-[#121212]">
                <div className="max-w-xl space-y-4 sm:space-y-6">
                  <span className="font-sans text-xl sm:text-2xl text-white/40 block font-normal">
                    {SERVICES[2].number}
                  </span>
                  <h3 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.05]">
                    {SERVICES[2].title}
                  </h3>
                  <p className="font-sans text-white/75 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                    {SERVICES[2].description}
                  </p>
                  <ul className="space-y-2 sm:space-y-2.5 pt-4 border-t border-white/10">
                    {SERVICES[2].bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 font-sans text-xs sm:text-sm text-white/85">
                        <span className="w-1.5 h-1.5 bg-white/40 inline-block flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Right 50% */}
              <div className="w-full md:w-1/2 h-[48vh] md:h-full relative overflow-hidden bg-black">
                <img
                  src={SERVICES[2].image}
                  alt={SERVICES[2].title}
                  className="w-full h-full object-cover filter brightness-95"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* PANEL 04: PROJECT MANAGEMENT (Slides UP over Panel 03 z-40) */}
            <motion.div
              style={{ y: p4Y }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row z-40 bg-[#121212] border-t border-white/20 shadow-[0_-30px_70px_rgba(0,0,0,0.95)]"
            >
              {/* Left 50% */}
              <div className="w-full md:w-1/2 h-[52vh] md:h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-16 bg-[#121212]">
                <div className="max-w-xl space-y-4 sm:space-y-6">
                  <span className="font-sans text-xl sm:text-2xl text-white/40 block font-normal">
                    {SERVICES[3].number}
                  </span>
                  <h3 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.05]">
                    {SERVICES[3].title}
                  </h3>
                  <p className="font-sans text-white/75 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                    {SERVICES[3].description}
                  </p>
                  <ul className="space-y-2 sm:space-y-2.5 pt-4 border-t border-white/10">
                    {SERVICES[3].bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 font-sans text-xs sm:text-sm text-white/85">
                        <span className="w-1.5 h-1.5 bg-white/40 inline-block flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Right 50% */}
              <div className="w-full md:w-1/2 h-[48vh] md:h-full relative overflow-hidden bg-black">
                <img
                  src={SERVICES[3].image}
                  alt={SERVICES[3].title}
                  className="w-full h-full object-cover filter brightness-95"
                  loading="lazy"
                />
              </div>
            </motion.div>

          </div>
        </div>
      )}
    </section>
  );
}
