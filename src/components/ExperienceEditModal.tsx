import React, { useState } from 'react';
import { WorkExperienceItem } from '../types/portfolio';
import { X, Check } from 'lucide-react';

interface ExperienceEditModalProps {
  experience: WorkExperienceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (saved: WorkExperienceItem) => void;
}

export const ExperienceEditModal: React.FC<ExperienceEditModalProps> = ({
  experience,
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen) return null;

  const isNew = !experience || !experience.id;

  const [form, setForm] = useState<WorkExperienceItem>(() => {
    if (experience) return { ...experience };
    return {
      id: `exp-${Date.now()}`,
      company: '',
      role: '',
      location: 'Semarang, Jawa Tengah',
      period: '2024 - Sekarang',
      type: 'Manufaktur & Otomasi',
      highlights: ['Memimpin perbaikan sistem otomasi pabrik dan optimasi OEE.'],
    };
  });

  const [highlightsText, setHighlightsText] = useState(
    form.highlights ? form.highlights.join('\n') : ''
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const items = highlightsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    onSave({
      ...form,
      highlights: items.length > 0 ? items : ['Pengalaman kerja di bidang teknik.'],
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h3 className="text-base font-bold text-slate-900">
            {isNew ? 'Tambah Pengalaman Kerja' : `Edit: ${form.company}`}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Perusahaan: *</label>
            <input
              type="text"
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Contoh: PT. Manufaktur Indonesia"
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Posisi / Jabatan: *</label>
              <input
                type="text"
                required
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="Contoh: Manager Engineer"
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Periode Masa Kerja: *</label>
              <input
                type="text"
                required
                value={form.period}
                onChange={(e) => setForm({ ...form, period: e.target.value })}
                placeholder="Contoh: Sep 2023 - Mar 2024"
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Lokasi:</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="Contoh: Magelang, Jawa Tengah"
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Bidang Industri:</label>
              <input
                type="text"
                value={form.type || ''}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                placeholder="Contoh: Otomasi & FMCG"
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Poin Pencapaian & Tanggung Jawab (1 baris per poin):
            </label>
            <textarea
              rows={4}
              value={highlightsText}
              onChange={(e) => setHighlightsText(e.target.value)}
              placeholder="Membangun sistem manufaktur TPM...&#10;Merampingkan alur kerja untuk efisiensi...&#10;Membimbing tim engineering..."
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              <Check className="w-4 h-4" />
              <span>Simpan Pengalaman</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
