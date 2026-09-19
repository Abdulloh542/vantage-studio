import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTASection() {
  return (
    <section className="bg-black text-white py-28 md:py-40 relative overflow-hidden border-t border-white/10">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-zinc-400 font-medium block mb-6"
          >
            Initiate Collaboration
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.02] text-white mb-8"
          >
            Ready to bring your vision <br />
            <span className="font-semibold text-zinc-200">to life?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mx-auto leading-relaxed mb-12"
          >
            Whether you have finalized architectural models or early sketch concepts, we provide the visual mastery required to engage buyers, investors, and competition juries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 hover:shadow-2xl transition-all duration-200 active:scale-95"
            >
              <span>Start a Project Brief</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/20 transition-all duration-200"
            >
              <span>Browse Selected Work</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
