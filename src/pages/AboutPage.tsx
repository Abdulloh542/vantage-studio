export function AboutPage() {
  const stats = [
    { value: '40+', label: 'PROJECTS DELIVERED', note: 'For international ateliers & real estate funds' },
    { value: '$1.8B+', label: 'DEVELOPMENT GDV', note: 'Visualized across prime residential & commercial schemes' },
    { value: '14', label: 'GLOBAL COUNTRIES', note: 'Commissions across UK, Switzerland, UAE, US & Central Asia' },
    { value: '24h', label: 'BRIEF SPECIFICATION', note: 'Rapid scoping and itemized timeline generation' },
  ];

  const leadership = [
    {
      name: 'Alexander Lindemann',
      role: 'Creative Director & Co-Founder',
      bio: 'Trained at ETH Zurich with 14 years directing architectural visual campaigns across London and Switzerland.',
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

  const history = [
    { year: '2020', title: 'Atelier Inception', detail: 'Founded in London to bridge CAD architectural schedules and cinematic marketing films.' },
    { year: '2022', title: 'European Expansion', detail: 'Zurich computational hub launched to process large-scale institutional BIM schedules.' },
    { year: '2024', title: 'Neural Motion Pipeline', detail: 'Proprietary AI ray-tracing integration cutting animation turnaround times by 60%.' },
    { year: '2026', title: 'Central Asia & Gulf Studio', detail: 'Delivery of major luxury resort masterplans and commercial high-rise campaigns.' },
  ];

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* White Grid Hero with Oversized Studio Title Left/Center and Mission Summary in Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-20 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                STUDIO MONOGRAPH
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
              TURNING ARCHITECTURE INTO VISUAL REALITY.
            </h1>
          </div>

          <div className="col-span-1">
            <span className="font-mono text-xs text-[#757575] block mb-2">
              MISSION SUMMARY
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
              We operate as an international atelier combining registered architectural discipline with computational rendering and AI velocity.
            </p>
          </div>
        </div>

        {/* Full-Bleed Grayscale/Muted Studio Media from Real Assets */}
        <div className="py-16 md:py-24 border-b border-[#101010]/12">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
              alt="Vantage Studio Interior Architecture Loft"
              loading="lazy"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white/80 uppercase">
              <span>LONDON MAYFAIR // 18 BERKELEY SQ</span>
              <span>EST. 2020</span>
            </div>
          </div>
        </div>

        {/* Metrics Row with Tabular Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#101010]/12 py-16 border-b border-[#101010]/12">
          {stats.map((st) => (
            <div key={st.label} className="p-6 md:p-8">
              <div className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.06em] text-[#101010] tabular-nums mb-2">
                {st.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#101010] mb-1">
                {st.label}
              </div>
              <div className="font-sans text-xs text-[#757575]">
                {st.note}
              </div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-b border-[#101010]/12 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                PHILOSOPHY
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-6 max-w-3xl text-sm sm:text-base text-[#101010]/85 font-light leading-relaxed">
            <p className="font-display text-2xl sm:text-3xl font-normal tracking-[-0.03em] leading-snug text-[#101010]">
              Architecture must be felt before it is understood. We believe the role of visualization is not merely computer representation, but emotional transmission.
            </p>
            <p className="text-xs sm:text-sm text-[#757575] leading-relaxed">
              When reviewing a client’s CAD drawings or structural schedules, we do not simply extrude lines. We investigate how late-afternoon sunlight grazes brushed travertine, how maritime air scatters dawn light over coastal glass, and how spatial scale creates human reverence.
            </p>
            <p className="text-xs sm:text-sm text-[#757575] leading-relaxed">
              While our studio pioneers neural rendering and AI-assisted motion to accelerate production schedules, computation remains our instrument, while architectural sensitivity remains our compass.
            </p>
          </div>
        </div>

        {/* History / Award Timeline Rules */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-b border-[#101010]/12 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                CHRONOLOGY
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {history.map((h) => (
              <div key={h.year} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                <span className="sm:col-span-2 font-mono text-sm font-semibold text-[#101010] tabular-nums">
                  {h.year}
                </span>
                <span className="sm:col-span-4 font-sans text-sm font-medium uppercase tracking-wider text-[#101010]">
                  {h.title}
                </span>
                <span className="sm:col-span-6 font-sans text-xs text-[#757575] leading-relaxed">
                  {h.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid from CMS Data */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                LEADERSHIP
              </span>
            </div>
            <span className="font-mono text-xs text-[#757575]">
              ATELIER PARTNERS
            </span>
          </div>

          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 border border-[#101010]/12 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-120 hover:filter-none transition-all duration-500"
                  />
                </div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-[#101010] mb-1">
                  {member.name}
                </h3>
                <span className="font-mono text-xs text-[#757575] block mb-3">
                  {member.role}
                </span>
                <p className="font-sans text-xs text-[#757575] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
