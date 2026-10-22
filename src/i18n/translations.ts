export type Language = 'id' | 'en' | 'ja';

export interface Translations {
  nav: {
    portfolio: string;
    experience: string;
    certificates: string;
    skills: string;
    contact: string;
    viewCv: string;
    manageContent: string;
    savedDb: string;
    loginEditor: string;
    editorActive: string;
    logoutEditor: string;
    hrdMode: string;
  };
  hero: {
    kicker: string;
    subtitle: string;
    summary: string;
    explorePortfolio: string;
    fullCvFormat: string;
    updateData: string;
    locationLabel: string;
    degreeLabel: string;
    stats: {
      expValue: string;
      expLabel: string;
      expDetail: string;
      teamValue: string;
      teamLabel: string;
      teamDetail: string;
      costValue: string;
      costLabel: string;
      costDetail: string;
      gpaValue: string;
      gpaLabel: string;
      gpaDetail: string;
    };
  };
  portfolio: {
    kicker: string;
    title: string;
    subtitle: string;
    addProject: string;
    allProjects: string;
    viewDetails: string;
    specifications: string;
    emptyText: string;
    addNow: string;
    modal: {
      goalsTitle: string;
      summaryTitle: string;
      techTitle: string;
      clientLabel: string;
      timeLabel: string;
      teamLabel: string;
      impactLabel: string;
      closePreview: string;
      editProject: string;
    };
  };
  experience: {
    kicker: string;
    title: string;
    subtitle: string;
    addExperience: string;
    responsibilities: string;
    edit: string;
  };
  certificates: {
    kicker: string;
    title: string;
    subtitle: string;
    addCertificate: string;
    allDocs: string;
    awards: string;
    professional: string;
    academic: string;
    employment: string;
    issuer: string;
    skill: string;
    viewDetails: string;
    modalTitle: string;
    recipientLabel: string;
    criteriaTitle: string;
    skillTitle: string;
    editThis: string;
    done: string;
  };
  skills: {
    kicker: string;
    title: string;
    subtitle: string;
    addSkill: string;
    allFields: string;
    hardwarePlc: string;
    software3d: string;
    leanTpm: string;
    leadership: string;
  };
  plcTool: {
    kicker: string;
    title: string;
    subtitle: string;
    rackStatus: string;
    inputLabel: string;
    inputPlaceholder: string;
    translateBtn: string;
    resetBtn: string;
    sampleHeader: string;
    terminalStatusHeader: string;
    jsonOutputHeader: string;
    copyJson: string;
    copied: string;
    footerNote: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    waLabel: string;
    emailLabel: string;
    addressLabel: string;
    qualitiesLabel: string;
    languagesLabel: string;
    scaleLabel: string;
    formKicker: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    orgLabel: string;
    orgPlaceholder: string;
    msgLabel: string;
    msgPlaceholder: string;
    sendWa: string;
    sendEmail: string;
    sentNotice: string;
  };
  cvModal: {
    docTitle: string;
    copyText: string;
    copied: string;
    printPdf: string;
    academicStatus: string;
    execSummary: string;
    workHistory: string;
    formalEdu: string;
    honorsTitle: string;
    thesisTitle: string;
    thesisDesc: string;
    selectedProjects: string;
    awardsCertificates: string;
    hardwarePlcSkills: string;
    softwareMethodologies: string;
    languagesTitle: string;
    languagesScale: string;
  };
  footer: {
    subtitle: string;
    copyright: string;
    poweredBy: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      portfolio: 'Portofolio Proyek',
      experience: 'Pengalaman Kerja',
      certificates: 'Sertifikat & Prestasi',
      skills: 'Keahlian & PLC',
      contact: 'Kontak',
      viewCv: 'Lihat CV',
      manageContent: 'Kelola Konten',
      savedDb: 'Tersimpan di Database',
      loginEditor: 'Login Editor',
      editorActive: 'Mode Editor Aktif',
      logoutEditor: 'Keluar Editor',
      hrdMode: 'Mode HRD / Rekruiter',
    },
    hero: {
      kicker: 'Electrical Engineer · Automation Specialist · LEAN Practitioner',
      subtitle: 'Electrical & Automation Engineer',
      summary:
        'Sarjana Teknik Elektro dengan spesialisasi sistem kendali, otomasi industri, dan Internet of Things (IoT). Berpengalaman memimpin tim engineering hingga 60+ personel, mengimplementasikan program LEAN Manufacturing, TPM (Total Productive Maintenance), autonomous maintenance, serta pemrograman PLC, HMI, dan robotika multi-axis.',
      explorePortfolio: 'Jelajahi Portofolio',
      fullCvFormat: 'Format CV Lengkap',
      updateData: 'Perbarui Data',
      locationLabel: 'Jatisari Asabri D6 No.2, Mijen BSB, Semarang',
      degreeLabel: 'B.E.E (Sarjana Teknik Elektro) - IPK 3.51',
      stats: {
        expValue: '10+ Tahun',
        expLabel: 'Pengalaman Industri',
        expDetail: '10+ Tahun Pengalaman',
        teamValue: '60+ Personel',
        teamLabel: 'Ukuran Tim Dipimpin',
        teamDetail: 'Divisi Engineering',
        costValue: '>$5,000/Bulan',
        costLabel: 'Efisiensi Biaya',
        costDetail: 'Pengurangan Defek Bartack',
        gpaValue: '3.51 / 4.00',
        gpaLabel: 'IPK Sarjana Elektro',
        gpaDetail: 'Universitas Sanata Dharma',
      },
    },
    portfolio: {
      kicker: 'Koleksi Rekayasa Nyata',
      title: 'Portofolio Proyek & Implementasi Industri',
      subtitle:
        'Proyek kendali gerak servo multi-axis, sistem akuisisi data IoT industri, pemrograman HMI mesin bending, hingga drone flight controller mandiri.',
      addProject: 'Tambah Proyek Baru',
      allProjects: 'Semua Proyek',
      viewDetails: 'Buka Detail',
      specifications: 'Spesifikasi',
      emptyText: 'Tidak ada proyek dalam kategori ini.',
      addNow: 'Tambah Proyek Sekarang',
      modal: {
        goalsTitle: 'Tujuan & Sasaran Proyek (Project Goals)',
        summaryTitle: 'Ringkasan Implementasi & Rekayasa Teknis',
        techTitle: 'Teknologi, Hardware & Komponen Terintegrasi',
        clientLabel: 'Klien / Lembaga:',
        timeLabel: 'Tahun:',
        teamLabel: 'Tim / Kontributor:',
        impactLabel: 'Hasil & Dampak:',
        closePreview: 'Tutup Pratinjau',
        editProject: 'Edit Proyek',
      },
    },
    experience: {
      kicker: 'Rekam Jejak Karir Profesional',
      title: 'Pengalaman Kerja & Kepemimpinan Rekayasa',
      subtitle:
        'Pengalaman lebih dari 10 tahun di bidang manajemen pemeliharaan fasilitas (TPM), otomatisasi pabrik, kontrol gerak robotika, dan kepemimpinan tim teknis hingga 60+ personel.',
      addExperience: 'Tambah Pengalaman Kerja',
      responsibilities: 'Pencapaian & Tanggung Jawab Utama:',
      edit: 'Edit',
    },
    certificates: {
      kicker: 'Validasi Kompetensi & Pengakuan',
      title: 'Sertifikasi, Prestasi & Penghargaan',
      subtitle:
        'Dokumentasi pencapaian internasional seperti Gold Award ICQCC 2022, Juara 2 Future Stars Lean Manufacturing, gelar Sarjana Teknik Elektro IPK 3.51, serta surat keterangan pengalaman kerja resmi.',
      addCertificate: 'Tambah Sertifikat / Prestasi',
      allDocs: 'Semua Dokumen',
      awards: 'Penghargaan (Awards)',
      professional: 'Profesional & LEAN',
      academic: 'Akademik & Ijazah',
      employment: 'Surat Pengalaman Kerja',
      issuer: 'Penerbit:',
      skill: 'Keahlian:',
      viewDetails: 'Lihat Detail Sertifikat',
      modalTitle: 'Detail Sertifikat / Prestasi',
      recipientLabel: 'Atas Nama Penerima:',
      criteriaTitle: 'Penjelasan & Kriteria Dokumen',
      skillTitle: 'Keahlian & Metodologi Tervalidasi',
      editThis: 'Edit Data Ini',
      done: 'Selesai',
    },
    skills: {
      kicker: 'Keahlian Teknis & Domain Industri',
      title: 'Matriks Keterampilan Rekayasa & Otomasi',
      subtitle:
        'Integrasi komprehensif antara pemrograman PLC, kontrol gerak motor servo, arsitektur IoT, desain CAD mekanikal-elektrikal, dan kepemimpinan LEAN manufacturing.',
      addSkill: 'Tambah Keterampilan',
      allFields: 'Semua Bidang',
      hardwarePlc: 'Hardware & PLC',
      software3d: 'Software & Desain 3D',
      leanTpm: 'Metodologi LEAN & TPM',
      leadership: 'Kepemimpinan & Manajemen',
    },
    plcTool: {
      kicker: 'Interactive Automation Tool',
      title: 'AI Koordinator CAD PLC & Action Packet Generator',
      subtitle:
        'Simulator penerjemah instruksi bahasa alami menjadi Action Packet JSON terstruktur untuk otomasi script Python ezdxf wiring diagram PLC.',
      rackStatus: 'PLC Rack: Online',
      inputLabel: 'Perintah Perubahan Gambar PLC (Bahasa Alami)',
      inputPlaceholder: 'Contoh: Tambahkan PB NO dengan nama PB3 di alamat X10',
      translateBtn: 'Terjemahkan ke Action Packet',
      resetBtn: 'Reset',
      sampleHeader: 'Contoh Perintah Siap Pakai:',
      terminalStatusHeader: 'Status Alamat Terminal Terpasang:',
      jsonOutputHeader: 'JSON Output (ezdxf Action Packet)',
      copyJson: 'Salin JSON',
      copied: 'Tersalin!',
      footerNote:
        'Format output memenuhi standar parser ezdxf untuk otomasi file CAD DXF/DWG skematik kontrol.',
    },
    contact: {
      kicker: 'Hubungi & Diskusi Kerjasama',
      title: 'Mari Diskusikan Proyek Rekayasa & Otomasi Anda',
      subtitle:
        'Tersedia untuk konsultasi sistem kendali PLC, implementasi IoT manufaktur, retrofit mesin industri, maupun peluang karir kepemimpinan engineering.',
      waLabel: 'WhatsApp / Telepon Langsung',
      emailLabel: 'Email Resmi',
      addressLabel: 'Domisili & Lokasi',
      qualitiesLabel: 'Karakter & Nilai Kerja (Qualities):',
      languagesLabel: 'Kemampuan Bahasa:',
      scaleLabel: 'Skala 1 - 5 Bintang',
      formKicker: 'Kirim Pesan Cepat',
      formTitle: 'Hubungi via WhatsApp atau Email',
      formSubtitle: 'Tulis pesan Anda di bawah ini untuk langsung terhubung ke kontak Risha.',
      nameLabel: 'Nama Anda / Perusahaan: *',
      namePlaceholder: 'Contoh: Budi Santoso',
      orgLabel: 'Perusahaan / Institusi:',
      orgPlaceholder: 'Contoh: PT. Manufaktur Otomasi',
      msgLabel: 'Rincian Pesan / Kebutuhan Proyek: *',
      msgPlaceholder:
        'Deskripsikan kebutuhan sistem PLC, instalasi servo, implementasi IoT, atau diskusi karir...',
      sendWa: 'Kirim ke WhatsApp (+62 812-4175-3745)',
      sendEmail: 'Kirim via Email',
      sentNotice: 'Pesan diarahkan ke kontak resmi WhatsApp!',
    },
    cvModal: {
      docTitle: 'Dokumen Curriculum Vitae Resmi',
      copyText: 'Salin Teks',
      copied: 'Tersalin',
      printPdf: 'Minta CV PDF (Email / WA)',
      academicStatus: 'Status Akademik',
      execSummary: 'Ringkasan Profesional',
      workHistory: 'Pengalaman Kerja Profesional',
      formalEdu: 'Pendidikan Formal',
      honorsTitle: 'Dengan Predikat Kelulusan: Dengan Pujian (Cum Laude)',
      thesisTitle: 'Judul Tugas Akhir:',
      thesisDesc:
        'Flight Controller pada Sistem Quadcopter Menggunakan Sensor IMU (Inertial Measurement Unit) Berbasis Mikrokontroler ATMEGA 2560',
      selectedProjects: 'Portofolio Proyek Terpilih',
      awardsCertificates: 'Penghargaan & Sertifikasi',
      hardwarePlcSkills: 'Keahlian Perangkat Keras & PLC:',
      softwareMethodologies: 'Software & Metodologi:',
      languagesTitle: 'Kemampuan Bahasa & Tingkat Kemahiran',
      languagesScale: 'Tingkat Terukur Skala 1 - 5 Bintang',
    },
    footer: {
      subtitle: 'Electrical Engineer & Industrial Automation Specialist · Semarang, Indonesia',
      copyright: 'Portofolio Rekayasa & Otomasi Industri.',
      poweredBy: 'Ditenagai integrasi database dinamis & sistem kendali terstruktur.',
    },
  },
  en: {
    nav: {
      portfolio: 'Project Portfolio',
      experience: 'Work Experience',
      certificates: 'Certificates & Awards',
      skills: 'Skills & PLC',
      contact: 'Contact',
      viewCv: 'View CV',
      manageContent: 'Manage Content',
      savedDb: 'Saved to Database',
      loginEditor: 'Editor Login',
      editorActive: 'Editor Mode Active',
      logoutEditor: 'Exit Editor',
      hrdMode: 'HR / Recruiter Mode',
    },
    hero: {
      kicker: 'Electrical Engineer · Automation Specialist · LEAN Practitioner',
      subtitle: 'Electrical & Automation Engineer',
      summary:
        'Bachelor of Electrical Engineering specializing in control systems, industrial automation, and the Internet of Things (IoT). Proven track record of leading engineering departments of 60+ personnel, deploying LEAN Manufacturing, Total Productive Maintenance (TPM), autonomous maintenance, and programming multi-axis servo robotics, PLC, and HMI systems.',
      explorePortfolio: 'Explore Portfolio',
      fullCvFormat: 'Complete CV Format',
      updateData: 'Update Data',
      locationLabel: 'Jatisari Asabri D6 No.2, Mijen BSB, Semarang, Indonesia',
      degreeLabel: 'B.E.E (Bachelor of Electrical Engineering) - GPA 3.51',
      stats: {
        expValue: '10+ Years',
        expLabel: 'Industrial Experience',
        expDetail: '10+ Years Experience',
        teamValue: '60+ Members',
        teamLabel: 'Engineering Team Led',
        teamDetail: 'Engineering Division',
        costValue: '>$5,000/Mo',
        costLabel: 'Cost Savings',
        costDetail: 'Bartack Defect Elimination',
        gpaValue: '3.51 / 4.00',
        gpaLabel: 'Electrical Eng. GPA',
        gpaDetail: 'Sanata Dharma University',
      },
    },
    portfolio: {
      kicker: 'Real Engineering Showcase',
      title: 'Engineering Projects & Industrial Deployments',
      subtitle:
        'Multi-axis servo motion control, industrial IoT telemetry systems, press brake HMI programming, and custom autonomous drone flight controllers.',
      addProject: 'Add New Project',
      allProjects: 'All Projects',
      viewDetails: 'Open Details',
      specifications: 'Specifications',
      emptyText: 'No projects found in this category.',
      addNow: 'Add Project Now',
      modal: {
        goalsTitle: 'Project Goals & Objectives',
        summaryTitle: 'Technical Implementation & Engineering Summary',
        techTitle: 'Integrated Technologies, Hardware & Components',
        clientLabel: 'Client / Institution:',
        timeLabel: 'Year:',
        teamLabel: 'Team / Contributors:',
        impactLabel: 'Outcome & Impact:',
        closePreview: 'Close Preview',
        editProject: 'Edit Project',
      },
    },
    experience: {
      kicker: 'Professional Career Track Record',
      title: 'Work Experience & Engineering Leadership',
      subtitle:
        'Over 10 years in plant facility maintenance (TPM), factory automation, robotic motion control, and cross-functional technical team leadership of 60+ engineers.',
      addExperience: 'Add Work Experience',
      responsibilities: 'Key Achievements & Core Responsibilities:',
      edit: 'Edit',
    },
    certificates: {
      kicker: 'Competency Validation & Recognition',
      title: 'Certifications, Awards & Achievements',
      subtitle:
        'International accomplishments including ICQCC 2022 Gold Award, 2nd Place in Future Stars Lean Manufacturing, Bachelor of Electrical Engineering (GPA 3.51 with honors), and official employment service certificates.',
      addCertificate: 'Add Certificate / Award',
      allDocs: 'All Documents',
      awards: 'Awards',
      professional: 'Professional & LEAN',
      academic: 'Academic & Degree',
      employment: 'Employment Certificates',
      issuer: 'Issuer:',
      skill: 'Skill:',
      viewDetails: 'View Certificate Details',
      modalTitle: 'Certificate & Achievement Details',
      recipientLabel: 'Recipient Name:',
      criteriaTitle: 'Document Criteria & Scope',
      skillTitle: 'Validated Skills & Methodologies',
      editThis: 'Edit This Record',
      done: 'Done',
    },
    skills: {
      kicker: 'Technical Expertise & Industrial Domains',
      title: 'Engineering & Automation Skills Matrix',
      subtitle:
        'Comprehensive integration of PLC ladder programming, AC servo motion control, IoT architectures, mechanical-electrical 3D CAD modeling, and LEAN manufacturing leadership.',
      addSkill: 'Add Skill',
      allFields: 'All Fields',
      hardwarePlc: 'Hardware & PLC',
      software3d: 'Software & 3D Design',
      leanTpm: 'LEAN & TPM Methodologies',
      leadership: 'Leadership & Management',
    },
    plcTool: {
      kicker: 'Interactive Automation Tool',
      title: 'AI CAD PLC Coordinator & Action Packet Generator',
      subtitle:
        'Natural language translator converting wiring change commands into structured JSON Action Packets for automated Python ezdxf PLC schematic drafting.',
      rackStatus: 'PLC Rack: Online',
      inputLabel: 'PLC Wiring Diagram Command (Natural Language)',
      inputPlaceholder: 'Example: Add PushButtonNO with name PB3 at terminal X10',
      translateBtn: 'Translate to Action Packet',
      resetBtn: 'Reset',
      sampleHeader: 'Ready-to-Use Command Presets:',
      terminalStatusHeader: 'Mounted Terminal Addresses Status:',
      jsonOutputHeader: 'JSON Output (ezdxf Action Packet)',
      copyJson: 'Copy JSON',
      copied: 'Copied!',
      footerNote:
        'Output format matches the ezdxf parser specification for programmatic CAD DXF/DWG schematic automation.',
    },
    contact: {
      kicker: 'Get In Touch & Collaborate',
      title: 'Let’s Discuss Your Engineering & Automation Needs',
      subtitle:
        'Available for PLC control systems engineering, manufacturing IoT deployments, industrial machine retrofits, and engineering leadership roles.',
      waLabel: 'Direct WhatsApp / Phone',
      emailLabel: 'Official Email',
      addressLabel: 'Location & Base',
      qualitiesLabel: 'Core Qualities & Work Ethics:',
      languagesLabel: 'Languages Spoken:',
      scaleLabel: '1 - 5 Stars Scale',
      formKicker: 'Quick Message',
      formTitle: 'Contact via WhatsApp or Direct Email',
      formSubtitle: 'Compose your inquiry below to connect immediately with Risha.',
      nameLabel: 'Your Name / Company: *',
      namePlaceholder: 'e.g. John Doe',
      orgLabel: 'Company / Organization:',
      orgPlaceholder: 'e.g. Industrial Automation Corp',
      msgLabel: 'Project Requirements / Inquiry Details: *',
      msgPlaceholder:
        'Describe your PLC system requirements, servo drive setups, IoT implementations, or career discussions...',
      sendWa: 'Send to WhatsApp (+62 812-4175-3745)',
      sendEmail: 'Send via Email',
      sentNotice: 'Message routed to official WhatsApp!',
    },
    cvModal: {
      docTitle: 'Official Curriculum Vitae Document',
      copyText: 'Copy Text',
      copied: 'Copied',
      printPdf: 'Request CV PDF (Email / WA)',
      academicStatus: 'Academic Credential',
      execSummary: 'Executive Summary',
      workHistory: 'Professional Work Experience',
      formalEdu: 'Formal Education',
      honorsTitle: 'Graduation Distinction: With Honors (Cum Laude)',
      thesisTitle: 'Final Degree Thesis:',
      thesisDesc:
        'Flight Controller on Quadcopter System Utilizing Inertial Measurement Unit (IMU) Sensor Based on ATMEGA 2560 Microcontroller',
      selectedProjects: 'Selected Engineering Projects',
      awardsCertificates: 'Awards & Certifications',
      hardwarePlcSkills: 'Hardware & PLC Expertise:',
      softwareMethodologies: 'Software & Industrial Methodologies:',
      languagesTitle: 'Languages Spoken & Proficiency',
      languagesScale: 'Measurable 1 - 5 Stars Scale',
    },
    footer: {
      subtitle: 'Electrical Engineer & Industrial Automation Specialist · Semarang, Indonesia',
      copyright: 'Engineering & Industrial Automation Portfolio.',
      poweredBy: 'Powered by dynamic database persistence & structured control workflows.',
    },
  },
  ja: {
    nav: {
      portfolio: 'プロジェクト実績',
      experience: '職務経歴',
      certificates: '資格・受賞歴',
      skills: '技術スキル・PLC',
      contact: 'お問い合わせ',
      viewCv: '履歴書 (CV) 表示',
      manageContent: 'コンテンツ管理',
      savedDb: 'DBに保存済み',
      loginEditor: '編集者ログイン',
      editorActive: '編集モード作動中',
      logoutEditor: 'ログアウト',
      hrdMode: '採用担当者 (閲覧モード)',
    },
    hero: {
      kicker: '電気エンジニア · 産業オートメーション · LEAN製造スペシャリスト',
      subtitle: '電気・制御自動化エンジニア',
      summary:
        '制御システム、産業オートメーション、およびIoT（モノのインターネット）を専門とする電気工学士。60名規模のエンジニアリング部門のマネジメント、LEAN製造およびTPM（全員参加型生産保全）の推進、PLC/HMIプログラミング、多軸サーボロボット制御において豊富な実績を有します。',
      explorePortfolio: '実績を閲覧する',
      fullCvFormat: '完全版 履歴書(CV)',
      updateData: 'データを更新',
      locationLabel: 'インドネシア スマラン市 (Semarang)',
      degreeLabel: '電気工学学士 (B.E.E) - GPA 3.51',
      stats: {
        expValue: '10年以上',
        expLabel: '産業実務経験',
        expDetail: '10年以上の実務経験',
        teamValue: '60名以上',
        teamLabel: '率いた技術チーム規模',
        teamDetail: 'エンジニアリング部門',
        costValue: '月5,000ドル超',
        costLabel: 'コスト削減・改善効果',
        costDetail: 'ミシン不良低減プロジェクト',
        gpaValue: '3.51 / 4.00',
        gpaLabel: '電気工学 GPA (優等)',
        gpaDetail: 'サナタ・ダルマ大学',
      },
    },
    portfolio: {
      kicker: 'エンジニアリング実践記録',
      title: 'プロジェクト実績 & 産業導入事例',
      subtitle:
        '多軸ACサーボ制御、工場IoT遠隔稼働監視、油圧プレスブレーキHMIリニューアル、自律型ドローンフライトコントローラー開発の実績一覧です。',
      addProject: '新規プロジェクト追加',
      allProjects: 'すべての実績',
      viewDetails: '詳細を見る',
      specifications: '仕様・技術構成',
      emptyText: 'このカテゴリーのプロジェクトはありません。',
      addNow: '今すぐプロジェクトを追加',
      modal: {
        goalsTitle: 'プロジェクトの目的・課題 (Goals)',
        summaryTitle: '技術実装とエンジニアリング概要',
        techTitle: '使用ハードウェア・組み込み技術',
        clientLabel: 'クライアント / 所属組織:',
        timeLabel: '実施時期:',
        teamLabel: '担当チーム / メンバー:',
        impactLabel: '成果・改善インパクト:',
        closePreview: 'プレビューを閉じる',
        editProject: 'プロジェクトを編集',
      },
    },
    experience: {
      kicker: 'プロフェッショナルキャリア',
      title: '職務経歴 & エンジニアリング統括',
      subtitle:
        '工場保全管理（TPM）、スマートファクトリー自動化、ロボットモーション制御、最大60名規模の技術部門統括など10年以上の実務経験。',
      addExperience: '経歴を追加',
      responsibilities: '主な業務内容と達成実績:',
      edit: '編集',
    },
    certificates: {
      kicker: '専門能力の認定と受賞',
      title: '国際受賞歴・資格・学術証明',
      subtitle:
        '国際QCサークル大会(ICQCC 2022)金賞受賞、LEAN Future Stars大会準優勝、サナタ・ダルマ大学電気工学優等学位(GPA 3.51)、公式在職証明書を完備。',
      addCertificate: '証明書・賞を追加',
      allDocs: 'すべての書類',
      awards: '受賞歴 (Awards)',
      professional: '専門資格・LEAN',
      academic: '学位・学術成績',
      employment: '在職証明書',
      issuer: '発行元:',
      skill: '適用スキル:',
      viewDetails: '証明書の詳細を見る',
      modalTitle: '資格・受賞の詳細情報',
      recipientLabel: '受領者名:',
      criteriaTitle: '認定基準および成果の説明',
      skillTitle: '実証されたスキル・手法',
      editThis: 'このデータを編集',
      done: '完了',
    },
    skills: {
      kicker: '技術スタック & 産業ドメイン',
      title: 'エンジニアリング・オートメーション能力マトリクス',
      subtitle:
        'PLCラダープログラミング、ACサーボモータ駆動、IoTシステム設計、メカニカル3D CAD、LEAN生産改善手法を高度に統合。',
      addSkill: 'スキルを追加',
      allFields: '全カテゴリー',
      hardwarePlc: 'ハードウェア & PLC',
      software3d: 'ソフトウェア & 3D設計',
      leanTpm: 'LEAN・TPM生産手法',
      leadership: '組織管理・リーダーシップ',
    },
    plcTool: {
      kicker: '対話型エンジニアリングツール',
      title: 'AI CAD PLC コーディネーター & Action Packet 生成器',
      subtitle:
        '自然言語による配線変更指示を、Python ezdxf自動CADスクリプト実行用の構造化JSON Action Packetにリアルタイム変換します。',
      rackStatus: 'PLCラック: オンライン稼働中',
      inputLabel: 'PLC配線変更指示（自然言語）',
      inputPlaceholder: '例: Tambahkan PB NO dengan nama PB3 di alamat X10',
      translateBtn: 'Action Packetに変換',
      resetBtn: 'リセット',
      sampleHeader: 'サンプル指示プリセット:',
      terminalStatusHeader: '装着済み端子アドレス状態:',
      jsonOutputHeader: 'JSON 出力 (ezdxf Action Packet)',
      copyJson: 'JSONをコピー',
      copied: 'コピー完了！',
      footerNote:
        '出力フォーマットはPLC電気回路図CAD (DXF/DWG) 自動生成Pythonスクリプトと完全に互換性があります。',
    },
    contact: {
      kicker: 'コンタクト & 協業のご相談',
      title: 'エンジニアリング案件・自動化プロジェクトのご相談',
      subtitle:
        'PLC制御システム開発、製造業向けIoT導入、産業機械のオーバーホール・レトロフィット、エンジニアリング職の採用に関するお問い合わせを受け付けています。',
      waLabel: 'WhatsApp / 直通電話',
      emailLabel: '公式メールアドレス',
      addressLabel: '拠点・所在地',
      qualitiesLabel: '仕事への姿勢・行動特性 (Qualities):',
      languagesLabel: '対応可能言語:',
      scaleLabel: '1〜5段階評価 (星スケール)',
      formKicker: 'ダイレクトメッセージ',
      formTitle: 'WhatsApp または メールで送信',
      formSubtitle: '以下に入力すると、直接リシャの連絡先にメッセージが届きます。',
      nameLabel: 'お名前 / 企業名: *',
      namePlaceholder: '例: 田中 太郎 / 株式会社○○',
      orgLabel: 'ご所属・会社名:',
      orgPlaceholder: '例: 製造自動化事業部',
      msgLabel: 'ご相談内容・要件: *',
      msgPlaceholder:
        'PLC制御の更新、サーボモータ導入、IoT稼働監視、技術顧問等のご相談内容をご記入ください...',
      sendWa: 'WhatsAppで送信 (+62 812-4175-3745)',
      sendEmail: 'メールで送信',
      sentNotice: 'WhatsAppアプリにメッセージが転送されました！',
    },
    cvModal: {
      docTitle: '公式 履歴書 / 職務経歴書 (CV)',
      copyText: 'テキストをコピー',
      copied: 'コピー完了',
      printPdf: '履歴書PDFを申請 (メール / WA)',
      academicStatus: '学歴・学位',
      execSummary: '職務要約 (Executive Summary)',
      workHistory: '職務経歴 (Work Experience)',
      formalEdu: '学歴 (Education)',
      honorsTitle: '卒業優等区分: 優秀賞 (Dengan Pujian / Cum Laude)',
      thesisTitle: '卒業研究論文:',
      thesisDesc:
        'ATMEGA 2560マイコンをベースとしたIMU（慣性計測装置）センサーによるクアッドコプターの自律フライトコントローラー開発',
      selectedProjects: '主要プロジェクト実績',
      awardsCertificates: '資格および受賞歴',
      hardwarePlcSkills: 'ハードウェア & PLC制御技術:',
      softwareMethodologies: 'ソフトウェア & 産業改善手法:',
      languagesTitle: '対応可能言語 & 習熟度 (Languages Spoken)',
      languagesScale: '1〜5段階の星評価基準',
    },
    footer: {
      subtitle: '電気エンジニア & 産業自動化スペシャリスト · インドネシア スマラン',
      copyright: 'エンジニアリング & オートメーション ポートフォリオ。',
      poweredBy: '動的データベース連携 & 構造化制御ワークフローを実装。',
    },
  },
};
