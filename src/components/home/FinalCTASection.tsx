import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTASection() {
  return (
    <section className="bg-[#08090b] text-white py-28 md:py-40 relative overflow-hidden border-t border-white/10">
      {/* Background Watermark (Axioma / Kontra inspired) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-black text-[22vw] tracking-tighter text-white/[0.04] uppercase whitespace-nowrap leading-none">
          VANTAGE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] uppercase tracking-widest text-zinc-300 font-mono inline-block mb-8"
          >
            Initiate Engagement
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.02]"
          >
            Make your project <br />
            <span className="font-normal italic text-amber-200/90 font-serif">
              impossible to overlook.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg text-zinc-300 font-light max-w-xl mx-auto leading-relaxed mb-10"
          >
            Whether you have finalized architectural models or early sketch concepts, we provide the visual mastery required to engage buyers, investors, and competition juries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              <span>Start a Project Brief</span>
              <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowUpRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              <span>Browse Selected Work</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
