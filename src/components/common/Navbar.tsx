import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
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
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const mainLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Fixed Transparent Header with Legible Difference Blend */}
      <header
        className="fixed top-0 left-0 right-0 z-50 py-5 md:py-6 px-6 md:px-10 flex items-center justify-between pointer-events-none mix-blend-difference text-white"
      >
        {/* Compact Editable Wordmark Top Left */}
        <Link
          to="/"
          className="pointer-events-auto font-sans font-semibold text-sm md:text-base tracking-[-0.04em] uppercase select-none hover:opacity-75 transition-opacity"
        >
          VANTAGE STUDIO
        </Link>

        {/* Menu Plus Small Outlined Square Top Right */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          className="pointer-events-auto flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider select-none hover:opacity-75 transition-opacity group cursor-pointer"
        >
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          <div
            className={`w-4 h-4 border border-current flex items-center justify-center transition-transform duration-250 ${
              menuOpen ? 'rotate-45' : 'group-hover:rotate-90'
            }`}
          >
            <span className="text-[10px] leading-none mb-0.5">+</span>
          </div>
        </button>
      </header>

      {/* Accessible Full-Screen Pure White Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white text-[#101010] flex flex-col justify-between pt-28 pb-10 px-6 md:px-10 overflow-y-auto"
          >
            {/* Top 4-Column Rule Line */}
            <div className="absolute top-20 left-6 right-6 md:left-10 md:right-10 border-b border-[#101010]/12" />

            {/* Main Links Stack with Hairline Rules */}
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
                    className="py-4 md:py-6"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.06em] leading-[0.95] text-[#101010] transition-opacity duration-180 ${
                        isDimmed ? 'opacity-35' : 'opacity-100'
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
                <span className="text-[#101010] block mb-1">ATELIER CONTACT</span>
                <a href="mailto:commissions@vantagestudio.com" className="hover:text-[#101010] transition-colors">
                  commissions@vantagestudio.com
                </a>
              </div>

              <div className="col-span-1">
                <span className="text-[#101010] block mb-1">HUBS</span>
                <span>London &bull; Zurich &bull; Tashkent</span>
              </div>

              <div className="col-span-1">
                <span className="text-[#101010] block mb-1">LEGAL</span>
                <div className="flex gap-4">
                  <Link to="/terms" onClick={() => setMenuOpen(false)} className="hover:text-[#101010] transition-colors">
                    Terms
                  </Link>
                  <Link to="/privacy" onClick={() => setMenuOpen(false)} className="hover:text-[#101010] transition-colors">
                    Privacy
                  </Link>
                </div>
              </div>

              <div className="col-span-1 text-left md:text-right">
                <span className="text-[#101010] block mb-1">&copy; 2026</span>
                <span>Vantage Studio &mdash; All Rights Reserved</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
