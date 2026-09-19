import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  const pages = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const legal = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Commission Agreement', href: '/contact' },
    { label: 'Mutual NDA Protocol', href: '/contact' },
  ];

  return (
    <footer className="w-full bg-[#111111] text-[#F6F6F2] pt-24 md:pt-32 pb-12 px-6 md:px-10 border-t border-white/12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-20 border-b border-white/12">
          {/* Col 1: Large White CTA at Upper Left */}
          <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-white inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                  INITIATE WORK
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.05em] leading-[0.95] text-white mb-4">
                START A PROJECT
              </h3>
              <p className="text-xs sm:text-sm text-[#757575] leading-relaxed max-w-xs mb-8">
                Direct commission desk for architects, developers and institutional real estate funds.
              </p>
            </div>

            {/* Split Button: Inverts in 180ms, arrow moves 6px right */}
            <Link
              to="/contact"
              className="solum-btn self-start px-6 py-3.5 border border-white text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-colors duration-180"
            >
              <span>INQUIRE NOW</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-3.5 h-3.5 inline-block" />
              </span>
            </Link>
          </div>

          {/* Col 2: Middle Pages List */}
          <div className="col-span-1 md:pl-8 border-l-0 md:border-l border-white/12">
            <span className="font-mono text-xs uppercase tracking-wider text-white/50 block mb-6">
              DIRECTORY
            </span>
            <ul className="space-y-3 font-sans text-sm text-white/80">
              {pages.map((p) => (
                <li key={p.label}>
                  <Link
                    to={p.href}
                    className="hover:text-white transition-colors duration-180 inline-block py-0.5"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Right-Middle Legal List */}
          <div className="col-span-1 md:pl-8 border-l-0 md:border-l border-white/12">
            <span className="font-mono text-xs uppercase tracking-wider text-white/50 block mb-6">
              LEGAL &amp; PROTOCOLS
            </span>
            <ul className="space-y-3 font-sans text-sm text-white/80">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="hover:text-white transition-colors duration-180 inline-block py-0.5 text-xs text-[#757575] hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Right-Bottom Single Architectural Media Block */}
          <div className="col-span-1 md:pl-8 border-l-0 md:border-l border-white/12 flex flex-col justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-white/50 block mb-4">
              ATELIER ARCHIVE
            </span>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-white/12">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Vantage Studio Architecture Atelier"
                loading="lazy"
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-white/70 uppercase">
                LONDON // BERKELEY SQ
              </div>
            </div>
          </div>
        </div>

        {/* Lower Wordmark & Metadata Area */}
        <div className="pt-16 pb-8">
          {/* Huge Muted-Gray Editable Wordmark */}
          <div className="w-full overflow-hidden select-none mb-10">
            <h2 className="font-display text-[clamp(64px,14vw,220px)] font-bold tracking-[-0.07em] leading-[0.85] text-[#222222] uppercase whitespace-nowrap">
              VANTAGE
            </h2>
          </div>

          {/* Lower 3-Column Strip: Descriptor + Socials / Credit / Copyright */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-[#757575] pt-6 border-t border-white/12 items-end">
            <div>
              <p className="text-white/80 font-sans text-xs mb-3">
                Architectural Visualization &bull; AI Spatial Films &bull; Global Property Collateral
              </p>
              <div className="flex gap-4 uppercase tracking-wider">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Behance
                </a>
              </div>
            </div>

            <div className="md:text-center">
              <span>LONDON &bull; ZURICH &bull; TASHKENT</span>
            </div>

            <div className="md:text-right">
              <span>&copy; {new Date().getFullYear()} VANTAGE STUDIO. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
