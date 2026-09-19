import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-[#0C0C0C] text-[#F6F6F2] pt-20 md:pt-28 pb-6 md:pb-10 px-6 md:px-12 border-t border-white/10 select-none overflow-hidden">
      <div className="max-w-[1520px] mx-auto">
        {/* ─────────────────────────────────────────────────────────────
            TOP ROW: NEWSLETTER SUBSCRIBE + NAV / SOCIALS / CONTACT
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 md:pb-24 items-start">
          {/* Left Column: Studio Insights & Updates */}
          <div className="lg:col-span-5 max-w-md space-y-6">
            <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight leading-snug">
              Studio Insights &amp; <br />Updates
            </h3>

            {subscribed ? (
              <div className="text-xs font-mono text-white py-2">
                ✓ THANK YOU FOR SUBSCRIBING
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center justify-between border-b border-neutral-700 focus-within:border-white transition-colors pb-2.5 max-w-sm"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="bg-transparent text-sm font-sans text-white placeholder-neutral-500 focus:outline-none w-full pr-4"
                />
                <button
                  type="submit"
                  className="text-xs font-mono uppercase tracking-wider text-white hover:opacity-75 transition-opacity underline cursor-pointer whitespace-nowrap shrink-0"
                >
                  Subscribe ↗
                </button>
              </form>
            )}
          </div>

          {/* Right Columns: Nav + Socials + Coordinates */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
            {/* Column 1: Main Pages */}
            <div className="space-y-3">
              <ul className="space-y-2.5 font-sans text-sm text-neutral-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Social Links */}
            <div className="space-y-3">
              <ul className="space-y-2.5 font-sans text-sm text-neutral-400">
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Coordinates */}
            <div className="col-span-2 sm:col-span-1 space-y-2.5 font-sans text-sm text-neutral-400">
              <div>
                <a
                  href="mailto:hello@vantagestudio.com"
                  className="block hover:text-white transition-colors"
                >
                  hello@vantagestudio.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+442079460920"
                  className="block hover:text-white transition-colors"
                >
                  (+44) 20 7946 0920
                </a>
              </div>
              <div>
                <span className="block text-neutral-400">
                  London &bull; Zurich &bull; Tashkent
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MIDDLE ROW: LEGAL LINKS & RIGHTS
            ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 pb-10 text-xs font-sans text-neutral-500">
          <div className="flex items-center gap-2.5">
            <Link to="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-neutral-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} Vantage Studio &mdash; All Rights Reserved</span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM GRAND FINALE: MASSIVE "Vantage Studio®" WORDMARK
            Matches exact reference layout in Title Case with ® symbol
            ───────────────────────────────────────────────────────────── */}
        <div className="w-full pt-4 overflow-hidden">
          <h2 className="font-display text-[clamp(44px,13.2vw,240px)] font-bold tracking-[-0.04em] leading-[0.85] text-white whitespace-nowrap">
            Vantage Studio<sup className="text-[0.45em] ml-1 font-normal font-sans align-super">&reg;</sup>
          </h2>
        </div>
      </div>
    </footer>
  );
}
