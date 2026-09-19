import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function SolumMediaBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax on the background photo
  const yParallax = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  // Scroll-linked horizontal translation: as you scroll down, the text glides sideways!
  const xMarquee = useTransform(scrollYProgress, [0, 1], ['10%', '-35%']);

  const marqueeText = 'VANTAGE STUDIO ◆ VANTAGE STUDIO ◆ VANTAGE STUDIO ◆ VANTAGE STUDIO ◆ ';

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden bg-black select-none border-b border-[#101010]/12"
    >
      {/* Background Architectural Monochrome Photography with Parallax */}
      <motion.div
        style={{ y: shouldReduceMotion ? '0%' : yParallax }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="https://framerusercontent.com/images/pohnQBsmk5ekejLOxmXlOM46qi0.jpg?width=2400&height=1600"
          alt="Architectural curved canopy monograph"
          loading="lazy"
          className="w-full h-full object-cover object-center filter grayscale brightness-90 contrast-110"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </motion.div>

      {/* Floating Horizontal Typography linked directly to page scroll */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-10">
        <motion.div
          style={{ x: shouldReduceMotion ? '0%' : xMarquee }}
          className="flex items-center whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] text-white/95 uppercase drop-shadow-2xl will-change-transform"
        >
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </motion.div>
      </div>

      {/* Subtle Corner Markers */}
      <div className="absolute bottom-6 left-6 md:left-12 z-20 pointer-events-none">
        <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
          MONOGRAPH // ATELIER VISION
        </span>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 z-20 pointer-events-none hidden sm:block text-right">
        <span className="font-mono text-xs uppercase tracking-widest text-white/70 block">
          ©2019–2026 ARCHITECTURAL VISUALIZATION
        </span>
      </div>
    </section>
  );
}
