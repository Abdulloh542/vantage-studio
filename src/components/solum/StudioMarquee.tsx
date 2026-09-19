import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROW_1_ITEMS = [
  '16K PHOTOREALISTIC STILLS',
  '4K AI REAL ESTATE CINEMA',
  'FOSTER + PARTNERS',
  'NEURAL LIGHTING ENGINE',
  'GENSLER ARCHITECTURE',
  'UNREAL ENGINE 5.4 VR',
  'HERZOG & DE MEURON',
  '3D SPATIAL MODELING & BIM',
  'BROOKFIELD REAL ESTATE',
  'CONSTRUCTION TIMELAPSE CGI',
  'PATRIZIA GLOBAL',
  'HIGH-CONVERSION PRE-SALES',
];

const ROW_2_ITEMS = [
  '100+ ICONIC PROJECTS DELIVERED',
  'LONDON • ZURICH • DUBAI • TASHKENT',
  '+340% PRE-SALE VELOCITY',
  '10-14 DAYS TURNAROUND',
  'INSTITUTIONAL CAPITAL APPROVAL',
  '100% DESIGN SATISFACTION GUARANTEE',
  'MUSEUM-GRADE MATERIAL PHYSICS',
  'OFF-PLAN MARKETING LEADER',
];

function TickerTrack({
  items,
  speed = 20,
  reverse = false,
}: {
  items: string[];
  speed?: number;
  reverse?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Duplicate 4 times for continuous seamless loop
  const duplicated = [...items, ...items, ...items, ...items];

  useAnimationFrame((_, delta) => {
    const moveBy = (speed * delta) / 1000;
    const currentX = x.get();

    if (containerRef.current) {
      const halfWidth = containerRef.current.scrollWidth / 2;
      if (reverse) {
        if (currentX >= 0) {
          x.set(-halfWidth);
          return;
        }
        x.set(currentX + moveBy);
      } else {
        if (Math.abs(currentX) >= halfWidth) {
          x.set(0);
          return;
        }
        x.set(currentX - moveBy);
      }
    }
  });

  return (
    <div ref={containerRef} className="overflow-hidden relative select-none w-full py-3">
      <motion.div style={{ x }} className="flex items-center gap-10 whitespace-nowrap will-change-transform">
        {duplicated.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-4 font-mono text-xs md:text-sm tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-200 uppercase font-medium"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 inline-block" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function StudioMarquee() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white border-b border-white/12 py-10 md:py-14 select-none overflow-hidden relative">
      {/* 4-Column Hairline Grid */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-4 px-6 md:px-10 z-0">
        <div className="border-r border-white/[0.05] h-full hidden md:block" />
        <div className="border-r border-white/[0.05] h-full hidden md:block" />
        <div className="border-r border-white/[0.05] h-full hidden md:block" />
        <div className="h-full hidden md:block" />
      </div>

      <div className="relative z-10 space-y-4">
        {/* Kinetic Ticker Track 1 (Left Gliding) */}
        <TickerTrack items={ROW_1_ITEMS} speed={24} reverse={false} />

        {/* Kinetic Ticker Track 2 (Right Gliding) */}
        <TickerTrack items={ROW_2_ITEMS} speed={18} reverse={true} />

        {/* Minimal Studio Action Band */}
        <div className="pt-6 px-6 md:px-10 max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 font-mono text-xs text-white/70">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase text-white/80">
              CURRENT CAPACITY: ACCEPTING COMMISSIONS FOR Q4 2026
            </span>
          </div>

          <Link
            to="/contact"
            className="group flex items-center gap-2 uppercase tracking-wider text-white hover:text-white/70 border-b border-white pb-0.5 transition-colors font-semibold"
          >
            <span>REQUEST PRODUCTION PROPOSAL</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
