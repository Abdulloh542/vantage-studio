interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  projectCounts: Record<string, number>;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  projectCounts,
}: ProjectFilterProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 no-scrollbar border-b border-white/10">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = projectCounts[cat] || 0;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-200 whitespace-nowrap flex items-center gap-2 border ${
              isActive
                ? 'bg-white text-black font-semibold border-white shadow-xl scale-105'
                : 'glass-pill-dark text-zinc-300 hover:text-white hover:bg-white/10 border-white/10'
            }`}
          >
            <span>{cat}</span>
            <span className={`text-[10px] font-mono ${isActive ? 'text-zinc-600' : 'text-zinc-400'}`}>
              ({count})
            </span>
          </button>
        );
      })}
    </div>
  );
}
