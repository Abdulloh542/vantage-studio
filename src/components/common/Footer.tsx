import { Link } from 'react-router-dom';
import { AtlasLogo } from './AtlasLogo';

export function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] text-white pt-12 md:pt-16 pb-8 md:pb-10 px-6 md:px-12 border-t border-[#1A1A1A] select-none overflow-hidden">
      <div className="max-w-[1480px] mx-auto">
        {/* ─────────────────────────────────────────────────────────────
            TOP SECTION: GIGANTIC MUTED WATERMARK WORDMARK (BESPOKE ATLAS SERIF)
            ───────────────────────────────────────────────────────────── */}
        <div className="w-full flex justify-center items-center overflow-hidden py-4 md:py-6 select-none">
          <AtlasLogo
            variant="wordmark"
            className="w-full max-w-[1160px] h-auto text-[#242424] mx-auto"
          />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MIDDLE SECTION: 4-COLUMN BRAND, NAV & CONTACT GRID
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pt-12 md:pt-20 pb-16 md:pb-24 items-start">
          {/* Column 1: Brand Mark + Instagram & Social Slashes */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            {/* Logo Mark + Bespoke Stacked Wordmark */}
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <AtlasLogo
                variant="badge"
                className="w-11 h-11 rounded-lg shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <AtlasLogo
                variant="stacked"
                className="h-9 w-auto text-white group-hover:opacity-85 transition-opacity"
              />
            </Link>

            {/* Official Instagram Badge Link */}
            <div>
              <a
                href="https://www.instagram.com/atlasstudio.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.06] hover:bg-[#F5EDE2] text-white hover:text-[#321E13] border border-white/15 transition-all duration-200 text-xs font-mono tracking-wider group"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@atlasstudio.uz</span>
                <span className="opacity-60 group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>

            {/* Social Slashes (Ig / Be / X / Ln) */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-neutral-400">
              <a
                href="https://www.instagram.com/atlasstudio.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-[#F5EDE2] transition-colors"
              >
                Instagram
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
                  PROJECTS
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
                href="mailto:hello@atlasstudio.uz"
                className="hover:text-white transition-colors inline-block"
              >
                [ hello@atlasstudio.uz ]
              </a>
            </div>

            <div>
              <a
                href="https://www.instagram.com/atlasstudio.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-block text-neutral-400"
              >
                instagram.com/atlasstudio.uz ↗
              </a>
            </div>

            <div className="text-neutral-400 pt-1 leading-relaxed">
              Tashkent &bull; London &bull; Zurich
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
                ATLAS STUDIO
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
