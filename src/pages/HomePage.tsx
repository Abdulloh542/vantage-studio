import { SolumHero } from '../components/solum/SolumHero';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumHowWeWork } from '../components/solum/SolumHowWeWork';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumMediaBreak } from '../components/solum/SolumMediaBreak';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';
import { SolumClientStories } from '../components/solum/SolumClientStories';
import { SolumFAQ } from '../components/solum/SolumFAQ';
import { SolumLatestArticles } from '../components/solum/SolumLatestArticles';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Commercial Hero */}
      <SolumHero />

      {/* 02: Commercial Services & Capabilities (What We Do) */}
      <SolumServices />

      {/* 03: Structured Architectural Evolution (How We Work) */}
      <SolumHowWeWork />

      {/* 04: Selected Projects Asymmetric Exhibition */}
      <SolumRecentProjects />

      {/* 05: Cinematic Media Monograph Break */}
      <SolumMediaBreak />

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
