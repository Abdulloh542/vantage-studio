import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/faq';

export function SolumFAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white text-[#101010] py-24 md:py-[120px] px-6 md:px-10 border-b border-[#101010]/12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start">
          {/* Left Column: Title, Intro, and Inquire Link */}
          <div className="col-span-1 flex flex-col justify-between md:sticky md:top-28">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                  PROTOCOLS
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.05em] text-[#101010] uppercase leading-tight mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed mb-8 font-light">
                Clear operational answers regarding CAD inputs, production timelines, revision structures, and deliverable standards.
              </p>
            </div>

            <Link
              to="/contact"
              className="solum-btn self-start px-6 py-3.5 border border-[#101010] text-xs sm:text-sm font-mono uppercase tracking-wider text-[#101010] hover:bg-[#101010] hover:text-white transition-colors duration-180"
            >
              <span>DIRECT INQUIRY</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-4 h-4 inline-block" />
              </span>
            </Link>
          </div>

          {/* Right Columns: Numbered Accordion */}
          <div className="col-span-1 md:col-span-3 divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const formattedNumber = String(idx + 1).padStart(2, '0');

              return (
                <div key={item.id} className="transition-colors duration-200">
                  <button
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="w-full py-6 md:py-7 flex items-baseline justify-between text-left group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 md:gap-6 pr-4">
                      <span className="font-mono text-xs sm:text-sm text-[#757575] tabular-nums font-medium">
                        {formattedNumber}
                      </span>
                      <h3 className="font-sans text-lg sm:text-xl font-medium text-[#101010] tracking-[-0.02em] group-hover:opacity-75 transition-opacity">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-6 h-6 flex-shrink-0 border border-[#101010]/30 flex items-center justify-center transition-transform duration-250 ${
                        isOpen ? 'rotate-45 border-[#101010]' : 'group-hover:border-[#101010]'
                      }`}
                    >
                      <span className="text-sm leading-none mb-0.5">+</span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#F6F6F2] p-6 md:p-8 mb-6 border border-[#101010]/10">
                          <p className="font-sans text-sm sm:text-base text-[#101010]/85 leading-relaxed font-normal">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
