import React, { useState } from 'react';
import { ProfileData } from '../types/portfolio';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Star } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface ContactSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, lang }) => {
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderMsg, setSenderMsg] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const t = translations[lang].contact;
  const cleanPhone = profile.phone.replace(/[^0-9]/g, '');

  const handleSendWa = (e: React.FormEvent) => {
    e.preventDefault();
    let text = '';
    if (lang === 'ja') {
      text = encodeURIComponent(
        `リシャ・アヌゲラ様、\n${senderOrg ? senderOrg + 'の' : ''}${senderName || 'ご担当者'}と申します。\n\nご相談内容:\n${
          senderMsg || 'PLC・産業自動化プロジェクトについてご相談させていただきたく存じます。'
        }`
      );
    } else if (lang === 'en') {
      text = encodeURIComponent(
        `Hello Risha Anugerah,\nI am ${senderName || 'a colleague'} from ${
          senderOrg || 'Industry'
        }.\n\nMessage:\n${
          senderMsg || 'I am interested in discussing an automation project / engineering opportunity.'
        }`
      );
    } else {
      text = encodeURIComponent(
        `Halo Pak Risha Anugerah,\nSaya ${senderName || 'Rekan'} dari ${
          senderOrg || 'Industri'
        }.\n\nPesan:\n${
          senderMsg || 'Saya tertarik untuk berdiskusi mengenai proyek otomasi / peluang engineering.'
        }`
      );
    }

    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(
      lang === 'ja'
        ? `【自動化・エンジニアリング案件のご相談】${senderName || 'お問い合わせ'}`
        : lang === 'en'
        ? `Engineering Inquiry / Automation Project - ${senderName || 'Client'}`
        : `Inquiry Engineering / Proyek Otomasi - ${senderName || 'Klien'}`
    );
    const body = encodeURIComponent(
      `Name: ${senderName}\nOrganization: ${senderOrg}\n\nMessage:\n${senderMsg}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-8 sm:py-10 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Direct Info & Qualities */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                {t.kicker}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                {t.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Direct contact list (Compact) */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${cleanPhone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">{t.waLabel}</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {profile.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">{t.emailLabel}</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {profile.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">{t.addressLabel}</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900">
                    {lang === 'ja'
                      ? 'インドネシア 中部ジャワ州 スマラン市 (Semarang 50218)'
                      : `${profile.location} (${profile.postalCode})`}
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Qualities & Languages from CV */}
            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                {t.qualitiesLabel}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {profile.qualities.map((q, idx) => {
                  const localizedQuality = (() => {
                    const k = q.toLowerCase();
                    if (k.includes('hard work')) return lang === 'ja' ? '勤勉・誠実 (Hard Working)' : lang === 'id' ? 'Pekerja Keras & Ulet' : 'Hard Working';
                    if (k.includes('organize') || k.includes('methodic')) return lang === 'ja' ? '几帳面・論理的 (Organized)' : lang === 'id' ? 'Terorganisir & Metodis' : 'Organized & Methodical';
                    if (k.includes('resourceful')) return lang === 'ja' ? '臨機応変・解決力 (Resourceful)' : lang === 'id' ? 'Penuh Inisiatif & Solutif' : 'Resourceful';
                    if (k.includes('responsible')) return lang === 'ja' ? '高い責任感 (Responsible)' : lang === 'id' ? 'Bertanggung Jawab Penuh' : 'Responsible';
                    if (k.includes('motivat')) return lang === 'ja' ? '強い向上心 (Motivated)' : lang === 'id' ? 'Motivasi Tinggi' : 'Motivated';
                    if (k.includes('positive')) return lang === 'ja' ? '前向きな思考 (Positive Thinking)' : lang === 'id' ? 'Berpikir Positif' : 'Positive Thinking';
                    return q;
                  })();

                  return (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-800 rounded-md border border-slate-200/80"
                    >
                      {localizedQuality}
                    </span>
                  );
                })}
              </div>

              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mt-4 mb-2 flex items-center justify-between">
                <span>{t.languagesLabel}</span>
                <span className="text-[10px] text-slate-400 font-semibold">{t.scaleLabel}</span>
              </h4>
              <div className="space-y-2">
                {[
                  {
                    name:
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
                    color: 'bg-emerald-500',
                  },
                  {
                    name:
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
                    color: 'bg-blue-600',
                  },
                  {
                    name:
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
                    color: 'bg-amber-500',
                  },
                ].map((l, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-800">{l.name}</span>
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`w-3.5 h-3.5 ${
                                s <= l.stars
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-slate-200 fill-slate-100'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-extrabold text-slate-800 tabular-nums ml-1">
                          {l.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500">
                      <span>{l.level}</span>
                      <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${l.color} rounded-full`}
                          style={{ width: `${(l.stars / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Messaging Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.formKicker}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {t.formTitle}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                {t.formSubtitle}
              </p>

              <form onSubmit={handleSendWa} className="space-y-3 mt-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.orgLabel}
                  </label>
                  <input
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder={t.orgPlaceholder}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.msgLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={senderMsg}
                    onChange={(e) => setSenderMsg(e.target.value)}
                    placeholder={t.msgPlaceholder}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.sendWa}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{t.sendEmail}</span>
                  </button>
                </div>
              </form>
            </div>

            {sentNotice && (
              <div className="mt-4 p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{t.sentNotice}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
