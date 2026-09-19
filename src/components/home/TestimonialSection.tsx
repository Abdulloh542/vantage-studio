import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Building2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

const PARTNERS = [
  'FOSTER + PARTNERS',
  'HERZOG & DE MEURON',
  'GENSLER',
  'PATRIZIA DEV',
  'BROOKFIELD',
  'CBRE GLOBAL',
  'BIG BJARKE INGELS',
  'HINES REAL ESTATE',
  'ZAHA HADID ARCH',
  'JLL CAPITAL',
  'SKIDMORE OWINGS & MERRILL',
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="relative py-24 md:py-36 bg-[#FAF9F6] border-t border-black/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/10 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              08 / TESTIMONIALS & TRUST
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#0B0B0A]">
              ENDORSED BY <br className="hidden md:block" />
              INDUSTRY LEADERS
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-wider text-black/50">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black/80 hover:bg-[#0B0B0A] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black/80 hover:bg-[#0B0B0A] hover:text-white transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Active Display */}
        <div className="min-h-[380px] md:min-h-[320px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Quote Area */}
              <div className="lg:col-span-8">
                <Quote className="w-10 h-10 text-[#C5A880]/40 mb-6" />
                <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-[#0B0B0A] leading-snug tracking-tight mb-8">
                  "{current.quote}"
                </p>

                {/* Project Tag */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-black/60 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-black">
                    <Building2 className="w-3.5 h-3.5 text-[#C5A880]" />
                    {current.project}
                  </span>
                  <span className="text-black/30">•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    {current.location}
                  </span>
                </div>
              </div>

              {/* Author Area */}
              <div className="lg:col-span-4 lg:border-l lg:border-black/10 lg:pl-12 flex items-center gap-5">
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover grayscale contrast-125 border border-black/10 flex-shrink-0"
                />
                <div>
                  <h4 className="font-display text-lg md:text-xl text-[#0B0B0A] font-semibold tracking-tight">
                    {current.author}
                  </h4>
                  <p className="text-sm text-black/70 font-sans mt-0.5">
                    {current.role}
                  </p>
                  <p className="text-xs font-mono text-[#C5A880] uppercase tracking-wider mt-1">
                    {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Index Dots */}
        <div className="flex gap-2 mt-12 pt-8 border-t border-black/5">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 transition-all duration-500 ${
                idx === activeIndex ? 'w-16 bg-[#0B0B0A]' : 'w-4 bg-black/20 hover:bg-black/40'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Partner Ticker / Marquee */}
        <div className="mt-20 pt-12 border-t border-black/10">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-black/40 text-center mb-8">
            COLLABORATING WITH PROMINENT ARCHITECTURAL & DEVELOPMENT HOUSES GLOBALLY
          </p>
          <div className="relative overflow-hidden w-full whitespace-nowrap mask-gradient-horizontal">
            <div className="inline-flex gap-12 md:gap-20 animate-marquee py-2">
              {PARTNERS.concat(PARTNERS).map((partner, idx) => (
                <span
                  key={idx}
                  className="font-display text-sm md:text-base tracking-[0.2em] text-black/40 uppercase font-medium hover:text-black transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
