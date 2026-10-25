import React, { useState, useEffect } from 'react';
import { PortfolioDatabase, ProjectItem, WorkExperienceItem, CertificateItem, SkillItem } from './types/portfolio';
import { initialPortfolioData } from './data/initialData';
import {
  fetchPortfolioData,
  savePortfolioData,
  resetPortfolioData,
} from './services/portfolioService';
import { Language } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectModal } from './components/ProjectModal';
import { ProjectEditModal } from './components/ProjectEditModal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ExperienceEditModal } from './components/ExperienceEditModal';
import { CertificatesSection } from './components/CertificatesSection';
import { CertificateEditModal } from './components/CertificateEditModal';
import { SkillsSection } from './components/SkillsSection';
import { SkillEditModal } from './components/SkillEditModal';
import { ContactSection } from './components/ContactSection';
import { PrintableCvModal } from './components/PrintableCvModal';
import { AdminDrawer } from './components/AdminDrawer';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';
import { EditorLoginModal } from './components/EditorLoginModal';

export default function App() {
  const [database, setDatabase] = useState<PortfolioDatabase>(initialPortfolioData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [savedNotification, setSavedNotification] = useState<boolean>(false);

  // Language state (id = Indonesian, en = English, ja = Japanese)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('risha_portfolio_lang');
    if (saved === 'en' || saved === 'ja' || saved === 'id') {
      return saved as Language;
    }
    return 'id';
  });

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('risha_portfolio_lang', newLang);
  };

  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isProjectEditOpen, setIsProjectEditOpen] = useState<boolean>(false);

  const [editingExperience, setEditingExperience] = useState<WorkExperienceItem | null>(null);
  const [isExperienceEditOpen, setIsExperienceEditOpen] = useState<boolean>(false);

  const [editingCertificate, setEditingCertificate] = useState<CertificateItem | null>(null);
  const [isCertificateEditOpen, setIsCertificateEditOpen] = useState<boolean>(false);

  const [editingSkill, setEditingSkill] = useState<SkillItem | null>(null);
  const [isSkillEditOpen, setIsSkillEditOpen] = useState<boolean>(false);

  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);
  const [isAdminDrawerOpen, setIsAdminDrawerOpen] = useState<boolean>(false);

  // Editor Auth state (password protected: 405037)
  const [isEditor, setIsEditor] = useState<boolean>(() => {
    try {
      return localStorage.getItem('risha_portfolio_editor_active') === 'true';
    } catch {
      return false;
    }
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsEditor(true);
    try {
      localStorage.setItem('risha_portfolio_editor_active', 'true');
    } catch {}
    triggerSavedNotice();
  };

  const handleLogoutEditor = () => {
    setIsEditor(false);
    try {
      localStorage.removeItem('risha_portfolio_editor_active');
    } catch {}
    triggerSavedNotice();
  };

  // Load database on start
  useEffect(() => {
    async function loadData() {
      try {
        const loaded = await fetchPortfolioData();
        setDatabase(loaded);
      } catch (e) {
        console.error('Failed to load portfolio database:', e);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const triggerSavedNotice = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  const persistDatabase = async (updated: PortfolioDatabase) => {
    if (!isEditor) return;
    setDatabase(updated);
    await savePortfolioData(updated);
    triggerSavedNotice();
  };

  // Project Actions
  const handleSaveProject = async (project: ProjectItem) => {
    if (!isEditor) return;
    const existingIndex = database.projects.findIndex((p) => p.id === project.id);
    let updatedProjects: ProjectItem[];
    if (existingIndex >= 0) {
      updatedProjects = [...database.projects];
      updatedProjects[existingIndex] = project;
    } else {
      updatedProjects = [project, ...database.projects];
    }
    const updatedDb = { ...database, projects: updatedProjects };
    await persistDatabase(updatedDb);
  };

  const handleDeleteProject = async (id: string) => {
    if (!isEditor) return;
    const updatedDb = {
      ...database,
      projects: database.projects.filter((p) => p.id !== id),
    };
    await persistDatabase(updatedDb);
  };

  // Experience Actions
  const handleSaveExperience = async (exp: WorkExperienceItem) => {
    if (!isEditor) return;
    const existingIndex = database.experiences.findIndex((e) => e.id === exp.id);
    let updatedExp: WorkExperienceItem[];
    if (existingIndex >= 0) {
      updatedExp = [...database.experiences];
      updatedExp[existingIndex] = exp;
    } else {
      updatedExp = [exp, ...database.experiences];
    }
    const updatedDb = { ...database, experiences: updatedExp };
    await persistDatabase(updatedDb);
  };

  const handleDeleteExperience = async (id: string) => {
    if (!isEditor) return;
    const updatedDb = {
      ...database,
      experiences: database.experiences.filter((e) => e.id !== id),
    };
    await persistDatabase(updatedDb);
  };

  // Certificate Actions
  const handleSaveCertificate = async (cert: CertificateItem) => {
    if (!isEditor) return;
    const existingIndex = database.certificates.findIndex((c) => c.id === cert.id);
    let updatedCerts: CertificateItem[];
    if (existingIndex >= 0) {
      updatedCerts = [...database.certificates];
      updatedCerts[existingIndex] = cert;
    } else {
      updatedCerts = [cert, ...database.certificates];
    }
    const updatedDb = { ...database, certificates: updatedCerts };
    await persistDatabase(updatedDb);
  };

  const handleDeleteCertificate = async (id: string) => {
    if (!isEditor) return;
    const updatedDb = {
      ...database,
      certificates: database.certificates.filter((c) => c.id !== id),
    };
    await persistDatabase(updatedDb);
  };

  // Skill Actions
  const handleSaveSkill = async (skill: SkillItem, originalName?: string) => {
    if (!isEditor) return;
    const targetName = originalName || skill.name;
    const existingIndex = database.skills.findIndex((s) => s.name === targetName);
    let updatedSkills: SkillItem[];
    if (existingIndex >= 0) {
      updatedSkills = [...database.skills];
      updatedSkills[existingIndex] = skill;
    } else {
      updatedSkills = [...database.skills, skill];
    }
    const updatedDb = { ...database, skills: updatedSkills };
    await persistDatabase(updatedDb);
  };

  const handleDeleteSkill = async (skillName: string) => {
    if (!isEditor) return;
    const updatedDb = {
      ...database,
      skills: database.skills.filter((s) => s.name !== skillName),
    };
    await persistDatabase(updatedDb);
  };

  // Reset database to CV seed
  const handleResetDatabase = async () => {
    if (!isEditor) return;
    const fresh = await resetPortfolioData();
    setDatabase(fresh);
    triggerSavedNotice();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 3-Zone Top Bar with Language Selector & Editor Login */}
      <Navbar
        lang={lang}
        onSelectLang={handleSelectLang}
        isEditor={isEditor}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogoutEditor}
        onOpenAdmin={() => setIsAdminDrawerOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        savedNotification={savedNotification}
      />

      {/* Editor Active Alert Banner */}
      {isEditor && (
        <div className="bg-amber-400 text-slate-950 px-4 py-1.5 text-xs font-semibold shadow-xs border-b border-amber-500/30">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse" />
              <span>
                {lang === 'ja'
                  ? '🛠️ 編集者モード作動中: データの追加・編集・スキルロゴの変更が可能です。'
                  : lang === 'en'
                  ? '🛠️ Editor Mode Active: You can now add, edit, and upload skill logos.'
                  : '🛠️ Mode Editor Aktif: Seluruh tombol tambah, edit, hapus, dan unggah foto logo sekarang aktif.'}
              </span>
            </div>
            <button
              onClick={handleLogoutEditor}
              className="px-2.5 py-0.5 bg-slate-950 hover:bg-slate-800 text-white rounded text-[11px] font-bold transition-colors cursor-pointer"
            >
              {lang === 'ja' ? 'ログアウト (閲覧モードへ)' : lang === 'en' ? 'Lock (HR Mode)' : 'Kunci (Kembali ke Mode HRD)'}
            </button>
          </div>
        </div>
      )}

      {/* Floating Left Navigation Dock */}
      <FloatingNav
        lang={lang}
        isEditor={isEditor}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenAdmin={() => setIsAdminDrawerOpen(true)}
      />

      <main className="flex-grow">
        {/* Split Screen Hero */}
        <Hero
          profile={database.profile}
          lang={lang}
          isEditor={isEditor}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenAdmin={() => {
            if (isEditor) setIsAdminDrawerOpen(true);
          }}
          onUpdatePhoto={
            isEditor
              ? (newPhotoUrl) => {
                  const updated = {
                    ...database,
                    profile: { ...database.profile, photoUrl: newPhotoUrl },
                  };
                  persistDatabase(updated);
                }
              : undefined
          }
        />

        {/* Portfolio Projects Section */}
        <PortfolioSection
          projects={database.projects}
          lang={lang}
          isEditor={isEditor}
          onSelectProject={(project) => setSelectedProject(project)}
          onEditProject={(project) => {
            if (!isEditor) return;
            setEditingProject(project);
            setIsProjectEditOpen(true);
          }}
          onAddProject={() => {
            if (!isEditor) return;
            setEditingProject(null);
            setIsProjectEditOpen(true);
          }}
          onDeleteProject={isEditor ? handleDeleteProject : undefined}
        />

        {/* Work Experience Timeline */}
        <ExperienceTimeline
          experiences={database.experiences}
          lang={lang}
          isEditor={isEditor}
          onAddExperience={() => {
            if (!isEditor) return;
            setEditingExperience(null);
            setIsExperienceEditOpen(true);
          }}
          onEditExperience={(exp) => {
            if (!isEditor) return;
            setEditingExperience(exp);
            setIsExperienceEditOpen(true);
          }}
          onDeleteExperience={isEditor ? handleDeleteExperience : undefined}
        />

        {/* Certificates & Achievements */}
        <CertificatesSection
          certificates={database.certificates}
          lang={lang}
          isEditor={isEditor}
          onAddCertificate={() => {
            if (!isEditor) return;
            setEditingCertificate(null);
            setIsCertificateEditOpen(true);
          }}
          onEditCertificate={(cert) => {
            if (!isEditor) return;
            setEditingCertificate(cert);
            setIsCertificateEditOpen(true);
          }}
          onDeleteCertificate={isEditor ? handleDeleteCertificate : undefined}
        />

        {/* Skills & Technical Matrix */}
        <SkillsSection
          skills={database.skills}
          lang={lang}
          isEditor={isEditor}
          onAddSkill={() => {
            if (!isEditor) return;
            setEditingSkill(null);
            setIsSkillEditOpen(true);
          }}
          onEditSkill={
            isEditor
              ? (skill) => {
                  setEditingSkill(skill);
                  setIsSkillEditOpen(true);
                }
              : undefined
          }
          onDeleteSkill={isEditor ? handleDeleteSkill : undefined}
        />

        {/* Direct Contacts & Fast Inquiry */}
        <ContactSection profile={database.profile} lang={lang} />
      </main>

      {/* Clean Footer */}
      <Footer
        lang={lang}
        isEditor={isEditor}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenAdmin={() => {
          if (isEditor) setIsAdminDrawerOpen(true);
        }}
      />

      {/* Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        isEditor={isEditor}
        onClose={() => setSelectedProject(null)}
        onEdit={(proj) => {
          if (!isEditor) return;
          setEditingProject(proj);
          setIsProjectEditOpen(true);
        }}
      />

      {isEditor && isProjectEditOpen && (
        <ProjectEditModal
          project={editingProject}
          isOpen={isProjectEditOpen}
          onClose={() => {
            setIsProjectEditOpen(false);
            setEditingProject(null);
          }}
          onSave={handleSaveProject}
        />
      )}

      {isEditor && isExperienceEditOpen && (
        <ExperienceEditModal
          experience={editingExperience}
          isOpen={isExperienceEditOpen}
          onClose={() => {
            setIsExperienceEditOpen(false);
            setEditingExperience(null);
          }}
          onSave={handleSaveExperience}
        />
      )}

      {isEditor && isCertificateEditOpen && (
        <CertificateEditModal
          certificate={editingCertificate}
          isOpen={isCertificateEditOpen}
          onClose={() => {
            setIsCertificateEditOpen(false);
            setEditingCertificate(null);
          }}
          onSave={handleSaveCertificate}
        />
      )}

      {isEditor && isSkillEditOpen && (
        <SkillEditModal
          skill={editingSkill}
          isOpen={isSkillEditOpen}
          onClose={() => {
            setIsSkillEditOpen(false);
            setEditingSkill(null);
          }}
          onSave={handleSaveSkill}
          onDelete={handleDeleteSkill}
        />
      )}

      {isCvModalOpen && (
        <PrintableCvModal
          data={database}
          lang={lang}
          onClose={() => setIsCvModalOpen(false)}
        />
      )}

      <EditorLoginModal
        isOpen={isLoginModalOpen}
        lang={lang}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {isEditor && isAdminDrawerOpen && (
        <AdminDrawer
          isOpen={isAdminDrawerOpen}
          onClose={() => setIsAdminDrawerOpen(false)}
          database={database}
          onSaveDatabase={persistDatabase}
          onResetDatabase={handleResetDatabase}
          onEditProject={(proj) => {
            setEditingProject(proj);
            setIsProjectEditOpen(true);
          }}
          onAddProject={() => {
            setEditingProject(null);
            setIsProjectEditOpen(true);
          }}
        />
      )}
    </div>
  );
}
