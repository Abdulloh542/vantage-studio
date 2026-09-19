import { FramerSectionHeader, FramerCard } from '../common/FramerReveal';

const STEPS = [
  {
    step: '//Step 01',
    title: 'Discovery & Consultation',
    desc: 'Understanding your architectural vision, BIM geometry, lifestyle, & marketing goals to build the perfect foundation.',
    deliverable: 'CAD/Revit audit & lighting moodboard',
  },
  {
    step: '//Step 02',
    title: 'White-Model & Camera Design',
    desc: 'Creating tailored spatial massing, focal lengths, & camera trajectories for client sign-off before detailing.',
    deliverable: 'Clay viewport proofs & angle selects',
  },
  {
    step: '//Step 03',
    title: 'Visualization & Light Physics',
    desc: 'Calibrating physical daylight scatter, material roughness, & landscape foliage to review spatial details accurately.',
    deliverable: 'High-res color proofs & material check',
  },
  {
    step: '//Step 04',
    title: 'Execution & Master Handover',
    desc: 'Overseeing final 8K render passes, 4K cinema color grading, and custom foley sound design for a flawless launch.',
    deliverable: 'ProRes 422 HQ masters & 16-bit TIFFs',
  },
];

export function FramerProcessSection() {
  return (
    <section id="process" className="bg-[#F4F2EE] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Signature Framer Section Header */}
        <FramerSectionHeader
          eyebrow="HOW WE WORK //"
          title="PROCESS"
          subtag="*(BEHIND THE DESIGN)"
          theme="light"
        />

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((st, idx) => (
            <FramerCard
              key={st.step}
              delay={idx * 0.12}
              className="group bg-[#FAF9F6] border border-black/10 p-8 flex flex-col justify-between hover:border-black/40 hover:-translate-y-1 transition-all duration-300 min-h-[340px]"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-black/50 font-semibold">
                    {st.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-black/20 group-hover:bg-black transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-normal text-[#0B0B0A] tracking-tight mb-4 group-hover:text-black">
                  {st.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-black/65 leading-relaxed mb-6">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10">
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/40 block mb-1">
                  DELIVERABLE:
                </span>
                <span className="font-mono text-xs text-black/80 font-medium">
                  {st.deliverable}
                </span>
              </div>
            </FramerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
