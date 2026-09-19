import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FramerSectionHeader } from '../common/FramerReveal';
import { FAQ_ITEMS } from '../../data/faq';

export function FramerFAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#F4F2EE] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Signature Framer Section Header */}
        <FramerSectionHeader
          eyebrow="FREQUENTLY ASKED //"
          title="INQUIRIES"
          subtag="*(KNOW BEFORE YOU START)"
          theme="light"
        />

        {/* Clean Accordion List */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="group">
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-8 flex items-start md:items-center justify-between gap-6 text-left"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span className="font-mono text-xs text-black/40">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-[#0B0B0A] font-normal tracking-tight group-hover:text-black transition-colors">
                      {item.question}
                    </h3>
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
                      <div className="pb-8 pl-12 md:pl-16 pr-4 md:pr-12 text-sm md:text-base text-black/70 leading-relaxed max-w-4xl font-sans">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
