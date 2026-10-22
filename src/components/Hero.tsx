import React from 'react';
import { ProfileData } from '../types/portfolio';
import { ArrowDown, Mail, Phone, MapPin, Award, Download, Camera, FileText } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface HeroProps {
  profile: ProfileData;
  lang: Language;
  isEditor?: boolean;
  onExplorePortfolio?: () => void;
  onOpenCvModal: () => void;
  onOpenAdmin: () => void;
  onUpdatePhoto?: (newPhotoUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  lang,
  isEditor = false,
  onExplorePortfolio,
  onOpenCvModal,
  onOpenAdmin,
  onUpdatePhoto,
}) => {
  const t = translations[lang].hero;

  const handleExplore =
    onExplorePortfolio ||
    (() => {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    });

  const statusText =
    lang === 'ja'
      ? '即応可能 / 産業オートメーション & PLC'
      : lang === 'en'
      ? 'Available for Automation & PLC Engineering'
      : 'Tersedia untuk Rekayasa Otomasi & PLC';

  const summaryText =
    lang === 'ja'
      ? '制御システム、産業オートメーション、およびIoT（モノのインターネット）を専門とする電気工学士。60名規模のエンジニアリング部門のマネジメント、LEAN製造およびTPM（全員参加型生産保全）の推進、三菱・ベッコフ等のPLC/HMIプログラミング、多軸サーボロボット制御において豊富な実績を有します。'
      : lang === 'en'
      ? 'Bachelor of Electrical Engineering specializing in Control Systems, Industrial Automation, and IoT. Proven track record leading 60+ engineering personnel, driving LEAN Manufacturing & TPM, and engineering high-precision multi-axis servo and Mitsubishi PLC/HMI automation systems.'
      : profile.summary;

  return (
    <section id="summary" className="pt-4 pb-8 sm:pt-6 sm:pb-10 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Core Identity & Professional Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* System Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold max-w-fit mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{statusText}</span>
            </div>

            {/* Engineer Name & Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2 text-balance">
              {profile.name}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-blue-700 tracking-tight mb-3">
              {t.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl text-pretty mb-4">
              {summaryText}
            </p>

            {/* Quick Contact & Degree Row (Compact) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 mb-5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{t.locationLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-blue-600 transition-colors truncate"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{t.degreeLabel}</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleExplore}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer"
              >
                <span>{t.explorePortfolio}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.fullCvFormat}</span>
              </button>

              {isEditor && (
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{t.updateData}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Container (Uncropped, Full Frame Aesthetic) */}
          <div className="lg:col-span-5 relative flex">
            <div className="w-full h-full min-h-[300px] sm:min-h-[340px] max-h-[420px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md relative group flex items-center justify-center">
              {/* Blurred Ambient Backdrop so the whole frame looks rich, deep and filled */}
              <img
                src={profile.photoUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none transition-all duration-700 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 pointer-events-none" />

              {/* Foreground Photo: Completely UNCROPPED and INTACT (object-contain) */}
              <img
                src={profile.photoUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="relative z-10 max-h-[380px] w-full h-full object-contain object-bottom sm:object-center drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />

              {/* Direct photo upload button - only visible in Editor Mode */}
              {isEditor && onUpdatePhoto && (
                <label
                  className="absolute top-3 right-3 cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/85 hover:bg-slate-900 text-white rounded-lg text-[11px] font-semibold backdrop-blur-md transition-all shadow-sm z-20 border border-white/20"
                  title="Ganti Foto Profil Anda"
                >
                  <Camera className="w-3 h-3" />
                  <span>Ganti Foto</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          if (reader.result) {
                            onUpdatePhoto(reader.result as string);
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />
                </label>
              )}

              {/* Profile Details Badge at Bottom */}
              <div className="absolute bottom-3 left-3 right-3 z-20 bg-slate-950/80 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/15 text-white shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-blue-400">
                      {t.subtitle}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white leading-tight">
                      Risha Anugerah Nenu Lema, S.T.
                    </div>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-300 mt-1.5 pt-1.5 border-t border-white/10">
                  <span className="inline-flex items-center gap-1">🎓 Sanata Dharma Univ</span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span className="inline-flex items-center gap-1">📊 IPK 3.51 (GPA)</span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span className="inline-flex items-center gap-1">🏆 ICQCC Gold Award</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric Strip (Compact with Distinctive Emojis) */}
        <div className="mt-6 pt-5 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex flex-col bg-slate-50/80 p-3 rounded-xl border border-slate-200/60">
              <div className="flex items-center gap-1.5 text-lg sm:text-2xl font-extrabold text-slate-900 tabular-nums tracking-tight">
                <span className="text-lg sm:text-xl">⏱️</span>
                <span>{t.stats.expValue}</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                {t.stats.expLabel}
              </div>
              <div className="text-[11px] text-slate-500">
                {t.stats.expDetail}
              </div>
            </div>

            <div className="flex flex-col bg-slate-50/80 p-3 rounded-xl border border-slate-200/60">
              <div className="flex items-center gap-1.5 text-lg sm:text-2xl font-extrabold text-slate-900 tabular-nums tracking-tight">
                <span className="text-lg sm:text-xl">👥</span>
                <span>{t.stats.teamValue}</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                {t.stats.teamLabel}
              </div>
              <div className="text-[11px] text-slate-500">
                {t.stats.teamDetail}
              </div>
            </div>

            <div className="flex flex-col bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/60">
              <div className="flex items-center gap-1.5 text-lg sm:text-2xl font-extrabold text-emerald-700 tabular-nums tracking-tight">
                <span className="text-lg sm:text-xl">💵</span>
                <span>{t.stats.costValue}</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                {t.stats.costLabel}
              </div>
              <div className="text-[11px] text-emerald-700/80">
                {t.stats.costDetail}
              </div>
            </div>

            <div className="flex flex-col bg-blue-50/60 p-3 rounded-xl border border-blue-200/60">
              <div className="flex items-center gap-1.5 text-lg sm:text-2xl font-extrabold text-blue-700 tabular-nums tracking-tight">
                <span className="text-lg sm:text-xl">🎓</span>
                <span>{t.stats.gpaValue}</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                {t.stats.gpaLabel}
              </div>
              <div className="text-[11px] text-blue-700/80">
                {t.stats.gpaDetail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
