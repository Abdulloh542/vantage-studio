import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FramerSectionHeader, FramerCard } from '../common/FramerReveal';

interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 's-1',
    slug: 'architectural-visualization',
    number: '01',
    title: 'Residential Architecture & Interiors',
    category: 'CGI CRAFT',
    description: 'Timeless, functional homes crafted with physically accurate daylight physics, authentic material textures, and luxury atmosphere.',
    videoUrl: 'https://framerusercontent.com/assets/13iJqVy2UkmaqTu4poq6caN74.mp4',
    deliverables: ['Interior Stills', 'Exterior Panoramas', 'Material Specifications'],
  },
  {
    id: 's-2',
    slug: 'commercial-architecture',
    number: '02',
    title: 'Commercial & Civic Masterplans',
    category: 'BIM PRECISION',
    description: 'High-rise developments, institutional headquarters, and civic landmarks modeled with millimeter BIM precision for investor approval.',
    videoUrl: 'https://framerusercontent.com/assets/8ZV0qSXOYK94QOGfF23iDGKN0H8.mp4',
    deliverables: ['Masterplan Vistas', 'Planning Package', 'Context Photomontage'],
  },
  {
    id: 's-3',
    slug: 'cinematic-films',
    number: '03',
    title: 'Cinematic AI Films & Walkthroughs',
    category: 'MOTION CINEMA',
    description: 'Fluid camera trajectories, dawn-to-dusk dynamic lighting sequences, and customized sound design for multi-million dollar sales gallerias.',
    videoUrl: 'https://framerusercontent.com/assets/W7tm48yCWmVEzTQ4mvO62oFElQ.mp4',
    deliverables: ['4K Cinema Trailer', 'Vertical 9:16 Social Cutdowns', 'Bespoke Foley Audio'],
  },
  {
    id: 's-4',
    slug: 'property-marketing',
    number: '04',
    title: 'Off-Plan Property Marketing Suites',
    category: 'INVESTMENT CAMPAIGNS',
    description: 'Complete pre-sales visual packages designed to compress buyer absorption cycles and secure prime anchor tenants before groundbreaking.',
    videoUrl: 'https://framerusercontent.com/assets/dRKrLks1WsKbJBzwpTavl5xc5Qc.mp4',
    deliverables: ['Brochure Imagery', 'Sales Gallery Assets', 'VR Interactive Tours'],
  },
  {
    id: 's-5',
    slug: 'renovation-reuse',
    number: '05',
    title: 'Adaptive Reuse & Renovation',
    category: 'HERITAGE & TRANSFORMATION',
    description: 'Photogrammetric integration and high-contrast before/after visual sequences demonstrating how historical or distressed fabric is revitalized.',
    videoUrl: 'https://framerusercontent.com/assets/PTN6glsYPLF4947jjfh7tEDGbE4.mp4',
    deliverables: ['Before/After Sliders', 'Historical Comparison', 'Municipal Submission'],
  },
];

export function FramerServicesSection() {
  return (
    <section id="services" className="bg-[#FAF9F6] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Signature Framer Section Header */}
        <FramerSectionHeader
          eyebrow="WHAT WE DELIVER //"
          title="SERVICES"
          subtag="*(CREATIVE SOLUTIONS)"
          theme="light"
        />

        {/* Video Service Cards Stack / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((srv, idx) => (
            <FramerCard
              key={srv.id}
              delay={idx * 0.1}
              className={`group bg-[#F4F2EE] border border-black/10 overflow-hidden flex flex-col justify-between hover:border-black/40 transition-all duration-300 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <Link to={`/services/${srv.slug}`} className="block">
                {/* Autoplay Video Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  >
                    <source src={srv.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#0B0B0A]/85 backdrop-blur-md text-[10px] uppercase font-mono tracking-widest text-white">
                      // {srv.number}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/85 backdrop-blur-md text-[10px] uppercase font-mono tracking-widest text-[#0B0B0A]">
                      {srv.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-[#0B0B0A] group-hover:text-black transition-colors tracking-tight mb-3">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-black/65 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Deliverables Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10">
                    {srv.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="font-mono text-[10px] uppercase tracking-wider text-black/50"
                      >
                        / {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Bottom Action Strip */}
              <div className="px-8 pb-6 pt-0 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-black/40">
                  EXPLORE SCOPE
                </span>
                <Link
                  to={`/services/${srv.slug}`}
                  className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black group-hover:bg-[#0B0B0A] group-hover:text-white transition-all duration-300"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FramerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
