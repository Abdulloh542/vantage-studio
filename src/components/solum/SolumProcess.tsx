import { motion, useReducedMotion } from 'framer-motion';

export function SolumProcess() {
  const shouldReduceMotion = useReducedMotion();

  const stages = [
    {
      number: '01',
      title: 'DISCOVERY',
      summary: 'Ingestion & Alignment',
      description: 'Audit of architectural drawings, BIM models, sun trajectories, and municipal site constraints. Establishing camera framing and material samples.',
    },
    {
      number: '02',
      title: 'DESIGN',
      summary: 'Geometry & Composition',
      description: 'Millimeter-precise 3D structural modeling, tactile stone/wood surfacing, biophilic vegetation calibration, and draft composition approvals.',
    },
    {
      number: '03',
      title: 'DEVELOPMENT',
      summary: 'AI Neural Lighting & Motion',
      description: 'Proprietary AI ray-tracing, daylight atmosphere, weather state simulation, and camera choreography for 4K cinematic film sequences.',
    },
    {
      number: '04',
      title: 'BUILD',
      summary: 'Master Delivery & Handoff',
      description: 'Final 16K image mastering, colour-graded broadcast video files, interactive Before/After sliders, and digital campaign launch suites.',
    },
  ];

  return (
    <section className="w-full bg-[#111111] text-[#F6F6F2] py-24 md:py-[120px] px-6 md:px-10 border-b border-white/12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-white/12">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F6F6F2] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#F6F6F2] font-medium">
                PROCESS
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.06em] text-white uppercase leading-[0.96]">
              PRODUCTION METHODOLOGY
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-xl font-light">
              A structured 4-phase delivery framework that ensures architectural fidelity, predictability, and uncompromising visual quality.
            </p>
          </div>
        </div>

        {/* 4-Column Discovery / Design / Development / Build Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/12 pt-16">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.number}
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 24,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 md:p-8 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <span className="font-mono text-xs sm:text-sm text-white/50 block mb-6 font-medium">
                  PHASE {stage.number}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-white uppercase mb-2">
                  {stage.title}
                </h3>

                <span className="font-mono text-xs sm:text-sm text-white/80 block uppercase tracking-wider mb-4 font-medium">
                  {stage.summary}
                </span>

                <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/12 mt-6">
                <span className="font-mono text-xs text-white/50 uppercase tracking-wider">
                  DELIVERY STAGE 0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
