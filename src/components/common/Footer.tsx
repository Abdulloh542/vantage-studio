import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] text-white pt-12 md:pt-16 pb-8 md:pb-10 px-6 md:px-12 border-t border-[#1A1A1A] select-none overflow-hidden">
      <div className="max-w-[1480px] mx-auto">
        {/* ─────────────────────────────────────────────────────────────
            TOP SECTION: GIGANTIC MUTED WATERMARK WORDMARK
            Matches exact 'INTERO' reference in scale, weight & charcoal tone
            ───────────────────────────────────────────────────────────── */}
        <div className="w-full flex justify-center items-center overflow-hidden py-4 md:py-6 select-none">
          <h2 className="font-display text-[clamp(64px,19.5vw,340px)] font-bold tracking-[-0.03em] leading-[0.82] text-[#242424] uppercase whitespace-nowrap text-center">
            VANTAGE
          </h2>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MIDDLE SECTION: 4-COLUMN BRAND, NAV & CONTACT GRID
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pt-12 md:pt-20 pb-16 md:pb-24 items-start">
          {/* Column 1: Brand Mark + Social Slashes */}
          <div className="col-span-2 md:col-span-4 space-y-8">
            {/* Logo Mark + Name */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              {/* Geometric Shard Studio Glyph */}
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-300"
                >
                  <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.8L18.2 12 12 18.2 5.8 12 12 5.8z" />
                </svg>
              </div>
              <span className="font-sans font-semibold text-xl tracking-tight text-white">
                Vantage
              </span>
            </Link>

            {/* Social Slashes (Fb / Be / X / Ln) */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-neutral-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Fb
              </a>
              <span className="text-neutral-700">/</span>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Be
              </a>
              <span className="text-neutral-700">/</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                X
              </a>
              <span className="text-neutral-700">/</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Ln
              </a>
            </div>
          </div>

          {/* Column 2: Navigation 1 */}
          <div className="col-span-1 md:col-span-2">
            <ul className="space-y-3 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90">
              <li>
                <Link to="/" className="hover:text-neutral-400 transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-neutral-400 transition-colors">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-neutral-400 transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-neutral-400 transition-colors">
                  PROJECT
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation 2 */}
          <div className="col-span-1 md:col-span-2">
            <ul className="space-y-3 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90">
              <li>
                <Link to="/contact" className="hover:text-neutral-400 transition-colors">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/404" className="hover:text-neutral-400 transition-colors">
                  404
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="col-span-2 md:col-span-4 space-y-3 font-sans text-xs sm:text-sm text-neutral-300 md:text-left">
            <div>
              <a
                href="tel:+442079460920"
                className="hover:text-white transition-colors"
              >
                +44 (0) 20 7946 0920
              </a>
            </div>

            <div>
              <a
                href="mailto:hello@vantagestudio.com"
                className="hover:text-white transition-colors inline-block"
              >
                [ hello@vantagestudio.com ]
              </a>
            </div>

            <div className="text-neutral-400 pt-1 leading-relaxed">
              18 Berkeley Square, Suite 400,
              <br />
              London, W1J 6BQ
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM DIVIDER & CENTERED COPYRIGHT
            ───────────────────────────────────────────────────────────── */}
        <div className="border-t border-[#1C1C1C] pt-8 flex items-center justify-between text-xs font-sans text-neutral-500">
          <div className="w-6 hidden md:block" />

          <div className="w-full text-center">
            <span>
              &copy; {new Date().getFullYear()}{' '}
              <strong className="text-white font-semibold uppercase tracking-wider">
                VANTAGE STUDIO
              </strong>{' '}
              All Rights Reserved
            </span>
          </div>

          {/* Subtle Corner Mark */}
          <div className="text-neutral-600 hover:text-neutral-400 transition-colors text-right shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 inline-block">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
