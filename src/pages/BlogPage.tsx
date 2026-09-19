import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';

const CATEGORIES = ['All', 'CGI Craft', 'AI Technology', 'Real Estate Strategy'];

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Debounce search 200ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 200);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter((article) => {
      const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        debouncedSearch.trim() === '' ||
        article.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(debouncedSearch.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, debouncedSearch]);

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header: Oversized Insights Title & Right Descriptive Copy */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                EDITORIAL DISCOURSE
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
              INSIGHTS
            </h1>
          </div>

          <div className="col-span-1">
            <span className="font-mono text-xs text-[#757575] block mb-2">
              DISCOURSE SUMMARY
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
              Research, technical essays, and strategic notes on architectural daylight physics, neural video pipelines, and capital formation.
            </p>
          </div>
        </div>

        {/* Content Layout: Left Rail Search & Filters + Asymmetric 3-Column CMS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-16 items-start">
          {/* Left Rail: Search Field & Category Filters */}
          <div className="col-span-1 md:sticky md:top-28 space-y-8">
            {/* Search Input */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-3">
                SEARCH ARCHIVE
              </span>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search keywords..."
                  className="w-full bg-white border border-[#101010]/15 py-2.5 pl-3 pr-8 text-xs font-mono text-[#101010] placeholder-[#757575] focus:outline-none focus:border-[#101010] transition-colors"
                />
                <Search className="w-3.5 h-3.5 text-[#757575] absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Category Filters */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-4">
                CATEGORIES
              </span>
              <div className="space-y-3">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 cursor-pointer ${
                        isActive
                          ? 'text-[#101010] font-semibold flex items-center'
                          : 'text-[#757575] hover:text-[#101010]'
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-[#101010] inline-block mr-2" />
                      )}
                      <span>{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Asymmetric Three-Column Photo-Led CMS Grid */}
          <div className="col-span-1 md:col-span-3">
            {filteredArticles.length === 0 ? (
              /* Real Empty State */
              <div className="py-24 text-center border border-[#101010]/12 p-12">
                <span className="font-mono text-xs text-[#757575] uppercase block mb-3">
                  00 // ARCHIVE EMPTY
                </span>
                <h3 className="font-display text-2xl font-semibold uppercase text-[#101010] mb-4">
                  NO ARTICLES MATCH YOUR SEARCH
                </h3>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="solum-btn px-5 py-2.5 border border-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-[#101010] hover:text-white transition-colors"
                >
                  CLEAR SEARCH
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, idx) => (
                  <div
                    key={article.slug}
                    className={idx === 0 ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'}
                  >
                    <Link to={`/blog/${article.slug}`} className="group block select-none">
                      <div
                        className={`relative ${
                          idx === 0 ? 'aspect-[16/10]' : 'aspect-[4/5]'
                        } w-full overflow-hidden bg-zinc-900 border border-[#101010]/12`}
                      >
                        <img
                          src={article.heroImage}
                          alt={article.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                        />
                        {/* Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                        {/* Date at Top */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="font-mono text-[11px] text-white/90 uppercase tracking-wider bg-black/50 px-2.5 py-1 border border-white/15">
                            {article.date} &bull; {article.readTime}
                          </span>
                        </div>

                        {/* White Title at Bottom */}
                        <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-white/60 block mb-1">
                            {article.category}
                          </span>
                          <h3
                            className={`font-display font-semibold tracking-[-0.04em] leading-snug group-hover:text-white/90 ${
                              idx === 0 ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg'
                            }`}
                          >
                            {article.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
