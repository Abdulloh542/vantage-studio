import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/work') return location.pathname.startsWith('/work');
    if (path === '/services') return location.pathname.startsWith('/services');
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 ${
          isScrolled ? 'pt-3' : 'pt-5 md:pt-7'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <nav className="glass-pill-dark rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl border border-white/15 transition-all duration-300">
            {/* Brand Pill */}
            <Link
              to="/"
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Vantage Studio Homepage"
            >
              <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-display font-extrabold text-[11px] tracking-tighter shadow-md group-hover:scale-95 transition-transform">
                V
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm tracking-widest uppercase text-white group-hover:text-amber-200 transition-colors">
                  VANTAGE
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-white/10 text-[9px] uppercase tracking-wider text-zinc-300 border border-white/10 font-mono">
                  AI STUDIO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links Pill Group (Axioma style) */}
            <div className="hidden md:flex items-center bg-black/40 rounded-full p-1 border border-white/10">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                      active
                        ? 'bg-white text-black shadow-md font-semibold'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Action & CTA (Kontra / Axioma style) */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                <span>Consultation</span>
                <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                  <ArrowUpRight className="w-2.5 h-2.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={location.pathname}
      />
    </>
  );
}
