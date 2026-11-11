import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { optimizeCloudinaryImage } from '../utils/media';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  pills: string[];
  image: string;
  hasDemo?: boolean;
  demoUrl?: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Architectural Visualization',
    tagline: 'From 2D Genplan and CAD drawings to 3D modeling and photorealistic 4K exterior & interior renders.',
    pills: ['Genplan to 3D', '4K Exterior & Interior CGI', 'Daylight & Dusk Lighting'],
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
      1400
    ),
    hasDemo: true,
    demoUrl: '/projects/volga-park',
  },
  {
    number: '02',
    title: '4K Films & 9:16 Reels',
    tagline: 'Cinematic architectural walkthroughs, drone fly-throughs, and vertical social reels engineered for pre-sales.',
    pills: ['16:9 Cinema Films', '9:16 Vertical Reels', 'AI & Ray-Traced Motion'],
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992590/projects/collective-dubai-hills/collective-dubai-hills_still_4.jpg',
      1400
    ),
    hasDemo: true,
    demoUrl: '/projects/collective-dubai-hills',
  },
  {
    number: '03',
    title: 'Masterplan & Renovation Marketing',
    tagline: 'End-to-end visual campaigns for residential quarters, shopping malls, 5-star hotels, and historic transformations.',
    pills: ['Development Launches', 'Before / After Films', 'Investor Presentations'],
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992496/projects/lotus-mall/lotus-mall_still_2.jpg',
      1400
    ),
    hasDemo: true,
    demoUrl: '/projects/lotus-mall',
  },
];

export function ServicesPage() {
  return (
    <main className="w-full bg-[#0A0A0A] text-white pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* ========================================================= */}
        {/* 1) HERO INTRO (CLEAN & SPACIOUS)                          */}
        {/* ========================================================= */}
        <div className="max-w-4xl mb-12 sm:mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Comprehensive digital solutions that transform real estate from concept to close.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-sm sm:text-base lg:text-lg text-white/60 font-light max-w-2xl leading-relaxed"
          >
            From photorealistic visualization to interactive platforms that accelerate sales, we&apos;re your end-to-end digital partner.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 2) MINIMALISTIC CINEMATIC CARDS (EXACT MATCH REFERENCE)    */}
        {/* ========================================================= */}
        <div className="space-y-6 sm:space-y-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] flex flex-col justify-end p-6 sm:p-10 lg:p-12 border border-white/10 bg-zinc-950 shadow-2xl transition-all duration-500 hover:border-white/20"
            >
              {/* Background Architectural Render */}
              <img
                src={service.image}
                alt={service.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.80] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Bottom Gradient Overlay (Leaves top 60% open & crisp) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Bottom-Aligned Content: Title + Tagline + Pills Left, CTA Right */}
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                {/* Left Side: Title, Tagline & Minimal Pills */}
                <div className="max-w-2xl space-y-3">
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    {service.number} {service.title}
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-white/90 font-light leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Pills Row */}
                  <div className="pt-1 flex flex-wrap items-center gap-2">
                    {service.pills.map((pill, pIdx) => (
                      <span
                        key={pill}
                        className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-sans tracking-wide transition-colors cursor-default ${
                          pIdx === 0
                            ? 'bg-white text-black font-medium'
                            : 'bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white/90'
                        }`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Clean Pill Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0 self-start lg:self-end">
                  {service.hasDemo && (
                    <Link
                      to={service.demoUrl || '/projects'}
                      className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-sans font-medium text-white transition-all duration-200"
                    >
                      View Demo
                    </Link>
                  )}

                  <Link
                    to="/contact"
                    className="px-6 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-sans font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    Start a project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 3) CLOSING FOOTER STATEMENT                               */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Making the invisible, unforgettable.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/50 font-light">
              We craft platforms and visual identities that accelerate sales from concept to close.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-full border border-white/30 hover:border-white text-white font-sans text-xs sm:text-sm font-medium transition-all duration-200"
            >
              View Pricing
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full bg-white hover:bg-white/90 text-black font-sans text-xs sm:text-sm font-medium transition-all duration-200"
            >
              Start a project &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
