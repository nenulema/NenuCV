import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  History,
  Cpu,
  MoreHorizontal,
  Award,
  Mail,
  Home,
  FileText,
  SlidersHorizontal,
  ChevronRight,
  ArrowUp,
  Lock,
} from 'lucide-react';
import { Language } from '../i18n/translations';

interface FloatingNavProps {
  lang: Language;
  isEditor?: boolean;
  onOpenLogin?: () => void;
  onOpenCvModal: () => void;
  onOpenAdmin: () => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  lang,
  isEditor = false,
  onOpenLogin,
  onOpenCvModal,
  onOpenAdmin,
}) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Labels for 3 languages
  const labels = {
    portfolio: lang === 'ja' ? 'ポートフォリオ' : lang === 'en' ? 'Portfolio' : 'Portofolio',
    experience: lang === 'ja' ? '職歴・経歴' : lang === 'en' ? 'Work History' : 'Riwayat Kerja',
    expertise: lang === 'ja' ? '専門技術' : lang === 'en' ? 'Expertise' : 'Expertise',
    more: lang === 'ja' ? 'その他' : lang === 'en' ? 'More' : 'Lainnya',
    certificates: lang === 'ja' ? '資格・実績' : lang === 'en' ? 'Certificates' : 'Sertifikat',
    contact: lang === 'ja' ? 'お問い合わせ' : lang === 'en' ? 'Contact' : 'Kontak',
    home: lang === 'ja' ? 'トップ' : lang === 'en' ? 'Top' : 'Atas',
    cv: lang === 'ja' ? '履歴書 (CV)' : lang === 'en' ? 'View CV' : 'Format CV',
    admin: isEditor
      ? (lang === 'ja' ? 'データ管理' : lang === 'en' ? 'Manage' : 'Kelola Data')
      : (lang === 'ja' ? '編集者ログイン' : lang === 'en' ? 'Editor Login' : 'Login Editor'),
  };

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const sections = ['contact', 'skills', 'certificates', 'experience', 'portfolio', 'home'];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close "more" popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    setIsMoreOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 65; // accounts for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Floating Navigation"
      className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 select-none print:hidden"
    >
      <nav className="relative bg-slate-900/90 backdrop-blur-md text-slate-300 border border-slate-700/60 shadow-xl rounded-2xl p-1.5 flex flex-col items-center gap-1.5 transition-all">
        {/* Subtle quick indicator dot for mobile/desktop */}
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-0.5 animate-pulse" />

        {/* 1. Portofolio */}
        <div className="relative group">
          <button
            onClick={() => scrollTo('portfolio')}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
              activeSection === 'portfolio'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
            aria-label={labels.portfolio}
          >
            <Briefcase className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-1.5 px-2.5 py-1 bg-slate-950 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-800 whitespace-nowrap pointer-events-none z-50">
            <span>{labels.portfolio}</span>
            <ChevronRight className="w-3 h-3 text-slate-500" />
          </div>
        </div>

        {/* 2. Riwayat Kerja */}
        <div className="relative group">
          <button
            onClick={() => scrollTo('experience')}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
              activeSection === 'experience'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
            aria-label={labels.experience}
          >
            <History className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-1.5 px-2.5 py-1 bg-slate-950 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-800 whitespace-nowrap pointer-events-none z-50">
            <span>{labels.experience}</span>
            <ChevronRight className="w-3 h-3 text-slate-500" />
          </div>
        </div>

        {/* 3. Expertise */}
        <div className="relative group">
          <button
            onClick={() => scrollTo('skills')}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
              activeSection === 'skills'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
            aria-label={labels.expertise}
          >
            <Cpu className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-1.5 px-2.5 py-1 bg-slate-950 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-800 whitespace-nowrap pointer-events-none z-50">
            <span>{labels.expertise}</span>
            <ChevronRight className="w-3 h-3 text-slate-500" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-6 h-[1px] bg-slate-700/60 my-0.5" />

        {/* 4. Lainnya (More) */}
        <div className="relative" ref={moreRef}>
          <div className="group relative">
            <button
              onClick={() => setIsMoreOpen((prev) => !prev)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
                isMoreOpen || ['certificates', 'contact'].includes(activeSection)
                  ? 'bg-slate-800 text-blue-400 shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
              aria-label={labels.more}
              aria-expanded={isMoreOpen}
            >
              <MoreHorizontal className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
            {/* Tooltip when not open */}
            {!isMoreOpen && (
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-1.5 px-2.5 py-1 bg-slate-950 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-800 whitespace-nowrap pointer-events-none z-50">
                <span>{labels.more}</span>
                <ChevronRight className="w-3 h-3 text-slate-500" />
              </div>
            )}
          </div>

          {/* Lainnya Sub-Menu Popover */}
          {isMoreOpen && (
            <div className="absolute left-full ml-3 bottom-0 w-48 sm:w-52 bg-slate-950/95 backdrop-blur-xl text-slate-200 border border-slate-800 rounded-xl shadow-2xl p-1.5 flex flex-col gap-1 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80">
                {labels.more}
              </div>

              {/* Sertifikat & Penghargaan */}
              <button
                onClick={() => scrollTo('certificates')}
                className={`w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors ${
                  activeSection === 'certificates'
                    ? 'bg-blue-600/30 text-blue-300 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{labels.certificates}</span>
              </button>

              {/* Kontak */}
              <button
                onClick={() => scrollTo('contact')}
                className={`w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors ${
                  activeSection === 'contact'
                    ? 'bg-blue-600/30 text-blue-300 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{labels.contact}</span>
              </button>

              {/* Kembali ke Atas */}
              <button
                onClick={() => scrollTo('home')}
                className="w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-lg flex items-center gap-2 text-slate-300 hover:bg-slate-800/80 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{labels.home}</span>
              </button>

              <div className="w-full h-[1px] bg-slate-800/80 my-0.5" />

              {/* Format CV Modal */}
              <button
                onClick={() => {
                  setIsMoreOpen(false);
                  onOpenCvModal();
                }}
                className="w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-lg flex items-center gap-2 text-slate-300 hover:bg-slate-800/80 hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{labels.cv}</span>
              </button>

              {/* Admin Drawer or Login Editor */}
              <button
                onClick={() => {
                  setIsMoreOpen(false);
                  if (isEditor) {
                    onOpenAdmin();
                  } else if (onOpenLogin) {
                    onOpenLogin();
                  }
                }}
                className="w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-lg flex items-center gap-2 text-slate-300 hover:bg-slate-800/80 hover:text-white transition-colors cursor-pointer"
              >
                {isEditor ? (
                  <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                )}
                <span className="truncate">{labels.admin}</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};
