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
    <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-black/10">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = projectCounts[cat] || 0;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3.5 py-1.5 text-xs uppercase tracking-widest transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
              isActive
                ? 'bg-black text-white font-medium shadow-sm'
                : 'bg-white/60 text-zinc-600 hover:text-black hover:bg-white border border-black/5'
            }`}
          >
            <span>{cat}</span>
            <span className={`text-[10px] font-mono ${isActive ? 'text-zinc-300' : 'text-zinc-400'}`}>
              ({count})
            </span>
          </button>
        );
      })}
    </div>
  );
}
