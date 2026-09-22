import { SolumHero } from '../components/solum/SolumHero';
import { SolumAboutStatement } from '../components/solum/SolumAboutStatement';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumHowWeWork } from '../components/solum/SolumHowWeWork';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Commercial Hero */}
      <SolumHero />

      {/* 02: Studio Statement & What We Do */}
      <SolumAboutStatement />

      {/* 03: Selected Projects Asymmetric Exhibition */}
      <SolumRecentProjects />

      {/* 04: Commercial Services & Capabilities (Stacking sequence) */}
      <SolumServices />

      {/* 05: Structured Architectural Evolution (How We Work - 4 phases) */}
      <SolumHowWeWork />

      {/* 06: Architectural Transformation & Spatial Decomposition (Unified Before/After + Branching Vignettes) */}
      <SolumTransformationProof />
    </main>
  );
}
