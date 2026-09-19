import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LogoTicker } from '../common/LogoTicker';

interface HeroSlide {
  id: string;
  name: string;
  image: string;
  subtitle: string;
  typology: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: '01',
    name: 'Morrow Residence',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85',
    subtitle: 'Architecture and visual studio creating homes and spaces that feel like they belong.',
    typology: 'Coastal Luxury',
  },
  {
    id: '02',
    name: 'Riviera Residence',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    subtitle: 'Mediterranean terraced living visualized for international off-plan pre-sales.',
    typology: 'Residential',
  },
  {
    id: '03',
    name: 'Bunker 37',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    subtitle: 'A 1943 reinforced monolith reimagined into a contemporary cultural foundation.',
    typology: 'Adaptive Reuse',
  },
  {
    id: '04',
    name: 'Berliner Strasse 69',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    subtitle: 'Corporate headquarters and commercial leasing campaign collateral in central Berlin.',
    typology: 'Commercial',
  },
];

const CLIENT_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
];

const CLIENT_LOGOS = [
  { name: 'FOSTER', label: 'FOSTER + PARTNERS' },
  { name: 'HERZOG', label: 'HERZOG & DE MEURON' },
  { name: 'GENSLER', label: 'GENSLER' },
  { name: 'PATRIZIA', label: 'PATRIZIA' },
  { name: 'BROOKFIELD', label: 'BROOKFIELD' },
  { name: 'CBRE', label: 'CBRE' },
];

export function SolumHero() {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax strictly limited to 10% (-5% to +5%) within clipped media frame
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  // Real-time live clock (e.g. Sep 19, 09:37 AM)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const monthDay = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(`${monthDay}, ${timeStr}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = HERO_SLIDES[activeSlideIdx];

  // Base delay offset: if first load, starts at T=560ms after preloader
  const baseDelay = typeof window !== 'undefined' && sessionStorage.getItem('vantage_preloader_seen') ? 0.1 : 0.56;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#101010] text-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* 4-Column Visible Hairline Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-4 px-6 md:px-10 z-20">
        <div className="border-r border-white/[0.12] h-full hidden md:block" />
        <div className="border-r border-white/[0.12] h-full hidden md:block" />
        <div className="border-r border-white/[0.12] h-full hidden md:block" />
        <div className="h-full hidden md:block" />
      </div>

      {/* ========================================================= */}
      {/* 1) HERO MEDIA: Scale 1.30 -> 1.00 & Opacity 0 -> 1 (2.0s) */}
      {/* Clipped by its frame, zero bounce, measured parallax      */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : parallaxY }}
          className="w-full h-full"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.id}
              src={activeSlide.image}
              alt={activeSlide.name}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.3 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 2.0,
                delay: baseDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full object-cover filter brightness-95 contrast-105 origin-center will-change-transform"
            />
          </AnimatePresence>
        </motion.div>

        {/* Subtle Contrast Gradient for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50 pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* TOP BAR: Fades in calm rhythm                             */}
      {/* ========================================================= */}
      <div className="relative z-30 pt-6 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: baseDelay + 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center font-mono text-sm text-white/90"
        >
          {/* Col 1: Small Wordmark */}
          <div className="col-span-1">
            <Link to="/" className="font-sans font-bold text-base sm:text-lg tracking-[-0.04em] text-white">
              Vantage&reg;
            </Link>
          </div>

          {/* Col 2: Based in Location */}
          <div className="hidden md:block col-span-1 text-white/80 font-mono text-xs sm:text-sm">
            Based in London &amp; Zurich
          </div>

          {/* Col 3: Real-Time Live Clock */}
          <div className="hidden md:block col-span-1 text-white/90 tabular-nums font-mono text-xs sm:text-sm">
            {currentTime || 'Sep 19, 09:37 AM'}
          </div>

          {/* Col 4: Spacer (Menu button is mounted fixed in Navbar) */}
          <div className="col-span-1" />
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* 2) HERO STAGE: Wordmark y80px, Description y80px, CTA     */}
      {/* ========================================================= */}
      <div className="relative z-30 my-auto py-12 md:py-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 items-end">
          {/* Left Stage: Wordmark & Subtitle (Columns 1-2) */}
          <div className="col-span-1 md:col-span-2">
            {/* 2) Headline: Starts opacity 0 / y80px, animates to 1 / y0 over 1.2s after 0.8s delay */}
            <motion.h1
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 80 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1.2,
                delay: baseDelay + 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(64px,11vw,160px)] font-bold tracking-[-0.06em] leading-[0.88] text-white mb-6 select-none"
            >
              Vantage&reg;
            </motion.h1>

            {/* 3) Description: Starts opacity 0 / y80px, animates to 1 / y0 over 1.2s after 0.9s delay */}
            <motion.p
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 80 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1.2,
                delay: baseDelay + 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-sans text-base sm:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-lg"
            >
              Architecture and visual studio creating photorealistic CGI and cinematic marketing films for unbuilt spaces.
            </motion.p>
          </div>

          {/* Right Stage: Disciplines List & Split Start a Project Button */}
          <div className="col-span-1 md:col-span-2 md:pl-8 flex flex-col justify-between items-start md:items-end">
            {/* Numbered Services Column */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: baseDelay + 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-2.5 font-mono text-sm sm:text-base text-white/95 mb-10 w-full md:max-w-xs font-medium"
            >
              <div className="flex items-center gap-3 py-1.5 border-b border-white/15">
                <span className="text-white/50 text-xs sm:text-sm">01</span>
                <span>Architecture Visualization</span>
              </div>
              <div className="flex items-center gap-3 py-1.5 border-b border-white/15">
                <span className="text-white/50 text-xs sm:text-sm">02</span>
                <span>Interior &amp; Exterior CGI</span>
              </div>
              <div className="flex items-center gap-3 py-1.5 border-b border-white/15">
                <span className="text-white/50 text-xs sm:text-sm">03</span>
                <span>AI Real Estate Films</span>
              </div>
              <div className="flex items-center gap-3 py-1.5 border-b border-white/15">
                <span className="text-white/50 text-xs sm:text-sm">04</span>
                <span>3D Spatial Modeling &amp; BIM</span>
              </div>
            </motion.div>

            {/* 4) Split CTA Button: Fades from opacity 0 to 1 after 1.2s delay (no translation) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: baseDelay + 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full md:max-w-xs"
            >
              <Link
                to="/contact"
                className="group flex items-stretch bg-white text-[#101010] hover:bg-[#F6F6F2] transition-colors duration-180 w-full shadow-2xl"
              >
                <div className="flex-1 py-4 px-6 font-sans font-medium text-base tracking-[-0.02em]">
                  Start a Project
                </div>
                {/* Arrow translates exactly 6px right on hover in 160ms */}
                <div className="w-14 border-l border-[#101010]/15 flex items-center justify-center group-hover:bg-[#101010] group-hover:text-white transition-colors duration-180">
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-160 ease-out group-hover:translate-x-1.5" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5) BOTTOM STRIP: Fades in after 1.3s and 1.4s delay       */}
      {/* Contains Client Social Proof, LogoTicker, and Switcher    */}
      {/* ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: baseDelay + 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-30 pb-8 pt-6 px-6 md:px-10 border-t border-white/15"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left: Overlapping Avatars + Social Proof (Col 1-4) */}
          <div className="md:col-span-4 flex items-center gap-3">
            <div className="flex -space-x-2.5 overflow-hidden">
              {CLIENT_AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client avatar"
                  className="inline-block w-8 h-8 rounded-full border-2 border-[#101010] object-cover"
                />
              ))}
            </div>
            <p className="font-sans text-sm text-white/90 leading-tight">
              Over 100 clients trust us to shape their unbuilt spaces.
            </p>
          </div>

          {/* Center: Draggable Logo Ticker (~20px/s, pauses on hover) (Col 5-8) */}
          <div className="md:col-span-4 hidden lg:block overflow-hidden">
            <LogoTicker logos={CLIENT_LOGOS} speed={22} />
          </div>

          {/* Right: Project Switcher & 4 Thumbnails (Col 9-12) */}
          <div className="md:col-span-8 lg:col-span-4 flex items-center justify-between md:justify-end gap-4">
            <div className="text-right font-mono text-xs sm:text-sm">
              <span className="text-white block font-medium uppercase tracking-wider">
                {activeSlide.name}
              </span>
              <span className="text-white/60 tabular-nums">
                0{activeSlideIdx + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

            {/* 4 Interactive Thumbnail Cards */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = activeSlideIdx === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIdx(idx)}
                    aria-label={`Switch to slide ${slide.name}`}
                    className={`relative w-12 sm:w-16 h-9 sm:h-11 overflow-hidden border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'border-white scale-105 shadow-md'
                        : 'border-white/25 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
