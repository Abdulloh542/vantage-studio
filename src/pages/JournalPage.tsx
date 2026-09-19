import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';

export function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(JOURNAL_ARTICLES.map((a) => a.category)))];

  const filteredArticles =
    selectedCategory === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === selectedCategory);

  const featured = JOURNAL_ARTICLES.find((a) => a.featured) || JOURNAL_ARTICLES[0];

  return (
    <main className="w-full bg-[#FAF9F6] text-[#0B0B0A] pt-32 pb-24 md:pb-36 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Page Header */}
        <div className="border-b border-black/10 pb-16 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-4">
            05 / ARCHITECTURAL DISCOURSE &amp; RESEARCH
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.98] text-[#0B0B0A] mb-8">
            SPATIAL INSIGHTS &amp; <br />
            <span className="italic font-serif text-black/70">COMPUTATIONAL CRAFT</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-black/70 font-sans leading-relaxed">
            Critical essays and whitepapers exploring physical daylight physics, hybrid generative AI motion pipelines, and high-conversion pre-sales strategy for the unbuilt world.
          </p>
        </div>

        {/* Featured Article Banner */}
        {selectedCategory === 'All' && featured && (
          <div className="mb-20">
            <Link
              to={`/journal/${featured.slug}`}
              className="group block bg-[#F4F2EE] border border-black/10 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.heroImage}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-black/50 mb-4 uppercase tracking-wider">
                      <span className="text-[#C5A880] font-semibold">{featured.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-[#0B0B0A] group-hover:text-[#C5A880] transition-colors tracking-tight mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-black/70 text-sm md:text-base leading-relaxed mb-6 font-sans">
                      {featured.subtitle}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-black/40 uppercase">
                      {featured.date}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0B0B0A] group-hover:text-[#C5A880] transition-colors">
                      READ ESSAY <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12 pb-6 border-b border-black/10">
          <span className="text-xs font-mono uppercase tracking-widest text-black/40 mr-2">
            FILTER DISCOURSE:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#0B0B0A] text-white'
                  : 'bg-black/5 text-black/70 hover:bg-black/10 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#F4F2EE] border border-black/10 flex flex-col justify-between overflow-hidden"
            >
              <Link to={`/journal/${article.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden bg-black/10">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 text-xs font-mono text-black/50 mb-3 uppercase tracking-wider">
                    <span className="text-[#C5A880] font-medium">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-[#0B0B0A] group-hover:text-[#C5A880] transition-colors tracking-tight mb-3">
                    {article.title}
                  </h3>
                  <p className="text-xs md:text-sm text-black/65 line-clamp-3 leading-relaxed font-sans mb-6">
                    {article.excerpt}
                  </p>
                </div>
              </Link>

              <div className="px-6 md:px-8 pb-6 pt-0 border-t border-black/5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-black/40 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
                <Link
                  to={`/journal/${article.slug}`}
                  className="font-mono text-[11px] uppercase tracking-wider text-[#0B0B0A] group-hover:text-[#C5A880] inline-flex items-center gap-1"
                >
                  READ <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Studio Whitepaper Dispatch Box */}
        <div className="mt-24 p-8 md:p-16 bg-[#0B0B0A] text-white border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
              DISPATCH &amp; MONOGRAPH ARCHIVE
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-normal tracking-tight text-white mb-3">
              Quarterly Spatial Research Papers
            </h3>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              We publish in-depth architectural visualization case studies, generative AI workflow benchmarks, and off-plan conversion metrics for real estate development executives.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF9F6] text-[#0B0B0A] text-xs font-mono uppercase tracking-[0.2em] hover:bg-[#C5A880] hover:text-black transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>REQUEST MONOGRAPHS</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
