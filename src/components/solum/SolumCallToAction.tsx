import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Clock, ShieldCheck, Globe } from 'lucide-react';

export function SolumCallToAction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 sm:py-32 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-white/10 select-none overflow-hidden">
      {/* Ambient background architectural glow */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#2563EB]/15 via-transparent to-transparent rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-[1200px] mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Section Marker */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
            05 // Initiate Collaboration
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white max-w-3xl leading-[1.08]"
        >
          Have an unbuilt vision?
          <span className="block text-neutral-400 font-light mt-2 sm:mt-3">
            Let's bring it to reality.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-sm sm:text-base md:text-lg text-neutral-400 font-light max-w-2xl leading-relaxed mt-6 mb-10"
        >
          We partner with progressive architects, masterplanners, and prestige developers across the globe to produce competition-winning CGI, commercial films, and marketing imagery.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200 group shadow-[0_4px_24px_rgba(255,255,255,0.12)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href="mailto:hello@vantagestudio.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-white/60 hover:bg-white/5 transition-all duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-400" />
            <span>hello@vantagestudio.com</span>
          </a>
        </motion.div>

        {/* Reassurance Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/10 w-full max-w-2xl flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Response within 24h</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>NDA & IP Protected</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>London & Worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
