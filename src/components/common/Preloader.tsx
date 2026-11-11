import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { getProjectBySlug } from '../../data/projects';
import { AtlasLogo } from './AtlasLogo';

interface PreloaderProps {
  onSequenceStart?: () => void;
  onComplete?: () => void;
}

interface CurtainCopy {
  primary: string;
  secondary: string;
  eyebrow: string;
  index: string;
  stacked?: boolean;
}

function resolveCurtainCopy(pathname: string): CurtainCopy {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  if (cleanPath === '/') {
    return {
      primary: 'Atlas',
      secondary: 'Studio',
      eyebrow: 'Architectural Visualization & Spatial CGI',
      index: 'Index 01 // Exhibition',
    };
  }

  if (cleanPath === '/projects' || cleanPath === '/work') {
    return {
      primary: 'Latest',
      secondary: 'work',
      eyebrow: 'Selected Archive // 2024—2026',
      index: 'Index 02 // Portfolio',
    };
  }

  if (cleanPath.startsWith('/projects/') || cleanPath.startsWith('/work/')) {
    const slug = cleanPath.split('/').filter(Boolean)[1] || '';
    const project = getProjectBySlug(slug);
    if (project) {
      return {
        primary: project.title,
        secondary: project.category,
        eyebrow: `${project.location} // ${project.year}`,
        index: `Case Study // ${project.videoAspectRatio || '16:9'}`,
        stacked: project.title.length > 12,
      };
    }
    return {
      primary: 'Selected',
      secondary: 'project',
      eyebrow: 'Architectural Case Study',
      index: 'Index 02 // Case Study',
    };
  }

  if (cleanPath === '/about' || cleanPath === '/studio' || cleanPath === '/process') {
    return {
      primary: 'Our studio',
      secondary: 'one team',
      eyebrow: 'Tashkent · Dubai · Global Delivery',
      index: 'Index 03 // Studio',
    };
  }

  if (cleanPath.startsWith('/services')) {
    return {
      primary: 'What we',
      secondary: 'deliver',
      eyebrow: '3D Stills · Cinematic Films · Interactive CGI',
      index: 'Index 04 // Capabilities',
    };
  }

  if (cleanPath === '/contact') {
    return {
      primary: 'Talk',
      secondary: 'to us',
      eyebrow: 'Start a Project // First Views in 1–2 Days',
      index: 'Index 05 // Direct Line',
    };
  }

  if (cleanPath === '/terms') {
    return {
      primary: 'Terms of',
      secondary: 'service',
      eyebrow: 'Atlas Studio Legal Framework',
      index: 'Legal // 01',
    };
  }

  if (cleanPath === '/privacy') {
    return {
      primary: 'Privacy',
      secondary: 'policy',
      eyebrow: 'Data Protection & Client Confidentiality',
      index: 'Legal // 02',
    };
  }

  return {
    primary: 'Atlas',
    secondary: 'Studio',
    eyebrow: 'Architectural Visualization Studio',
    index: 'Index // 00',
  };
}

/**
 * Omnya Lab × Atlas Studio Universal Curtain Transition
 * - Triggers smoothly and deterministically on initial load AND on every route change (`location.pathname`).
 * - Pure declarative Framer Motion timeline with `pointer-events-none` and zero body-scroll locks,
 *   guaranteeing 0 freezes, 0 stuck states, and 0 invisible elements.
 */
export function Preloader({ onSequenceStart, onComplete }: PreloaderProps) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const copy = resolveCurtainCopy(location.pathname);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      key={location.pathname}
      initial={{ y: '0%' }}
      animate={{ y: '-102%' }}
      transition={{
        delay: 0.56,
        duration: 0.78,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationStart={() => onSequenceStart?.()}
      onAnimationComplete={() => onComplete?.()}
      aria-hidden="true"
      style={{
        backgroundColor: '#EDEAE4',
        backgroundImage:
          'radial-gradient(120% 70% at 12% -10%, rgba(232, 208, 172, 0.38), transparent 60%), radial-gradient(90% 60% at 100% 110%, rgba(214, 196, 168, 0.28), transparent 60%)',
        willChange: 'transform',
      }}
      className="fixed inset-0 z-[99999] text-[#111111] flex flex-col justify-between pointer-events-none select-none overflow-hidden shadow-[0_24px_80px_rgba(17,17,17,0.14)]"
    >
      {/* Subtle 4-Column Architectural Hairline Grid */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 px-6 md:px-10 pointer-events-none z-0">
        <div className="border-r border-[#111111]/[0.045] h-full hidden md:block" />
        <div className="border-r border-[#111111]/[0.045] h-full hidden md:block" />
        <div className="border-r border-[#111111]/[0.045] h-full hidden md:block" />
        <div className="h-full hidden md:block" />
      </div>

      {/* Top Strip: Brand Mark & Omnya Terracotta Accent Dot */}
      <div className="relative z-10 pt-7 md:pt-9 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AtlasLogo variant="wordmark" className="h-4 sm:h-[18px] w-auto text-[#111111]/85" />
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-[#6B6761] pl-3 border-l border-[#111111]/15">
            {copy.eyebrow}
          </span>
        </div>

        {/* Signature Warm Terracotta Dot (Omnya Lab Reference) */}
        <div className="flex items-center gap-3 pr-4 md:pr-16">
          <motion.span
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-3 h-3 rounded-full bg-[#C48B71] inline-block"
          />
        </div>
      </div>

      {/* Center Stage: Two-Tone Editorial Title + Animated Terracotta Underline */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-6 text-center">
        <div
          className={`flex ${
            copy.stacked
              ? 'flex-col items-center gap-y-1'
              : 'flex-wrap items-baseline justify-center gap-x-[0.26em] gap-y-1'
          } font-display text-[clamp(2.5rem,6vw,5.25rem)] font-normal tracking-[-0.035em] leading-[1.06]`}
        >
          {/* Primary Word (#111111) */}
          <span className="inline-block overflow-hidden py-1.5 align-bottom">
            <motion.span
              initial={{ y: '115%' }}
              animate={{ y: '0%' }}
              transition={{
                duration: 0.48,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block text-[#111111] will-change-transform"
            >
              {copy.primary}
            </motion.span>
          </span>

          {/* Secondary Muted Word (#87837D) */}
          <span className="inline-block overflow-hidden py-1.5 align-bottom">
            <motion.span
              initial={{ y: '115%' }}
              animate={{ y: '0%' }}
              transition={{
                duration: 0.48,
                delay: 0.065,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block text-[#87837D] will-change-transform"
            >
              {copy.secondary}
            </motion.span>
          </span>
        </div>

        {/* Omnya Lab Terracotta Horizontal Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.52,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: 'left center' }}
          className="mt-5 md:mt-6 h-[1px] w-[min(520px,74vw)] bg-[#B86B4B]/75 will-change-transform"
        />
      </div>

      {/* Bottom Architectural Metadata Strip */}
      <div className="relative z-10 pb-7 md:pb-9 px-6 md:px-12 flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#6B6761] border-t border-[#111111]/[0.06] pt-4">
        <span>{copy.index}</span>
        <span>@atlas.studio.uz</span>
      </div>
    </motion.div>
  );
}
