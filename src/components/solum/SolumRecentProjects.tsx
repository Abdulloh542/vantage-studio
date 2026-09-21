import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

export function SolumRecentProjects() {
  const pLead = PROJECTS.find((p) => p.slug === 'volga-park') || PROJECTS[0];
  const pSupport1 = PROJECTS.find((p) => p.slug === 'bunker-37') || PROJECTS[1];
  const pSupport2 = PROJECTS.find((p) => p.slug === 'effect-archi-inside') || PROJECTS[2];
  const pBroad = PROJECTS.find((p) => p.slug === 'berliner-strasse-69') || PROJECTS[3];

  return (
    <section className="w-full bg-white text-[#101010] py-16 md:py-24 px-6 md:px-10 border-b border-[#101010]/12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#101010]/12">
          {/* Column 1: Editorial Rail Marker */}
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                PROJECTS
              </span>
            </div>
          </div>

          {/* Columns 2-4: Large Heading Beginning in Column Two */}
          <div className="col-span-1 md:col-span-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.06em] text-[#101010] uppercase">
              SELECTED PROJECTS
            </h2>
            <Link
              to="/projects"
              className="solum-btn self-start sm:self-auto px-6 py-3.5 border border-[#101010] text-xs sm:text-sm font-mono uppercase tracking-wider text-[#101010] hover:bg-[#101010] hover:text-white transition-colors duration-180"
            >
              <span>ALL PROJECTS ({PROJECTS.length})</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-4 h-4 inline-block" />
              </span>
            </Link>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            LEAD EXHIBITION PROJECT (VOLGA PARK)
            Clean, high-impact architectural image card linking to full case study
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pt-10"
        >
          <Link to={`/projects/${pLead.slug}`} className="group block select-none">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-zinc-100 border border-[#101010]/12">
              <img
                src={pLead.heroImage}
                alt={pLead.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-550 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/95 text-black flex items-center justify-center pl-0.5 shadow-2xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-[11px] font-mono uppercase tracking-wider text-white border border-white/15">
                  01 // LEAD EXHIBITION &bull; {pLead.location}
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between font-mono text-sm sm:text-base text-[#101010] border-b border-[#101010]/12 pb-3">
              <span className="font-semibold uppercase tracking-wider group-hover:underline">
                {pLead.title}
              </span>
              <span className="text-xs sm:text-sm text-[#757575] tabular-nums font-normal">
                {pLead.category} &bull; {pLead.year}
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Asymmetric Supporting Exhibition Rows */}
        <div className="space-y-16 md:space-y-24 pt-16">

          {/* Row 2: Offset Supporting Items (2 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Supporting Item 1: Col 1 & 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-1 md:col-span-2"
            >
              <Link to={`/projects/${pSupport1.slug}`} className="group block select-none">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 border border-[#101010]/12">
                  <img
                    src={pSupport1.heroImage}
                    alt={pSupport1.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-550" />
                </div>
                <div className="pt-4 flex items-center justify-between font-mono text-sm sm:text-base text-[#101010] border-b border-[#101010]/12 pb-3">
                  <span className="font-semibold uppercase tracking-wider group-hover:underline">
                    {pSupport1.title}
                  </span>
                  <span className="text-xs sm:text-sm text-[#757575] tabular-nums font-normal">
                    {pSupport1.category} &bull; {pSupport1.year}
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Supporting Item 2: Col 3 & 4 (Offset with vertical gap) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-1 md:col-span-2 md:pt-16"
            >
              <Link to={`/projects/${pSupport2.slug}`} className="group block select-none">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 border border-[#101010]/12">
                  <img
                    src={pSupport2.heroImage}
                    alt={pSupport2.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-550" />
                </div>
                <div className="pt-4 flex items-center justify-between font-mono text-sm sm:text-base text-[#101010] border-b border-[#101010]/12 pb-3">
                  <span className="font-semibold uppercase tracking-wider group-hover:underline">
                    {pSupport2.title}
                  </span>
                  <span className="text-xs sm:text-sm text-[#757575] tabular-nums font-normal">
                    {pSupport2.category} &bull; {pSupport2.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Row 3: One Broad Item Below Spanning Full Columns 2 to 4 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className="col-span-1 hidden md:block pt-4">
              <span className="font-mono text-xs sm:text-sm uppercase text-[#757575] font-medium block mb-2">
                EXHIBITION 04
              </span>
              <span className="font-sans text-sm text-[#757575] leading-relaxed block font-light">
                Corporate headquarters masterplan &amp; 4K cinematic film sequence.
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-1 md:col-span-3"
            >
              <Link to={`/projects/${pBroad.slug}`} className="group block select-none">
                <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-zinc-100 border border-[#101010]/12">
                  <img
                    src={pBroad.heroImage}
                    alt={pBroad.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-550" />
                </div>
                <div className="pt-4 flex items-center justify-between font-mono text-sm sm:text-base text-[#101010] border-b border-[#101010]/12 pb-3">
                  <span className="font-semibold uppercase tracking-wider group-hover:underline">
                    {pBroad.title}
                  </span>
                  <span className="text-xs sm:text-sm text-[#757575] tabular-nums font-normal">
                    {pBroad.category} &bull; {pBroad.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
