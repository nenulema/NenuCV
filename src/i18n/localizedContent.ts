import { Language } from './translations';
import { ProjectItem, WorkExperienceItem, CertificateItem, SkillItem } from '../types/portfolio';

export function getLocalizedProject(project: ProjectItem, lang: Language): ProjectItem {
  if (lang === 'id') return project;

  if (lang === 'en') {
    if (project.id === 'proj-1') {
      return {
        ...project,
        title: 'Machine Utilization & Telemetry IoT System',
        category: 'Industrial IoT',
        summary:
          'Real-time industrial machine telemetry system measuring running time, downtime, and idle cycles. Calculations executed by RTC on the microcontroller via limit switches and pedal potentiometers, streamed wirelessly via ESP8266 IoT to Google Sheets cloud and HMI screens.',
        goals:
          'Ascertain precise daily operating hours to empower the Engineering Department in scheduling preventive maintenance and calculating Overall Equipment Effectiveness (OEE).',
        metrics: '100% automated real-time tracking with zero manual logging delays',
      };
    }
    if (project.id === 'proj-2') {
      return {
        ...project,
        title: 'Quadcopter Flight Controller with IMU & ATMEGA 2560',
        category: 'Embedded & Drone',
        summary:
          'Custom autonomous flight controller system for quadcopters powered by an ATMEGA 2560 microcontroller. Employs PID control algorithms to calculate stable PWM pulses to each brushless ESC based on 6-DOF IMU gyroscopic & accelerometer sensor telemetry and RF receivers.',
        goals:
          'Produce a stable quadcopter flight dynamics system with sub-millisecond wind correction and 3 dedicated communication pins for Base Station telemetry and GPS navigation.',
        metrics: 'Sub-millisecond PID hovering stabilization loop',
      };
    }
    if (project.id === 'proj-3') {
      return {
        ...project,
        title: 'Industrial 3-Axis CNC Gantry Robot & Plotter',
        category: 'Robotics & CNC',
        summary:
          'High-precision 3-axis (X-Y-Z) gantry robot engineered for the 2017 Indonesia Industrial Automation Exhibition. Leverages an Arduino Mega 2560 to parse PC G-Code streams and issue high-speed motion pulses to AC Servo Drives with 50W AC Servo Motors.',
        goals:
          'Demonstrate high-speed micron-level precision, dynamic trajectory following, and servo drive integration for CNC milling, dispensing, and industrial plotting machines.',
        metrics: 'Simultaneous multi-axis trajectory precision for industrial demonstrations',
      };
    }
    if (project.id === 'proj-4') {
      return {
        ...project,
        title: 'Machine HMI - Hydraulic Press Brake Backgauge',
        category: 'PLC & HMI',
        summary:
          'Custom industrial HMI software developed in C# Visual Studio for sheet metal hydraulic press brake refurbishment. Stores bending recipes, transmits positioning commands to AC Servo Drives via manufacturer SDK and PDL (Process Description Language), and monitors safety limit switches.',
        goals:
          'Retrofit existing hydraulic press machinery with digital touchscreen controls for micron backgauge positioning and real-time optical barrier safety.',
        metrics: 'Backgauge positioning tolerance <0.1 mm with recipe memory',
      };
    }
  }

  if (lang === 'ja') {
    if (project.id === 'proj-1') {
      return {
        ...project,
        title: '機械稼働率監視 & テレメトリIoTシステム',
        category: 'Industrial IoT',
        summary:
          '工場の生産機械の稼働時間、停止時間、待機時間をリアルタイムに計測する遠隔テレメトリシステム。リミットスイッチとペダルポテンショメータからの信号をマイコンのRTC（リアルタイムクロック）で解析し、ESP8266 IoTモジュール経由でGoogleスプレッドシートおよび現場HMI端末へ無線自動送信します。',
        goals:
          '日々の機械実稼働時間を正確に把握し、エンジニアリング部門が予防保全計画およびOEE（設備総合効率）を的確に算出可能にすること。',
        metrics: '手書き記録の遅延をゼロにし、完全リアルタイム遠隔監視を実現',
      };
    }
    if (project.id === 'proj-2') {
      return {
        ...project,
        title: 'IMUセンサ & ATMEGA 2560搭載 クアッドコプター自律制御装置',
        category: 'Embedded & Drone',
        summary:
          'ATMEGA 2560マイコンを採用したクアッドコプター専用の自律型フライトコントローラー。6軸IMU（加速度・ジャイロ）センサーデータとプロポ受信信号に基づき、PID制御アルゴリズムによって各ブラシレスESCへ安定したPWMパルスを出力します。',
        goals:
          '風などの外乱に強い高精度なホバリング安定性を実現し、地上基地局（Base Station）通信およびGPSナビゲーション用の3つのアクセスピンを実装すること。',
        metrics: 'サブミリ秒精度のPIDフィードバックによる自律姿勢制御',
      };
    }
    if (project.id === 'proj-3') {
      return {
        ...project,
        title: '産業用3軸CNCガントリーロボット & プロッター',
        category: 'Robotics & CNC',
        summary:
          '2017年のインドネシア産業オートメーション展示会向けに開発された高精度3軸（X-Y-Z）ガントリーロボット。PCからのG-CodeデータをArduino Mega 2560で高速デコードし、ACサーボドライバおよび50W ACサーボモータへパルス制御信号を出力して精密な軌跡制御を実現しました。',
        goals:
          '産業用CNCフライス、塗布機、ロボットプロッターにおけるACサーボモータの追従性、高速性、ミクロン単位の精密位置決め能力を実証すること。',
        metrics: '産業展示会における多軸同時同期制御デモ',
      };
    }
    if (project.id === 'proj-4') {
      return {
        ...project,
        title: '板金油圧プレスブレーキ バックゲージ用HMI制御システム',
        category: 'PLC & HMI',
        summary:
          'C# Visual Studioで開発された油圧プレスブレーキ機械のリフレッシュ用タッチスクリーンHMI制御システム。板金折り曲げレシピを保存し、ACサーボドライバSDKおよびPDL（工程記述言語）を介して高精度な位置決めコマンドをダイレクト送信します。',
        goals:
          '従来の油圧プレス機械をデジタル化し、オペレーターがタッチパネルから曲げ寸法を直感的に入力し、リミットスイッチの安全状態をリアルタイム監視可能にすること。',
        metrics: 'バックゲージ位置決め公差0.1mm以下の高精度制御',
      };
    }
  }

  return project;
}

export function getLocalizedExperience(exp: WorkExperienceItem, lang: Language): WorkExperienceItem {
  const comp = exp.company.toLowerCase();
  const id = exp.id.toLowerCase();

  // 1. Fujita Techno Trade Co., Ltd.
  if (comp.includes('fujita') || id.includes('fujita') || id.includes('1792031706299')) {
    if (lang === 'ja') {
      return {
        ...exp,
        company: '藤田テクノトレード株式会社 (Fujita Techno Trade Co., Ltd.)',
        role: '電気エンジニア (Electrical Engineer · 正社員)',
        location: '日本 岐阜県 (Gifu, Japan · On-site)',
        period: '2024年7月 – 現在',
        type: 'プラスチック包装機械 & 産業自動化',
        highlights: [
          'プラスチック包装機械の電気・自動化システムの設計、プログラミング、および保守を担当。三菱電機製PLCおよびHMIシステムを中心に、日本国内、中国、および東南アジア全域への技術サポートを提供。',
          'GT Designer3を使用した産業用HMI（タッチパネル）画面の新規開発および改造。',
          '三菱電機製PLCおよびサーボシステム（MR-J4シリーズ）のプログラミングおよびトラブルシューティング。',
          'サーボモータ速度表示の解析・調整および内部データ処理の最適化。',
          'CPUエラーおよび機械アラームのトラブルシューティング対応、外部ベンダーおよび納品先クライアントとの技術調整。',
          '日本語・英語・中国語（専門技術用語）の通訳および技術文書の翻訳。',
          '日本本社と海外クライアント間の多言語コミュニケーション支援。',
          '現場仕様に応じたスケーリング計算および制御パラメータの精密調整。',
        ],
      };
    }
    if (lang === 'en') {
      return {
        ...exp,
        company: 'Fujita Techno Trade Co., Ltd.',
        role: 'Electrical Engineer (Full-time)',
        location: 'Gifu, Japan · On-site',
        period: 'Jul 2024 – Present',
        type: 'Plastic Packaging Machinery & Automation',
        highlights: [
          'Responsible for designing, programming, and maintaining electrical and automation systems for plastic packaging machines, with a focus on Mitsubishi-based PLC and HMI systems. Provide technical support across Japan, China, and Southeast Asia.',
          'Develop and modify HMI screens using GT Designer3.',
          'Program and troubleshoot Mitsubishi PLC and servo systems (MR-J4 series).',
          'Analyze and adjust servo speed display and internal data processing.',
          'Handle CPU and machine errors; coordinate with external vendors and client sites.',
          'Translate and interpret technical terms across Japanese, English, and Chinese.',
          'Support multilingual communication between Japanese HQ and overseas clients.',
          'Perform scaling calculations and control adjustments as needed.',
        ],
      };
    }
    return {
      ...exp,
      company: 'Fujita Techno Trade Co., Ltd.',
      role: 'Electrical Engineer',
      location: 'Gifu, Jepang · On-site',
      period: 'Jul 2024 – Sekarang',
      type: 'Mesin Kemasan Plastik & Otomasi',
      highlights: [
        'Bertanggung jawab merancang, memprogram, dan merawat sistem elektrikal dan otomasi mesin kemasan plastik dengan spesialisasi PLC dan HMI berbasis Mitsubishi. Menyediakan dukungan teknis operasional lintas wilayah Jepang, China, dan Asia Tenggara.',
        'Mengembangkan dan memodifikasi layar HMI industri menggunakan software GT Designer3.',
        'Memprogram dan melakukan troubleshooting sistem PLC dan motor servo Mitsubishi (seri MR-J4).',
        'Menganalisis dan menyesuaikan tampilan kecepatan servo serta pemrosesan data internal mesin.',
        'Menangani error CPU dan alarm mesin; berkoordinasi langsung dengan vendor eksternal dan pabrik klien.',
        'Menerjemahkan dan menginterpretasikan istilah teknis lintas bahasa Jepang, Inggris, dan Mandarin.',
        'Mendukung komunikasi multibahasa antara kantor pusat di Jepang dan klien internasional.',
        'Melakukan perhitungan scaling dan penyesuaian kontrol mesin sesuai kebutuhan lapangan.',
      ],
    };
  }

  // 2. Lidah Buaya Group Company / PT. Sinar Joyoboyo
  if (comp.includes('lidah buaya') || comp.includes('joyoboyo') || id === 'exp-1') {
    if (lang === 'ja') {
      return {
        ...exp,
        company: 'リダーブアヤ・グループ / PT. Sinar Joyoboyo (Lidah Buaya Group Company)',
        role: '工場保全・技術マネージャー (Workshop & Engineering Manager · 正社員)',
        location: 'インドネシア マゲラン (Magelang, Central Java, Indonesia)',
        period: '2023年9月 – 2024年3月',
        type: 'プラスチック成型製造 & 工場設備保全',
        highlights: [
          '稼働効率の向上と設備信頼性の確保に向け、工場保全・ワークショップ管理体制の構築および運用を統括。',
          'SQCDM（安全・品質・コスト・納期・モラル）指標に基づくTPM（全員参加型生産保全）、予防保全、および予知保全施策を推進。',
          'LEAN製造手法およびCTQ（品質重要項目）ストリームマッピングを適用し、生産効率の向上と工程の安定化を達成。',
          'エンジニアリングチームの技術力育成、スキルアップ指導、および設備信頼性向上のための新技術導入を主導。',
          '業務ワークフローを合理化し、製造現場におけるベストプラクティスの標準化を確立。',
        ],
      };
    }
    if (lang === 'en') {
      return {
        ...exp,
        company: 'Lidah Buaya Group Company (PT. Sinar Joyoboyo)',
        role: 'Workshop & Engineering Manager (Full-time)',
        location: 'Magelang, Central Java, Indonesia',
        period: 'Sep 2023 – Mar 2024',
        type: 'Plastic Packaging Manufacturing & Facility',
        highlights: [
          'Led the development and implementation of workshop and maintenance systems to improve operational efficiency and equipment reliability.',
          'Implemented Total Productive Maintenance (TPM), preventive maintenance, and predictive maintenance initiatives based on SQCDM performance indicators.',
          'Applied Lean Manufacturing and Critical-to-Quality (CTQ) process stream mapping to improve manufacturing efficiency and process consistency.',
          'Guided and mentored the engineering team toward technology innovation and rapid technical capability development.',
          'Streamlined engineering workflows to identify operational efficiencies and implement manufacturing best practices.',
        ],
      };
    }
    return {
      ...exp,
      company: 'Lidah Buaya Group Company (PT. Sinar Joyoboyo)',
      role: 'Workshop & Engineering Manager',
      location: 'Magelang, Jawa Tengah, Indonesia',
      period: 'Sep 2023 – Mar 2024',
      type: 'Manufaktur Kemasan Plastik & Fasilitas',
      highlights: [
        'Memimpin pengembangan dan penerapan sistem workshop dan pemeliharaan untuk meningkatkan efisiensi operasional dan keandalan mesin.',
        'Mengimplementasikan inisiatif TPM, preventive maintenance, dan predictive maintenance berbasis indikator kinerja SQCDM.',
        'Menerapkan Lean Manufacturing dan Critical-to-Quality (CTQ) stream mapping untuk meningkatkan efisiensi manufaktur dan konsistensi proses.',
        'Membimbing tim engineering menuju inovasi teknologi dan percepatan pengembangan keterampilan teknis.',
        'Merampingkan alur kerja (workflow) untuk mengidentifikasi efisiensi serta menerapkan standar praktik manufaktur terbaik (best practices).',
      ],
    };
  }

  // 3. PT. Aleyah Sintasint Farma
  if (comp.includes('aleyah') || id === 'exp-2') {
    if (lang === 'ja') {
      return {
        ...exp,
        company: 'PT. Aleyah Sintasint Farma (アレヤ・シンタシント製薬)',
        role: 'エンジニアリングマネージャー (Engineering Manager · 正社員)',
        location: 'インドネシア ジョグジャカルタ (Yogyakarta, Indonesia)',
        period: '2022年12月 – 2023年6月',
        type: '医薬品製造プラント & ユーティリティ設備',
        highlights: [
          '製薬工場の建屋拡張、無菌・非無菌製造設備の更新、およびプラント施設・ユーティリティ保全プロジェクトを包括マネジメント。',
          '月次・年次のエンジニアリングKPI、業務実施計画、保全戦略の策定および経営層への進捗報告管理。',
          '設備調達、工場ユーティリティ、機械・電気工事に関する外部ベンダーおよび施工コントラクターの選定・統括管理。',
          '重要予備品（クリティカル・スペアパーツ）リストの策定および維持管理による在庫管理体制の適正化。',
          '部門OPEX（運営費）予算の計画・執行管理、およびエンジニアリング標準作業手順書（SOP）の策定・標準化。',
          '厳格なGMP基準下での日常保全業務におけるエンジニアおよび技術スタッフの直接指導・統括。',
        ],
      };
    }
    if (lang === 'en') {
      return {
        ...exp,
        company: 'PT. Aleyah Sintasint Farma',
        role: 'Engineering Manager (Full-time)',
        location: 'Yogyakarta, Indonesia',
        period: 'Dec 2022 – Jun 2023',
        type: 'Pharmaceutical Manufacturing & Plant Facilities',
        highlights: [
          'Led project management for pharmaceutical factory expansion, production machinery upgrades, and sterile/non-sterile manufacturing process improvements.',
          'Managed monthly and annual engineering KPIs, departmental work plans, maintenance strategies, and executive performance reporting.',
          'Managed external vendors and contractors for engineering procurement, factory utilities, and mechanical-electrical servicing.',
          'Optimized spare parts inventory management by establishing and maintaining critical spare parts lists.',
          'Planned and controlled departmental OPEX budgets and developed engineering Standard Operating Procedures (SOPs).',
          'Direct team leadership: Supervised engineers and technical staff in daily operations and high-compliance facility maintenance.',
        ],
      };
    }
    return {
      ...exp,
      company: 'PT. Aleyah Sintasint Farma',
      role: 'Engineering Manager',
      location: 'D.I. Yogyakarta, Indonesia',
      period: 'Des 2022 – Jun 2023',
      type: 'Manufaktur Farmasi & Utilitas Pabrik',
      highlights: [
        'Memimpin manajemen proyek ekspansi fasilitas farmasi, upgrade peralatan produksi, dan perbaikan proses manufaktur steril/non-steril.',
        'Mengelola KPI bulanan dan tahunan engineering, rencana kerja, strategi departemen, dan pelaporan kinerja ke manajemen eksekutif.',
        'Mengelola vendor dan kontraktor eksternal untuk pengadaan proyek engineering, utilitas pabrik, dan servis mekanikal-elektrikal.',
        'Mengoptimalkan manajemen suku cadang dengan mengidentifikasi dan memelihara daftar spare part kritis.',
        'Merencanakan dan mengendalikan anggaran OPEX departemen serta menyusun standar operasional prosedur (SOP) engineering.',
        'Mengawasi langsung tim insinyur dan teknisi dalam operasional harian dan pemeliharaan fasilitas berstandar kepatuhan tinggi.',
      ],
    };
  }

  // 4. PT MAS Arya Indonesia (MAS Holdings)
  if (comp.includes('mas arya') || id === 'exp-3') {
    if (lang === 'ja') {
      return {
        ...exp,
        company: 'PT MAS Arya Indonesia (マス・アルヤ・インドネシア / MAS Holdings)',
        role: 'エグゼクティブ・エンジニア (Executive Engineer · 正社員)',
        location: 'インドネシア スマラン / ケンダル (Semarang / Kendal, Indonesia)',
        period: '2019年3月 – 2022年12月',
        type: 'アパレル製造 & 大規模ファクトリーオートメーション',
        highlights: [
          'グローバル製造基準に準拠した工場において、60名規模の技術部門（ミシン・特殊機械保全チーム）を統括・指揮。',
          'PDCAサイクル分析、稼働データアナリティクス、および構造化問題解決手法を用いた部門KPIの達成管理。',
          '生産ライン全体を対象としたTPM（全員参加型生産保全）および自主保全（Autonomous Maintenance）の推進・定着。',
          'A3およびSub-A3問題解決手法を活用した年度方針管理（Hoshin Kanri）プロジェクトの推進・リード。',
          '日々の多品種生産スタイル変更に伴う段取り替え（マシンチェンジオーバー）の円滑な調整・指揮。',
          'Microsoft Power BIを用いたエンジニアリング稼働実績ダッシュボードの構築およびリアルタイムデジタル化。',
          '自動裁断機（Autocutter）、バンドナイフ、成形機、延反機、プロッター、蒸気ボイラー、FormCup機、検査試験機器等の保全・設備信頼性管理。',
          'チームコーチとしてジャカルタ国際QC大会(ICQCC 2022)金賞、およびMAS Future Stars世界大会準優勝を達成。カン留めミシン糸端不良ゼロ化により月額5,000ドル超のコスト削減を実現。',
          '是正処置・予防処置（CAPA分析）の適用による再発設備トラブルの抜本的撲滅および設備総合効率（OEE）の向上。',
        ],
      };
    }
    if (lang === 'en') {
      return {
        ...exp,
        company: 'PT MAS Arya Indonesia (MAS Holdings)',
        role: 'Executive Engineer (Full-time)',
        location: 'Semarang / Kendal, Central Java, Indonesia',
        period: 'Mar 2019 – Dec 2022',
        type: 'Apparel Manufacturing & Industrial Automation',
        highlights: [
          'Managed and led a cross-functional engineering department of 60+ engineers and technical staff in a world-class manufacturing facility.',
          'Drove departmental KPI achievement using PDCA (Plan-Do-Check-Act) cycles, operational data analytics, and structured problem-solving methodologies.',
          'Spearheaded plant-wide Total Productive Maintenance (TPM) and Autonomous Maintenance programs across multi-tier production lines.',
          'Led annual Hoshin Kanri policy deployment projects utilizing A3 and Sub-A3 lean problem-solving frameworks.',
          'Coordinated rapid machine changeovers to accommodate daily multi-style production demands.',
          'Developed and digitized real-time engineering operational dashboards using Microsoft Power BI.',
          'Managed equipment reliability and maintenance for automated cutters (autocutters), band knives, molding machines, spreaders, plotters, industrial steam boilers, FormCup machines, and laboratory testing equipment.',
          'Achieved ICQCC 2022 Gold Award in Jakarta as Team Coach and 2nd Place in the global MAS Future Stars Competition 2022, generating over $5,000/month in net savings through bartack defect elimination.',
          'Applied Corrective and Preventive Actions (CAPA) analysis to systematically resolve recurring equipment failures and improve OEE.',
        ],
      };
    }
    return {
      ...exp,
      company: 'PT MAS Arya Indonesia (MAS Holdings)',
      role: 'Executive Engineer',
      location: 'Semarang / Kendal, Jawa Tengah, Indonesia',
      period: 'Mar 2019 – Des 2022',
      type: 'Manufaktur Garment & Otomasi Industri',
      highlights: [
        'Memimpin dan mengelola departemen engineering lintas fungsi lebih dari 60 personel di fasilitas manufaktur kelas dunia.',
        'Memimpin pencapaian KPI departemen menggunakan siklus PDCA (Plan-Do-Check-Act), analitik data operasional, dan metodologi pemecahan masalah terstruktur.',
        'Memelopori program Total Productive Maintenance (TPM) dan Autonomous Maintenance lintas lini produksi pabrik.',
        'Memimpin proyek Hoshin Kanri tahunan menggunakan kerangka pemecahan masalah A3 dan Sub-A3.',
        'Mengoordinasikan pergantian mesin (changeover) cepat untuk merespons perubahan gaya produksi harian.',
        'Mengembangkan dan mendigitalisasi dashboard performa operasional engineering real-time menggunakan Microsoft Power BI.',
        'Mengelola keandalan dan pemeliharaan mesin autocutter, bend knife, mesin cetak moulding, spreader, plotter, boiler uap industri, mesin FormCup, dan alat uji laboratorium.',
        'Meraih Penghargaan ICQCC 2022 Gold Award di Jakarta sebagai Team Coach dan Juara 2 MAS Future Stars tingkat global dengan penghematan profit >$5,000/bulan dari eliminasi cacat bartack.',
        'Menerapkan analisis Corrective and Preventive Action (CAPA) untuk mengatasi masalah peralatan berulang dan meningkatkan OEE.',
      ],
    };
  }

  // 5. PT. Norgantara Prima Perkasa
  if (comp.includes('norgantara') || id === 'exp-4') {
    if (lang === 'ja') {
      return {
        ...exp,
        company: 'PT. Norgantara Prima Perkasa (ノルガンタラ・プリマ・ペルカサ)',
        role: '産業オートメーションエンジニア (Engineer – Industrial Automation · 正社員)',
        location: 'インドネシア スマラン (Semarang, Indonesia)',
        period: '2018年6月 – 2019年1月',
        type: '産業用自動化機器・制御商社',
        highlights: [
          'Beckhoff社製Smart PLCおよびAutonics社製制御センサー機器を用いた産業用自動化制御システムのソリューション開発。',
          '顧客工場に対して電気制御および自動化製品の技術仕様説明、選定推奨、および導入立ち上げサポートを提供。',
          'スマートオートメーション産業における市場開拓のため、マーケティング部門と技術部門を連携・統括。',
          '過去の販売実績データおよび機械稼働トレンドの分析を通じた営業戦略・事業開発の支援。',
          '顧客との技術打合せを通じて自動化のボトルネックを特定し、最適な電気制御アーキテクチャを提案・構築。',
        ],
      };
    }
    if (lang === 'en') {
      return {
        ...exp,
        company: 'PT. Norgantara Prima Perkasa',
        role: 'Engineer – Industrial Automation (Full-time)',
        location: 'Semarang, Central Java, Indonesia',
        period: 'Jun 2018 – Jan 2019',
        type: 'Industrial Automation & Distributor',
        highlights: [
          'Developed industrial automation solutions and control architectures utilizing Beckhoff Smart PLCs and Autonics sensor products.',
          'Provided high-level technical consultation, specifications review, and automation product recommendations to industrial clients.',
          'Coordinated technical and marketing initiatives to expand company footprint in the smart automation industry.',
          'Analyzed sales and historical machine data to drive targeted technical proposals and business development.',
          'Collaborated directly with manufacturing clients to diagnose automation bottlenecks and design tailored electrical control systems.',
        ],
      };
    }
    return {
      ...exp,
      company: 'PT. Norgantara Prima Perkasa',
      role: 'Engineer – Industrial Automation',
      location: 'Semarang, Jawa Tengah, Indonesia',
      period: 'Jun 2018 – Jan 2019',
      type: 'Otomasi Industri & Distributor',
      highlights: [
        'Mengembangkan solusi otomasi industri dan arsitektur kontrol menggunakan Beckhoff Smart PLC dan produk sensor Autonics.',
        'Memberikan konsultasi teknis, tinjauan spesifikasi, dan rekomendasi produk otomasi elektrikal kepada pelanggan industri.',
        'Mengoordinasikan kegiatan teknis dan pemasaran untuk memperluas kehadiran perusahaan di industri otomasi cerdas.',
        'Melakukan analisis data penjualan dan data historis mesin untuk mendukung proposal teknis dan pengembangan bisnis.',
        'Berkolaborasi langsung dengan pelanggan manufaktur untuk mendiagnosis kendala otomasi dan merancang sistem kendali yang tepat.',
      ],
    };
  }

  // 6. Orang Tua Group (OT)
  if (comp.includes('orang tua') || comp.includes(' ot') || comp.startsWith('ot') || id === 'exp-5') {
    if (lang === 'ja') {
      return {
        ...exp,
        company: 'Orang Tua Group / OT (オラン・トゥア・グループ)',
        role: '保全エンジニア・スーパーバイザー (Engineering Supervisor · 正社員)',
        location: 'インドネシア ボゴール (Bogor, West Java, Indonesia)',
        period: '2018年3月 – 2018年5月',
        type: 'FMCG (食品・飲料高速製造ライン)',
        highlights: [
          '高速FMCG生産ラインにおける定期点検および予知保全業務を実行する技術チームの編成・指揮。',
          '突発的な機械停止（ダウンタイム）を最小化し、設備総合効率（OEE）向上に向けた稼働率の最適化を担保。',
          'GoogleフォームおよびAndroidモバイルアプリを活用した保全実績記録システム（Machine Maintenance Realization Plan）を構築し、日報報告の迅速化を実現。',
          '食品製造における厳格な適正製造規範（GMP）および労働安全衛生（OHS）基準の遵守・現場徹底。',
        ],
      };
    }
    if (lang === 'en') {
      return {
        ...exp,
        company: 'Orang Tua Group (OT)',
        role: 'Engineering Supervisor (Full-time)',
        location: 'Bogor, West Java, Indonesia',
        period: 'Mar 2018 – May 2018',
        type: 'FMCG Food & Beverage High-Speed Packaging',
        highlights: [
          'Led and organized the engineering technical team executing preventive and predictive maintenance on high-speed FMCG production lines.',
          'Ensured maximum machinery uptime and minimized unscheduled downtime to improve Overall Equipment Effectiveness (OEE).',
          'Designed and deployed a digitized Machine Maintenance Realization Plan utilizing Google Forms and custom Android mobile reporting, significantly streamlining daily maintenance logs.',
          'Enforced strict Good Manufacturing Practices (GMP) and occupational health and safety standards on the production floor.',
        ],
      };
    }
    return {
      ...exp,
      company: 'Orang Tua Group (OT)',
      role: 'Engineering Supervisor',
      location: 'Bogor, Jawa Barat, Indonesia',
      period: 'Mar 2018 – Mei 2018',
      type: 'FMCG Makanan & Minuman',
      highlights: [
        'Memimpin dan mengorganisir tim teknis dalam menjalankan perawatan berkala dan prediktif pada lini produksi FMCG berkecepatan tinggi.',
        'Memastikan waktu operasi mesin maksimal dan meminimalkan downtime untuk mendongkrak skor Overall Equipment Effectiveness (OEE).',
        'Merancang dan meluncurkan Machine Maintenance Realization Plan digital berbasis Google Forms dan pelaporan mobile Android, meningkatkan efisiensi pencatatan log harian.',
        'Menegakkan standar Good Manufacturing Practice (GMP) dan keselamatan kerja (K3) yang ketat di lantai produksi.',
      ],
    };
  }

  // 7. PT. Unindo Hi-tech Pratama
  if (comp.includes('unindo') || id === 'exp-6') {
    if (lang === 'ja') {
      return {
        ...exp,
        company: 'PT. Unindo Hi-tech Pratama (ウニンド・ハイテック・プラタマ)',
        role: '産業用ロボット & モーション制御エンジニア (Engineer – Industrial Robotics & Motion Control · 正社員)',
        location: 'インドネシア ジャカルタ (Jakarta, Indonesia)',
        period: '2016年11月 – 2018年2月',
        type: 'モーション制御・産業ロボット',
        highlights: [
          'HIWIN社製ACサーボモータ、リニアモータ、直動アクチュエータ、単軸ロボット、および多関節産業用ロボットの技術サポート。',
          '機器の設置配線、電気トラブルシューティング、モーションコントローラプログラミング（C言語およびPDL）、試運転立ち上げ、メカ・エレキ統合。',
          '既存の他社製モーション機器からHIWIN製最新サーボソリューションへの置換（リプレイス/コンバージョン）プロジェクトを主導。',
          '2017年インドネシア産業オートメーション全国展示会向け高精度産業用3軸（X-Y-Z）CNCガントリーロボット・プロッターの開発・実演。',
        ],
      };
    }
    if (lang === 'en') {
      return {
        ...exp,
        company: 'PT. Unindo Hi-tech Pratama',
        role: 'Engineer – Industrial Robotics & Motion Control (Full-time)',
        location: 'Jakarta, Indonesia',
        period: 'Nov 2016 – Feb 2018',
        type: 'Motion Control & Industrial Robotics',
        highlights: [
          'Provided comprehensive engineering support for industrial motion control systems, including HIWIN AC servo motors, linear motors, linear actuators, single-axis robots, and articulated industrial robots.',
          'Executed installation, electrical troubleshooting, motion controller programming (C and PDL languages), system commissioning, and mechanical-electrical integration.',
          'Spearheaded conversion and retrofitting projects transitioning customer machines from legacy competitor systems to modern HIWIN servo solutions.',
          'Engineered a high-precision 3-Axis CNC gantry robot plotter for demonstration at the Indonesia Industrial Automation National Exhibition in Jakarta.',
        ],
      };
    }
    return {
      ...exp,
      company: 'PT. Unindo Hi-tech Pratama',
      role: 'Engineer – Industrial Robotics & Motion Control',
      location: 'Jakarta, Indonesia',
      period: 'Nov 2016 – Feb 2018',
      type: 'Kontrol Gerak & Robotika Industri',
      highlights: [
        'Memberikan dukungan teknis komprehensif untuk sistem motion control HIWIN, termasuk motor servo AC, motor linier, aktuator linier, robot single-axis, dan articulated robot industri.',
        'Menangani instalasi, troubleshooting elektrikal, pemrograman motion controller (bahasa C & PDL), komisioning sistem, dan integrasi mekanikal-elektrikal.',
        'Memimpin proyek konversi dan retrofitting mesin pelanggan dari merek lama ke solusi servo modern HIWIN.',
        'Merancang dan membangun robot gantry 3-Axis CNC presisi tinggi untuk pameran teknologi otomasi industri nasional di Jakarta.',
      ],
    };
  }

  return exp;
}

export function getLocalizedCertificate(cert: CertificateItem, lang: Language): CertificateItem {
  const id = cert.id.toLowerCase();
  const t = cert.title.toLowerCase();
  const iss = cert.issuer.toLowerCase();
  const cat = cert.category.toLowerCase();

  // cert-1: ICQCC 2022 Gold Award
  if (id === 'cert-1' || t.includes('icqcc') || t.includes('gold award')) {
    if (lang === 'ja') {
      return {
        ...cert,
        title: '🏆 ICQCC 2022 国際QCサークル大会 金賞 (Gold Award)',
        issuer: 'インドネシア品質管理協会 (IQMA) / PMMI',
        category: 'Award',
        description:
          'ジャカルタで開催された第47回国際QCサークル大会(ICQCC 2022)における最高位の金賞（Gold Award）。チームコーチとして継続的改善（カイゼン）活動を主導し、製造ラインの重要欠陥・不良率の大幅削減を達成。',
        appliedSkill: '品質管理サークル (QCC), 不良ゼロ化 (Defect Elimination), 統計的工程管理 (SPC), カイゼン',
        recipient: 'リシャ・アヌゲラ・ネヌ・レマ (PT MAS Arya Indonesia)',
      };
    }
    if (lang === 'en') {
      return {
        ...cert,
        title: '🏆 ICQCC 2022 Gold Award',
        issuer: 'Indonesian Quality Management Association (IQMA) / PMMI',
        category: 'Award',
        description:
          'Prestigious international Gold Award at the 47th International Convention on Quality Control Circles (ICQCC 2022) in Jakarta. Acted as Team Coach leading a continuous improvement project that successfully eliminated critical manufacturing defects.',
        appliedSkill: 'Quality Control Circles (QCC), Defect Elimination, Statistical Process Control (SPC), Kaizen',
        recipient: 'Risha Anugerah Nenu Lema (PT MAS Arya Indonesia)',
      };
    }
    return {
      ...cert,
      title: '🏆 ICQCC 2022 Gold Award',
      issuer: 'Indonesian Quality Management Association (IQMA) / PMMI',
      category: 'Award',
      description:
        'Penghargaan internasional bergengsi tingkat Gold Award dalam ajang International Convention on QC Circles (ICQCC) 2022 di Jakarta. Berperan sebagai Team Coach dalam memimpin tim continuous improvement hingga berhasil mengeliminasi cacat produksi secara signifikan.',
      appliedSkill: 'Quality Control Circle (QCC), Defect Elimination, Statistical Process Control, Kaizen',
      recipient: 'Risha Anugerah Nenu Lema (PT MAS Arya Indonesia)',
    };
  }

  // cert-2: 2nd Place Winner - MAS Future Stars Competition 2022
  if (id === 'cert-2' || t.includes('future stars')) {
    if (lang === 'ja') {
      return {
        ...cert,
        title: '🥈 MAS Future Stars 世界大会 2022 準優勝 (2nd Place)',
        issuer: 'MAS Holdings (Private) Ltd.',
        category: 'Award',
        description:
          'チームコーチとして8段階問題解決法（8-Step Problem Solving）およびなぜなぜ分析（5-Why）を駆使し、製造現場の重要課題を解決。自動カン留めミシンの糸端不良（short-end trim defects）を撲滅し、月額5,000米ドル以上のコスト改善を達成。',
        appliedSkill: 'LEAN生産方式, 8ステップ問題解決法, なぜなぜ分析 (5-Why), 歩留まり改善',
        recipient: 'リシャ・ネヌ・レマ',
      };
    }
    if (lang === 'en') {
      return {
        ...cert,
        title: '🥈 2nd Place Winner - MAS Future Stars Competition 2022',
        issuer: 'MAS Holdings (Private) Ltd.',
        category: 'Award',
        description:
          'Guided the cross-functional engineering team as Team Coach using the 8-Step Problem Solving methodology and 5-Why root cause analysis. Successfully eradicated short-end trim defects on automated bartack sewing machines, delivering over $5,000/month in net profit savings.',
        appliedSkill: 'LEAN Manufacturing, 8 Step Problem Solving, 5-Why Root Cause Analysis, Yield Optimization',
        recipient: 'Risha Nenu Lema',
      };
    }
    return {
      ...cert,
      title: '🥈 Juara 2 (2nd Place) - MAS Future Stars Competition 2022',
      issuer: 'MAS Holdings (Private) Ltd.',
      category: 'Award',
      description:
        'Sebagai Team Coach membimbing grup memecahkan problem produksi menggunakan metodologi 8-Step Problem Solving & 5-Why Analysis. Berhasil mengeliminasi cacat short-end trim pada mesin jahit bartack dan menghasilkan penghematan profit lebih dari $5,000 per bulan.',
      appliedSkill: 'LEAN Manufacturing, 8 Step Problem Solving, 5-Why Root Cause Analysis, Peningkatan Yield',
      recipient: 'Risha Nenu Lema',
    };
  }

  // cert-3: 8 Step Practitioner Programme Certificate
  if (id === 'cert-3' || t.includes('8 step') || t.includes('practitioner')) {
    if (lang === 'ja') {
      return {
        ...cert,
        title: '📜 8ステップ・プラクティショナー認定修了証 (LEAN Enterprise)',
        issuer: 'MAS アカデミー / MAS リーン・エンタープライズ',
        category: 'Professional',
        description:
          'グローバル製造基準に準拠した実践的8ステップ問題解決手法の認定証。ムダの徹底排除、プロセスのボトルネック解消、真因究明、および持続可能な改善（カイゼン）文化の定着に特化。',
        appliedSkill: 'LEANエンタープライズ, 根本原因究明, ムダ取り (Waste Elimination), カイゼン文化',
        recipient: 'リシャ・アヌゲラ・ネヌ・レマ',
      };
    }
    if (lang === 'en') {
      return {
        ...cert,
        title: '📜 8 Step Practitioner Programme Certificate',
        issuer: 'MAS Academy / MAS Lean Enterprise',
        category: 'Professional',
        description:
          'World-class manufacturing certification in the structured 8-Step practical problem-solving methodology. Focused on waste elimination, process bottleneck removal, root cause isolation, and establishing an enduring continuous improvement (Kaizen) culture.',
        appliedSkill: 'LEAN Enterprise, Root Cause Identification, Waste Elimination, Kaizen Culture',
        recipient: 'Risha Anugerah Nenu Lema',
      };
    }
    return {
      ...cert,
      title: '📜 Sertifikat 8 Step Practitioner Programme (LEAN Enterprise)',
      issuer: 'MAS Academy / MAS Lean Enterprise',
      category: 'Professional',
      description:
        'Sertifikasi metodologi pemecahan masalah praktis 8 langkah dalam lingkungan industri manufaktur kelas dunia. Program fokus pada reduksi waste, eliminasi inefisiensi proses, isolasi akar masalah, dan pembentukan budaya perbaikan berkelanjutan (Kaizen).',
      appliedSkill: 'LEAN Enterprise, Root Cause Identification, Waste Elimination, Budaya Kaizen',
      recipient: 'Risha Anugerah Nenu Lema',
    };
  }

  // cert-4: Bachelor of Electrical Engineering Degree (B.E.E)
  if (id === 'cert-4' || t.includes('ijazah') || t.includes('bachelor') || t.includes('b.e.e') || cat === 'academic') {
    if (lang === 'ja') {
      return {
        ...cert,
        title: '🎓 電気工学士 学位記 (B.E.E) - GPA 3.51 (優等卒業)',
        issuer: 'サナタ・ダルマ大学 理工学部 電気工学科 (ジョグジャカルタ)',
        category: 'Academic',
        description:
          '電気工学士（S.T. / Bachelor of Electrical Engineering）課程をGPA 3.51（優等・Dengan Pujian）で修了。制御工学、産業エレクトロニクス、マイクロプロセッサ、ロボティクスに特化した144単位を完修。卒業論文題目：「ATMEGA 2560マイコンをベースとしたIMU（慣性計測装置）センサーによるクアッドコプター自律フライトコントローラー開発」。',
        appliedSkill: '制御システム設計工学, デジタル信号処理 (DSP), 遠隔計測 (テレメトリ), パワーエレクトロニクス, マイコン制御',
        recipient: 'リシャ・アヌゲラ・ネヌ・レマ (学籍番号: 125114025)',
      };
    }
    if (lang === 'en') {
      return {
        ...cert,
        title: '🎓 Bachelor of Electrical Engineering Degree (B.E.E) - GPA 3.51',
        issuer: 'Sanata Dharma University Yogyakarta',
        category: 'Academic',
        description:
          'Graduated with Bachelor of Science in Electrical Engineering (Sarjana Teknik - S.T.) with Cumulative GPA 3.51 (Graduated With Honors / Cum Laude). Completed 144 credits specializing in Control Systems Engineering, Industrial Electronics, Microprocessors, and Robotics. Degree Thesis: Flight Controller on Quadcopter System Utilizing Inertial Measurement Unit (IMU) Sensor Based on ATMEGA 2560 Microcontroller.',
        appliedSkill: 'Control Design Engineering, Digital Signal Processing, Telemetry, Power Electronics, Microcontrollers',
        recipient: 'Risha Anugerah Nenu Lema (Student ID: 125114025)',
      };
    }
    return {
      ...cert,
      title: '🎓 Ijazah Sarjana Teknik Elektro (B.E.E) - IPK 3.51',
      issuer: 'Universitas Sanata Dharma Yogyakarta',
      category: 'Academic',
      description:
        'Lulusan Sarjana Teknik Elektro (S.T.) dengan Indeks Prestasi Kumulatif 3.51 (Predikat Dengan Pujian / Cum Laude). Menyelesaikan 144 SKS dengan fokus spesialisasi Sistem Kendali, Elektronika Industri, Mikroprosesor, dan Robotika. Judul Skripsi: Flight Controller pada Sistem Quadcopter Menggunakan Sensor IMU (Inertial Measurement Unit) Berbasis Mikrokontroler ATMEGA 2560.',
      appliedSkill: 'Control Design Engineering, Digital Signal Processing, Telemetry, Power Electronics, Mikrokontroler',
      recipient: 'Risha Anugerah Nenu Lema (NPM 125114025)',
    };
  }

  // cert-5: PT Aleyah Sintasint Farma
  if (id === 'cert-5' || t.includes('aleyah') || iss.includes('aleyah')) {
    if (lang === 'ja') {
      return {
        ...cert,
        title: '💼 在職証明書 - PT Aleyah Sintasint Farma',
        issuer: 'PT Aleyah Sintasint Farma (証明番号: 012/HR-KET/ASF/VI/2023)',
        category: 'Employment',
        description:
          '医薬品製造工場の建屋拡張、生産設備の更新、および施設・ユーティリティ保全を統括する技術部長（Manager Engineer）としての在職および卓越した勤務実績を公式に証明。',
        appliedSkill: 'エンジニアリング統括, プロジェクト遂行, ベンダー管理, プラントユーティリティ',
        recipient: 'リシャ・アヌゲラ・ネヌ・レマ',
      };
    }
    if (lang === 'en') {
      return {
        ...cert,
        title: '💼 Certificate of Employment - PT Aleyah Sintasint Farma',
        issuer: 'PT Aleyah Sintasint Farma (012/HR-KET/ASF/VI/2023)',
        category: 'Employment',
        description:
          'Official Certificate of Employment confirming tenure as Manager Engineer with exemplary performance in overseeing pharmaceutical factory building expansion, production equipment modernization, and plant utility maintenance.',
        appliedSkill: 'Engineering Management, Project Execution, Vendor Management, Factory Utilities',
        recipient: 'Risha Anugerah Nenu Lema',
      };
    }
    return {
      ...cert,
      title: '💼 Surat Keterangan Pengalaman Kerja - PT Aleyah Sintasint Farma',
      issuer: 'PT Aleyah Sintasint Farma (012/HR-KET/ASF/VI/2023)',
      category: 'Employment',
      description:
        'Sertifikat kerja resmi menyatakan masa bakti sebagai Manager Teknik dengan performa kerja prima dalam mengelola ekspansi gedung pabrik farmasi, modernisasi peralatan produksi, dan pemeliharaan teknis utilitas pabrik.',
      appliedSkill: 'Engineering Management, Project Execution, Vendor Management, Utilitas Pabrik',
      recipient: 'Risha Anugerah Nenu Lema',
    };
  }

  // cert-6: PT MAS Arya Indonesia
  if (id === 'cert-6' || t.includes('mas arya') || iss.includes('mas arya')) {
    if (lang === 'ja') {
      return {
        ...cert,
        title: '💼 在職証明書 - PT MAS Arya Indonesia',
        issuer: 'PT MAS Arya Indonesia (証明番号: 779/MAS Arya/Human Resources/SK/XI/2022)',
        category: 'Employment',
        description:
          '2019年〜2022年にわたり、60名規模の技術部門統括、全社TPM・自主保全の推進、予備品在庫管理、およびOPEX運営予算の最適化を率いたエグゼクティブ・エンジニアとしての在職実績を証明。',
        appliedSkill: '部門KPI達成, 自主保全 (Autonomous Maintenance), OPEX予算管理, 組織統括',
        recipient: 'リシャ・アヌゲラ・ネヌ・レマ',
      };
    }
    if (lang === 'en') {
      return {
        ...cert,
        title: '💼 Certificate of Employment - PT MAS Arya Indonesia',
        issuer: 'PT MAS Arya Indonesia (779/MAS Arya/Human Resources/SK/XI/2022)',
        category: 'Employment',
        description:
          'Official Certificate of Employment recognizing 2019–2022 tenure as Executive Engineering leading 60+ engineering team members, autonomous maintenance, spare parts inventory control, and departmental OPEX budgeting.',
        appliedSkill: 'Departmental KPI, Autonomous Maintenance, OPEX Budgeting, Team Leadership',
        recipient: 'Risha Anugerah Nenu Lema',
      };
    }
    return {
      ...cert,
      title: '💼 Surat Keterangan Pengalaman Kerja - PT MAS Arya Indonesia',
      issuer: 'PT MAS Arya Indonesia (779/MAS Arya/Human Resources/SK/XI/2022)',
      category: 'Employment',
      description:
        'Sertifikat pengalaman kerja masa dinas 2019-2022 sebagai Executive Engineering memimpin 60+ staf teknik, autonomous maintenance, manajemen suku cadang, dan penganggaran OPEX engineering.',
      appliedSkill: 'Department KPI, Autonomous Maintenance, OPEX Budgeting, Kepemimpinan Tim',
      recipient: 'Risha Anugerah Nenu Lema',
    };
  }

  // cert-7: PT Norgantara Prima Perkasa
  if (id === 'cert-7' || t.includes('norgantara') || iss.includes('norgantara')) {
    if (lang === 'ja') {
      return {
        ...cert,
        title: '💼 在職証明書 - PT Norgantara Prima Perkasa',
        issuer: 'PT Norgantara Prima Perkasa (証明番号: 001/REF-HRD/NPP/I/2019)',
        category: 'Employment',
        description:
          'Beckhoff社製Smart PLCシステムおよびAutonics社製産業用センサーの技術支援・自動化スペシャリストとしての在職実績を証明。',
        appliedSkill: 'Beckhoff Smart PLC, Autonics 産業用センサー, 自動化技術コンサルティング',
        recipient: 'リシャ・アヌゲラ・ネヌ・レマ',
      };
    }
    if (lang === 'en') {
      return {
        ...cert,
        title: '💼 Certificate of Employment - PT Norgantara Prima Perkasa',
        issuer: 'PT Norgantara Prima Perkasa (001/REF-HRD/NPP/I/2019)',
        category: 'Employment',
        description:
          'Official Certificate of Employment confirming service as Technical Support & Automation Specialist for Beckhoff Smart PLC systems and Autonics industrial automation sensor integration.',
        appliedSkill: 'Beckhoff Smart PLC, Autonics Industrial Sensors, Automation Consulting',
        recipient: 'Risha Anugerah Nenu Lema',
      };
    }
    return {
      ...cert,
      title: '💼 Surat Keterangan Pengalaman Kerja - PT Norgantara Prima Perkasa',
      issuer: 'PT Norgantara Prima Perkasa (001/REF-HRD/NPP/I/2019)',
      category: 'Employment',
      description:
        'Sertifikat masa dinas sebagai Technical Support & Automation Specialist untuk produk Beckhoff Smart PLC dan sistem sensorik otomasi industri Autonics.',
      appliedSkill: 'Smart PLC Beckhoff, Autonics Industrial Automation, Konsultasi Otomasi',
      recipient: 'Risha Anugerah Nenu Lema',
    };
  }

  // cert-8: PT Unindo Hi-Tech Pratama
  if (id === 'cert-8' || t.includes('unindo') || iss.includes('unindo')) {
    if (lang === 'ja') {
      return {
        ...cert,
        title: '💼 在職証明書 - PT Unindo Hi-Tech Pratama',
        issuer: 'PT Unindo Hi-Tech Pratama (証明番号: 001/UHP-HRD/S-Ket/I/2018)',
        category: 'Employment',
        description:
          'ACサーボモータ、リニアモータ、直動アクチュエータ、および産業用多軸ロボットシステムの設置・プログラミング・試運転調整を担当した在職実績を証明。',
        appliedSkill: 'ACサーボドライブ, 直動アクチュエータ, 多軸モーション制御, C/PDL制御プログラミング',
        recipient: 'リシャ・アヌゲラ・ネヌ・レマ',
      };
    }
    if (lang === 'en') {
      return {
        ...cert,
        title: '💼 Certificate of Employment - PT Unindo Hi-Tech Pratama',
        issuer: 'PT Unindo Hi-Tech Pratama (001/UHP-HRD/S-Ket/I/2018)',
        category: 'Employment',
        description:
          'Official Certificate of Employment acknowledging technical support, programming, and motion control engineering for AC servo motors, linear motors, linear actuators, and multi-axis industrial robotic systems.',
        appliedSkill: 'AC Servo Drives, Linear Actuators, Multi-Axis Motion Control, C/PDL Programming',
        recipient: 'Risha Anugerah Nenu Lema',
      };
    }
    return {
      ...cert,
      title: '💼 Surat Keterangan Pengalaman Kerja - PT Unindo Hi-Tech Pratama',
      issuer: 'PT Unindo Hi-Tech Pratama (001/UHP-HRD/S-Ket/I/2018)',
      category: 'Employment',
      description:
        'Sertifikat masa dinas sebagai Technical Support & Motion Control Specialist dalam instalasi, pemrograman, dan komisioning motor servo AC, motor linier, aktuator linier, dan robot industri multi-axis.',
      appliedSkill: 'AC Servo Drive, Linear Actuators, Multi-Axis Motion Control, Pemrograman C/PDL',
      recipient: 'Risha Anugerah Nenu Lema',
    };
  }

  return cert;
}

// Localized skill items (Technical Expertise & Industrial Domains)
export function getLocalizedSkill(skill: SkillItem, lang: Language): SkillItem {
  const nameLower = skill.name.toLowerCase();

  // 1. PLC Ladder Programming
  if (nameLower.includes('plc') || nameLower.includes('ladder')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'PLCラダープログラミング',
        description: '三菱電機（Q / iQ-R / FXシリーズ）、Beckhoff TwinCAT、Siemens S7、オムロン制御システム設計・開発。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Pemrograman PLC Ladder',
        description: 'Spesialisasi PLC Mitsubishi (Q/iQ-R/FX), Beckhoff TwinCAT, Siemens S7, dan OMRON Sysmac.',
      };
    }
    return {
      ...skill,
      name: 'PLC Ladder Programming',
      description: 'Mitsubishi (Q/iQ-R/FX), Beckhoff TwinCAT, Siemens S7, and Omron Sysmac automation controllers.',
    };
  }

  // 2. Mitsubishi Servo Systems (MR-J4)
  if (nameLower.includes('mr-j4') || (nameLower.includes('mitsubishi') && nameLower.includes('servo'))) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: '三菱サーボシステム (MR-J4)',
        description: 'サーボ速度調整、サーボアンプ内部データ処理、モータゲインチューニング、多軸同期制御。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Sistem Servo Mitsubishi (MR-J4)',
        description: 'Pengaturan kecepatan servo, pemrosesan data internal drive, tuning inersia motor, dan sinkronisasi multi-axis.',
      };
    }
    return {
      ...skill,
      name: 'Mitsubishi Servo Systems (MR-J4)',
      description: 'Servo speed adjustment, internal drive data processing, motor inertia tuning, and multi-axis synchronization.',
    };
  }

  // 3. GT Designer3 (Mitsubishi HMI)
  if (nameLower.includes('gt designer') || (nameLower.includes('got') && nameLower.includes('hmi'))) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'GT Designer3 (三菱GOTタッチパネル)',
        description: '産業用GOTタッチパネルHMI画面の設計・改修、リアルタイム稼働監視インターフェース開発。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'GT Designer3 (HMI Mitsubishi)',
        description: 'Desain dan modifikasi antarmuka layar sentuh HMI industri (seri GOT) untuk monitoring real-time.',
      };
    }
    return {
      ...skill,
      name: 'GT Designer3 (Mitsubishi HMI)',
      description: 'Design and modify industrial touchscreen HMI interfaces (GOT series) for real-time machine telemetry.',
    };
  }

  // 4. AC Servo & Motion Control
  if (nameLower.includes('servo') && nameLower.includes('motion')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'ACサーボ & モーション制御',
        description: '単軸・多軸モーション制御、リニアアクチュエータ、リニアモータ、高精度ダイレクトドライブロボティクス。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'AC Servo & Kontrol Gerak (Motion)',
        description: 'Kontrol gerak single/multi axis, aktuator linier, motor linier, dan penggerak langsung presisi tinggi.',
      };
    }
    return {
      ...skill,
      name: 'AC Servo & Motion Control',
      description: 'Single and multi-axis motion control, linear actuators, linear motors, and high-precision direct-drive robotics.',
    };
  }

  // 5. Microcontroller & IoT
  if (nameLower.includes('microcontroller') || nameLower.includes('iot')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'マイコン制御 & 産業用IoT',
        description: 'ATMEGA 2560、ESP8266無線IoT通信モジュール、Arduino、STM32によるクラウド遠隔監視システム。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Mikrokontroler & IoT Industri',
        description: 'Arsitektur mikrokontroler ATMEGA 2560, telemetri nirkabel ESP8266 IoT, Arduino Mega, dan STM32.',
      };
    }
    return {
      ...skill,
      name: 'Microcontroller & Industrial IoT',
      description: 'ATMEGA 2560, ESP8266 IoT wireless telemetry, Arduino Mega, and STM32 embedded data loggers.',
    };
  }

  // 6. Sensor & Instrumentation
  if (nameLower.includes('sensor') || nameLower.includes('instrumentation')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: '産業用センサー & 計装システム',
        description: '2線/3線式近接センサー、光学式ロータリーエンコーダ、6軸IMUセンサー、リミットスイッチ、各種計装。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Sensor & Instrumentasi Industri',
        description: 'Sensor induktif 2/3 kabel, optical rotary encoder, sensor 6-DOF IMU, limit switch, dan transduser.',
      };
    }
    return {
      ...skill,
      name: 'Sensors & Industrial Instrumentation',
      description: '2/3-wire proximity sensors, optical rotary encoders, 6-DOF IMU sensors, limit switches, and pressure transducers.',
    };
  }

  // 7. HMI Programming
  if (nameLower.includes('hmi programming') || nameLower.includes('hmi & scada')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'HMI画面プログラミング & SCADA',
        description: 'Visual Studio C#による専用HMIアプリ開発、Nextion液晶、Pro-face GP-Pro、Siemens WinCC連携。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Pemrograman HMI & SCADA',
        description: 'Aplikasi HMI kustom berbasis Visual Studio C#, layar pintar Nextion, Pro-face, dan Siemens WinCC.',
      };
    }
    return {
      ...skill,
      name: 'HMI & SCADA Programming',
      description: 'Custom HMI applications using Visual Studio C#, Nextion intelligent screens, Pro-face, and Siemens WinCC.',
    };
  }

  // 8. C / C++ Programming
  if (nameLower.includes('c / c++') || nameLower.includes('c++')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'C / C++ 組込みプログラミング',
        description: '組込み制御系C/C++開発、高周波PWMパルス生成、リアルタイムPIDフィードバックループ制御。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Pemrograman C / C++ Tertanam',
        description: 'Sistem tertanam (embedded), pembangkitan pulsa PWM kecepatan tinggi, dan kalkulasi loop kendali PID.',
      };
    }
    return {
      ...skill,
      name: 'C / C++ Embedded Programming',
      description: 'C/C++ embedded programming for motion pulse generation, algorithm optimization, and real-time PID control loops.',
    };
  }

  // 9. SOLIDWORKS (3D Design)
  if (nameLower.includes('solidworks')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'SOLIDWORKS 3D機械設計',
        description: '高精度機械部品モデリング、3Dアセンブリ設計、詳細製作図面作成（ドラフティング）、機構動作解析。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'SOLIDWORKS (Desain 3D CAD)',
        description: 'Pemodelan komponen mekanikal presisi, perakitan sub-assembly mesin, gambar drafting, dan analisis kinematika.',
      };
    }
    return {
      ...skill,
      name: 'SOLIDWORKS 3D CAD Design',
      description: 'Mechanical parts modeling, machine sub-assembly design, engineering drafting, and kinematic motion analysis.',
    };
  }

  // 10. Autodesk REVIT
  if (nameLower.includes('revit') || nameLower.includes('autodesk')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'Autodesk REVIT (BIM設計)',
        description: '工場内電気配線ルート設計、動力盤配置計画、BIM建築設備モデリング。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Autodesk REVIT (BIM Layout)',
        description: 'Perancangan layout instalasi elektrikal pabrik, distribusi daya fasilitas, dan pemodelan arsitektural BIM.',
      };
    }
    return {
      ...skill,
      name: 'Autodesk REVIT BIM',
      description: 'Electrical layout drafting, industrial plant power distribution pathways, and architectural BIM modeling.',
    };
  }

  // 11. Adobe Design Suite
  if (nameLower.includes('adobe')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'Adobe 技術デザインスイート',
        description: '標準作業手順書（SOP）作成、設備視覚マニュアル、技術配線図グラフィック、経営報告資料作成。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Adobe Design & Technical Suite',
        description: 'Penyusunan standar operasional (SOP), diagram visual mesin, ilustrasi skematik teknis, dan materi presentasi.',
      };
    }
    return {
      ...skill,
      name: 'Adobe Design & Technical Suite',
      description: 'Technical standard documentation (SOP), machine graphic diagrams, engineering schematics, and leadership presentations.',
    };
  }

  // 12. LEAN Manufacturing & TPM
  if (nameLower.includes('lean') || nameLower.includes('tpm')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'リーン生産方式 & TPM全社的保全',
        description: '自主保全（自主保全ステップ活動）、5S現場徹底、SQCDM改善ボード運用、設備総合効率（OEE）向上。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'LEAN Manufacturing & TPM',
        description: 'Penerapan Autonomous Maintenance (Jishu Hozen), standardisasi 5S tempat kerja, audit harian SQCDM, dan efisiensi OEE.',
      };
    }
    return {
      ...skill,
      name: 'LEAN Manufacturing & TPM',
      description: 'Autonomous Maintenance (Jishu Hozen) deployment, 5S workplace standardization, daily SQCDM tracking, and OEE boost.',
    };
  }

  // 13. 8 Step Problem Solving & 5-Why
  if (nameLower.includes('problem solving') || nameLower.includes('5-why') || nameLower.includes('8 step')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'なぜなぜ分析 & 8ステップ問題解決法',
        description: '真因究明（5-Whyなぜなぜ分析）、再発防止対策、QCサークル活動、日次カイゼン活動の主導。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: '8-Step Problem Solving & 5-Why',
        description: 'Analisis akar masalah secara terstruktur (5-Why), pencegahan cacat berulang, Gugus Kendali Mutu (QCC), dan Kaizen.',
      };
    }
    return {
      ...skill,
      name: '8-Step Problem Solving & 5-Why',
      description: 'Systematic root cause analysis (5-Why), recurrence prevention, Quality Control Circles (QCC), and shopfloor Kaizen.',
    };
  }

  // 14. Budgeting & OPEX Engineering
  if (nameLower.includes('opex') || nameLower.includes('budget')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'エンジニアリング予算策定 & OPEX原価低減',
        description: '工場保全操業予算（OPEX）管理、予備品在庫最適化、不良撲滅による月額コスト削減達成。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Budgeting & OPEX Engineering',
        description: 'Pengendalian anggaran operasional pemeliharaan pabrik, manajemen siklus suku cadang, dan efisiensi biaya produksi.',
      };
    }
    return {
      ...skill,
      name: 'Engineering Budgeting & OPEX Control',
      description: 'Plant maintenance operational budget control, spare parts lifecycle management, and defect reduction cost savings.',
    };
  }

  // 15. Engineering Team Leadership
  if (nameLower.includes('leadership') || nameLower.includes('team lead') || nameLower.includes('kepemimpinan')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'エンジニアリング組織統括 (60名以上統括)',
        description: '60名以上の技術部員・保全エンジニア・テクニシャンを統括し、多直シフトの安全と生産性を牽引。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Kepemimpinan Tim Rekayasa (60+)',
        description: 'Memimpin dan membina divisi engineering serta teknisi hingga 60+ personel lintas shift dengan standar keselamatan tinggi.',
      };
    }
    return {
      ...skill,
      name: 'Engineering Team Leadership (60+)',
      description: 'Leading and mentoring engineering divisions and plant technicians up to 60+ personnel across multi-shift operations.',
    };
  }

  // 16. Vendor & Contractor Management
  if (nameLower.includes('vendor') || nameLower.includes('contractor') || nameLower.includes('kontraktor')) {
    if (lang === 'ja') {
      return {
        ...skill,
        name: 'サプライヤー & 外部施工業者管理',
        description: '自動化設備導入入札評価、技術仕様書策定、外部パートナー折衝、受入試運転・検収管理。',
      };
    }
    if (lang === 'id') {
      return {
        ...skill,
        name: 'Manajemen Vendor & Kontraktor',
        description: 'Evaluasi tender proyek otomatisasi, spesifikasi pengadaan peralatan teknis, dan supervisi komisioning kontraktor.',
      };
    }
    return {
      ...skill,
      name: 'Vendor & Contractor Management',
      description: 'Automation project tender evaluation, technical equipment procurement specifications, and contractor commissioning.',
    };
  }

  return skill;
}
