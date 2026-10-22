import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, Upload, Image as ImageIcon, Check, Sparkles } from 'lucide-react';
import { fileToDataUrl } from '../services/portfolioService';

interface ProjectEditModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProject: ProjectItem) => void;
}

export const ProjectEditModal: React.FC<ProjectEditModalProps> = ({
  project,
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen) return null;

  const isNew = !project || !project.id;

  const [formData, setFormData] = useState<ProjectItem>(() => {
    if (project) return { ...project };
    return {
      id: `proj-${Date.now()}`,
      title: '',
      client: '',
      category: 'Industrial IoT',
      year: new Date().getFullYear().toString(),
      summary: '',
      goals: '',
      imageUrl: '/images/project_machine_iot_1792028471839.jpg',
      techStack: ['C Programming', 'PLC', 'Sensor'],
      metrics: '',
      madeWith: '',
      featured: false,
    };
  });

  const [techInput, setTechInput] = useState<string>(
    formData.techStack ? formData.techStack.join(', ') : ''
  );
  const [uploadLoading, setUploadLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadLoading(true);
      try {
        const dataUrl = await fileToDataUrl(file);
        setFormData((prev) => ({ ...prev, imageUrl: dataUrl }));
      } catch (err) {
        console.error('Gagal membaca file gambar:', err);
      } finally {
        setUploadLoading(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalTech = techInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    onSave({
      ...formData,
      techStack: finalTech.length > 0 ? finalTech : ['Engineering'],
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h3 className="text-base font-bold text-slate-900">
            {isNew ? 'Tambah Proyek Baru' : `Edit: ${formData.title || 'Proyek'}`}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Judul Proyek: *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Contoh: Sistem SCADA Pemantauan Suhu Tanur"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Grid row: Client & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Klien / Perusahaan: *
              </label>
              <input
                type="text"
                required
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="Contoh: PT MAS Arya Indonesia"
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Kategori Proyek: *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              >
                <option value="Industrial IoT">Industrial IoT</option>
                <option value="Robotics & CNC">Robotics & CNC</option>
                <option value="PLC & HMI">PLC & HMI</option>
                <option value="Embedded & Drone">Embedded & Drone</option>
                <option value="LEAN & Process">LEAN & Process</option>
              </select>
            </div>
          </div>

          {/* Grid row: Year & Made With */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Tahun Pelaksanaan:
              </label>
              <input
                type="text"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                placeholder="Contoh: 2023 - 2024"
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Tim / Divisi:
              </label>
              <input
                type="text"
                value={formData.madeWith || ''}
                onChange={(e) => setFormData({ ...formData, madeWith: e.target.value })}
                placeholder="Contoh: Automation Dept, Risha A."
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Image Upload / Input Section */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-blue-600" />
                <span>Foto & Dokumentasi Proyek</span>
              </label>
              {uploadLoading && <span className="text-xs text-blue-600">Memproses foto...</span>}
            </div>

            {/* Preview */}
            <div className="relative aspect-[16/9] max-h-48 rounded-lg overflow-hidden bg-slate-900 border border-slate-300 flex items-center justify-center">
              {formData.imageUrl ? (
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-xs text-slate-400">Belum ada foto dipilih</div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <label className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>Pilih Foto dari Perangkat / Komputer</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              <div className="flex-1">
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="Atau tempel URL gambar di sini"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Goals */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Tujuan & Sasaran Proyek (Project Goals):
            </label>
            <textarea
              rows={2}
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              placeholder="Contoh: Mengotomasi pembacaan pulsa pedal untuk menghitung OEE dan jadwal maintenance secara otomatis..."
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Ringkasan Rekayasa & Cara Kerja: *
            </label>
            <textarea
              rows={4}
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="Jelaskan implementasi teknis, controller yang digunakan, algoritma, serta integrasi hardware/software..."
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Teknologi & Hardware Terpasang (Pisahkan dengan koma):
            </label>
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              placeholder="Contoh: C Programming, ESP8266, PLC Siemens S7-1200, Modbus RTU"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Metrics */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Hasil / Metrik Dampak:
            </label>
            <input
              type="text"
              value={formData.metrics || ''}
              onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
              placeholder="Contoh: Reduksi downtime hingga 25% dan efisiensi pelaporan OEE"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
            >
              <Check className="w-4 h-4" />
              <span>Simpan ke Database</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
