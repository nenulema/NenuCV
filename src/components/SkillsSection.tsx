import React, { useState } from 'react';
import { SkillItem } from '../types/portfolio';
import { Cpu, Code2, Wrench, Users, Plus, Pencil, Trash2 } from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { getSkillLogoComponent } from './SkillLogos';
import { getLocalizedSkill } from '../i18n/localizedContent';

interface SkillsSectionProps {
  skills: SkillItem[];
  lang: Language;
  isEditor?: boolean;
  onAddSkill: () => void;
  onEditSkill?: (skill: SkillItem) => void;
  onDeleteSkill?: (skillName: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  lang,
  isEditor = false,
  onAddSkill,
  onEditSkill,
  onDeleteSkill,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = translations[lang].skills;

  const categories = [
    { id: 'all', label: t.allFields },
    { id: 'Hardware & PLC', label: t.hardwarePlc },
    { id: 'Software', label: t.software3d },
    { id: 'Methodologies', label: t.leanTpm },
    { id: 'Interpersonal', label: t.leadership },
  ];

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Hardware & PLC':
        return t.hardwarePlc;
      case 'Software':
        return t.software3d;
      case 'Methodologies':
        return t.leanTpm;
      case 'Interpersonal':
        return t.leadership;
      default:
        return category;
    }
  };

  const filteredSkills = skills.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-8 sm:py-10 border-b border-slate-200 bg-slate-50/50">
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
            <button
              onClick={onAddSkill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.addSkill}</span>
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg max-w-fit mb-5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - High Density Compact Matrix with Official Brand Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredSkills.map((rawSkill, idx) => {
            const skill = getLocalizedSkill(rawSkill, lang);
            const { PrimaryLogo, pillLogos, isCustomImage } = getSkillLogoComponent(rawSkill, rawSkill.category);

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 p-3.5 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between group relative"
              >
                <div>
                  {/* Card Header with Brand Logo */}
                  <div className="flex items-start gap-3">
                    {isEditor ? (
                      <button
                        type="button"
                        onClick={() => onEditSkill && onEditSkill(rawSkill)}
                        className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-blue-400 group-hover:bg-blue-50/40 transition-all cursor-pointer relative hover:scale-105"
                        title="Klik untuk ubah atau upload foto logo skill ini"
                      >
                        <PrimaryLogo className="w-8 h-8" />
                        {isCustomImage && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-600 rounded-full border border-white" title="Logo Kustom" />
                        )}
                      </button>
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-2xs">
                        <PrimaryLogo className="w-8 h-8" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 truncate">
                          {getCategoryLabel(rawSkill.category)}
                        </span>
                        <span className="text-xs font-bold text-slate-800 tabular-nums shrink-0">
                          {skill.level}/10
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {skill.name}
                      </h3>
                    </div>
                  </div>

                  {skill.description && (
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {skill.description}
                    </p>
                  )}

                  {/* Brand sub-badges (e.g. Mitsubishi, Beckhoff, Siemens, Omron, Lean, TPM, etc.) */}
                  {pillLogos.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100">
                      {pillLogos.map((brand, bIdx) => {
                        const BrandIcon = brand.Component;
                        return (
                          <span
                            key={bIdx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                          >
                            <BrandIcon className="w-3.5 h-3.5 shrink-0" />
                            <span>{brand.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Minimalist level progress indicator and actions */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${(skill.level / 10) * 100}%` }}
                    />
                  </div>

                  {isEditor && (
                    <div className="flex items-center gap-1 shrink-0">
                      {onEditSkill && (
                        <button
                          onClick={() => onEditSkill(rawSkill)}
                          className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
                          title="Edit Skill & Ubah Foto Logo"
                        >
                          <Pencil className="w-3 h-3" />
                          <span>Ubah Logo</span>
                        </button>
                      )}
                      {onDeleteSkill && (
                        <button
                          onClick={() => onDeleteSkill(rawSkill.name)}
                          className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer"
                          title="Hapus Skill"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
