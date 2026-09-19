import { motion } from 'framer-motion';
import { Upload, Compass, Film, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HowWeWorkSection() {
  const steps = [
    {
      number: '01',
      title: 'Send your project',
      subtitle: 'Raw inputs accepted',
      description: 'Architectural drawings, CAD floor plans, Revit models, or even 2 preliminary concept renders. We work directly with what you have.',
      icon: Upload,
    },
    {
      number: '02',
      title: 'Visual Direction',
      subtitle: 'Atmospheric curation',
      description: 'We propose camera compositions, lighting studies (golden hour, misty dawn, dusk), tactile material sampling, and cinematic storyboards.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'AI Motion Synthesis',
      subtitle: '3D rigor meets neural speed',
      description: 'We build the 3D environment, apply physically accurate PBR shaders, synthesize micro-dynamics, and choreograph virtual camera sweeps.',
      icon: Film,
    },
    {
      number: '04',
      title: 'Final Master & Launch',
      subtitle: 'Turnkey sales readiness',
      description: '4K master film, 8K architectural stills, orchestral audio grading, and 9:16 social cutdowns ready for immediate buyer acquisition.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="bg-[#0c0d11] text-white py-24 md:py-36 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>07 / Collaboration</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-4">
            How It Works
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
            A frictionless 4-step collaboration model designed for busy developers, architects, and property funds.
          </p>
        </div>

        {/* 4-Column Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-[28px] sm:rounded-[32px] p-7 border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-bold text-white/30 group-hover:text-white transition-colors">
                      {st.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight text-white mb-1 group-hover:text-amber-200 transition-colors">
                    {st.title}
                  </h3>

                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-4 font-mono">
                    {st.subtitle}
                  </span>

                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-[10px] text-zinc-500 font-mono uppercase">
                  Step {st.number} of 04
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 rounded-[28px] sm:rounded-[32px] glass-card border border-white/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="font-display text-lg font-bold text-white">
              Have architectural files ready?
            </h4>
            <p className="text-xs text-zinc-300 font-light mt-1">
              Send us your CAD, Revit or preliminary concept renders for a free 24-hour scope review.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl whitespace-nowrap"
          >
            Upload Project Brief
          </Link>
        </div>
      </div>
    </section>
  );
}
