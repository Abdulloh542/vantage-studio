import { motion, useReducedMotion } from 'framer-motion';

export function SolumProcess() {
  const shouldReduceMotion = useReducedMotion();

  const stages = [
    {
      number: '01',
      title: 'DISCOVERY',
      summary: 'BIM Audit & Framing',
      description: 'Ingestion of architectural drawings, sun trajectories, and camera composition approvals.',
    },
    {
      number: '02',
      title: 'DESIGN',
      summary: 'Geometry & Materials',
      description: 'Millimeter 3D structural modeling, tactile stone/wood surfacing, and botanical calibration.',
    },
    {
      number: '03',
      title: 'DEVELOPMENT',
      summary: 'Neural Light & Motion',
      description: 'Proprietary AI ray-tracing, daylight atmosphere simulation, and 4K film choreography.',
    },
    {
      number: '04',
      title: 'HANDOFF',
      summary: 'Master Delivery',
      description: 'Final 16K image mastering, colour-graded broadcast video files, and campaign launch suites.',
    },
  ];

  return (
    <section className="w-full bg-[#111111] text-[#F6F6F2] py-20 md:py-28 px-6 md:px-10 border-b border-white/12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/12">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F6F6F2] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#F6F6F2] font-medium">
                05 // PROCESS
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-3">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.06em] text-white uppercase leading-[0.96]">
              METHODOLOGY.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-xl font-light">
              A structured 4-phase delivery framework guaranteeing architectural fidelity and predictable delivery.
            </p>
          </div>
        </div>

        {/* 4-Column Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/12 pt-12">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.number}
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 md:p-8 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <span className="font-mono text-xs text-white/40 block mb-4 font-medium">
                  PHASE {stage.number}
                </span>

                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white uppercase mb-1.5">
                  {stage.title}
                </h3>

                <span className="font-mono text-xs text-white/70 block uppercase tracking-wider mb-3 font-medium">
                  {stage.summary}
                </span>

                <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-5">
                <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider">
                  STAGE 0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
