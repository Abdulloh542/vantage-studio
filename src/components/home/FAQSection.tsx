import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from '../../data/faq';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(FAQ_ITEMS.map((item) => item.category)))];

  const filteredItems =
    activeCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 md:py-36 bg-[#FAF9F6] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/10 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              10 / PROJECT PROTOCOLS
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#0B0B0A]">
              FREQUENTLY ASKED <br className="hidden md:block" />
              QUESTIONS
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-black/70 leading-relaxed font-sans">
            Transparent operational protocols designed to give developers, marketing heads, and architects complete clarity before contract initiation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0B0B0A] text-white'
                  : 'bg-black/5 text-black/70 hover:bg-black/10 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {filteredItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="group transition-colors">
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-7 md:py-8 flex items-start md:items-center justify-between gap-6 text-left"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span className="font-mono text-xs text-black/40 pt-1 md:pt-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg md:text-2xl text-[#0B0B0A] font-normal tracking-tight group-hover:text-[#C5A880] transition-colors">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-black/70 flex-shrink-0 group-hover:border-black group-hover:text-black transition-colors">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 md:pl-16 pr-4 md:pr-12 text-sm md:text-base text-black/70 leading-relaxed max-w-3xl">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-16 p-8 md:p-12 bg-[#F4F2EE] border border-black/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0B0B0A] text-white flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-display text-lg font-medium text-[#0B0B0A]">
                Have a specialized BIM schema or rapid timeline?
              </h4>
              <p className="text-xs md:text-sm text-black/60 font-sans mt-0.5">
                Our lead technical directors reply within 24 hours with feasibility and quote.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0B0B0A] text-white text-xs font-mono uppercase tracking-[0.2em] hover:bg-[#C5A880] hover:text-black transition-all duration-300"
          >
            <span>DISCUSS REQUIREMENTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
