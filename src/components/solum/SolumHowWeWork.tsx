import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { optimizeCloudinaryImage } from '../../utils/media';

interface WorkflowPhase {
  num: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageLabel: string;
}

const PHASES: WorkflowPhase[] = [
  {
    num: '/01',
    tag: 'DWG · BIM · GENPLAN',
    title: 'Genplan & CAD Drawings',
    description:
      'You send your site masterplan (Genplan), 2D CAD floorplans, elevations, or sketches. Within 24 hours we review your files and lock camera angles.',
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990861/projects/effect-archi/make_plan_3d_realistic_2K_fb6c40.jpg',
      900
    ),
    imageLabel: '01 // MASTERPLAN & SPATIAL LAYOUT',
  },
  {
    num: '/02',
    tag: '3D ARCHITECTURE',
    title: '3D Modeling & Massing',
    description:
      'We construct the complete 3D architectural model, terrain, and surrounding context from your drawings, sharing viewport camera previews in 1–2 days.',
    image: '/images/before_after/villa_before.webp',
    imageLabel: '02 // 3D VIEWPORT GEOMETRY',
  },
  {
    num: '/03',
    tag: 'MATERIALS & LIGHT',
    title: 'Photorealistic CGI',
    description:
      'We calibrate physical facade materials, glazing reflections, landscaping, and sunlit or dusk atmosphere into crisp 4K architectural renders.',
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
      900
    ),
    imageLabel: '03 // 4K EXTERIOR VISUALIZATION',
  },
  {
    num: '/04',
    tag: '16:9 & 9:16 CINEMA',
    title: '4K Films & Pre-Sales Launch',
    description:
      'We animate cinematic drone aerials, eye-level walkthroughs, and 9:16 vertical reels ready for investor presentations and off-plan sales.',
    image: optimizeCloudinaryImage(
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992496/projects/lotus-mall/lotus-mall_still_2.jpg',
      900
    ),
    imageLabel: '04 // CINEMA WALKTHROUGH DELIVERY',
  },
];

export function SolumHowWeWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-we-work"
      className="w-full bg-[#0F0F0F] text-[#F6F6F2] py-20 sm:py-28 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-white/10 select-none"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#2563EB] inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                03 // Production Workflow
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-white leading-[1.02] mb-4">
              How We Work
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl font-light">
              You share your Genplan or architectural drawings — we build the 3D geometry, craft photorealistic 4K visualizations, and deliver cinema-grade walkthrough films.
            </p>
          </div>

          <div className="pb-1">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm uppercase tracking-wider text-white font-medium hover:text-white/80 transition-colors group pb-1 border-b border-white/40 hover:border-white"
            >
              <span>Send Your Genplan</span>
              <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
          </div>
        </motion.div>

        {/* 4-Phase Architectural Progression Matrix (Alternating Checkerboard on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/12 divide-y md:divide-y-0 divide-white/12 bg-[#0F0F0F]">
          {/* ================= PHASE 01 ================= */}
          <div className="order-1 lg:order-1 p-7 sm:p-9 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] md:border-r border-white/12 md:border-b">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm text-white/50 tracking-wider">{PHASES[0].num}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/45 border border-white/15 px-2 py-0.5">
                {PHASES[0].tag}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-[26px] font-medium tracking-tight text-white mb-2.5 leading-snug">
                {PHASES[0].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                {PHASES[0].description}
              </p>
            </div>
          </div>

          <div className="order-2 lg:order-2 relative min-h-[250px] sm:min-h-[300px] lg:min-h-[340px] lg:border-r border-white/12 md:border-b group overflow-hidden bg-black">
            <img
              src={PHASES[0].image}
              alt={PHASES[0].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/85">
                {PHASES[0].imageLabel}
              </span>
            </div>
          </div>

          {/* ================= PHASE 02 ================= */}
          <div className="order-3 lg:order-3 p-7 sm:p-9 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] md:border-r border-white/12 md:border-b">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm text-white/50 tracking-wider">{PHASES[1].num}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/45 border border-white/15 px-2 py-0.5">
                {PHASES[1].tag}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-[26px] font-medium tracking-tight text-white mb-2.5 leading-snug">
                {PHASES[1].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                {PHASES[1].description}
              </p>
            </div>
          </div>

          <div className="order-4 lg:order-4 relative min-h-[250px] sm:min-h-[300px] lg:min-h-[340px] md:border-b border-white/12 group overflow-hidden bg-black">
            <img
              src={PHASES[1].image}
              alt={PHASES[1].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/85">
                {PHASES[1].imageLabel}
              </span>
            </div>
          </div>

          {/* ================= PHASE 03 ================= */}
          {/* Desktop Row 2 Col 1: Visual 03 */}
          <div className="order-6 md:order-6 lg:order-5 relative min-h-[250px] sm:min-h-[300px] lg:min-h-[340px] md:border-r lg:border-r border-white/12 md:border-b lg:border-b-0 group overflow-hidden bg-black">
            <img
              src={PHASES[2].image}
              alt={PHASES[2].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/85">
                {PHASES[2].imageLabel}
              </span>
            </div>
          </div>

          {/* Desktop Row 2 Col 2: Text 03 */}
          <div className="order-5 md:order-5 lg:order-6 p-7 sm:p-9 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] lg:border-r border-white/12 md:border-b lg:border-b-0">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm text-white/50 tracking-wider">{PHASES[2].num}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/45 border border-white/15 px-2 py-0.5">
                {PHASES[2].tag}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-[26px] font-medium tracking-tight text-white mb-2.5 leading-snug">
                {PHASES[2].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                {PHASES[2].description}
              </p>
            </div>
          </div>

          {/* ================= PHASE 04 ================= */}
          {/* Desktop Row 2 Col 3: Visual 04 */}
          <div className="order-8 md:order-8 lg:order-7 relative min-h-[250px] sm:min-h-[300px] lg:min-h-[340px] md:border-r lg:border-r border-white/12 group overflow-hidden bg-black">
            <img
              src={PHASES[3].image}
              alt={PHASES[3].title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/85">
                {PHASES[3].imageLabel}
              </span>
            </div>
          </div>

          {/* Desktop Row 2 Col 4: Text 04 */}
          <div className="order-7 md:order-7 lg:order-8 p-7 sm:p-9 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm text-white/50 tracking-wider">{PHASES[3].num}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/45 border border-white/15 px-2 py-0.5">
                {PHASES[3].tag}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-[26px] font-medium tracking-tight text-white mb-2.5 leading-snug">
                {PHASES[3].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                {PHASES[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
