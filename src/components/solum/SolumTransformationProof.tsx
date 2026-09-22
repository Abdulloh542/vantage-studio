import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';

interface VignetteDetail {
  id: string;
  num: string;
  title: string;
  image: string;
}

const VIGNETTE_DETAILS: VignetteDetail[] = [
  {
    id: 'tree-canopy',
    num: '01',
    title: 'Tree Canopy & Balcony',
    image: '/images/vignettes/tree_canopy_detail.webp',
  },
  {
    id: 'landscaping',
    num: '02',
    title: 'Poolside Landscaping',
    image: '/images/vignettes/landscape_detail.webp',
  },
  {
    id: 'soffit-lighting',
    num: '03',
    title: 'Timber Soffit & Spotlights',
    image: '/images/vignettes/ceiling_lighting_detail.webp',
  },
  {
    id: 'wall-sculpture',
    num: '04',
    title: 'Wall Sculpture & Stone',
    image: '/images/vignettes/sculpture_detail.webp',
  },
];

interface LineCoords {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export function SolumTransformationProof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, { amount: 0.2, once: false });
  const [activeHoveredId, setActiveHoveredId] = useState<string | null>(null);

  // Dynamic SVG line coordinates connecting Left Before/After card to the 4 Right vignette cards
  const [lines, setLines] = useState<LineCoords[]>([]);
  const [containerSize, setContainerSize] = useState({ width: 1200, height: 650 });

  const calculateLines = useCallback(() => {
    if (!containerRef.current || !leftCardRef.current) return;

    const cRect = containerRef.current.getBoundingClientRect();
    const lRect = leftCardRef.current.getBoundingClientRect();

    setContainerSize({ width: cRect.width, height: cRect.height });

    // Starting point: middle of the right edge of the Before/After card
    const startX = lRect.right - cRect.left;
    const startY = lRect.top + lRect.height / 2 - cRect.top;

    const newLines: LineCoords[] = [];

    cardRefs.current.forEach((cardEl) => {
      if (!cardEl) return;
      const r = cardEl.getBoundingClientRect();
      newLines.push({
        startX,
        startY,
        // Target: middle of the left edge of each vignette card wrapper
        endX: r.left - cRect.left,
        endY: r.top + r.height / 2 - cRect.top,
      });
    });

    setLines(newLines);
  }, []);

  useEffect(() => {
    calculateLines();
    const timer = setTimeout(calculateLines, 100);
    const timer2 = setTimeout(calculateLines, 400);

    window.addEventListener('resize', calculateLines, { passive: true });
    window.addEventListener('scroll', calculateLines, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener('resize', calculateLines);
      window.removeEventListener('scroll', calculateLines);
    };
  }, [calculateLines]);

  const isOpen = isInView || shouldReduceMotion;

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-white/10 select-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: Clean Classic Typography                  */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2563EB] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block">
                04 // Architectural Transformation & Spatial Decomposition
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              From Blueprint to Photorealism
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-2xl font-normal leading-relaxed">
              Drag the interactive slider to inspect render fidelity from raw 3D mesh to luminous dusk reality, with high-definition micro-vignettes extracted directly from the final master CGI.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* UNIFIED STAGE: Before/After (Left) + Branching Ropes + 4 Vignettes (Right) */}
        {/* ========================================================= */}
        <div
          ref={containerRef}
          className="relative w-full pt-8 pb-4 flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-8 lg:gap-10"
        >
          {/* ========================================================= */}
          {/* 1. LEFT STAGE: Before / After Comparison Slider Card      */}
          {/* Positioned to the left, larger and well-balanced          */}
          {/* ========================================================= */}
          <motion.div
            ref={leftCardRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[62%] xl:w-[64%] max-w-[760px] relative z-20 border border-white/20 bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.85)] group flex-shrink-0"
          >
            <BeforeAfterSlider
              beforeImage="/images/before_after/villa_before.webp"
              beforeLabel=""
              afterImage="/images/before_after/villa_after.webp"
              afterLabel=""
              aspectRatio="aspect-[16/10]"
            />
          </motion.div>

          {/* ========================================================= */}
          {/* 2. DYNAMIC CURVED BRANCHING ROPES (DESKTOP)               */}
          {/* ========================================================= */}
          <svg
            className="hidden lg:block absolute inset-0 pointer-events-none z-10 w-full h-full"
            style={{ width: containerSize.width, height: containerSize.height }}
          >
            <defs>
              <filter id="branch-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.9" />
              </filter>
              <marker
                id="branch-arrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <polygon points="0 2, 7 5, 0 8" fill="#FFFFFF" />
              </marker>
              <marker
                id="branch-arrow-active"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <polygon points="0 2, 7 5, 0 8" fill="#2563EB" />
              </marker>
            </defs>

            {lines.map((line, idx) => {
              const dx = line.endX - line.startX;
              // Smooth organic Bezier curve fanning out to the right like tree branches
              const pathD = `M ${line.startX} ${line.startY} C ${line.startX + dx * 0.45} ${line.startY}, ${line.startX + dx * 0.55} ${line.endY}, ${line.endX} ${line.endY}`;
              const isHovered = activeHoveredId === VIGNETTE_DETAILS[idx]?.id;

              return (
                <g key={idx} filter="url(#branch-glow)">
                  {/* Curved Rope / Branch Line */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke={isHovered ? '#2563EB' : 'rgba(255, 255, 255, 0.85)'}
                    strokeWidth={isHovered ? 2.5 : 2}
                    strokeDasharray={isHovered ? 'none' : '5 3'}
                    strokeLinecap="round"
                    markerEnd={isHovered ? 'url(#branch-arrow-active)' : 'url(#branch-arrow)'}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.15 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                  {/* Starting Node Knot (on right edge of Before/After card) */}
                  <motion.circle
                    cx={line.startX}
                    cy={line.startY}
                    r="4"
                    fill="#FFFFFF"
                    initial={{ scale: 0 }}
                    animate={isOpen ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  />
                </g>
              );
            })}
          </svg>

          {/* ========================================================= */}
          {/* 3. RIGHT STAGE: 4 Compact, Balanced Detail Image Cards     */}
          {/* Proportionally sized so all 4 fit comfortably on screen   */}
          {/* ========================================================= */}
          <div className="w-full lg:w-[220px] xl:w-[240px] flex flex-col gap-2.5 sm:gap-3 relative z-20 flex-shrink-0">
            {VIGNETTE_DETAILS.map((item, idx) => {
              const isHovered = activeHoveredId === item.id;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className="relative w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -80, scale: 0.85 }}
                    animate={
                      isOpen
                        ? { opacity: 1, x: 0, scale: 1 }
                        : { opacity: 0, x: -80, scale: 0.85 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={() => setActiveHoveredId(item.id)}
                    onMouseLeave={() => setActiveHoveredId(null)}
                    className={`group relative w-full aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-[0_6px_20px_rgba(0,0,0,0.85)] ${
                      isHovered
                        ? 'border-[#2563EB] shadow-[0_8px_28px_rgba(37,99,235,0.4)] scale-[1.03]'
                        : 'border-white/20 hover:border-white/60'
                    }`}
                  >
                    {/* Full-bleed crisp detail image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
