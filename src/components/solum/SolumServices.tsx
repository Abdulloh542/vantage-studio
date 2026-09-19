import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/services';

export function SolumServices() {
  const displayServices = SERVICES.slice(0, 4);

  return (
    <section className="w-full bg-[#111111] text-[#F6F6F2] py-24 md:py-[120px] px-6 md:px-10 border-b border-white/12">
      <div className="max-w-[1440px] mx-auto">
        {/* Intro: 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-white/12">
          {/* Column 1: Services Rail Label with Square Marker */}
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F6F6F2] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#F6F6F2]">
                SERVICES
              </span>
            </div>
          </div>

          {/* Column 2 & 3: What We Do Heading & Subdued Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.06em] text-white uppercase leading-[0.96]">
              WHAT WE DO
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed max-w-lg">
              We translate unbuilt spatial concepts, architectural CAD drawings and BIM models into photorealistic imagery, cinematic films and pre-sales marketing assets.
            </p>
          </div>

          {/* Column 4: Split Start a Project Button */}
          <div className="col-span-1 flex items-start md:justify-end">
            <Link
              to="/contact"
              className="solum-btn px-5 py-3.5 border border-white text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-colors duration-180"
            >
              <span>START A PROJECT</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-3.5 h-3.5 inline-block" />
              </span>
            </Link>
          </div>
        </div>

        {/* 4 Tall Panels Divided by Hairline Rules (01–04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/12 pt-16">
          {displayServices.map((srv, idx) => (
            <div
              key={srv.slug}
              className="p-6 md:p-8 flex flex-col justify-between min-h-[380px] group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div>
                <span className="font-mono text-xs text-[#757575] block mb-8">
                  0{idx + 1} // DISCIPLINE
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.04em] text-white uppercase leading-tight mb-4 group-hover:text-white">
                  {srv.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed mb-6 font-light">
                  {srv.shortDescription}
                </p>
              </div>

              {/* Concise Bullets */}
              <div className="pt-6 border-t border-white/12">
                <ul className="space-y-2">
                  {srv.deliverables.slice(0, 3).map((d) => (
                    <li key={d.name} className="flex items-center gap-2 text-xs font-mono text-white/70">
                      <span className="w-1 h-1 bg-white/40 inline-block" />
                      <span>{d.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
