import React, { useState, useEffect, useRef } from 'react';
import { SkillItem } from '../types/portfolio';
import { X, Check, Upload, Image as ImageIcon, Trash2, RotateCcw, Sparkles } from 'lucide-react';
import { AVAILABLE_SKILL_LOGOS, getSkillLogoComponent } from './SkillLogos';

interface SkillEditModalProps {
  skill: SkillItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (saved: SkillItem, originalName?: string) => void;
  onDelete?: (skillName: string) => void;
}

export const SkillEditModal: React.FC<SkillEditModalProps> = ({
  skill,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [category, setCategory] = useState<SkillItem['category']>('Hardware & PLC');
  const [level, setLevel] = useState<number>(9);
  const [description, setDescription] = useState('');
  const [customLogoUrl, setCustomLogoUrl] = useState<string>('');
  const [iconKey, setIconKey] = useState<string>('');
  const [originalName, setOriginalName] = useState<string>('');
  const [logoMode, setLogoMode] = useState<'upload' | 'preset' | 'url'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (skill) {
      setName(skill.name || '');
      setCategory(skill.category || 'Hardware & PLC');
      setLevel(skill.level || 9);
      setDescription(skill.description || '');
      setCustomLogoUrl(skill.customLogoUrl || '');
      setIconKey(skill.iconKey || '');
      setOriginalName(skill.name || '');
      if (skill.customLogoUrl) {
        setLogoMode('upload');
      } else if (skill.iconKey) {
        setLogoMode('preset');
      } else {
        setLogoMode('upload');
      }
    } else {
      setName('');
      setCategory('Hardware & PLC');
      setLevel(9);
      setDescription('');
      setCustomLogoUrl('');
      setIconKey('');
      setOriginalName('');
      setLogoMode('upload');
    }
  }, [skill, isOpen]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Read as DataURL (base64) so it's stored and rendered instantly
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        setCustomLogoUrl(reader.result);
        setIconKey(''); // clear preset when custom file is uploaded
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClearLogo = () => {
    setCustomLogoUrl('');
    setIconKey('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const savedItem: SkillItem = {
      name: name.trim(),
      category,
      level,
      description: description.trim(),
      customLogoUrl: customLogoUrl.trim() ? customLogoUrl.trim() : undefined,
      iconKey: iconKey.trim() ? iconKey.trim() : undefined,
    };

    onSave(savedItem, originalName || undefined);
    onClose();
  };

  // Preview component
  const previewData = {
    name: name || 'Skill Preview',
    category,
    customLogoUrl: customLogoUrl || undefined,
    iconKey: iconKey || undefined,
  };
  const { PrimaryLogo, brandName, isCustomImage } = getSkillLogoComponent(previewData, category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50 shrink-0">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
              {skill ? 'Editor Keterampilan & Logo' : 'Keterampilan Baru'}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
              {skill ? `Edit "${skill.name}"` : 'Tambah Skill & Logo Baru'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
          {/* Skill Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Keterampilan / Tool: *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Mitsubishi Electric PLC & Motion Control"
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Category & Level Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kategori Bidang: *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              >
                <option value="Hardware & PLC">Hardware & PLC</option>
                <option value="Software">Software & Desain 3D</option>
                <option value="Methodologies">Metodologi LEAN & TPM</option>
                <option value="Interpersonal">Kepemimpinan & Manajemen</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Tingkat Kemahiran:
                </label>
                <span className="text-xs font-bold text-blue-700 tabular-nums">{level}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={level}
                onChange={(e) => setLevel(parseInt(e.target.value, 10))}
                className="w-full accent-blue-600 cursor-pointer mt-1"
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Deskripsi Singkat / Spesifikasi:
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Contoh: GX Works3, FX5U, Q-Series, MR-J4 Servo, CC-Link IE"
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* LOGO CUSTOMIZATION SECTION */}
          <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900">
                  Foto Logo & Icon Keterampilan
                </span>
              </div>

              {/* Mode switch */}
              <div className="inline-flex rounded-md p-0.5 bg-white border border-slate-200 text-[11px]">
                <button
                  type="button"
                  onClick={() => setLogoMode('upload')}
                  className={`px-2.5 py-1 rounded font-semibold transition-all cursor-pointer ${
                    logoMode === 'upload'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Upload Foto
                </button>
                <button
                  type="button"
                  onClick={() => setLogoMode('preset')}
                  className={`px-2.5 py-1 rounded font-semibold transition-all cursor-pointer ${
                    logoMode === 'preset'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pilih Preset
                </button>
                <button
                  type="button"
                  onClick={() => setLogoMode('url')}
                  className={`px-2.5 py-1 rounded font-semibold transition-all cursor-pointer ${
                    logoMode === 'url'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Link URL
                </button>
              </div>
            </div>

            {/* Live Preview Box */}
            <div className="flex items-center gap-3 p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                <PrimaryLogo className="w-9 h-9" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-bold text-slate-500">
                  Pratinjau Badge Logo
                </div>
                <div className="text-xs font-bold text-slate-900 truncate">
                  {name || 'Nama Skill'}
                </div>
                <div className="text-[11px] text-blue-600">
                  {isCustomImage
                    ? '✓ Foto kustom logo Anda digunakan'
                    : iconKey
                    ? `Preset: ${brandName}`
                    : `Otomatis: ${brandName}`}
                </div>
              </div>
              {(customLogoUrl || iconKey) && (
                <button
                  type="button"
                  onClick={handleClearLogo}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                  title="Gunakan icon otomatis default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Tab: Upload File */}
            {logoMode === 'upload' && (
              <div className="space-y-2">
                <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-blue-300 hover:border-blue-500 rounded-xl bg-white hover:bg-blue-50/20 cursor-pointer transition-all group">
                  <Upload className="w-5 h-5 text-blue-600 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800">
                    Klik untuk Cari & Upload Foto Logo
                  </span>
                  <span className="text-[10px] text-slate-500 text-center mt-0.5">
                    Mendukung format PNG, JPG, SVG, WebP (Rekomendasi rasio 1:1 atau logo transparan)
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                {customLogoUrl && (
                  <div className="flex items-center justify-between text-xs text-slate-600 px-1">
                    <span className="truncate max-w-[280px]">Foto logo kustom tersimpan</span>
                    <button
                      type="button"
                      onClick={handleClearLogo}
                      className="text-red-600 hover:text-red-700 font-semibold cursor-pointer"
                    >
                      Hapus Foto
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Tab: Preset Built-in Brand Logos */}
            {logoMode === 'preset' && (
              <div className="space-y-2">
                <div className="text-[11px] text-slate-600 font-medium">
                  Pilih dari koleksi logo resmi industri bawaan:
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-40 overflow-y-auto p-1 bg-white rounded-lg border border-slate-200">
                  {AVAILABLE_SKILL_LOGOS.map((item) => {
                    const LogoComp = item.Component;
                    const isSelected = iconKey === item.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => {
                          setIconKey(item.key);
                          setCustomLogoUrl(''); // clear file upload
                        }}
                        className={`flex flex-col items-center p-2 rounded-lg border transition-all text-center cursor-pointer ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-2xs ring-1 ring-blue-600'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="w-7 h-7 flex items-center justify-center mb-1">
                          <LogoComp className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-semibold leading-tight line-clamp-1">
                          {item.brand}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab: Web URL */}
            {logoMode === 'url' && (
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  URL Gambar Logo (Web Link):
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <ImageIcon className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="url"
                      value={customLogoUrl}
                      onChange={(e) => {
                        setCustomLogoUrl(e.target.value);
                        setIconKey('');
                      }}
                      placeholder="https://example.com/logo-mitsubishi.png"
                      className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  {customLogoUrl && (
                    <button
                      type="button"
                      onClick={handleClearLogo}
                      className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-100 cursor-pointer"
                      title="Hapus Link"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2 shrink-0">
            {skill && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Hapus keterampilan "${skill.name}"?`)) {
                    onDelete(skill.name);
                    onClose();
                  }
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg border border-red-200 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Hapus</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm cursor-pointer transition-colors"
              >
                <Check className="w-4 h-4" />
                <span>Simpan Keterampilan & Logo</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
