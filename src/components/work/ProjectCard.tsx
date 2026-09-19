import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: string;
  className?: string;
}

export function ProjectCard({
  project,
  aspectRatio = 'aspect-[16/10]',
  className = '',
}: ProjectCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      data-cursor="VIEW"
      className={`group block overflow-hidden ${className}`}
    >
      <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-200 border border-black/5`}>
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating Category Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-0.5 bg-black/70 backdrop-blur-sm text-[9px] uppercase tracking-widest text-zinc-200 font-mono">
            {project.category}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-light tracking-tight text-black group-hover:text-zinc-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-500 font-light mt-0.5">
            {project.location} • {project.year}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.services.slice(0, 2).map((s) => (
              <span
                key={s}
                className="text-[10px] text-zinc-400 uppercase tracking-wider"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="w-7 h-7 rounded-full border border-black/15 flex items-center justify-center text-black group-hover:border-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
