import React, { useState } from 'react';
import { CertificateItem } from '../types/portfolio';
import { Award, GraduationCap, Plus, Pencil, ExternalLink, X, FileBadge } from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { getLocalizedCertificate } from '../i18n/localizedContent';

interface CertificatesSectionProps {
  certificates: CertificateItem[];
  lang: Language;
  isEditor?: boolean;
  onAddCertificate: () => void;
  onEditCertificate: (item: CertificateItem) => void;
  onDeleteCertificate?: (id: string) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  certificates,
  lang,
  isEditor = false,
  onAddCertificate,
  onEditCertificate,
  onDeleteCertificate,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const t = translations[lang].certificates;

  const filteredCerts = certificates.filter((c) => {
    if (filter === 'all') return true;
    return c.category === filter;
  });

  return (
    <section id="certificates" className="py-8 sm:py-10 border-b border-slate-200 bg-white">
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
              onClick={onAddCertificate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-slate-600" />
              <span>{t.addCertificate}</span>
            </button>
          )}
        </div>

        {/* Filter Tabs with Emojis */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg max-w-fit mb-5">
          {[
            { id: 'all', label: `📑 ${t.allDocs}` },
            { id: 'Award', label: `🏆 ${t.awards}` },
            { id: 'Professional', label: `📜 ${t.professional}` },
            { id: 'Academic', label: `🎓 ${t.academic}` },
            { id: 'Employment', label: `💼 ${t.employment}` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === tab.id
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of 3 columns for certificates (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerts.map((rawCert) => {
            const cert = getLocalizedCertificate(rawCert, lang);
            const isAward = rawCert.category === 'Award';
            const isAcademic = rawCert.category === 'Academic';

            // Localized category badge text with emoji
            const categoryLabel =
              lang === 'ja'
                ? isAward
                  ? '🏆 国際受賞 (Award)'
                  : isAcademic
                  ? '🎓 学位・学術証明'
                  : rawCert.category === 'Professional'
                  ? '📜 専門資格・LEAN'
                  : '💼 公式在職証明書'
                : lang === 'en'
                ? isAward
                  ? '🏆 Award & Recognition'
                  : isAcademic
                  ? '🎓 Degree & Academic'
                  : rawCert.category === 'Professional'
                  ? '📜 Professional & LEAN'
                  : '💼 Certificate of Employment'
                : isAward
                ? '🏆 Penghargaan (Award)'
                : isAcademic
                ? '🎓 Akademik & Ijazah'
                : rawCert.category === 'Professional'
                ? '📜 Profesional & LEAN'
                : '💼 Surat Pengalaman Kerja';

            return (
              <div
                key={rawCert.id}
                className={`rounded-xl border p-4 flex flex-col justify-between hover:shadow-xs transition-all group ${
                  isAward
                    ? 'bg-gradient-to-b from-amber-50/40 to-white border-amber-300 hover:border-amber-400'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isAward
                            ? 'bg-amber-100 text-amber-700 ring-2 ring-amber-200/50'
                            : isAcademic
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {isAward ? (
                          <Award className="w-4 h-4" />
                        ) : isAcademic ? (
                          <GraduationCap className="w-4 h-4" />
                        ) : (
                          <FileBadge className="w-4 h-4" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-800">{categoryLabel}</span>
                        <span aria-hidden="true" className="mx-1">·</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>

                    {isEditor && (
                      <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => onEditCertificate(rawCert)}
                          className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                          title={lang === 'ja' ? '編集' : lang === 'en' ? 'Edit' : 'Edit'}
                        >
                          <Pencil className="w-3 h-3" />
                        </button>
                        {onDeleteCertificate && (
                          <button
                            onClick={() => {
                              const confirmText =
                                lang === 'ja'
                                  ? `証明書「${cert.title}」を削除してもよろしいですか？`
                                  : lang === 'en'
                                  ? `Are you sure you want to delete certificate "${cert.title}"?`
                                  : `Hapus sertifikat "${cert.title}"?`;
                              if (confirm(confirmText)) {
                                onDeleteCertificate(rawCert.id);
                              }
                            }}
                            className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                            title={lang === 'ja' ? '削除' : lang === 'en' ? 'Delete' : 'Hapus'}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <h3
                    onClick={() => setSelectedCert(rawCert)}
                    className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 leading-snug"
                  >
                    {cert.title}
                  </h3>

                  <div className="text-[11px] font-medium text-slate-600 mt-0.5">
                    {t.issuer} <strong className="text-slate-800">{cert.issuer}</strong>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  {cert.appliedSkill && (
                    <div className="text-[10px] text-slate-500 mb-1.5 truncate">
                      <span className="font-semibold text-slate-700">{t.skill}</span> {cert.appliedSkill}
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedCert(rawCert)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCert && (() => {
        const modalCert = getLocalizedCertificate(selectedCert, lang);
        const isAward = selectedCert.category === 'Award';
        const categoryLabel =
          lang === 'ja'
            ? isAward
              ? '国際受賞 (Award)'
              : selectedCert.category === 'Academic'
              ? '学位・学術証明'
              : selectedCert.category === 'Professional'
              ? '専門資格・LEAN'
              : '公式在職証明書'
            : lang === 'en'
            ? isAward
              ? 'Award & Recognition'
              : selectedCert.category === 'Academic'
              ? 'Degree & Academic'
              : selectedCert.category === 'Professional'
              ? 'Professional & LEAN'
              : 'Certificate of Employment'
            : isAward
            ? 'Penghargaan (Award)'
            : selectedCert.category === 'Academic'
            ? 'Akademik & Ijazah'
            : selectedCert.category === 'Professional'
            ? 'Profesional & LEAN'
            : 'Surat Pengalaman Kerja';

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <span>{categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{modalCert.year}</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {modalCert.title}
                    </h3>
                    <div className="text-sm text-slate-600 mt-1">
                      {t.issuer} <strong className="text-slate-800">{modalCert.issuer}</strong>
                    </div>
                  </div>
                </div>

                {modalCert.recipient && (
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">{t.recipientLabel}</span> {modalCert.recipient}
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {t.criteriaTitle}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {modalCert.description}
                  </p>
                </div>

                {modalCert.appliedSkill && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      {t.skillTitle}
                    </h4>
                    <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs font-medium text-blue-900">
                      {modalCert.appliedSkill}
                    </div>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    const target = selectedCert;
                    setSelectedCert(null);
                    onEditCertificate(target);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  {t.editThis}
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  {t.done}
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};
