import { Link } from 'react-router-dom';

export function Footer() {
  const links = [
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'PROCESS', href: '/process' },
    { label: 'PROJECTS', href: '/work' },
    { label: 'JOURNAL', href: '/journal' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <footer className="bg-[#050505] text-white py-16 md:py-24 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-white/10">
          {/* Logo */}
          <Link to="/" className="group">
            <span className="font-display font-medium text-2xl md:text-3xl tracking-[0.2em] uppercase text-white group-hover:text-white/80 transition-colors">
              VANTAGE<span className="text-xs align-top ml-0.5 font-mono">®</span>
            </span>
          </Link>

          {/* Navigation Links with Framer line hover */}
          <nav className="flex flex-wrap items-center gap-6 md:gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors relative py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Legal & Social Bar (Interio Formula) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-[11px] text-white/40 uppercase tracking-widest">
          <div>
            © 2026 ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">
              TERMS &amp; CONDITIONS
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              INSTAGRAM ↗
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LINKEDIN ↗
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              BEHANCE ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
