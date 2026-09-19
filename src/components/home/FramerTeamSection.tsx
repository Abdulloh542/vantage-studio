import { FramerSectionHeader, FramerCard } from '../common/FramerReveal';

const TEAM = [
  {
    name: 'Alexander Lindemann',
    role: 'Creative Director & Co-Founder',
    credentials: 'ETH Zurich Dipl. Arch',
    bio: '14 years directing high-impact architectural visual campaigns and competition masterplans across London and Switzerland.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Elena Rostova',
    role: 'Director of 3D & Computational Motion',
    credentials: 'M.Sc. Computer Graphics & AI',
    bio: 'Specialist in physically based light transport, procedural vegetation physics, and generative neural camera motion.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Julian Vance',
    role: 'Head of Real Estate Strategy',
    credentials: 'BSc Urban Planning & Development',
    bio: 'Advising institutional real estate funds on off-plan launch packaging and pre-sales absorption acceleration.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead Lighting & Materials Director',
    credentials: 'Architectural Association (AA London)',
    bio: 'Mastering micro-roughness shaders, dusk lighting atmosphere, and authentic spatial materiality.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
];

export function FramerTeamSection() {
  return (
    <section id="team" className="bg-[#F4F2EE] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Signature Framer Section Header */}
        <FramerSectionHeader
          eyebrow="MEET OUR TEAM //"
          title="EXPERTS"
          subtag="*(ARCHITECTURAL SPECIALISTS)"
          theme="light"
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <FramerCard
              key={member.name}
              delay={idx * 0.12}
              className="group bg-[#FAF9F6] border border-black/10 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] overflow-hidden bg-black/10 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-110 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 bg-[#0B0B0A]/85 backdrop-blur-sm text-[9px] font-mono uppercase tracking-widest text-white">
                      {member.credentials}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-normal text-[#0B0B0A] tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-[#C5A880] uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="font-sans text-xs text-black/60 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FramerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
