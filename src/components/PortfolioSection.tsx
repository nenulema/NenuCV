import React, { useState, useMemo } from 'react';
import { ProjectItem } from '../types/portfolio';
import { Plus, ExternalLink, Pencil, Trash2, ArrowRight } from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { getLocalizedProject } from '../i18n/localizedContent';

interface PortfolioSectionProps {
  projects: ProjectItem[];
  lang: Language;
  isEditor?: boolean;
  onSelectProject: (project: ProjectItem) => void;
  onEditProject: (project: ProjectItem) => void;
  onAddProject: () => void;
  onDeleteProject?: (id: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  lang,
  isEditor = false,
  onSelectProject,
  onEditProject,
  onAddProject,
  onDeleteProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = translations[lang].portfolio;

  const categories = useMemo(() => {
    return [
      { id: 'all', label: t.allProjects },
      { id: 'Industrial IoT', label: 'Industrial IoT' },
      { id: 'Robotics & CNC', label: 'Robotics & CNC' },
      { id: 'PLC & HMI', label: 'PLC & HMI' },
      { id: 'Embedded & Drone', label: 'Embedded & Drone' },
    ];
  }, [t.allProjects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section id="portfolio" className="py-8 sm:py-10 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
              {t.kicker}
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {isEditor && (
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={onAddProject}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t.addProject}</span>
              </button>
            </div>
          )}
        </div>

        {/* Filter Bar (Compact) */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg max-w-fit mb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredProjects.map((rawProj) => {
            const project = getLocalizedProject(rawProj, lang);

            return (
              <div
                key={rawProj.id}
                className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
              >
                {/* Media Image Box */}
                <div
                  className="relative aspect-[16/9] bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(rawProj)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top quick action pills for edit / delete - ONLY visible in Editor Mode */}
                  {isEditor && (
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditProject(rawProj);
                        }}
                        className="p-1.5 text-white bg-slate-950/70 hover:bg-slate-900 backdrop-blur-md rounded-md transition-colors cursor-pointer"
                        title="Edit Proyek"
                        aria-label="Edit Proyek"
                      >
                        <Pencil className="w-3 h-3" />
                      </button>
                      {onDeleteProject && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm(`Hapus proyek "${rawProj.title}"?`)) {
                              onDeleteProject(rawProj.id);
                            }
                          }}
                          className="p-1.5 text-red-300 hover:text-white bg-slate-950/70 hover:bg-red-700 backdrop-blur-md rounded-md transition-colors cursor-pointer"
                          title="Hapus Proyek"
                          aria-label="Hapus Proyek"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  )}

                  {/* Bottom info on hover */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                    <span className="truncate text-slate-300">{project.client}</span>
                    <span className="shrink-0 text-blue-300 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold">
                      <span>{t.viewDetails}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata line */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1.5">
                      <span className="font-semibold text-blue-700">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{project.client}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProject(rawProj)}
                      className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech stack footer */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1.5">
                    <div className="flex flex-wrap gap-1 max-w-[75%]">
                      {project.techStack.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] text-slate-400 self-center">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectProject(rawProj)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-800 hover:text-blue-600 transition-colors shrink-0 cursor-pointer"
                    >
                      <span>{t.specifications}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <p className="text-xs text-slate-500">
              {t.emptyText}
            </p>
            {isEditor && (
              <button
                onClick={onAddProject}
                className="mt-2.5 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
              >
                {t.addNow}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
