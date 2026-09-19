import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AIWorkflowSection() {
  const steps = [
    { code: '01', label: 'CAD / Plans', detail: 'Revit BIM or 2 preliminary client concept renders' },
    { code: '02', label: '3D Geometry', detail: 'Millimeter spatial geometry and site contours' },
    { code: '03', label: 'Visualization', detail: 'Physical light transport, travertine, bronze & glass shaders' },
    { code: '04', label: 'AI Synthesis', detail: 'Micro-atmosphere, foliage movement, dawn moisture' },
    { code: '05', label: 'AI Video', detail: 'Fluid generative camera sweeps & walkthroughs' },
    { code: '06', label: 'Editing & Grade', detail: 'Film color grading & orchestral sound design' },
    { code: '07', label: 'Final Film', detail: 'Broadcast-ready 4K master launch campaign' },
  ];

  return (
    <section className="bg-[#090a0d] text-white py-24 md:py-36 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>06 / Technology + Craft</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Architectural Rigor <br />
              <span className="font-normal italic text-amber-200/90 font-serif">
                meets Generative AI Velocity.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-zinc-300 text-sm font-light leading-relaxed mb-4">
              We combine traditional architectural visualization with generative AI workflows to produce films faster while strictly preserving BIM geometric accuracy.
            </p>
            <div className="p-4 rounded-2xl glass-card border-l-4 border-l-emerald-400 text-xs text-zinc-300 leading-relaxed font-light">
              <span className="text-white font-medium block mb-0.5">The Studio Advantage:</span>
              “Supply just 2 preliminary renders and a floor plan — our atelier delivers a complete, broadcast-quality marketing film.”
            </div>
          </div>
        </div>

        {/* The 7-Step Pipeline Diagram */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4 mb-14">
          {steps.map((st, idx) => (
            <motion.div
              key={st.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-5 rounded-2xl glass-card border border-white/10 flex flex-col justify-between group hover:border-emerald-400/40 hover:bg-white/[0.08] transition-all shadow-lg"
            >
              <div>
                <span className="text-[10px] font-mono text-zinc-500 block mb-3">
                  STAGE {st.code}
                </span>
                <h4 className="font-display text-sm font-bold text-white mb-2 tracking-tight">
                  {st.label}
                </h4>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                  {st.detail}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-end text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quality Assurances (3 Rounded Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-xs">
          <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-display font-bold text-white block mb-1">100% Geometric Truth</span>
              <p className="text-zinc-400 font-light">Strict spatial anchors guarantee structural columns, ceiling heights, and mullions stay true to BIM.</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-display font-bold text-white block mb-1">60% Faster Delivery</span>
              <p className="text-zinc-400 font-light">Hybrid neural rendering cuts production times from months to agile 2–3 week launch sprints.</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-display font-bold text-white block mb-1">Turnkey Launch Formats</span>
              <p className="text-zinc-400 font-light">Delivered in 4K ProRes master, 9:16 social reels, and 8K stills ready for immediate sales campaigns.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-all shadow-xl"
          >
            <span>Explore Complete Production Process</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
