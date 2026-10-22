import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, Calendar, User, Cpu, Sparkles, Pencil, Layers } from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { getLocalizedProject } from '../i18n/localizedContent';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  isEditor?: boolean;
  onClose: () => void;
  onEdit: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  isEditor = false,
  onClose,
  onEdit,
}) => {
  if (!project) return null;

  const t = translations[lang].portfolio.modal;
  const localized = getLocalizedProject(project, lang);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span>{localized.category}</span>
            <span aria-hidden="true">·</span>
            <span>{localized.year}</span>
          </div>

          <div className="flex items-center gap-2">
            {isEditor && (
              <button
                onClick={() => {
                  onClose();
                  onEdit(project);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>{t.editProject}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media slot */}
        <div className="relative w-full aspect-[16/9] max-h-[420px] bg-slate-900 overflow-hidden">
          <img
            src={localized.imageUrl}
            alt={localized.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {localized.metrics && (
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto px-4 py-2 bg-slate-950/85 backdrop-blur-md rounded-lg border border-slate-800 text-white text-xs font-medium">
              <span className="text-slate-400">{t.impactLabel}</span> {localized.metrics}
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {localized.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-2">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <strong className="font-semibold text-slate-700">{t.clientLabel}</strong> {localized.client}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{localized.year}</span>
              </span>
              {localized.madeWith && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-600">
                    <strong>{t.teamLabel}</strong> {localized.madeWith}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Project Goals */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{t.goalsTitle}</span>
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {localized.goals}
            </p>
          </div>

          {/* Summary / Technical Solution */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-slate-600" />
              <span>{t.summaryTitle}</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {localized.summary}
            </p>
          </div>

          {/* Tech Stack List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-slate-600" />
              <span>{t.techTitle}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {localized.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-800 rounded-md border border-slate-200/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {t.closePreview}
          </button>
        </div>
      </div>
    </div>
  );
};
