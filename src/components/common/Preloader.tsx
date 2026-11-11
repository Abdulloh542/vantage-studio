import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import { getProjectBySlug } from '../../data/projects';
import { AtlasLogo } from './AtlasLogo';

interface PreloaderProps {
  onSequenceStart?: () => void;
  onComplete?: () => void;
}

interface CurtainCopy {
  isHomeLogo?: boolean;
  primary: string;
  secondary: string;
}

export function triggerCurtainReplay() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('atlas:replay-curtain'));
  }
}

function resolveCurtainCopy(pathname: string): CurtainCopy {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  if (cleanPath === '/') {
    return {
      isHomeLogo: true,
      primary: 'ATLAS',
      secondary: 'STUDIO',
    };
  }

  if (cleanPath === '/projects' || cleanPath === '/work') {
    return {
      primary: 'PROJECTS',
      secondary: 'SELECTED WORK',
    };
  }

  if (cleanPath.startsWith('/projects/') || cleanPath.startsWith('/work/')) {
    const slug = cleanPath.split('/').filter(Boolean)[1] || '';
    const project = getProjectBySlug(slug);
    if (project) {
      return {
        primary: project.title.toUpperCase(),
        secondary: project.category.toUpperCase(),
      };
    }
    return {
      primary: 'PROJECT',
      secondary: 'CASE STUDY',
    };
  }

  if (cleanPath === '/about' || cleanPath === '/studio' || cleanPath === '/process') {
    return {
      primary: 'OUR STUDIO',
      secondary: 'ATLAS STUDIO',
    };
  }

  if (cleanPath.startsWith('/services')) {
    return {
      primary: 'SERVICES',
      secondary: 'WHAT WE DELIVER',
    };
  }

  if (cleanPath.startsWith('/pricing')) {
    return {
      primary: 'PRICING',
      secondary: 'PACKAGES & RATES',
    };
  }

  if (cleanPath === '/contact') {
    return {
      primary: 'TALK TO US',
      secondary: 'START A PROJECT',
    };
  }

  if (cleanPath === '/terms') {
    return {
      primary: 'TERMS',
      secondary: 'OF SERVICE',
    };
  }

  if (cleanPath === '/privacy') {
    return {
      primary: 'PRIVACY',
      secondary: 'POLICY',
    };
  }

  return {
    isHomeLogo: true,
    primary: 'ATLAS',
    secondary: 'STUDIO',
  };
}

/**
 * Atlas Studio Zero-Flash GPU Curtain Transition
 * - Uses native CSS `@keyframes` (`atlas-curtain`) so `translate3d(0, 0%, 0)` is locked
 *   synchronously at frame 0 before a single pixel of the new route is painted.
 * - Pure white background (#FFFFFF) with crisp dark ink (#101010) in the Atlas Studio logo font.
 */
export function Preloader({ onSequenceStart, onComplete }: PreloaderProps) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const [replayCount, setReplayCount] = useState(0);

  useEffect(() => {
    const handleReplay = () => {
      setReplayCount((prev) => prev + 1);
    };
    window.addEventListener('atlas:replay-curtain', handleReplay);
    return () => window.removeEventListener('atlas:replay-curtain', handleReplay);
  }, []);

  const copy = resolveCurtainCopy(location.pathname);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div
      key={`${location.pathname}-${replayCount}`}
      onAnimationStart={(e) => {
        if (e.target === e.currentTarget) {
          onSequenceStart?.();
        }
      }}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) {
          onComplete?.();
        }
      }}
      aria-hidden="true"
      className="atlas-curtain fixed inset-0 z-[99999] bg-white text-[#101010] flex items-center justify-center pointer-events-none select-none overflow-hidden border-b border-[#101010]/12 shadow-[0_18px_50px_rgba(16,16,16,0.10)]"
    >
      {/* Pure Centered Stage — Zero Top/Bottom Clutter */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {copy.isHomeLogo ? (
          <div className="overflow-hidden py-3">
            <div className="atlas-curtain-text">
              <AtlasLogo
                variant="stacked"
                className="h-20 sm:h-28 md:h-36 w-auto text-[#101010]"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {/* Primary Line in Exact ATLAS High-Contrast Serif Font */}
            <div className="overflow-hidden py-1.5">
              <div className="atlas-curtain-text font-logo text-[clamp(2.4rem,6.5vw,5.6rem)] font-normal uppercase tracking-[0.06em] leading-[0.96] text-[#101010]">
                {copy.primary}
              </div>
            </div>

            {/* Secondary Line in Exact STUDIO Wide-Tracked Sans Font */}
            <div className="overflow-hidden pt-2 pb-1">
              <div className="atlas-curtain-sub font-sans text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.38em] text-[#101010]/65">
                {copy.secondary}
              </div>
            </div>
          </div>
        )}

        {/* Minimalist Architectural Horizontal Rule */}
        <div className="atlas-curtain-rule mt-5 h-[1px] w-[min(360px,68vw)] bg-[#101010]/20" />
      </div>
    </div>
  );
}
