import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { pauseLenis, resumeLenis, resetLenisScroll } from './SmoothScroll';
import { AtlasLogo } from './AtlasLogo';
import { triggerCurtainReplay } from './Preloader';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isOverHero, setIsOverHero] = useState(true);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Track whether the navbar is over the dark Hero video on `/`
  useEffect(() => {
    const updateHeroState = () => {
      if (location.pathname !== '/') {
        setIsOverHero(false);
        return;
      }
      const threshold = Math.max(320, window.innerHeight - 90);
      setIsOverHero(window.scrollY < threshold);
    };

    updateHeroState();
    window.addEventListener('scroll', updateHeroState, { passive: true });
    window.addEventListener('resize', updateHeroState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateHeroState);
      window.removeEventListener('resize', updateHeroState);
    };
  }, [location.pathname]);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      pauseLenis();
    } else {
      document.body.style.overflow = '';
      resumeLenis();
    }
    return () => {
      document.body.style.overflow = '';
      resumeLenis();
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    resumeLenis();
  };

  const handleLogoClick = () => {
    closeMenu();
    resetLenisScroll();
    if (location.pathname === '/') {
      triggerCurtainReplay();
    }
  };

  const mainLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Left Bespoke Atlas Studio Logo — Crystal Clear on Hero AND on Light Sections */}
      {!menuOpen && (
        <div className="fixed top-0 left-0 z-[70] py-4 md:py-5 px-5 sm:px-8 md:px-10 pointer-events-none select-none">
          <Link
            to="/"
            onClick={handleLogoClick}
            aria-label="Atlas Studio Home"
            className={`pointer-events-auto inline-flex items-center transition-all duration-300 ${
              isOverHero
                ? 'text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] hover:opacity-85 py-1'
                : 'text-[#321E13] bg-[#F5EDE2]/90 backdrop-blur-md px-3.5 py-2 border border-[#321E13]/12 shadow-sm hover:bg-[#F5EDE2]'
            }`}
          >
            <AtlasLogo
              variant="stacked"
              className={
                isOverHero
                  ? 'h-9 sm:h-11 md:h-12 w-auto'
                  : 'h-7 sm:h-8 md:h-9 w-auto'
              }
            />
          </Link>
        </div>
      )}

      {/* Top Right High-Contrast Architectural Menu Button */}
      <header className="fixed top-0 right-0 z-[70] py-4 md:py-5 px-5 sm:px-8 md:px-10 pointer-events-none select-none">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          className={`pointer-events-auto cursor-pointer flex items-center gap-3 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md group ${
            menuOpen
              ? 'bg-[#101010] text-white hover:bg-black border border-[#101010]'
              : 'bg-white text-[#101010] hover:bg-[#F5EDE2] border border-[#101010]/15'
          }`}
        >
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          <div
            className={`w-4 h-4 border border-current flex items-center justify-center transition-transform duration-[250ms] ease-out ${
              menuOpen ? 'rotate-45' : 'group-hover:rotate-45'
            }`}
          >
            <span className="text-[12px] leading-none mb-0.5 font-bold">+</span>
          </div>
        </button>
      </header>

      {/* Accessible Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={overlayRef}
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#F5EDE2] text-[#321E13] flex flex-col justify-between pt-28 pb-10 px-6 md:px-10 overflow-y-auto select-none"
          >
            {/* Top Left Logo inside Overlay */}
            <div className="absolute top-4 md:top-5 left-5 sm:left-8 md:left-10 z-50">
              <Link
                to="/"
                onClick={handleLogoClick}
                aria-label="Atlas Studio Home"
                className="text-[#321E13] hover:opacity-80 transition-opacity inline-flex items-center"
              >
                <AtlasLogo variant="stacked" className="h-9 sm:h-10 md:h-11 w-auto" />
              </Link>
            </div>

            {/* Top Rule Line */}
            <div className="absolute top-20 left-6 right-6 md:left-10 md:right-10 border-b border-[#321E13]/12" />

            {/* Navigation List Container */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl w-full my-auto divide-y divide-[#321E13]/12 border-t border-b border-[#321E13]/12"
            >
              {mainLinks.map((link, idx) => {
                const isHovered = hoveredIdx === idx;
                const isAnyHovered = hoveredIdx !== null;
                const isDimmed = isAnyHovered && !isHovered;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.04 * idx,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="py-4 md:py-6"
                  >
                    <Link
                      to={link.href}
                      onClick={() => {
                        if (link.href === '/' && location.pathname === '/') {
                          handleLogoClick();
                        } else {
                          closeMenu();
                        }
                      }}
                      className={`block font-logo text-4xl sm:text-6xl md:text-7xl font-normal uppercase tracking-[0.04em] leading-[0.95] text-[#321E13] transition-opacity duration-180 ${
                        isDimmed ? 'opacity-45' : 'opacity-100'
                      }`}
                    >
                      <span className="font-mono text-xs text-[#321E13]/60 mr-4 md:mr-8 align-middle">
                        0{idx + 1}
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Meta & Legal / Social Links */}
            <div className="pt-8 border-t border-[#321E13]/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-[#321E13]/70">
              <div className="col-span-1">
                <span className="text-[#321E13] block mb-1 font-semibold">ATELIER CONTACT</span>
                <a href="mailto:hello@atlasstudio.uz" className="hover:text-[#321E13] transition-colors">
                  hello@atlasstudio.uz
                </a>
              </div>

              <div className="col-span-1">
                <span className="text-[#321E13] block mb-1 font-semibold">INSTAGRAM</span>
                <a
                  href="https://www.instagram.com/atlasstudio.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#321E13] transition-colors"
                >
                  @atlasstudio.uz ↗
                </a>
              </div>

              <div className="col-span-1">
                <span className="text-[#321E13] block mb-1 font-semibold">LEGAL</span>
                <div className="flex gap-4">
                  <Link to="/terms" onClick={closeMenu} className="hover:text-[#321E13] transition-colors">
                    Terms
                  </Link>
                  <Link to="/privacy" onClick={closeMenu} className="hover:text-[#321E13] transition-colors">
                    Privacy
                  </Link>
                </div>
              </div>

              <div className="col-span-1 text-left md:text-right">
                <span className="text-[#321E13] block mb-1 font-semibold">&copy; 2026</span>
                <span className="block mt-1">Atlas Studio All Rights Reserved.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
