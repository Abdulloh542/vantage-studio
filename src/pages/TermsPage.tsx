import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsPage() {
  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Back link */}
        <div className="pb-8 border-b border-[#101010]/12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[#757575] hover:text-[#101010] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </Link>
        </div>

        {/* Header */}
        <div className="py-12 md:py-16 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
              GOVERNANCE &bull; VOL. 2026
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
            TERMS OF SERVICE
          </h1>
          <span className="font-mono text-xs text-[#757575] block mt-4 uppercase">
            EFFECTIVE DATE: JANUARY 1, 2026
          </span>
        </div>

        {/* Narrow Ruled Text Column */}
        <div className="max-w-[740px] mx-auto py-16 divide-y divide-[#101010]/12 font-sans text-xs sm:text-sm text-[#101010]/85 font-light leading-relaxed">
          <div className="pb-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              01 // COMMISSIONS &amp; SCOPE
            </h2>
            <p>
              Vantage Studio undertakes architectural visualization, 3D computational rendering, and cinematic film production under bespoke client commission agreements. All project specifications, milestone delivery dates, and fee schedules are formalized in writing prior to production kickoff.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              02 // INTELLECTUAL PROPERTY &amp; CLIENT ASSETS
            </h2>
            <p>
              All architectural blueprints, Revit/BIM models, drawings, and proprietary engineering calculations supplied by the client remain the sole intellectual property of the client. Vantage Studio is granted a limited operational license solely to produce the agreed deliverables.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              03 // REVISION PROTOCOLS
            </h2>
            <p>
              Standard commissions incorporate two structured milestone review stages: Milestone A (Geometry, Camera Framing, Massing) and Milestone B (Materiality, Lighting, Atmospheric Calibrations). Scope alterations after Milestone sign-off are billed under agreed day-rate amendments.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              04 // CONFIDENTIALITY &amp; MUTUAL NDA
            </h2>
            <p>
              We operate under strict mutual confidentiality protocols. Unannounced real estate schemes, planning applications, and private residential designs are never shared, exhibited, or published without express written authorization from the commissioning partner.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
