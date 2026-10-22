import React from 'react';
import { SlidersHorizontal, FileText, CheckCircle2, Lock, Unlock, LogOut, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface NavbarProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  isEditor: boolean;
  onOpenLogin: () => void;
  onLogout: () => void;
  onOpenAdmin: () => void;
  onOpenCvModal: () => void;
  savedNotification?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onSelectLang,
  isEditor,
  onOpenLogin,
  onLogout,
  onOpenAdmin,
  onOpenCvModal,
  savedNotification,
}) => {
  const t = translations[lang].nav;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-2 sm:py-2.5">
        {/* Zone 1: Single text element wordmark + Mode indicator */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="#home"
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap hover:text-blue-700 transition-colors"
          >
            Risha A. Nenu Lema, S.T.
          </a>

          {/* Mode Pill Badge */}
          {isEditor ? (
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>{t.editorActive}</span>
            </span>
          ) : (
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
              <ShieldCheck className="w-3 h-3 text-slate-400" />
              <span>{t.hrdMode}</span>
            </span>
          )}
        </div>

        {/* Zone 2: clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-600">
          <a
            href="#portfolio"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            {t.portfolio}
          </a>
          <a
            href="#experience"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            {t.experience}
          </a>
          <a
            href="#certificates"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            {t.certificates}
          </a>
          <a
            href="#skills"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            {t.skills}
          </a>
          <a
            href="#contact"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            {t.contact}
          </a>
        </nav>

        {/* Zone 3: Language Switcher + CV Modal + Editor Login Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/80">
            <button
              onClick={() => onSelectLang('id')}
              className={`px-2 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                lang === 'id'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => onSelectLang('en')}
              className={`px-2 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => onSelectLang('ja')}
              className={`px-2 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                lang === 'ja'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="日本語 (Japanese)"
            >
              日本語
            </button>
          </div>

          {savedNotification && (
            <div className="hidden xl:flex items-center gap-1 text-xs text-emerald-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.savedDb}</span>
            </div>
          )}

          {/* View CV Button */}
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title={t.viewCv}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.viewCv}</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Editor Login Button / Editor Controls */}
          {isEditor ? (
            <div className="flex items-center gap-1.5">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
                title="Buka Panel Kelola Konten"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.manageContent}</span>
              </button>

              <button
                onClick={onLogout}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-red-600 bg-slate-100 hover:bg-red-50 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-slate-200 cursor-pointer"
                title="Keluar dari Mode Editor ke Mode HRD"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{t.logoutEditor}</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
              title="Login sebagai Editor untuk Mengubah Data"
            >
              <Lock className="w-3.5 h-3.5 text-slate-900" />
              <span>{t.loginEditor}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
