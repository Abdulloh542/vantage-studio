import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export function SolumClientStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white text-[#101010] py-24 md:py-[120px] px-6 md:px-10 border-b border-[#101010]/12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header: 4-Column Editorial Statement & Arrow Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-[#101010]/12 items-end">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                CLIENT VOICES
              </span>
            </div>
            <span className="font-mono text-xs text-[#757575] block">
              TESTIMONIALS &bull; 04 ENTRIES
            </span>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.05em] text-[#101010] leading-tight uppercase">
              "WE COMMAND CAPITAL AND SECURE ANCHORS BEFORE GROUNDBREAKING."
            </h2>
          </div>

          {/* Desktop Arrow Buttons */}
          <div className="col-span-1 flex items-center justify-start md:justify-end gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Testimonial"
              className="w-11 h-11 border border-[#101010]/20 hover:border-[#101010] flex items-center justify-center text-[#101010] transition-colors duration-180"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next Testimonial"
              className="w-11 h-11 border border-[#101010]/20 hover:border-[#101010] flex items-center justify-center text-[#101010] transition-colors duration-180"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontally Draggable 4-Card Bordered Testimonial Rail */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pt-16 pb-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="min-w-[320px] sm:min-w-[400px] max-w-[420px] flex-shrink-0 bg-white border border-[#101010]/12 p-8 flex flex-col justify-between snap-start"
            >
              <div>
                {/* Category & Subtle Stars */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#101010]/12">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                    {t.project}
                  </span>
                  <div className="flex items-center gap-1 text-[#101010]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current stroke-none opacity-80" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-sans text-sm sm:text-base text-[#101010] leading-relaxed mb-8 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Compact Portrait, Name & Role */}
              <div className="pt-6 border-t border-[#101010]/12 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  loading="lazy"
                  className="w-10 h-10 object-cover filter grayscale contrast-125 border border-[#101010]/12"
                />
                <div>
                  <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[#101010]">
                    {t.author}
                  </div>
                  <div className="font-mono text-[11px] text-[#757575]">
                    {t.role} &bull; {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
