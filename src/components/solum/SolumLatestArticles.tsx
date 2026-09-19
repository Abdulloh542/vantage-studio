import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../../data/journal';

export function SolumLatestArticles() {
  const articles = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <section className="w-full bg-white text-[#101010] py-24 md:py-[120px] px-6 md:px-10 border-b border-[#101010]/12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header: 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-[#101010]/12 items-end">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                INSIGHTS
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.96]">
              LATEST ARTICLES
            </h2>
          </div>

          <div className="col-span-1 flex justify-start md:justify-end">
            <Link
              to="/blog"
              className="solum-btn px-6 py-3.5 border border-[#101010] text-xs sm:text-sm font-mono uppercase tracking-wider text-[#101010] hover:bg-[#101010] hover:text-white transition-colors duration-180"
            >
              <span>ALL ARTICLES ({JOURNAL_ARTICLES.length})</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-4 h-4 inline-block" />
              </span>
            </Link>
          </div>
        </div>

        {/* Uneven 4-Column Image Composition */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16">
          {/* Article 1: Spanning Columns 1 & 2 (Larger Focus) */}
          {articles[0] && (
            <div className="col-span-1 md:col-span-2">
              <Link to={`/blog/${articles[0].slug}`} className="group block select-none">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12">
                  <img
                    src={articles[0].heroImage}
                    alt={articles[0].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                  />
                  {/* Subtle Black Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                  {/* White Date Near Top */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-xs sm:text-sm text-white/95 uppercase tracking-wider bg-black/60 px-3 py-1 border border-white/20">
                      {articles[0].date} &bull; {articles[0].category}
                    </span>
                  </div>

                  {/* Title at Lower Edge */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.04em] leading-snug group-hover:text-white/90">
                      {articles[0].title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article 2: Column 3 */}
          {articles[1] && (
            <div className="col-span-1 md:col-span-1">
              <Link to={`/blog/${articles[1].slug}`} className="group block select-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12">
                  <img
                    src={articles[1].heroImage}
                    alt={articles[1].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-xs sm:text-sm text-white/95 uppercase tracking-wider bg-black/60 px-3 py-1 border border-white/20">
                      {articles[1].date}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.04em] leading-snug group-hover:text-white/90">
                      {articles[1].title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article 3: Column 4 */}
          {articles[2] && (
            <div className="col-span-1 md:col-span-1">
              <Link to={`/blog/${articles[2].slug}`} className="group block select-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12">
                  <img
                    src={articles[2].heroImage}
                    alt={articles[2].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-xs sm:text-sm text-white/95 uppercase tracking-wider bg-black/60 px-3 py-1 border border-white/20">
                      {articles[2].date}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.04em] leading-snug group-hover:text-white/90">
                      {articles[2].title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
