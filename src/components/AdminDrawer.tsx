import React, { useState } from 'react';
import {
  PortfolioDatabase,
  ProjectItem,
  WorkExperienceItem,
  CertificateItem,
  SkillItem,
  ProfileData,
} from '../types/portfolio';
import {
  X,
  SlidersHorizontal,
  User,
  FolderKanban,
  Briefcase,
  Award,
  Database,
  Download,
  Upload,
  RotateCcw,
  Plus,
  Pencil,
  Trash2,
  Check,
  CheckCircle2,
} from 'lucide-react';
import { fileToDataUrl } from '../services/portfolioService';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  database: PortfolioDatabase;
  onSaveDatabase: (updated: PortfolioDatabase) => void;
  onResetDatabase: () => void;
  onEditProject: (project: ProjectItem) => void;
  onAddProject: () => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  database,
  onSaveDatabase,
  onResetDatabase,
  onEditProject,
  onAddProject,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'experience' | 'certificates' | 'database'>('profile');
  const [profileForm, setProfileForm] = useState<ProfileData>({ ...database.profile });
  const [notice, setNotice] = useState<string | null>(null);

  const showNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3000);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...database,
      profile: { ...profileForm },
    };
    onSaveDatabase(updated);
    showNotice('Data profil berhasil diperbarui!');
  };

  const handleProfilePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const dataUrl = await fileToDataUrl(file);
        setProfileForm((prev) => ({ ...prev, photoUrl: dataUrl }));
      } catch (err) {
        console.error('Error uploading profile photo:', err);
      }
    }
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Hapus proyek ini dari database?')) {
      const updated = {
        ...database,
        projects: database.projects.filter((p) => p.id !== id),
      };
      onSaveDatabase(updated);
      showNotice('Proyek berhasil dihapus');
    }
  };

  const handleExportJson = () => {
    const jsonStr = JSON.stringify(database, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `risha_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showNotice('Database diekspor sebagai file JSON');
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && parsed.profile && parsed.projects) {
            onSaveDatabase(parsed);
            setProfileForm(parsed.profile);
            showNotice('Database berhasil diimpor!');
          } else {
            alert('Format file JSON tidak valid untuk database portofolio.');
          }
        } catch (err) {
          alert('Gagal membaca file JSON: format salah.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Kelola & Edit Konten Dinamis</h3>
              <p className="text-xs text-slate-500">
                Pembaruan tersimpan langsung ke database <code className="font-mono text-slate-700">portfolio-db.json</code>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice toast */}
        {notice && (
          <div className="bg-emerald-600 text-white text-xs px-5 py-2.5 flex items-center justify-between font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{notice}</span>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-white px-5 gap-2 overflow-x-auto shrink-0">
          {[
            { id: 'profile', label: 'Profil Diri', icon: User },
            { id: 'projects', label: 'Proyek Portofolio', icon: FolderKanban },
            { id: 'experience', label: 'Pengalaman', icon: Briefcase },
            { id: 'certificates', label: 'Sertifikat', icon: Award },
            { id: 'database', label: 'Database & Backup', icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-blue-600 text-blue-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nama Lengkap & Gelar:</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Jabatan & Spesialisasi:</label>
                <input
                  type="text"
                  value={profileForm.title}
                  onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Profile Photo */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <label className="block font-bold uppercase tracking-wider text-slate-700">
                  Foto Profil Pengguna
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-900 shrink-0 border border-slate-300">
                    <img
                      src={profileForm.photoUrl}
                      alt="Profile"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Ganti Foto Profil</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePhotoChange}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="text"
                      value={profileForm.photoUrl}
                      onChange={(e) => setProfileForm({ ...profileForm, photoUrl: e.target.value })}
                      placeholder="Atau masukkan URL foto"
                      className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Ringkasan Diri (Summary):</label>
                <textarea
                  rows={4}
                  value={profileForm.summary}
                  onChange={(e) => setProfileForm({ ...profileForm, summary: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nomor Kontak:</label>
                  <input
                    type="text"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Resmi:</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Domisili & Alamat:</label>
                <input
                  type="text"
                  value={profileForm.location}
                  onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-sm"
              >
                <Check className="w-4 h-4" />
                <span>Simpan Perubahan Profil</span>
              </button>
            </form>
          )}

          {/* TAB 2: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Daftar Proyek Aktif ({database.projects.length})
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onAddProject();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambah Proyek</span>
                </button>
              </div>

              <div className="space-y-3">
                {database.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 overflow-hidden shrink-0 border border-slate-300">
                        <img
                          src={proj.imageUrl}
                          alt={proj.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-slate-900 truncate">{proj.title}</div>
                        <div className="text-[11px] text-slate-500">
                          {proj.category} · {proj.year} · {proj.client}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => {
                          onClose();
                          onEditProject(proj);
                        }}
                        className="p-1.5 text-slate-600 hover:text-blue-700 hover:bg-slate-200 rounded-lg transition-colors"
                        title="Edit Proyek"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Hapus Proyek"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Pengalaman Kerja Terdata ({database.experiences.length})
              </div>
              <div className="space-y-3">
                {database.experiences.map((exp) => (
                  <div key={exp.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{exp.role}</div>
                        <div className="text-slate-600 font-medium">{exp.company} - {exp.location}</div>
                        <div className="text-slate-500 text-[11px] mt-0.5">{exp.period}</div>
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1 pl-4 list-disc text-slate-600 text-[11px]">
                      {exp.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="line-clamp-1">{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CERTIFICATES */}
          {activeTab === 'certificates' && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Daftar Sertifikat & Penghargaan ({database.certificates.length})
              </div>
              <div className="space-y-3">
                {database.certificates.map((cert) => (
                  <div key={cert.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-900">{cert.title}</span>
                      <span className="font-mono text-slate-500">{cert.year}</span>
                    </div>
                    <div className="text-slate-600 mt-0.5">{cert.issuer}</div>
                    <div className="text-[11px] text-blue-700 font-medium mt-1">Kategori: {cert.category}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: DATABASE & BACKUP */}
          {activeTab === 'database' && (
            <div className="space-y-6 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Status Sinkronisasi Basis Data</h4>
                <p className="text-slate-600 leading-relaxed">
                  Basis data tersimpan secara terstruktur di server Express (<code className="font-mono text-slate-800">/data/portfolio-db.json</code>) dan di-cache pada browser lokal Anda.
                </p>
                <div className="mt-3 text-[11px] text-slate-500">
                  Terakhir Diperbarui: <span className="font-mono text-slate-700">{new Date(database.updatedAt).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh File Cadangan Database (JSON)</span>
                </button>

                <label className="w-full cursor-pointer inline-flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold rounded-xl transition-colors">
                  <Upload className="w-4 h-4 text-blue-600" />
                  <span>Impor & Pulihkan Database dari File JSON</span>
                  <input
                    type="file"
                    accept=".json,application/json"
                    onChange={handleImportJson}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Apakah Anda yakin ingin mengembalikan semua data ke data asli dari CV Risha Anugerah Nenu Lema?')) {
                      onResetDatabase();
                      showNotice('Data berhasil dikembalikan ke standar awal!');
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-semibold rounded-xl transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Kembalikan ke Data Asli Dokumen CV & Portofolio</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Tutup Panel
          </button>
        </div>
      </div>
    </div>
  );
};
