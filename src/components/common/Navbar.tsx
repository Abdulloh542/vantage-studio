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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-black/60 backdrop-blur-xl border-b border-white/[0.08]'
            : 'py-5 md:py-7 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Studio Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Vantage Studio Homepage"
          >
            <div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs tracking-tighter transition-transform duration-300 group-hover:scale-95">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-[0.18em] uppercase text-white group-hover:text-zinc-200 transition-colors">
                Vantage
              </span>
              <span className="text-[8px] tracking-[0.24em] text-zinc-400 uppercase -mt-0.5">
                Creative Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Floating Center Pill */}
          <nav className="hidden md:flex items-center gap-1 glass-panel rounded-full px-4 py-1.5 border border-white/10 shadow-lg">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[11px] uppercase tracking-widest px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    active
                      ? 'bg-white/15 text-white font-medium'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 hover:shadow-xl transition-all duration-200 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
