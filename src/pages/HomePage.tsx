import { SolumHero } from '../components/solum/SolumHero';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumMediaBreak } from '../components/solum/SolumMediaBreak';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumProcess } from '../components/solum/SolumProcess';
import { SolumClientStories } from '../components/solum/SolumClientStories';
import { SolumFAQ } from '../components/solum/SolumFAQ';
import { SolumLatestArticles } from '../components/solum/SolumLatestArticles';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Opening Motion & Exhibition Hero */}
      <SolumHero />

      {/* 02: Transformation Proof (Interactive Before/After Slider & 4 Scenarios) */}
      <SolumTransformationProof />

      {/* 03: Selected Projects Asymmetric Exhibition */}
      <SolumRecentProjects />

      {/* 04: Media Break with Restrained Parallax */}
      <SolumMediaBreak />

      {/* 05: Disciplines & Services Deep Contrast Section */}
      <SolumServices />

      {/* 06: Structured 4-Phase Delivery Methodology */}
      <SolumProcess />

      {/* 07: Client Voices & Testimonial Rail */}
      <SolumClientStories />

      {/* 08: Operational FAQ Accordion */}
      <SolumFAQ />

      {/* 09: Latest Architectural Insights & Journal */}
      <SolumLatestArticles />
    </main>
  );
}
