import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServicePanel {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const SERVICES: ServicePanel[] = [
  {
    number: '01',
    title: 'Architecture',
    description:
      'From first concept to final structure, we craft photorealistic architectural imagery and masterplans that respond to site, daylight, and material physics, balancing form, atmosphere, and commercial durability.',
    bullets: [
      'New building visualization & masterplanning',
      'Site analysis & environmental daylight studies',
      'Concept development & schematic 3D design',
      'Structural & technical BIM CGI drawings',
      'Permit & planning authority documentation',
    ],
    image: 'https://framerusercontent.com/images/rIjy0DwlLemTQ2s2BTHaMSII2Fg.jpg?width=2400&height=1600',
  },
  {
    number: '02',
    title: 'Interior Design',
    description:
      'We shape the spaces inside a building with the same care given to its architecture, considering natural light, tactile materials, circulation flow, and how people actually live or work in the space day to day.',
    bullets: [
      'Space planning & bespoke layout design',
      'Material & luxury finish curation',
      'Custom furniture & architectural fixture design',
      'Natural & artificial lighting choreography',
      'Styling & museum-grade final staging',
    ],
    image: 'https://framerusercontent.com/images/NK9CCeVqA1QfjxGwAkHn5lv7QR8.jpg?width=1920&height=2880',
  },
  {
    number: '03',
    title: 'Space Planning & Consulting',
    description:
      'For developers and architects who need expert visual guidance without a full design build, we help optimize unbuilt developments, solve spatial marketing challenges, and advise on key design decisions before ground is broken.',
    bullets: [
      'Layout & off-plan circulation assessment',
      'Pre-construction feasibility consulting',
      'Zoning & architectural code compliance',
      'Spatial efficiency & unit mix optimization',
      'Design direction & cinematic concept consulting',
    ],
    image: 'https://framerusercontent.com/images/yznMxGotqqcgsULHwIRkmlRFPNg.jpg?width=1920&height=2880',
  },
  {
    number: '04',
    title: 'Project Management & Renovation',
    description:
      'We oversee the full visual journey from initial blueprint to final handover, coordinating 3D pipelines, production timelines, and marketing milestones so the vision on paper becomes a sold reality.',
    bullets: [
      'Production sourcing & pipeline coordination',
      'Campaign budget & milestone delivery management',
      'On-site drone supervision & quality control',
      'Adaptive reuse & historical remodel oversight',
      'Final 16K master file & cinematic film handover',
    ],
    image: 'https://framerusercontent.com/images/ex3qqvYls9dRO4lkffiTeOs6hI.jpg?width=1920&height=2562',
  },
];

export function SolumServices() {
  return (
    <section className="w-full bg-[#121212] text-white select-none">
      {/* ========================================================= */}
      {/* 1) SERVICES INTRO HEADER                                   */}
      {/* ========================================================= */}
      <div className="w-full py-16 md:py-24 px-8 sm:px-14 md:px-16 lg:px-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
              02 // SERVICES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.04em] text-white">
              WHAT WE DO.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl font-light leading-relaxed">
              From first concept to final finish, Vantage Studio offers a full range of architecture and visual design services for unbuilt spaces.
            </p>
          </div>

          <div>
            <Link
              to="/contact"
              className="solum-btn inline-flex items-center gap-3 px-6 py-3.5 border border-white text-white font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2) 4 FULL-SCREEN 50/50 SPLIT PANELS (Exact Solum Layout)  */}
      {/* ========================================================= */}
      <div className="w-full flex flex-col">
        {SERVICES.map((service, index) => (
          <div
            key={service.number}
            className="w-full min-h-screen flex flex-col md:flex-row border-b border-white/10"
          >
            {/* Left 50%: Solid Dark Canvas with Centered Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex flex-col justify-center px-8 sm:px-14 md:px-16 lg:px-24 py-16 md:py-24 bg-[#121212] z-10"
            >
              <div className="max-w-xl space-y-6">
                {/* Number */}
                <span className="font-sans text-xl sm:text-2xl text-white/40 block font-normal">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                  {service.title}
                </h3>

                {/* Paragraph */}
                <p className="font-sans text-white/75 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  {service.description}
                </p>

                {/* 5 Square Bullets */}
                <ul className="space-y-3 pt-4 border-t border-white/10">
                  {service.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-center gap-3 font-sans text-sm sm:text-base text-white/85"
                    >
                      <span className="w-1.5 h-1.5 bg-white/40 inline-block flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right 50%: Full-Bleed 100vh Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full md:w-1/2 h-[60vh] md:h-auto min-h-[60vh] md:min-h-screen relative overflow-hidden bg-black"
            >
              <img
                src={service.image}
                alt={service.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover filter brightness-95 hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
