import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FramerSectionHeader, FramerCard } from '../common/FramerReveal';
import { JOURNAL_ARTICLES } from '../../data/journal';

export function FramerJournalSection() {
  return (
    <section id="journal" className="bg-[#F4F2EE] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Signature Framer Section Header */}
        <FramerSectionHeader
          eyebrow="EXPERT INSIGHTS //"
          title="JOURNAL"
          subtag="*(DESIGN CONVERSATIONS)"
          theme="light"
        />

        {/* 3 Journal Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {JOURNAL_ARTICLES.slice(0, 3).map((art, idx) => (
            <FramerCard
              key={art.slug}
              delay={idx * 0.12}
              className="group bg-[#FAF9F6] border border-black/10 overflow-hidden flex flex-col justify-between hover:border-black/40 transition-all duration-300"
            >
              <Link to={`/journal/${art.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#0B0B0A]/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 font-mono text-xs text-black/50 mb-3 uppercase tracking-wider">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-normal text-[#0B0B0A] tracking-tight group-hover:text-black transition-colors mb-3">
                    {art.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-black/60 line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </Link>

              <div className="px-6 md:px-8 pb-6 pt-0 flex items-center justify-between border-t border-black/5 pt-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-black/40">
                  READ ESSAY
                </span>
                <Link
                  to={`/journal/${art.slug}`}
                  className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black group-hover:bg-[#0B0B0A] group-hover:text-white transition-all duration-200"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FramerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
