import { SolumHero } from '../components/solum/SolumHero';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumAboutStatement } from '../components/solum/SolumAboutStatement';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumHowWeWork } from '../components/solum/SolumHowWeWork';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';
import { SolumCallToAction } from '../components/solum/SolumCallToAction';

export function HomePage() {
  return (
    <main className="w-full bg-[#EDEAE4] text-[#111111]">
      {/* 01: Signature Commercial Hero */}
      <SolumHero />

      {/* 02: Omnya-Style Statement & Selected Projects Exhibition (All 6 Real Projects) */}
      <SolumRecentProjects />

      {/* 03: Studio Statement, 4 Core Disciplines & Turnaround Metrics */}
      <SolumAboutStatement />

      {/* 04: What We Deliver (Sticky Scroll Stacking Cards) */}
      <SolumServices />

      {/* 05: Structured Architectural Evolution (How We Work - 4 Phases) */}
      <SolumHowWeWork />

      {/* 06: Architectural Transformation & Spatial Decomposition (Unified Before/After + Branching Vignettes) */}
      <SolumTransformationProof />

      {/* 07: Initiate Collaboration (Minimalist Call To Action) */}
      <SolumCallToAction />
    </main>
  );
}
