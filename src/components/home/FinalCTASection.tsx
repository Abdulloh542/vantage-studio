import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTASection() {
  return (
    <section className="bg-[#050505] text-[#FAF9F6] py-28 md:py-40 relative overflow-hidden border-t border-white/10">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-6"
          >
            11 / INITIATE ENGAGEMENT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.98] text-[#FAF9F6] mb-8"
          >
            READY TO VISUALIZE <br />
            <span className="italic font-serif text-white/90">THE UNBUILT?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg text-white/60 font-sans max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Whether embarking on an international architectural competition, luxury residential sales launch, or institutional masterplan, our studio delivers uncompromising imagery that commands capital.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FAF9F6] text-[#0B0B0A] text-xs font-mono font-medium tracking-[0.2em] uppercase hover:bg-[#C5A880] hover:text-black transition-all duration-300"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/20 text-[#FAF9F6] text-xs font-mono font-medium tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <span>VIEW WORK</span>
            </Link>
          </motion.div>

          {/* Direct Atelier Details Bar */}
          <div className="pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" /> DIRECT COMMISSIONS
              </span>
              <a
                href="mailto:commissions@vantagestudio.com"
                className="text-xs md:text-sm text-white/90 hover:text-[#C5A880] transition-colors"
              >
                commissions@vantagestudio.com
              </a>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" /> STUDIO DESK
              </span>
              <a
                href="tel:+442079460912"
                className="text-xs md:text-sm text-white/90 hover:text-[#C5A880] transition-colors"
              >
                +44 20 7946 0912
              </a>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#C5A880]" /> RESPONSE SLA
              </span>
              <span className="text-xs md:text-sm text-white/90">
                Within 24 Hours
              </span>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                <Shield className="w-3.5 h-3.5 text-[#C5A880]" /> CONFIDENTIALITY
              </span>
              <span className="text-xs md:text-sm text-white/90">
                Mutual NDA Standard
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
