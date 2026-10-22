import React from 'react';
import { WorkExperienceItem } from '../types/portfolio';
import { MapPin, Building2, Plus, Pencil, Trash2 } from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { getLocalizedExperience } from '../i18n/localizedContent';

interface ExperienceTimelineProps {
  experiences: WorkExperienceItem[];
  lang: Language;
  isEditor?: boolean;
  onAddExperience: () => void;
  onEditExperience: (item: WorkExperienceItem) => void;
  onDeleteExperience?: (id: string) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  lang,
  isEditor = false,
  onAddExperience,
  onEditExperience,
  onDeleteExperience,
}) => {
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-8 sm:py-10 border-b border-slate-200 bg-slate-50/60">
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
              onClick={onAddExperience}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap shadow-xs self-start md:self-auto cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.addExperience}</span>
            </button>
          )}
        </div>

        {/* Timeline Items (Compact) */}
        <div className="space-y-4">
          {experiences.map((rawExp) => {
            const exp = getLocalizedExperience(rawExp, lang);

            return (
              <div
                key={rawExp.id}
                className="bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 mb-1">
                      <span className="font-semibold text-blue-700">{exp.period}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{exp.location}</span>
                      </span>
                      {exp.type && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{exp.type}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Edit & Delete actions - only in editor mode */}
                  {isEditor && (
                    <div className="flex items-center gap-1.5 self-start shrink-0">
                      <button
                        onClick={() => onEditExperience(rawExp)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                        title={t.edit}
                      >
                        <Pencil className="w-3 h-3 text-slate-500" />
                        <span>{t.edit}</span>
                      </button>
                      {onDeleteExperience && (
                        <button
                          onClick={() => {
                            const confirmMsg =
                              lang === 'ja'
                                ? `職歴「${exp.company}」を削除してもよろしいですか？`
                                : lang === 'en'
                                ? `Are you sure you want to delete experience at ${exp.company}?`
                                : `Hapus pengalaman di ${rawExp.company}?`;
                            if (confirm(confirmMsg)) {
                              onDeleteExperience(rawExp.id);
                            }
                          }}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                          title={lang === 'ja' ? '職歴を削除' : lang === 'en' ? 'Delete Experience' : 'Hapus Pengalaman'}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Highlights & Key Achievements */}
                <div className="mt-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {t.responsibilities}
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((item, hIdx) => {
                      const lower = item.toLowerCase();
                      let emoji = '🔹';
                      if (
                        lower.includes('$') ||
                        lower.includes('cost') ||
                        lower.includes('biaya') ||
                        lower.includes('saving') ||
                        lower.includes('opex') ||
                        lower.includes('penghematan') ||
                        lower.includes('ドル')
                      ) {
                        emoji = '💵';
                      } else if (
                        lower.includes('60+') ||
                        lower.includes('members') ||
                        lower.includes('anggota') ||
                        lower.includes('personel') ||
                        lower.includes('teknisi') ||
                        lower.includes('team') ||
                        lower.includes('tim') ||
                        lower.includes('leadership') ||
                        lower.includes('組織') ||
                        lower.includes('名以上')
                      ) {
                        emoji = '👥';
                      } else if (
                        lower.includes('award') ||
                        lower.includes('gold') ||
                        lower.includes('juara') ||
                        lower.includes('winner') ||
                        lower.includes('icqcc') ||
                        lower.includes('受賞')
                      ) {
                        emoji = '🏆';
                      } else if (
                        lower.includes('mitsubishi') ||
                        lower.includes('plc') ||
                        lower.includes('servo') ||
                        lower.includes('mr-j4') ||
                        lower.includes('gt designer') ||
                        lower.includes('hmi') ||
                        lower.includes('三菱')
                      ) {
                        emoji = '⚡';
                      } else if (
                        lower.includes('lean') ||
                        lower.includes('tpm') ||
                        lower.includes('kaizen') ||
                        lower.includes('5-why') ||
                        lower.includes('8-step') ||
                        lower.includes('oee') ||
                        lower.includes('カイゼン')
                      ) {
                        emoji = '🎯';
                      } else if (
                        lower.includes('jepang') ||
                        lower.includes('japanese') ||
                        lower.includes('mandarin') ||
                        lower.includes('chinese') ||
                        lower.includes('english') ||
                        lower.includes('inggris') ||
                        lower.includes('translate') ||
                        lower.includes('multilingual') ||
                        lower.includes('通訳') ||
                        lower.includes('翻訳')
                      ) {
                        emoji = '🌐';
                      } else if (
                        lower.includes('iot') ||
                        lower.includes('sensor') ||
                        lower.includes('telemetri') ||
                        lower.includes('cloud') ||
                        lower.includes('遠隔')
                      ) {
                        emoji = '📡';
                      }

                      return (
                        <li
                          key={hIdx}
                          className="text-xs sm:text-[13px] text-slate-700 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="shrink-0 text-xs mt-0.5 select-none" aria-hidden="true">
                            {emoji}
                          </span>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
