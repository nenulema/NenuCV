import React, { useState, useEffect, useRef } from 'react';
import { X, Lock, Unlock, Eye, EyeOff, ShieldCheck, AlertCircle, Check } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface EditorLoginModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const EditorLoginModal: React.FC<EditorLoginModalProps> = ({
  isOpen,
  lang,
  onClose,
  onLoginSuccess,
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPassword('');
      setError(null);
      setIsShaking(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError(
        lang === 'ja'
          ? 'パスワードを入力してください。'
          : lang === 'en'
          ? 'Please enter the editor password.'
          : 'Silakan masukkan password editor.'
      );
      return;
    }

    // Official user-designated password: 405037
    if (password === '405037') {
      setError(null);
      onLoginSuccess();
      onClose();
    } else {
      setError(
        lang === 'ja'
          ? 'パスワードが正しくありません。アクセスが拒否されました。'
          : lang === 'en'
          ? 'Incorrect password. Editor access denied.'
          : 'Password salah! Akses editor ditolak.'
      );
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className={`relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 transition-transform ${
          isShaking ? 'animate-bounce' : ''
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                {lang === 'ja'
                  ? '編集者ログイン (管理者)'
                  : lang === 'en'
                  ? 'Editor Login (Admin)'
                  : 'Login Mode Editor'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {lang === 'ja'
                  ? 'ポートフォリオ管理・編集認証'
                  : lang === 'en'
                  ? 'Portfolio Management & Edit Authentication'
                  : 'Autentikasi Pengeditan Portofolio'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            {lang === 'ja'
              ? 'パスワードを入力すると、プロジェクト・経歴・資格・スキルロゴの編集機能が有効になります。'
              : lang === 'en'
              ? 'Enter the editor password to activate full editing capabilities across projects, timeline, certificates, and skill logos.'
              : 'Masukkan password editor untuk mengaktifkan seluruh fitur penambahan, pengubahan, dan penghapusan data portofolio serta logo.'}
          </p>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {lang === 'ja' ? '編集者パスワード' : lang === 'en' ? 'Editor Password' : 'Password Editor:'}
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                placeholder={
                  lang === 'ja'
                    ? 'パスワードを入力'
                    : lang === 'en'
                    ? 'Enter password'
                    : 'Masukkan password (6 digit)'
                }
                className="w-full bg-white border border-slate-300 rounded-lg pl-3.5 pr-10 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-mono tracking-wider"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-700 rounded transition-colors cursor-pointer"
                title={showPassword ? 'Sembunyikan' : 'Lihat'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-2 bg-red-50 p-2 rounded-lg border border-red-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-700">
                {lang === 'ja' ? 'HR / 採用担当者の皆様へ: ' : lang === 'en' ? 'For HR / Recruiters: ' : 'Untuk HRD / Rekruiter: '}
              </span>
              <span>
                {lang === 'ja'
                  ? 'パスワードをお持ちでない場合は、この画面を閉じて通常通り閲覧いただけます。'
                  : lang === 'en'
                  ? 'If you are reviewing this portfolio, please close this dialog to view in full HR read-only mode.'
                  : 'Jika Anda meninjau portofolio ini, silakan tutup modal ini untuk tetap berada di Mode HRD (Hanya Lihat).'}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'ja' ? '閉じる (閲覧モード)' : lang === 'en' ? 'Close (HR Mode)' : 'Batal (Mode HRD)'}
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>{lang === 'ja' ? 'ログイン' : lang === 'en' ? 'Unlock Editor' : 'Masuk Mode Editor'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
