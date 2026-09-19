import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for sticky backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Fixed Transparent Header with High-Contrast Adaptive Controls */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-5 px-6 md:px-10 flex items-center justify-between transition-all duration-300 select-none ${
          menuOpen
            ? 'bg-transparent text-[#101010]'
            : isScrolled
            ? 'bg-[#101010]/85 backdrop-blur-md text-white border-b border-white/10 shadow-lg'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white'
        }`}
      >
        {/* Compact Wordmark Top Left */}
        <Link
          to="/"
          className={`font-sans font-bold text-sm md:text-base tracking-[-0.04em] uppercase transition-colors duration-200 ${
            menuOpen ? 'text-[#101010]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:opacity-80'
          }`}
        >
          VANTAGE STUDIO
        </Link>

        {/* High-Contrast Architectural Menu Button (Highly eye-catching & clear) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          className={`cursor-pointer flex items-center gap-3 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xl group ${
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white text-[#101010] flex flex-col justify-between pt-28 pb-10 px-6 md:px-10 overflow-y-auto select-none"
          >
            {/* Top 4-Column Rule Line */}
            <div className="absolute top-20 left-6 right-6 md:left-10 md:right-10 border-b border-[#101010]/12" />

            {/* Navigation List Container y16px -> 0, opacity 0 -> 1 in 420ms */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl w-full my-auto divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12"
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
                      duration: 0.35,
                      delay: 0.05 * idx,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="py-4 md:py-6"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.06em] leading-[0.95] text-[#101010] transition-opacity duration-180 ${
                        isDimmed ? 'opacity-45' : 'opacity-100'
                      }`}
                    >
                      <span className="font-mono text-xs text-[#757575] mr-4 md:mr-8 align-middle">
                        0{idx + 1}
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Meta & Legal / Social Links */}
            <div className="pt-8 border-t border-[#101010]/12 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-mono text-[#757575]">
              <div className="col-span-1">
                <span className="text-[#101010] block mb-1 font-medium">ATELIER CONTACT</span>
                <a href="mailto:commissions@vantagestudio.com" className="hover:text-[#101010] transition-colors">
                  commissions@vantagestudio.com
                </a>
              </div>

              <div className="col-span-1">
                <span className="text-[#101010] block mb-1 font-medium">HUBS</span>
                <span>London &bull; Zurich &bull; Tashkent</span>
              </div>

              <div className="col-span-1">
                <span className="text-[#101010] block mb-1 font-medium">LEGAL</span>
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
                <span className="text-[#101010] block mb-1 font-medium">&copy; 2026</span>
                <span>Vantage Studio &mdash; All Rights Reserved</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
