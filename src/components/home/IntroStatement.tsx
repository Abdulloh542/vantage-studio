import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Cpu, Sparkles, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IntroStatement() {
  const steps = [
    {
      number: '01',
      title: 'BLUEPRINTS & INGESTION',
      icon: Layers,
      description: 'You share CAD files, BIM/Revit models, 2D floor plans, or raw hand sketches. We analyze sightlines, spatial volumes, and architectural intent.',
      badge: 'CAD / BIM / SKETCH',
    },
    {
      number: '02',
      title: '3D SPATIAL CRAFT',
      icon: Cpu,
      description: 'We construct millimeter-precise 3D geometry, authentic tactile materials, biophilic landscaping, and contextual neighborhood environments.',
      badge: 'PRECISION GEOMETRY',
    },
    {
      number: '03',
      title: 'AI NEURAL LIGHTING',
      icon: Sparkles,
      description: 'Our proprietary AI workflows accelerate optical ray-tracing, authentic natural daylight cycles, weather moods, and photorealistic depth.',
      badge: 'AI LIGHT SIMULATION',
    },
    {
      number: '04',
      title: '4K FILMS & DELIVERY',
      icon: Film,
      description: 'We produce ultra-high-resolution 16K stills, cinematic 4K video walkthroughs, and turnkey marketing packages ready for investor launch.',
      badge: '4K/8K RENDER & FILM',
    },
  ];

  const metrics = [
    { number: '40+', label: 'PROJECTS DELIVERED', detail: 'Completed for international ateliers and developers.' },
    { number: '14', label: 'GLOBAL COUNTRIES', detail: 'Across UK, Switzerland, UAE, US and Central Asia.' },
    { number: '6+', label: 'YEARS PRACTICE', detail: 'Refining architectural CGI and neural motion physics.' },
    { number: '100%', label: 'ON-TIME SLA', detail: 'Strict delivery schedules guaranteed with mutual NDA.' },
  ];

  return (
    <section id="about-methodology" className="bg-[#F4F2EE] text-[#11110F] py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Metadata & Header with Side-in Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-[#11110F]/15">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77736C] font-mono font-semibold block mb-4">
              02 / ABOUT US &amp; METHODOLOGY
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.98] text-[#11110F]">
              WE BRING UNBUILT <br />
              <span className="font-serif italic font-normal text-[#11110F]">SPACES TO REALITY.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full pt-2"
          >
            <p className="text-lg sm:text-xl font-normal leading-relaxed text-[#11110F] mb-4">
              We are a next-generation architectural visualization atelier combining precision 3D modeling with proprietary AI workflows.
            </p>
            <p className="text-sm sm:text-base text-[#77736C] leading-relaxed font-light mb-6">
              Whether you have CAD drawings, Revit files, or raw sketches, we turn them into photorealistic CGI and cinematic films that help clients understand, imagine and invest in the project.
            </p>
            <div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#11110F] hover:text-[#77736C] transition-colors pb-1 border-b border-[#11110F]"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 4-Stage "HOW WE WORK" Interactive Step Grid with Varied Side Animations */}
        <div className="py-16 border-b border-[#11110F]/15">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-10"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#77736C]">
              HOW WE WORK // 4-STAGE PIPELINE
            </span>
            <span className="text-xs uppercase tracking-widest font-mono text-[#11110F]">
              CAD TO 4K CINEMA
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/80 p-8 border border-[#11110F]/10 hover:border-[#11110F] transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#77736C] group-hover:text-[#11110F] transition-colors font-bold">
                        {step.number}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#F4F2EE] group-hover:bg-[#11110F] text-[#11110F] group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-normal tracking-tight text-[#11110F] mb-3 group-hover:text-[#11110F]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#77736C] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#11110F]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#11110F] bg-[#F4F2EE] px-2.5 py-1">
                      {step.badge}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4 Studio Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-l border-[#11110F]/20 pl-6"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#11110F] mb-1">
                {m.number}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#11110F] font-mono font-medium mb-1">
                {m.label}
              </div>
              <div className="text-xs text-[#77736C] font-light leading-relaxed">
                {m.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
