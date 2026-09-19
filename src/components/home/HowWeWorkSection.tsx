import { motion } from 'framer-motion';
import { Upload, Compass, Film, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HowWeWorkSection() {
  const steps = [
    {
      number: '01',
      title: 'Send your project',
      subtitle: 'What you provide to get started',
      description: 'Architectural drawings, CAD floor plans, Revit models, site photos, or even 2 preliminary concept renders. We accept all standard formats.',
      icon: Upload,
    },
    {
      number: '02',
      title: 'We build the visual direction',
      subtitle: 'Atmospheric curation & framing',
      description: 'We propose camera compositions, lighting studies (golden hour, misty dawn, dusk), material sampling, and a cinematic storyboard.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Production & AI Synthesis',
      subtitle: 'Precision 3D craft meets neural motion',
      description: 'We build the environment, apply physically accurate shaders, synthesize organic micro-dynamics, and choreograph virtual camera sweeps.',
      icon: Film,
    },
    {
      number: '04',
      title: 'Final Delivery & Launch',
      subtitle: 'Ready to drive pre-sales and attention',
      description: 'Edited high-resolution film and 8K master stills, complete with orchestral sound design and 9:16 social cutdowns ready for immediate marketing.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="bg-[#f7f6f2] text-[#121214] py-24 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
            Client Collaboration
          </span>
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-black leading-[1.05] mb-4">
            How it works.
          </h2>
          <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed">
            A frictionless 4-step collaboration model designed for busy developers, architects, and sales agencies.
          </p>
        </div>

        {/* 4-Column Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 border border-black/10 flex flex-col justify-between hover:border-black transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-light text-zinc-300 font-mono">
                      {st.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-black">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight text-black mb-1">
                    {st.title}
                  </h3>

                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider block mb-4 font-mono">
                    {st.subtitle}
                  </span>

                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 text-[10px] text-zinc-400 font-mono uppercase">
                  Step {st.number} of 04
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-light text-white">
              Have architectural files ready?
            </h4>
            <p className="text-xs text-zinc-400 font-light mt-0.5">
              Send us your Revit, CAD or concept renders for a free 24-hour scope review.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            Upload Project Brief
          </Link>
        </div>
      </div>
    </section>
  );
}
