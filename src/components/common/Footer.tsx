import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#060709] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.03] text-[20vw] font-display font-black leading-none tracking-tighter text-white">
        VANTAGE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Massive Pre-Footer Statement */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 mb-3 block font-mono">
                Partner With Us
              </span>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                Let's make your project <br />
                <span className="font-normal italic text-amber-200/90 font-serif">
                  impossible to overlook.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <p className="text-zinc-300 text-sm max-w-sm lg:text-right font-light leading-relaxed">
                Whether launching an off-plan development or preparing an international architectural competition, our atelier is ready.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <span>Start a Project</span>
                <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                  <ArrowUpRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Multi-Column Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-16 text-xs">
          {/* Col 1: Brand & Studio */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-display font-black text-[10px]">
                  V
                </div>
                <span className="font-display text-sm font-bold tracking-widest uppercase text-white">
                  Vantage Studio
                </span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-xs font-light">
                Cinematic visualization, CGI and AI-enhanced films for architecture, real estate and hospitality worldwide.
              </p>
            </div>
            <div className="mt-8 text-zinc-500 text-[11px] leading-relaxed font-mono">
              Global production hubs in London, Zurich & Tashkent.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <span className="text-[11px] uppercase tracking-widest text-zinc-400 block mb-4 font-mono">
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
            <span className="text-[11px] uppercase tracking-widest text-zinc-400 block mb-4 font-mono">
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
            <span className="text-[11px] uppercase tracking-widest text-zinc-400 block mb-4 font-mono">
              Direct Channels
            </span>
            <div className="space-y-3 text-zinc-300">
              <div>
                <span className="text-zinc-500 text-[10px] block uppercase tracking-wider font-mono">Project Inquiries</span>
                <a href="mailto:project@vantage.studio" className="hover:text-amber-200 transition-colors">
                  project@vantage.studio
                </a>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block uppercase tracking-wider font-mono">Press & Lectures</span>
                <a href="mailto:press@vantage.studio" className="hover:text-amber-200 transition-colors">
                  press@vantage.studio
                </a>
              </div>
              <div className="pt-2 flex items-center gap-3 text-xs tracking-wider uppercase text-zinc-400">
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} VANTAGE STUDIO LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6 text-zinc-400">
            <span>TERMS OF ENGAGEMENT</span>
            <span>PRIVACY DISCLOSURE</span>
            <span>NDA PROTOCOLS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
