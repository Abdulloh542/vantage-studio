import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'PROCESS', href: '/process' },
    { label: 'PROJECTS', href: '/work' },
    { label: 'JOURNAL', href: '/journal' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/15 py-4'
            : 'bg-transparent border-b border-white/10 py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <span className="font-display font-medium text-lg md:text-xl tracking-[0.2em] uppercase text-white group-hover:text-white/80 transition-colors">
              VANTAGE<span className="text-[10px] align-top ml-0.5 font-mono">®</span>
            </span>
          </Link>

          {/* Desktop Navigation Links with Framer Line Hover */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative py-1 group font-mono text-xs uppercase tracking-[0.2em] text-white/75 hover:text-white transition-colors"
                >
                  <span>{link.label}</span>
                  {/* Framer signature hover line decoration */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white border border-white/20 hover:border-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-28 px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 block pb-2 border-b border-white/10">
                NAVIGATION //
              </span>
              <div className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-display uppercase tracking-wider text-white hover:text-white/70"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-4 bg-white text-black font-mono text-xs uppercase tracking-[0.2em]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex justify-between text-[11px] font-mono text-white/40 uppercase tracking-widest pt-2">
                <span>LONDON • ZURICH • TASHKENT</span>
                <span>© 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
