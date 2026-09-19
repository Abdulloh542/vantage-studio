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
    { label: 'Studio', href: '/about' },
    { label: 'Journal', href: '/journal' },
  ];

  const isActive = (path: string) => {
    if (path === '/work') return location.pathname.startsWith('/work');
    if (path === '/services') return location.pathname.startsWith('/services');
    if (path === '/about' || path === '/studio') return location.pathname === '/about' || location.pathname === '/studio';
    if (path === '/journal') return location.pathname.startsWith('/journal');
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-20 md:h-22 flex items-center ${
          isScrolled
            ? 'bg-[#0B0B0A]/85 backdrop-blur-md border-b border-white/[0.08]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between">
          {/* Studio Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Vantage Studio Homepage"
          >
            <div className="w-5 h-5 bg-white text-black flex items-center justify-center font-bold text-[11px] tracking-tighter transition-transform duration-300 group-hover:scale-95">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white group-hover:text-zinc-300 transition-colors">
                Vantage
              </span>
              <span className="text-[8px] tracking-[0.25em] text-zinc-400 uppercase -mt-0.5">
                ArchViz Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Clean Editorial Pacing */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1.5 ${
                    active
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[11px] font-semibold uppercase tracking-[0.16em] hover:bg-zinc-200 transition-all duration-200 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2 p-2 text-white hover:text-zinc-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
