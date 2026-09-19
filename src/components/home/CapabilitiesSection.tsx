import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CapabilityItem {
  id: string;
  name: string;
  count: string;
  description: string;
  image: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'arch',
    name: 'Architecture & Masterplans',
    count: '38 Projects',
    description: 'Civic landmarks, towers, educational campuses, and urban district developments.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'res',
    name: 'Luxury Real Estate',
    count: '45 Projects',
    description: 'Bespoke private villas, penthouses, high-density residential towers, and branded residences.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'hosp',
    name: 'Hospitality & Resorts',
    count: '24 Projects',
    description: 'Alpine retreats, island wellness sanctuaries, boutique luxury hotels, and dining pavilions.',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'interior',
    name: 'Interior Architecture',
    count: '52 Projects',
    description: 'Tactile material curation, bespoke millwork, custom furniture staging, and lighting studies.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'reuse',
    name: 'Heritage & Adaptive Reuse',
    count: '16 Projects',
    description: 'Historical bunker restorations, industrial conversions, and sensitive landmark transformations.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
  },
];

export function CapabilitiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-[#0c0d11] text-white py-24 md:py-36 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>09 / Typologies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Sector Capabilities
            </h2>
          </div>
          <p className="text-zinc-300 text-sm max-w-md font-light leading-relaxed">
            Our atelier brings specialized domain expertise across residential, commercial, hospitality, and civic typologies worldwide.
          </p>
        </div>

        {/* Typographic Interactive List + Dynamic Preview Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Typographic Accordion / Selector */}
          <div className="lg:col-span-7 divide-y divide-white/10">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={cap.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`py-6 sm:py-7 cursor-pointer group transition-all duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white transition-transform duration-200 group-hover:translate-x-2">
                      {cap.name}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                      {cap.count}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 space-y-3"
                    >
                      <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed max-w-lg">
                        {cap.description}
                      </p>
                      <Link
                        to="/work"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200 hover:text-white transition-colors"
                      >
                        <span>Explore {cap.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dynamic Visual Preview Frame (Axioma / Kontra Curved Container) */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/15 bg-zinc-900">
            <AnimatePresence mode="wait">
              <motion.img
                key={CAPABILITIES[activeIdx].image}
                src={CAPABILITIES[activeIdx].image}
                alt={CAPABILITIES[activeIdx].name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full h-full object-cover filter brightness-90 contrast-[1.05]"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block">
                  Active Typology
                </span>
                <span className="font-display text-lg font-bold">
                  {CAPABILITIES[activeIdx].name}
                </span>
              </div>
              <span className="text-xs font-mono text-amber-200">
                {CAPABILITIES[activeIdx].count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
