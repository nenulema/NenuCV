import React, { useState, useEffect } from 'react';
import { PortfolioDatabase } from '../types/portfolio';
import {
  X,
  Mail,
  Phone,
  MapPin,
  Award,
  CheckCircle2,
  Copy,
  Lock,
  MessageSquare,
  ShieldAlert,
  Star,
  ExternalLink,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import {
  getLocalizedProject,
  getLocalizedExperience,
  getLocalizedCertificate,
} from '../i18n/localizedContent';

interface PrintableCvModalProps {
  data: PortfolioDatabase;
  lang: Language;
  onClose: () => void;
}

export const PrintableCvModal: React.FC<PrintableCvModalProps> = ({ data, lang, onClose }) => {
  const { profile, experiences, skills, certificates, projects } = data;
  const [copied, setCopied] = useState(false);
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);

  const t = translations[lang].cvModal;

  const localizedProjects = projects.map((p) => getLocalizedProject(p, lang));
  const localizedExp = experiences.map((e) => getLocalizedExperience(e, lang));
  const localizedCerts = certificates.map((c) => getLocalizedCertificate(c, lang));

  const cleanPhone = profile.phone.replace(/[^0-9]/g, '');

  const mailtoSubject = encodeURIComponent(
    lang === 'ja'
      ? '公式履歴書(PDF)の申請 - Nenu Hokyanto'
      : lang === 'en'
      ? 'Official CV (PDF) Request - Nenu Hokyanto'
      : 'Permintaan Dokumen CV Lengkap (PDF) - Nenu Hokyanto'
  );

  const mailtoBody = encodeURIComponent(
    lang === 'ja'
      ? `拝啓\nNenu Hokyanto様\n\n経歴書およびポートフォリオを拝見し、ご連絡いたしました。\n最新の公式履歴書・職務経歴書（PDFファイル）の送付をお願い申し上げます。\n\n会社名 / 採用担当:\n役職・ポジション:\n連絡先:\n\nよろしくお願い申し上げます。`
      : lang === 'en'
      ? `Hello Mr. Nenu Hokyanto,\n\nWe have reviewed your profile and engineering credentials, and are interested in discussing career opportunities.\nPlease send your latest official CV document (PDF) to our email.\n\nCompany / Organization:\nContact Person / Recruiter:\nPhone / WhatsApp:\nPosition / Project:\n\nThank you.`
      : `Halo Pak Nenu Hokyanto,\n\nSaya / Kami dari perusahaan tertarik dengan profil dan rekam jejak pengalaman kerja Anda.\nMohon dapat mengirimkan dokumen CV PDF resmi lengkap terbaru Anda ke email kami.\n\nNama Perusahaan / Rekruter:\nPosisi / Kebutuhan yang Ditawarkan:\nNomor Kontak / WhatsApp:\n\nTerima kasih.`
  );

  const mailtoUrl = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const waMessage = encodeURIComponent(
    lang === 'ja'
      ? 'こんにちは、Nenu Hokyanto様。ポートフォリオを拝見し、公式履歴書（PDF）の送付をお願いしたくメッセージいたしました。'
      : lang === 'en'
      ? 'Hello Mr. Nenu Hokyanto, I reviewed your profile and would like to request your official full CV PDF document.'
      : 'Halo Pak Nenu Hokyanto, saya tertarik dengan profil profesional Anda dan ingin meminta dokumen CV PDF resmi lengkap Anda.'
  );

  const waUrl = `https://wa.me/${cleanPhone}?text=${waMessage}`;

  // Redirect to email and open the request modal
  const handleRequestPdf = () => {
    setIsRequestDialogOpen(true);
    window.location.href = mailtoUrl;
  };

  // Prevent Ctrl+P / Cmd+P print bypass to preserve privacy
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setIsRequestDialogOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyText = () => {
    const text = `
CURRICULUM VITAE
${profile.name}
${profile.title}
${t.academicStatus}: ${profile.degree} (GPA: ${profile.gpa})
${lang === 'ja' ? '連絡先' : lang === 'en' ? 'Contact' : 'Kontak'}: ${profile.phone} | ${profile.email}
${lang === 'ja' ? '所在地' : lang === 'en' ? 'Location' : 'Lokasi'}: ${profile.location}

${t.execSummary.toUpperCase()}:
${lang === 'id' ? profile.summary : translations[lang].hero.summary}

${t.formalEdu.toUpperCase()}:
${profile.university} - ${profile.degree} (GPA: ${profile.gpa})
${t.thesisTitle} ${t.thesisDesc}

${t.workHistory.toUpperCase()}:
${localizedExp
  .map(
    (e) => `
- ${e.company} (${e.period})
  Role: ${e.role} - ${e.location}
  ${e.highlights.map((h) => `  * ${h}`).join('\n')}
`
  )
  .join('')}

${t.selectedProjects.toUpperCase()}:
${localizedProjects
  .map(
    (p) => `
- ${p.title} (${p.year})
  Client: ${p.client}
  Summary: ${p.summary}
  Tech: ${p.techStack.join(', ')}
`
  )
  .join('')}

${t.awardsCertificates.toUpperCase()}:
${localizedCerts.map((c) => `- ${c.title} (${c.issuer}, ${c.year})`).join('\n')}

LANGUAGES SPOKEN:
- Bahasa Indonesia: 5/5 Stars (Native / Mother Tongue)
- English: 5/5 Stars (Professional Working Proficiency)
- Japanese: 3/5 Stars (Technical & Conversational Engineering)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        {/* Sticky Action Bar */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {t.docTitle}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-md">
              <Lock className="w-2.5 h-2.5" />
              <span>Privasi Terlindungi</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t.copied : t.copyText}</span>
            </button>

            {/* Print / Download Button -> Redirects to Email & WhatsApp Request */}
            <button
              onClick={handleRequestPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs cursor-pointer"
              title="Kirim permintaan resmi CV PDF ke email nenuhokka@gmail.com atau WhatsApp"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.printPdf}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors ml-2 cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Security & Confidential Notice Strip */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-slate-50 px-6 py-2.5 border-b border-blue-100/80 flex items-center justify-between text-xs text-blue-900 gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">
              <strong>Akses Dokumen Resmi:</strong> Untuk menjaga privasi data, file CV PDF resmi tidak dapat diunduh langsung bebas. Silakan minta langsung ke <strong>nenuhokka@gmail.com</strong> atau WhatsApp.
            </span>
          </div>
          <button
            onClick={() => setIsRequestDialogOpen(true)}
            className="text-[11px] font-bold text-blue-700 hover:text-blue-900 underline whitespace-nowrap cursor-pointer shrink-0"
          >
            Minta File PDF &rarr;
          </button>
        </div>

        {/* Scrollable Printable CV Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans printable-cv select-text">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b-2 border-slate-900">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                {profile.name}
              </h1>
              <div className="text-base sm:text-lg font-bold text-blue-700 mt-1">
                {profile.title}
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.phone}</span>
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={mailtoUrl}
                  className="flex items-center gap-1 hover:text-blue-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.email}</span>
                </a>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.location}</span>
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <div className="text-xs text-slate-500 uppercase font-semibold">{t.academicStatus}</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{profile.degree}</div>
              <div className="text-xs text-emerald-700 font-medium">GPA: {profile.gpa}</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              {t.execSummary}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2.5">
              {lang === 'id' ? profile.summary : translations[lang].hero.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              {t.workHistory}
            </h2>
            <div className="space-y-4 mt-3">
              {experiences.map((rawExp) => {
                const exp = getLocalizedExperience(rawExp, lang);
                return (
                  <div key={rawExp.id} className="text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="font-bold text-slate-900">
                        {exp.role} <span className="font-medium text-slate-600">| {exp.company}</span>
                      </div>
                      <div className="text-xs font-semibold text-slate-500 tabular-nums">
                        {exp.period} · {exp.location}
                      </div>
                    </div>
                    <ul className="mt-1.5 space-y-1 pl-4 list-disc text-slate-700 text-xs leading-relaxed">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              {t.formalEdu}
            </h2>
            <div className="mt-2.5 text-xs sm:text-sm">
              <div className="flex justify-between font-bold text-slate-900">
                <span>{profile.university}</span>
                <span className="font-semibold text-slate-500 text-xs">2012 - 2016</span>
              </div>
              <div className="text-slate-700 text-xs mt-0.5">
                {profile.degree} ({t.honorsTitle})
              </div>
              <div className="text-slate-500 text-[11px] mt-1">
                {t.thesisTitle} <em>{t.thesisDesc}</em>
              </div>
            </div>
          </div>

          {/* Key Portfolio Projects */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              {t.selectedProjects}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {projects.map((rawProj) => {
                const proj = getLocalizedProject(rawProj, lang);
                return (
                  <div key={rawProj.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                    <div className="font-bold text-slate-900">{proj.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{proj.client} · {proj.year}</div>
                    <div className="text-slate-600 mt-1 line-clamp-2 leading-relaxed">{proj.summary}</div>
                    <div className="text-[10px] text-blue-700 font-medium mt-1 truncate">
                      Tech: {proj.techStack.join(', ')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Achievements & Certificates */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-200">
              {t.awardsCertificates}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
              {localizedCerts.map((cert) => (
                <div key={cert.id} className="flex items-start gap-2 text-slate-700">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{cert.title}</span> ({cert.year})
                    <div className="text-[11px] text-slate-500">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Spoken (Measurable Star Rating) */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center justify-between">
              <span>{t.languagesTitle}</span>
              <span className="text-[11px] text-slate-500 font-normal">{t.languagesScale}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                {
                  lang:
                    lang === 'ja'
                      ? 'インドネシア語 (Bahasa Indonesia)'
                      : lang === 'en'
                      ? 'Indonesian (Bahasa Indonesia)'
                      : 'Bahasa Indonesia',
                  level:
                    lang === 'ja'
                      ? 'ネイティブ (母国語)'
                      : lang === 'en'
                      ? 'Native / Mother Tongue'
                      : 'Penutur Asli (Bahasa Ibu)',
                  stars: 5,
                  rating: '5/5',
                },
                {
                  lang:
                    lang === 'ja'
                      ? '英語 (English)'
                      : lang === 'en'
                      ? 'English (Business Fluent)'
                      : 'Bahasa Inggris (English)',
                  level:
                    lang === 'ja'
                      ? 'ビジネス流暢実務レベル'
                      : lang === 'en'
                      ? 'Professional Working Proficiency (Fluent)'
                      : 'Fasih / Tingkat Kerja Profesional',
                  stars: 5,
                  rating: '5/5',
                },
                {
                  lang:
                    lang === 'ja'
                      ? '日本語 (Japanese)'
                      : lang === 'en'
                      ? 'Japanese (Engineering Conversational)'
                      : 'Bahasa Jepang (Japanese)',
                  level:
                    lang === 'ja'
                      ? '技術・エンジニアリング会話レベル'
                      : lang === 'en'
                      ? 'Technical & Conversational (Engineering)'
                      : 'Percakapan Teknis & Rekayasa Industri',
                  stars: 3,
                  rating: '3/5',
                },
              ].map((l, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                    <span>{l.lang}</span>
                    <span className="text-xs font-extrabold text-slate-800">{l.rating}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mb-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= l.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-100'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-[11px] text-slate-600 leading-snug">{l.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Qualities */}
          <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-bold text-slate-900 mb-1">{t.hardwarePlcSkills}</div>
              <div className="text-slate-600 leading-relaxed">
                {lang === 'ja'
                  ? 'PLCラダープログラミング（三菱電機 Q/iQ-R/FX、Beckhoff TwinCAT、Siemens S7、オムロン）、ACサーボドライブ（MR-J4）、多軸ロボティクス、マイコン組込み（ATMEGA、ESP8266、Arduino）、産業用センサー（2/3線式、エンコーダ）。'
                  : lang === 'id'
                  ? 'Pemrograman PLC Ladder (Mitsubishi Q/iQ-R/FX, Beckhoff TwinCAT, Siemens S7, Omron), AC Servo Drive (MR-J4), Robotika Multi-Axis, Mikrokontroler (ATMEGA, ESP8266, Arduino), Sensor Industri (2/3 kabel, Encoder).'
                  : 'PLC Ladder (Mitsubishi Q/iQ-R/FX, Beckhoff TwinCAT, Siemens S7, Omron), AC Servo Drives (MR-J4), Multi-Axis Robotics, Microcontrollers (ATMEGA, ESP8266, Arduino), Sensors (2/3-wire, Encoders).'}
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900 mb-1">{t.softwareMethodologies}</div>
              <div className="text-slate-600 leading-relaxed">
                {lang === 'ja'
                  ? 'GT Designer3 HMI画面設計、Visual Studio C#、SOLIDWORKS 3D CAD、Autodesk REVIT BIM、Adobe技術スイート、リーン生産（TPM）、なぜなぜ分析（8ステップ問題解決）、5S・SQCDM・OEE改善。'
                  : lang === 'id'
                  ? 'GT Designer3 HMI, Visual Studio C#, SOLIDWORKS 3D CAD, Autodesk REVIT BIM, Adobe Creative Suite, LEAN Manufacturing, TPM, 8 Step Problem Solving, 5-Why, SQCDM, OEE.'
                  : 'GT Designer3 HMI, Visual Studio C#, SOLIDWORKS 3D CAD, Autodesk REVIT BIM, Adobe Creative Suite, LEAN Manufacturing, TPM, 8 Step Problem Solving, 5-Why, SQCDM, OEE.'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official CV Request Dialog Modal */}
      {isRequestDialogOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-7">
            <button
              onClick={() => setIsRequestDialogOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Permintaan Dokumen CV Resmi (PDF)
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Direct Verification & Contact Policy
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed mb-5">
              <p className="mb-2">
                Untuk alasan privasi data dan kesesuaian posisi, dokumen resmi CV lengkap tidak dapat diunduh bebas secara langsung oleh publik.
              </p>
              <p className="font-semibold text-slate-800">
                Silakan hubungi Bapak Nenu Hokyanto secara langsung melalui Email atau WhatsApp untuk mendapatkan file CV PDF resmi terbaru:
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href={mailtoUrl}
                className="flex items-center justify-between p-3.5 rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100/70 text-blue-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-950">
                      Minta via Email Resmi
                    </div>
                    <div className="text-[11px] text-blue-700 font-medium font-mono">
                      {profile.email}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950">
                      Minta Langsung via WhatsApp
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium">
                      {profile.phone}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Pesan permintaan langsung diteruskan kepada kandidat
              </span>
              <button
                onClick={() => setIsRequestDialogOpen(false)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
