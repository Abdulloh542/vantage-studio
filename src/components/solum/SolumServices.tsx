import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  pills: string[];
  image: string;
  hasDemo?: boolean;
  demoUrl?: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Visual Content',
    tagline: 'CGI for real estate: photorealistic renders, animation and virtual tours that turn concepts into experiences that sell.',
    description:
      'We treat every render as an architectural monograph. Simulating natural daylight trajectories, atmospheric micro-textures in travertine, concrete, and brushed bronze, and curated landscaping to produce evocative imagery that commands institutional capital.',
    pills: ['3D Rendering', '3D Animations', 'Virtual Tours', 'Drone Compositing'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
  },
  {
    number: '02',
    title: 'Sales Experiences',
    tagline: 'Interactive platforms that turn browsers into buyers. Move beyond static renders. Give buyers the power to explore, customize, and commit before construction.',
    description:
      'Lightweight real-time 3D applications engineered for sales gallery touchscreen tables, mobile browsers, and VR headsets. Empower prospective buyers to inspect unit layouts, verify views from specific floor levels, and change luxury finishes on the fly.',
    pills: ['Interactive CRM', 'UX Research & Strategy', 'Touchscreen Sales Apps', 'Web-Based 3D'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85',
    hasDemo: true,
    demoUrl: '/projects/riviera-residence',
  },
  {
    number: '03',
    title: 'Brand Identity',
    tagline: 'Strategic design systems that define market presence. Great architectural developments deserve great branding.',
    description:
      'From editorial typography and launch monographs to bespoke digital landing pages and marketing suites, we build cohesive brand universes that communicate prestige and drive rapid off-plan pre-sales velocity.',
    pills: ['Visual Identity', 'Brand Storytelling', 'Web Design & Development', 'Brochures & Signage'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
  },
];

export function SolumServices() {
  return (
    <section id="services" className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 lg:py-36 select-none border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14">
        {/* ========================================================= */}
        {/* 1) HERO INTRO (MATCHING 77 RENDER STUDIO EDITORIAL STYLE) */}
        {/* ========================================================= */}
        <div className="max-w-4xl mb-14 sm:mb-20 space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full inline-block" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              02 // CAPABILITIES & SOLUTIONS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06]">
            Comprehensive digital solutions that transform real estate from concept to close.
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/60 font-light max-w-2xl leading-relaxed">
            From photorealistic CGI visualization to interactive sales platforms and spatial branding, we are your end-to-end digital partner.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2) CINEMATIC FULL-WIDTH LANDSCAPE CARDS                   */}
        {/* ========================================================= */}
        <div className="space-y-8 sm:space-y-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 border border-white/10 bg-zinc-950 shadow-2xl transition-all duration-500 hover:border-white/25"
            >
              {/* Background Cinematic Image with Hover Zoom */}
              <img
                src={service.image}
                alt={service.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.70] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Multi-Stop Dark Vignette Overlay for High-Contrast Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35 md:bg-gradient-to-r md:from-black/95 md:via-black/70 md:to-black/30 pointer-events-none" />

              {/* Top / Middle Content Block */}
              <div className="relative z-10 max-w-3xl space-y-3 sm:space-y-4">
                <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {service.number} {service.title}
                </h3>

                <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 font-medium leading-relaxed">
                  {service.tagline}
                </p>

                <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed line-clamp-2 sm:line-clamp-none max-w-2xl">
                  {service.description}
                </p>
              </div>

              {/* Bottom Interactive Bar: Pills Left + Action Buttons Right */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Frosted Glass Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {service.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-sans text-white/90 tracking-wide transition-colors cursor-default"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Split Action Buttons (Start a project + optional View Demo) */}
                <div className="flex items-center gap-3 flex-shrink-0 self-start sm:self-auto">
                  {service.hasDemo && (
                    <Link
                      to={service.demoUrl || '/projects'}
                      className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-sans font-medium text-white transition-all duration-200 inline-flex items-center gap-1.5"
                    >
                      <span>View Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                    </Link>
                  )}

                  <Link
                    to="/contact"
                    className="px-6 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-sans font-semibold transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] inline-flex items-center gap-2"
                  >
                    <span>Start a project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 3) CLOSING STATEMENT BANNER (MATCHING 77 RENDER FOOTER)   */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Making the invisible,
              <br />
              unforgettable.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md font-light">
              We craft visual architectures and interactive platforms that help developers pre-sell and command market leadership.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-white hover:bg-white/90 text-black font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(255,255,255,0.4)] inline-flex items-center gap-3 self-start md:self-auto"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
