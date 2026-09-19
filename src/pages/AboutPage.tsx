import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FinalCTASection } from '../components/home/FinalCTASection';

export function AboutPage() {
  const stats = [
    { value: '100+', label: 'Projects Delivered', desc: 'Across 14 countries in Europe, the Middle East, and Asia.' },
    { value: '$1B+', label: 'Real Estate Value Visualized', desc: 'Off-plan developments launched with our imagery.' },
    { value: '100%', label: 'In-House Production', desc: 'Direct artistic control from senior architects and 3D artists.' },
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
    <main className="w-full bg-[#090a0d] text-white pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Page Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>11 / Studio Manifesto</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
            Turning Architecture into Visual Experiences
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            We are an international creative production studio dedicated to the art and science of unbuilt architecture.
          </p>
        </div>

        {/* Hero Atelier Loft Image (Curved Axioma style) */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/15 bg-zinc-900 mb-20 md:mb-32">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            alt="Vantage Studio Interior Architecture Loft"
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-8 text-white text-xs font-mono tracking-wider uppercase">
            London Mayfair & Zurich Enge Ateliers
          </div>
        </div>

        {/* Studio Story & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 md:mb-32 border-t border-white/10 pt-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
              Studio Manifesto
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Architecture must be felt before it is understood.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            <p className="text-xl text-white font-normal leading-relaxed">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 border-t border-b border-white/10 mb-20 md:mb-32">
          {stats.map((st, idx) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 border border-white/10"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                {st.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-200/90 mb-1">
                {st.label}
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Creative Direction */}
        <div className="mb-20 md:mb-32">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
              Studio Direction
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Leadership & Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <div key={member.name} className="glass-card rounded-3xl p-6 border border-white/10 group shadow-xl">
                <div className="aspect-[3/4] rounded-2xl bg-zinc-800 overflow-hidden mb-5 border border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-amber-200/90 font-mono mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
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
