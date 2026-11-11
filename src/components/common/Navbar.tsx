import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pauseLenis, resumeLenis, resetLenisScroll } from './SmoothScroll';
import { AtlasLogo } from './AtlasLogo';
import { triggerCurtainReplay } from './Preloader';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close menu synchronously inside useLayoutEffect on route change
  // so it unmounts in the exact same frame that Preloader covers the screen (zero 0.1s flash).
  useLayoutEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    resumeLenis();
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

  const handleMenuLinkClick = (targetPath: string) => {
    // If clicking the already-active route, replay the curtain first and close menu
    const cleanCurrent = location.pathname.replace(/\/+$/, '') || '/';
    const cleanTarget = targetPath.replace(/\/+$/, '') || '/';
    if (cleanCurrent === cleanTarget) {
      triggerCurtainReplay();
      setMenuOpen(false);
      document.body.style.overflow = '';
      resetLenisScroll();
      resumeLenis();
    }
    // For a different route, React Router updates location.pathname on click,
    // which simultaneously mounts the CSS Preloader at y=0% AND runs useLayoutEffect to close menuOpen!
  };

  const mainLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Pure Transparent Header (No Blur, No Dark Gradient Bar) */}
      {/* Top Left Bespoke Atlas Studio Wordmark with Direct Fixed mix-blend-difference */}
      {!menuOpen && (
        <div className="fixed top-0 left-0 z-[70] py-4 md:py-5 px-6 md:px-10 pointer-events-none select-none mix-blend-difference">
          <Link
            to="/"
            onClick={() => {
              resetLenisScroll();
              if (location.pathname === '/') {
                triggerCurtainReplay();
              }
            }}
            aria-label="Atlas Studio Home"
            className="pointer-events-auto text-white hover:opacity-80 transition-opacity inline-flex items-center"
          >
            <AtlasLogo variant="stacked" className="h-8 sm:h-9 md:h-10 w-auto" />
          </Link>
        </div>
      )}

      {/* Top Right High-Contrast White Menu Button */}
      <header className="fixed top-0 right-0 z-[70] py-5 md:py-6 px-6 md:px-10 pointer-events-none select-none">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          className={`pointer-events-auto cursor-pointer flex items-center gap-3 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md group ${
            menuOpen
              ? 'bg-[#101010] text-white hover:bg-black border border-[#101010]'
              : 'bg-white text-[#101010] hover:bg-[#F4F4F0] border border-white'
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

      {/* Accessible Full-Screen Pure White Overlay */}
      {menuOpen && (
        <div
          ref={overlayRef}
          data-lenis-prevent
          className="fixed inset-0 z-[60] bg-white text-[#101010] flex flex-col justify-between pt-28 pb-10 px-6 md:px-10 overflow-y-auto select-none"
        >
          {/* Top Left Logo inside White Overlay */}
          <div className="absolute top-4 md:top-5 left-6 md:left-10 z-50">
            <Link
              to="/"
              onClick={() => handleMenuLinkClick('/')}
              aria-label="Atlas Studio Home"
              className="text-[#101010] hover:opacity-80 transition-opacity inline-flex items-center"
            >
              <AtlasLogo variant="stacked" className="h-8 sm:h-9 md:h-10 w-auto" />
            </Link>
          </div>

          {/* Top 4-Column Rule Line */}
          <div className="absolute top-20 left-6 right-6 md:left-10 md:right-10 border-b border-[#101010]/12" />

          {/* Navigation List Container */}
          <div className="max-w-4xl w-full my-auto divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {mainLinks.map((link, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;
              const isDimmed = isAnyHovered && !isHovered;

              return (
                <div
                  key={link.label}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="py-4 md:py-5"
                >
                  <Link
                    to={link.href}
                    onClick={() => handleMenuLinkClick(link.href)}
                    className={`block font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.06em] leading-[0.95] text-[#101010] transition-opacity duration-180 ${
                      isDimmed ? 'opacity-45' : 'opacity-100'
                    }`}
                  >
                    <span className="font-mono text-xs text-[#757575] mr-4 md:mr-8 align-middle">
                      0{idx + 1}
                    </span>
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bottom Meta & Legal / Social Links */}
          <div className="pt-8 border-t border-[#101010]/12 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-mono text-[#757575]">
            <div className="col-span-1">
              <span className="text-[#101010] block mb-1 font-medium">ATELIER CONTACT</span>
              <a href="mailto:hello@atlasstudio.uz" className="hover:text-[#101010] transition-colors">
                hello@atlasstudio.uz
              </a>
            </div>

            <div className="col-span-1">
              <span className="text-[#101010] block mb-1 font-medium">INSTAGRAM</span>
              <a
                href="https://www.instagram.com/atlasstudio.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#101010] transition-colors"
              >
                @atlasstudio.uz ↗
              </a>
            </div>

            <div className="col-span-1">
              <span className="text-[#101010] block mb-1 font-medium">LEGAL</span>
              <div className="flex gap-4">
                <Link
                  to="/terms"
                  onClick={() => handleMenuLinkClick('/terms')}
                  className="hover:text-[#101010] transition-colors"
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  onClick={() => handleMenuLinkClick('/privacy')}
                  className="hover:text-[#101010] transition-colors"
                >
                  Privacy
                </Link>
              </div>
            </div>

            <div className="col-span-1 text-left md:text-right">
              <span className="text-[#101010] block mb-1 font-medium">&copy; 2026</span>
              <span className="block mt-1">Atlas Studio All Rights Reserved.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
