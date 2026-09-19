import { motion } from 'framer-motion';
import { FinalCTASection } from '../components/home/FinalCTASection';

export function AboutPage() {
  const stats = [
    { value: '240+', label: 'Projects Delivered', desc: 'Across 16 countries in Europe, the Middle East, and Asia.' },
    { value: '$1.8B+', label: 'Real Estate Value Visualized', desc: 'Off-plan developments successfully launched.' },
    { value: '4x', label: 'Faster AI Turnaround', desc: 'Proprietary neural rendering cutting animation lead times.' },
    { value: '24h', label: 'Brief Turnaround', desc: 'Rapid scoping and itemized timeline generation.' },
  ];

  const leadership = [
    {
      name: 'Alexander Lindemann',
      role: 'Creative Director & Co-Founder',
      bio: 'Trained at ETH Zurich with 14 years directing high-impact architectural visual campaigns across London and Switzerland.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Elena Rostova',
      role: 'Director of 3D & Computational Motion',
      bio: 'Specialist in physically based light transport, procedural environment synthesis, and generative neural camera motion.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Julian Vance',
      role: 'Head of Real Estate & Client Strategy',
      bio: 'Former luxury developer marketing director advising institutional real estate funds on pre-sales launch strategies.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <main className="w-full bg-[#f7f6f2] text-[#121214] pt-32 md:pt-44">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Page Header */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold block mb-3">
            About Vantage
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-light tracking-tight text-black leading-[1.04] mb-6">
            Turning architecture into visual experiences.
          </h1>
          <p className="text-zinc-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            We are an international creative production studio dedicated to the art and science of unbuilt architecture.
          </p>
        </div>

        {/* Hero Atelier Loft Image */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] bg-zinc-900 overflow-hidden border border-black/10 mb-24 md:mb-36">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            alt="Vantage Studio Interior Architecture Loft"
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute bottom-6 left-6 text-white text-xs font-mono tracking-widest uppercase">
            London Mayfair &amp; Zurich Enge Ateliers
          </div>
        </div>

        {/* Studio Story & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 md:mb-36 border-t border-black/10 pt-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-3">
              Studio Manifesto
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-black">
              Architecture must be felt before it is understood.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm text-zinc-700 font-light leading-relaxed">
            <p className="text-xl text-black font-normal leading-relaxed">
              We are an architectural visualization studio specializing in photorealistic imagery and AI-powered cinematic real estate films.
            </p>
            <p>
              With more than 6 years of experience in architectural visualization, we combine 3D production, generative AI and cinematic storytelling to transform architectural concepts into compelling visual experiences.
            </p>
            <p>
              Our team consists of registered architects, computational lighting engineers, and cinematic storytellers. When we review a drawing, we do not merely see polylines; we evaluate how afternoon shadows fall across fluted travertine, how coastal fog filters morning sun, and how human life will occupy the space.
            </p>
            <p>
              While we harness state-of-the-art neural simulation and AI-assisted motion pipelines to accelerate production, technology never replaces our artistic eye. AI is our mechanical lever; architectural discernment is our compass.
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-b border-black/10 mb-24 md:mb-36">
          {stats.map((st, idx) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-l border-black/15 pl-6"
            >
              <div className="text-4xl sm:text-5xl font-light text-black tracking-tight mb-2">
                {st.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-black mb-1">
                {st.label}
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Creative Direction */}
        <div className="mb-24 md:mb-36">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              Studio Direction
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-black">
              Leadership & Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leadership.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] bg-zinc-200 overflow-hidden mb-6 border border-black/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-medium text-black tracking-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-zinc-600 font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Final CTA */}
      <FinalCTASection />
    </main>
  );
}
