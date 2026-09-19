import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { FramerSectionHeader } from '../common/FramerReveal';
import { TESTIMONIALS } from '../../data/testimonials';

export function FramerTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="bg-[#FAF9F6] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Signature Framer Section Header */}
        <FramerSectionHeader
          eyebrow="WHAT CLIENTS SAY //"
          title="TESTIMONIALS"
          subtag="*(WORDS OF TRUST)"
          theme="light"
        />

        {/* Testimonial Active Display with Smooth Transitions */}
        <div className="min-h-[380px] md:min-h-[300px] flex items-center bg-[#F4F2EE] border border-black/10 p-8 md:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-8">
                <Quote className="w-8 h-8 text-[#C5A880] mb-6" />
                <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-[#0B0B0A] leading-snug tracking-tight mb-6">
                  "{current.quote}"
                </p>
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-black/50">
                  <span className="text-black font-semibold">{current.project}</span>
                  <span>•</span>
                  <span>{current.location}</span>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-black/10 lg:pl-10 flex items-center gap-5">
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover grayscale contrast-125 border border-black/15"
                />
                <div>
                  <h4 className="font-display text-lg md:text-xl text-[#0B0B0A] font-semibold tracking-tight">
                    {current.author}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-black/70 mt-0.5">
                    {current.role}
                  </p>
                  <p className="font-mono text-xs text-[#C5A880] uppercase tracking-wider mt-1">
                    {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Strip */}
        <div className="flex items-center justify-between mt-8 pt-4">
          <div className="font-mono text-xs tracking-widest text-black/50">
            0{activeIndex + 1} / 0{TESTIMONIALS.length}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black/80 hover:bg-[#0B0B0A] hover:text-white transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black/80 hover:bg-[#0B0B0A] hover:text-white transition-all duration-200"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
