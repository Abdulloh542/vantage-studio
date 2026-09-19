import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StudioPreview() {
  return (
    <section className="bg-[#0c0d11] text-white py-24 md:py-36 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>11 / Atelier Story</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Turning Architecture <br />
              <span className="font-normal italic text-amber-200/90 font-serif">
                into visual experiences.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-white text-base sm:text-lg">
              We are an architectural visualization studio specializing in photorealistic imagery and AI-powered cinematic real estate films.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              With more than 6 years of experience in architectural visualization, we combine 3D production, generative AI and cinematic storytelling to transform architectural concepts into compelling visual experiences.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-semibold uppercase tracking-wider text-white border border-white/15 transition-all shadow-md"
              >
                <span>Read Studio Philosophy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Atmosphere Curved Frame (Axioma / Kontra Curved Container) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[16/9] md:aspect-[21/9] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/15 bg-zinc-900"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            alt="Vantage Studio Architecture Loft Atelier"
            loading="lazy"
            className="w-full h-full object-cover filter brightness-90 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white pointer-events-none">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block mb-1">
                London & Zurich Creative Ateliers
              </span>
              <span className="font-display text-base sm:text-lg font-bold">
                Where architectural drawing meets cinematic storytelling.
              </span>
            </div>
            <span className="text-xs font-mono text-amber-200">
              EST. 2019
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
