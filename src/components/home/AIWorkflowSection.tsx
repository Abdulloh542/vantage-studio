import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AIWorkflowSection() {
  const steps = [
    { code: '01', label: 'CAD / Plans', detail: '2D drawings, Revit BIM or basic concept renders' },
    { code: '02', label: '3D Modeling', detail: 'Precision spatial geometry and environmental contours' },
    { code: '03', label: 'Visualization', detail: 'Physical light transport, travertine, bronze & glass shaders' },
    { code: '04', label: 'AI Enhancement', detail: 'Micro-atmosphere, realistic foliage movement, moisture' },
    { code: '05', label: 'AI Video', detail: 'Smooth generative camera trajectories & cinematic walkthroughs' },
    { code: '06', label: 'Editing & Grade', detail: 'Cinematic color grading, foley audio & custom musical score' },
    { code: '07', label: 'Final Film', detail: 'Broadcast-ready 4K master launch campaign' },
  ];

  return (
    <section className="bg-[#121214] text-white py-24 md:py-36 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 mb-4 border border-white/15">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>Technology + Craft</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.08]">
              We combine architectural discipline <br />
              <span className="font-semibold text-zinc-200">with generative AI speed.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
              We combine traditional 3D visualization with modern generative AI workflows to produce architectural marketing content faster while strictly maintaining design accuracy.
            </p>
            <div className="p-4 bg-white/5 border-l-2 border-emerald-400 rounded-r-xl text-xs text-zinc-300 leading-relaxed font-light">
              <span className="text-white font-medium block mb-1">Our Core Value Proposition:</span>
              “Provide us with just 2 preliminary renders and a floor plan — our atelier delivers a complete, broadcast-quality marketing film.”
            </div>
          </div>
        </div>

        {/* The 7-Step Pipeline Diagram */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
          {steps.map((st, idx) => (
            <motion.div
              key={st.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-zinc-900/70 border border-white/10 flex flex-col justify-between group hover:border-white/40 hover:-translate-y-1 transition-all"
            >
              <div>
                <span className="text-[10px] font-mono text-zinc-500 block mb-3">
                  STAGE {st.code}
                </span>
                <h4 className="font-display text-sm font-semibold text-white mb-2 tracking-tight">
                  {st.label}
                </h4>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                  {st.detail}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-end text-zinc-600 group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quality Assurances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-xs">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-1">100% Geometric Accuracy</span>
              <p className="text-zinc-400 font-light">Strict spatial anchors ensure structural columns, ceiling heights, and mullions stay true to BIM.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-1">60% Faster Turnaround</span>
              <p className="text-zinc-400 font-light">Hybrid neural rendering cuts production times from months to agile 2–3 week launch sprints.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-1">Turnkey Commercial Readiness</span>
              <p className="text-zinc-400 font-light">Delivered in 4K ProRes master, 9:16 social reels, and 8K stills ready for immediate sales campaigns.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-zinc-300 transition-colors pb-1 border-b border-white"
          >
            <span>Learn More About Our Production Process</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
