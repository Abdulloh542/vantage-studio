import { SolumHero } from '../components/solum/SolumHero';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumMediaBreak } from '../components/solum/SolumMediaBreak';
import { SolumProcess } from '../components/solum/SolumProcess';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';
import { SolumClientStories } from '../components/solum/SolumClientStories';
import { SolumFAQ } from '../components/solum/SolumFAQ';
import { SolumLatestArticles } from '../components/solum/SolumLatestArticles';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Commercial Hero (Single Visual/Video, Selling Copy, Trust Logos) */}
      <SolumHero />

      {/* 02: Commercial Services & Capabilities (Exact Solum 50/50 Fullscreen Sequence) */}
      <SolumServices />

      {/* 03: Selected Projects Asymmetric Exhibition */}
      <SolumRecentProjects />

      {/* 04: Cinematic Media Monograph Break */}
      <SolumMediaBreak />

      {/* 05: Structured 4-Phase Delivery Methodology */}
      <SolumProcess />

      {/* 06: Transformation Proof (Interactive Before/After Technical Chamber) */}
      <SolumTransformationProof />

      {/* 07: Client Voices & Developer Testimonials */}
      <SolumClientStories />

      {/* 08: Operational Protocols & FAQ */}
      <SolumFAQ />

      {/* 09: Architectural Insights & Monograph Articles */}
      <SolumLatestArticles />
    </main>
  );
}
