import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface FooterProps {
  lang: Language;
  isEditor?: boolean;
  onOpenLogin?: () => void;
  onOpenCvModal: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  isEditor = false,
  onOpenLogin,
  onOpenCvModal,
  onOpenAdmin,
}) => {
  const tNav = translations[lang].nav;
  const tFooter = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="text-lg font-bold text-white tracking-tight">
              Risha Anugerah Nenu Lema, S.T.
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {tFooter.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#portfolio" className="hover:text-white transition-colors">
              {tNav.portfolio}
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              {tNav.experience}
            </a>
            <a href="#certificates" className="hover:text-white transition-colors">
              {tNav.certificates}
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              {tNav.skills}
            </a>
            <button
              onClick={onOpenCvModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Curriculum Vitae
            </button>
            {isEditor ? (
              <button
                onClick={onOpenAdmin}
                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                {tNav.manageContent}
              </button>
            ) : (
              <button
                onClick={onOpenLogin}
                className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                {tNav.loginEditor}
              </button>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Risha Anugerah Nenu Lema. {tFooter.copyright}
          </div>
          <div>
            {tFooter.poweredBy}
          </div>
        </div>
      </div>
    </footer>
  );
};
