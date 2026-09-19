import { SolumHero } from '../components/solum/SolumHero';
import { SolumAboutStatement } from '../components/solum/SolumAboutStatement';
import { SolumMediaBreak } from '../components/solum/SolumMediaBreak';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumHowWeWork } from '../components/solum/SolumHowWeWork';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';
import { SolumClientStories } from '../components/solum/SolumClientStories';
import { SolumFAQ } from '../components/solum/SolumFAQ';
import { SolumLatestArticles } from '../components/solum/SolumLatestArticles';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Commercial Hero */}
      <SolumHero />

      {/* 02: Solum Statement & 7+ Years Practice Metrics (Screenshot 2) */}
      <SolumAboutStatement />

      {/* 03: Cinematic Architectural Monochrome Marquee Break (Screenshot 3) */}
      <SolumMediaBreak />

      {/* 04: Selected Projects Asymmetric Exhibition (Screenshot 4) */}
      <SolumRecentProjects />

      {/* 05: Commercial Services & Capabilities (What We Do - Stacking sequence) */}
      <SolumServices />

      {/* 06: Structured Architectural Evolution (How We Work - 4 phases) */}
      <SolumHowWeWork />

      {/* 07: Transformation Proof (Interactive Before/After Technical Chamber) */}
      <SolumTransformationProof />

      {/* 08: Client Voices & Developer Testimonials */}
      <SolumClientStories />

      {/* 09: Operational Protocols & FAQ */}
      <SolumFAQ />

      {/* 10: Architectural Insights & Monograph Articles */}
      <SolumLatestArticles />
    </main>
  );
}
