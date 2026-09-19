import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { WordReveal } from '../common/WordReveal';

export function SolumClientStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white text-[#101010] py-24 md:py-[120px] px-6 md:px-10 border-b border-[#101010]/12 select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Header: 4-Column Editorial Statement & Arrow Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-[#101010]/12 items-end">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                CLIENT VOICES
              </span>
            </div>
            <span className="font-mono text-xs sm:text-sm text-[#757575] block">
              TESTIMONIALS &bull; 04 ENTRIES
            </span>
          </div>

          {/* Statement with Word-by-Word Editorial Reveal */}
          <div className="col-span-1 md:col-span-2">
            <WordReveal
              text='"WE COMMAND CAPITAL AND SECURE ANCHORS BEFORE GROUNDBREAKING."'
              as="h2"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.05em] text-[#101010] leading-tight uppercase"
              staggerMs={30}
            />
          </div>

          {/* Desktop Arrow Buttons */}
          <div className="col-span-1 flex items-center justify-start md:justify-end gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Testimonial"
              className="w-12 h-12 border border-[#101010]/20 hover:border-[#101010] flex items-center justify-center text-[#101010] transition-colors duration-180 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next Testimonial"
              className="w-12 h-12 border border-[#101010]/20 hover:border-[#101010] flex items-center justify-center text-[#101010] transition-colors duration-180 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontally Draggable 4-Card Bordered Testimonial Rail: Fades in over 1.2s after 0.1s delay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pt-16 pb-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="min-w-[340px] sm:min-w-[420px] max-w-[460px] flex-shrink-0 bg-white border border-[#101010]/12 p-8 md:p-10 flex flex-col justify-between snap-start"
            >
              <div>
                {/* Category & Subtle Stars */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#101010]/12">
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                    {t.project}
                  </span>
                  <div className="flex items-center gap-1 text-[#101010]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none opacity-80" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-sans text-base sm:text-lg text-[#101010] leading-relaxed mb-8 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Compact Portrait, Name & Role */}
              <div className="pt-6 border-t border-[#101010]/12 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  loading="lazy"
                  className="w-12 h-12 object-cover filter grayscale contrast-125 border border-[#101010]/12"
                />
                <div>
                  <div className="font-sans text-sm sm:text-base font-semibold uppercase tracking-wider text-[#101010]">
                    {t.author}
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-[#757575]">
                    {t.role} &bull; {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
