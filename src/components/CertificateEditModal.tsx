import React, { useState } from 'react';
import { CertificateItem } from '../types/portfolio';
import { X, Check } from 'lucide-react';

interface CertificateEditModalProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (saved: CertificateItem) => void;
}

export const CertificateEditModal: React.FC<CertificateEditModalProps> = ({
  certificate,
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen) return null;

  const isNew = !certificate || !certificate.id;

  const [form, setForm] = useState<CertificateItem>(() => {
    if (certificate) return { ...certificate };
    return {
      id: `cert-${Date.now()}`,
      title: '',
      issuer: '',
      year: new Date().getFullYear().toString(),
      category: 'Award',
      description: '',
      appliedSkill: '',
      recipient: 'Risha Anugerah Nenu Lema',
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h3 className="text-base font-bold text-slate-900">
            {isNew ? 'Tambah Sertifikat / Penghargaan' : `Edit: ${form.title}`}
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
            <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Sertifikat / Penghargaan: *</label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Contoh: Certified Automation Professional"
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Penerbit / Institusi: *</label>
              <input
                type="text"
                required
                value={form.issuer}
                onChange={(e) => setForm({ ...form, issuer: e.target.value })}
                placeholder="Contoh: IQMA / Siemens Academy"
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tahun Perolehan: *</label>
              <input
                type="text"
                required
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                placeholder="Contoh: 2022"
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Kategori: *</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              >
                <option value="Award">Penghargaan (Award)</option>
                <option value="Professional">Sertifikasi Profesional / LEAN</option>
                <option value="Academic">Akademik & Ijazah</option>
                <option value="Employment">Surat Pengalaman Kerja</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Penerima:</label>
              <input
                type="text"
                value={form.recipient || ''}
                onChange={(e) => setForm({ ...form, recipient: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Deskripsi & Kriteria Penghargaan:</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Jelaskan peran, metodologi pemecahan masalah yang dinilai, atau pencapaian..."
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Keahlian Tervalidasi:</label>
            <input
              type="text"
              value={form.appliedSkill || ''}
              onChange={(e) => setForm({ ...form, appliedSkill: e.target.value })}
              placeholder="Contoh: LEAN Manufacturing, 8 Step Problem Solving, QCC"
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
              <span>Simpan Dokumen</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
