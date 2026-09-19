import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPage() {
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
              PRIVACY POLICY &bull; VOL. 2026
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
            PRIVACY POLICY
          </h1>
          <span className="font-mono text-xs text-[#757575] block mt-4 uppercase">
            EFFECTIVE DATE: JANUARY 1, 2026
          </span>
        </div>

        {/* Narrow Ruled Text Column */}
        <div className="max-w-[740px] mx-auto py-16 divide-y divide-[#101010]/12 font-sans text-xs sm:text-sm text-[#101010]/85 font-light leading-relaxed">
          <div className="pb-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              01 // DATA COLLECTION ETHOS
            </h2>
            <p>
              Vantage Studio operates on a strict minimization principle. We only collect information provided directly through our project brief forms, contract agreements, or direct correspondence for the sole purpose of evaluating commissions and delivering architectural visualization services.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              02 // PROJECT DATA &amp; CLOUD STORAGE
            </h2>
            <p>
              Architectural models, CAD drawings, and site photogrammetry are stored on encrypted European servers subject to rigorous access permissions. We never sell, monetize, or disclose client project files to third-party marketing entities.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              03 // ANALYTICS &amp; COOKIES
            </h2>
            <p>
              Our website uses lightweight, privacy-focused analytical measurement to gauge traffic volume and technical performance without tracking personal user identities across external web services.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              04 // PRIVACY CONTACT
            </h2>
            <p>
              For data access, correction, or deletion requests under GDPR or international privacy laws, contact our data protection desk directly at privacy@vantagestudio.com.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
