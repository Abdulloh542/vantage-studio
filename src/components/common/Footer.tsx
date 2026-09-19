import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#09090a] text-white pt-24 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.03] text-[20vw] font-display font-extrabold leading-none tracking-tight text-white">
        VANTAGE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Massive Pre-Footer Statement */}
        <div className="border-b border-white/10 pb-20 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-4 block">
                Partner With Us
              </span>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
                Let's make your project <br />
                <span className="font-semibold text-zinc-200">impossible to overlook.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <p className="text-zinc-400 text-sm max-w-sm lg:text-right font-light leading-relaxed">
                Whether you are launching an off-plan development or preparing an international architectural competition, our atelier is ready.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 hover:shadow-2xl transition-all duration-200 active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Multi-Column Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-16 text-xs">
          {/* Col 1: Brand & Studio */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs">
                  V
                </div>
                <span className="font-display text-sm font-bold tracking-[0.16em] uppercase">
                  Vantage Studio
                </span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-xs font-light">
                Cinematic visualization, CGI and AI-enhanced films for architecture, real estate and hospitality worldwide.
              </p>
            </div>
            <div className="mt-8 text-zinc-500 text-[11px] leading-relaxed">
              Global production hubs in London, Zurich & Tashkent. Serving developers across Europe, the Middle East and Central Asia.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <span className="text-[11px] uppercase tracking-widest text-zinc-500 block mb-4">
              Index
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link to="/work" className="text-zinc-300 hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-zinc-300 hover:text-white transition-colors">
                  Production Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-300 hover:text-white transition-colors">
                  Studio Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-300 hover:text-white transition-colors">
                  Contact Atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Breakdown */}
          <div className="col-span-1 md:col-span-3">
            <span className="text-[11px] uppercase tracking-widest text-zinc-500 block mb-4">
              Capabilities
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/architectural-visualization" className="text-zinc-400 hover:text-white transition-colors">
                  Architectural Visualization
                </Link>
              </li>
              <li>
                <Link to="/services/ai-films" className="text-zinc-400 hover:text-white transition-colors">
                  AI Architectural Films
                </Link>
              </li>
              <li>
                <Link to="/services/real-estate-marketing" className="text-zinc-400 hover:text-white transition-colors">
                  Real Estate Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/renovation" className="text-zinc-400 hover:text-white transition-colors">
                  Renovation & Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Coordinates & Social */}
          <div className="col-span-2 md:col-span-3">
            <span className="text-[11px] uppercase tracking-widest text-zinc-500 block mb-4">
              Direct Channels
            </span>
            <div className="space-y-3 text-zinc-300">
              <div>
                <span className="text-zinc-500 text-[10px] block uppercase tracking-wider">Project Inquiries</span>
                <a href="mailto:project@vantage.studio" className="hover:text-white transition-colors">
                  project@vantage.studio
                </a>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block uppercase tracking-wider">Press & Lectures</span>
                <a href="mailto:press@vantage.studio" className="hover:text-white transition-colors">
                  press@vantage.studio
                </a>
              </div>
              <div className="pt-2 flex items-center gap-4 text-xs tracking-wider uppercase text-zinc-400">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram ↗
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn ↗
                </a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Behance ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} VANTAGE STUDIO. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Commission</span>
            <span>Accredited B2B Visualization Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
