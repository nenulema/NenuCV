import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// 1. Mitsubishi Electric (Authentic Three Red Diamonds - Exact 60°/120° geometry)
export const MitsubishiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top diamond */}
    <polygon points="50,60 36.5,36.62 50,13.24 63.5,36.62" fill="#E60012" />
    {/* Bottom Left diamond */}
    <polygon points="50,60 23,60 9.5,83.38 36.5,83.38" fill="#E60012" />
    {/* Bottom Right diamond */}
    <polygon points="50,60 77,60 90.5,83.38 63.5,83.38" fill="#E60012" />
  </svg>
);

// 1b. Mitsubishi Electric Official Corporate Badge (3 Diamonds + Brand Text)
export const MitsubishiElectricLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
    {/* Top diamond */}
    <polygon points="50,42 41,26.4 50,10.8 59,26.4" fill="#E60012" />
    {/* Bottom Left diamond */}
    <polygon points="50,42 32,42 23,57.6 41,57.6" fill="#E60012" />
    {/* Bottom Right diamond */}
    <polygon points="50,42 68,42 77,57.6 59,57.6" fill="#E60012" />
    <text
      x="50"
      y="74"
      fill="#0F172A"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="9.5"
      fontWeight="900"
      letterSpacing="0.2"
      textAnchor="middle"
    >
      MITSUBISHI
    </text>
    <text
      x="50"
      y="86"
      fill="#E60012"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="7.5"
      fontWeight="800"
      letterSpacing="0.8"
      textAnchor="middle"
    >
      ELECTRIC
    </text>
  </svg>
);

// 2. Beckhoff Automation (Beckhoff Red Brand & TwinCAT)
export const BeckhoffLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#E30613" />
    <path
      d="M25 22H52C63 22 72 28 72 37C72 43 68 48 61 50C70 52 75 58 75 66C75 75 65 80 53 80H25V22ZM41 34V46H51C56 46 60 43 60 40C60 36 56 34 50 34H41ZM41 55V68H53C58 68 63 65 63 61C63 57 58 55 53 55H41Z"
      fill="white"
    />
  </svg>
);

// 3. Siemens (Siemens Turquoise)
export const SiemensLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#00646E" />
    <text
      x="50"
      y="62"
      fill="white"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="26"
      fontWeight="900"
      letterSpacing="-0.5"
      textAnchor="middle"
    >
      SIEMENS
    </text>
  </svg>
);

// 4. Omron (Industrial Blue)
export const OmronLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#005BAC" />
    <text
      x="50"
      y="62"
      fill="white"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="24"
      fontWeight="900"
      letterSpacing="1"
      textAnchor="middle"
    >
      OMRON
    </text>
  </svg>
);

// 5. SOLIDWORKS (Dassault Systèmes Red 3D Cube)
export const SolidworksLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#E2231A" />
    {/* 3D Isometric Cube Outline with SW letter cuts */}
    <path
      d="M50 14L82 32V68L50 86L18 68V32L50 14Z"
      fill="#BA1812"
      stroke="#FF6B66"
      strokeWidth="2.5"
    />
    <path d="M50 14V50L82 68" stroke="#FF9691" strokeWidth="2.5" />
    <path d="M50 50L18 68" stroke="#FF9691" strokeWidth="2.5" />
    <text
      x="50"
      y="58"
      fill="white"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="24"
      fontWeight="900"
      textAnchor="middle"
    >
      SW
    </text>
  </svg>
);

// 6. Autodesk Revit (Autodesk Architectural 3D Ribbon)
export const AutodeskRevitLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#0696D7" />
    <path
      d="M30 20H55C66 20 74 27 74 37C74 44 69 50 62 53L76 80H61L49 56H43V80H30V20ZM43 32V45H54C59 45 62 42 62 38.5C62 35 59 32 54 32H43Z"
      fill="white"
    />
  </svg>
);

// 7. LEAN Manufacturing (Kaizen Continuous Improvement Loop & 5S)
export const LeanKaizenLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#047857" />
    <circle cx="50" cy="50" r="32" stroke="#A7F3D0" strokeWidth="6" strokeDasharray="14 6" />
    <path d="M72 32L82 32L82 22" stroke="#A7F3D0" strokeWidth="5" strokeLinecap="round" />
    <path d="M28 68L18 68L18 78" stroke="#A7F3D0" strokeWidth="5" strokeLinecap="round" />
    <text
      x="50"
      y="48"
      fill="white"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="16"
      fontWeight="900"
      letterSpacing="1"
      textAnchor="middle"
    >
      LEAN
    </text>
    <text
      x="50"
      y="66"
      fill="#A7F3D0"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="11"
      fontWeight="800"
      letterSpacing="0.5"
      textAnchor="middle"
    >
      KAIZEN
    </text>
  </svg>
);

// 8. TPM (Total Productive Maintenance - Golden Gear & Shield)
export const TpmLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#B45309" />
    {/* Gear & Shield */}
    <path
      d="M50 16L78 28V52C78 69 66 82 50 86C34 82 22 69 22 52V28L50 16Z"
      fill="#D97706"
      stroke="#FDE68A"
      strokeWidth="3"
    />
    <circle cx="50" cy="45" r="14" fill="#92400E" stroke="#FDE68A" strokeWidth="2.5" />
    <text
      x="50"
      y="50"
      fill="white"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="14"
      fontWeight="900"
      letterSpacing="0.5"
      textAnchor="middle"
    >
      TPM
    </text>
    <text
      x="50"
      y="72"
      fill="#FEF3C7"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="9"
      fontWeight="800"
      letterSpacing="0.5"
      textAnchor="middle"
    >
      OEE 100%
    </text>
  </svg>
);

// 9. C / C++ Programming (Official Hexagonal Blue C++)
export const CppLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,8 87,29 87,71 50,92 13,71 13,29" fill="#00599C" />
    <path
      d="M48 35C44 32 38 32 33 35C26 40 24 51 29 59C34 66 43 67 49 63"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path d="M57 48H69M63 42V54" stroke="#004482" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M73 48H85M79 42V54" stroke="#004482" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M57 48H69M63 42V54" stroke="#659AD2" strokeWidth="3" strokeLinecap="round" />
    <path d="M73 48H85M79 42V54" stroke="#659AD2" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// 10. Microcontroller & IoT (Silicon chip, ESP8266 & wireless antenna)
export const MicrocontrollerLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#0F172A" />
    <rect x="25" y="25" width="50" height="50" rx="6" fill="#1E293B" stroke="#38BDF8" strokeWidth="3" />
    {/* Pins */}
    <path d="M35 15V25M50 15V25M65 15V25M35 75V85M50 75V85M65 75V85" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
    <path d="M15 35H25M15 50H25M15 65H25M75 35H85M75 50H85M75 65H85" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
    {/* Wifi signal inside chip */}
    <circle cx="50" cy="56" r="3.5" fill="#38BDF8" />
    <path d="M42 48C46 44 54 44 58 48" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M36 41C44 34 56 34 64 41" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 11. Mitsubishi Servo Systems & Motion Control (MR-J4 series)
export const ServoMotionLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#991B1B" />
    {/* Mitsubishi diamond in the corner */}
    <polygon points="50,14 58,28 50,42 42,28" fill="#FEF2F2" />
    <polygon points="50,42 42,28 34,42 42,56" fill="#FEF2F2" />
    <polygon points="50,42 58,28 66,42 58,56" fill="#FEF2F2" />
    {/* Pulse motion encoder wave */}
    <path
      d="M18 78L32 78L32 62L46 62L46 78L60 78L60 62L74 62L74 78L84 78"
      stroke="#FCA5A5"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 12. GT Designer3 (Mitsubishi HMI Touchscreen)
export const GtDesignerLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#1E3A8A" />
    {/* Touchscreen Panel */}
    <rect x="18" y="20" width="64" height="48" rx="6" fill="#0F172A" stroke="#93C5FD" strokeWidth="3" />
    <rect x="25" y="27" width="50" height="34" rx="3" fill="#1D4ED8" />
    <text
      x="50"
      y="48"
      fill="white"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="13"
      fontWeight="900"
      letterSpacing="0.5"
      textAnchor="middle"
    >
      GOT-HMI
    </text>
    {/* Stand */}
    <path d="M40 68L36 82H64L60 68" fill="#93C5FD" />
  </svg>
);

// 13. Sensor & Industrial Instrumentation
export const SensorLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#0369A1" />
    {/* Cylindrical proximity sensor */}
    <rect x="20" y="38" width="46" height="24" rx="4" fill="#38BDF8" stroke="#E0F2FE" strokeWidth="2.5" />
    <rect x="16" y="42" width="6" height="16" rx="2" fill="#F59E0B" />
    {/* Target detection waves */}
    <path d="M72 40C76 45 76 55 72 60" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
    <path d="M79 34C86 42 86 58 79 66" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
    <circle cx="90" cy="50" r="4" fill="#EF4444" />
  </svg>
);

// 14. 8-Step Problem Solving & 5-Why (Target Bullseye)
export const ProblemSolvingLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#4338CA" />
    <circle cx="50" cy="50" r="32" stroke="#A5B4FC" strokeWidth="4" />
    <circle cx="50" cy="50" r="20" stroke="#C7D2FE" strokeWidth="4" />
    <circle cx="50" cy="50" r="8" fill="#F43F5E" />
    <path d="M50 10V22M50 78V90M10 50H22M78 50H90" stroke="#A5B4FC" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// 15. Budgeting & OPEX Engineering (Cost Reduction / Finance Curve)
export const OpexBudgetLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#15803D" />
    <text
      x="50"
      y="55"
      fill="white"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="36"
      fontWeight="900"
      textAnchor="middle"
    >
      $
    </text>
    <path
      d="M20 75L40 60L55 68L80 35"
      stroke="#86EFAC"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M70 35H80V45" stroke="#86EFAC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 16. Engineering Team Leadership (60+ Members)
export const LeadershipLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#6D28D9" />
    <circle cx="50" cy="36" r="14" fill="#DDD6FE" />
    <path d="M26 76C26 62 36 54 50 54C64 54 74 62 74 76" fill="#DDD6FE" />
    {/* Side team members */}
    <circle cx="25" cy="42" r="8" fill="#A78BFA" opacity="0.8" />
    <path d="M12 76C12 66 18 60 27 60" fill="#A78BFA" opacity="0.8" />
    <circle cx="75" cy="42" r="8" fill="#A78BFA" opacity="0.8" />
    <path d="M88 76C88 66 82 60 73 60" fill="#A78BFA" opacity="0.8" />
  </svg>
);

// 17. Vendor & Contractor Management
export const VendorContractorLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="18" fill="#C2410C" />
    {/* Industrial handshake */}
    <path
      d="M22 45L36 32L52 48L44 56L34 46L26 54L22 45Z"
      fill="#FED7AA"
    />
    <path
      d="M78 45L64 32L48 48L56 56L66 46L74 54L78 45Z"
      fill="#FFEDD5"
    />
    <circle cx="50" cy="52" r="6" fill="#FFFFFF" />
  </svg>
);

// 18. Adobe Creative Suite (Official Adobe Corporate 'A' emblem)
export const AdobeLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#EB1000" />
    {/* Official Adobe 'A' geometry (left triangle, right triangle, and center angled bridge) */}
    <g transform="translate(16.1, 20) scale(0.75)" fill="white">
      <path d="M56.9686 0H90.4318V80L56.9686 0Z" />
      <path d="M33.4632 0H0V80L33.4632 0Z" />
      <path d="M45.1821 29.4668L66.5199 80H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z" />
    </g>
  </svg>
);

export interface SkillLogoOption {
  key: string;
  name: string;
  brand: string;
  Component: React.FC<LogoProps>;
  category: string;
}

export const AVAILABLE_SKILL_LOGOS: SkillLogoOption[] = [
  { key: 'mitsubishi', name: 'Mitsubishi 3-Diamonds', brand: 'Mitsubishi', Component: MitsubishiLogo, category: 'Hardware & PLC' },
  { key: 'mitsubishi_electric', name: 'Mitsubishi Electric (Badge)', brand: 'Mitsubishi', Component: MitsubishiElectricLogo, category: 'Hardware & PLC' },
  { key: 'beckhoff', name: 'Beckhoff Automation', brand: 'Beckhoff', Component: BeckhoffLogo, category: 'Hardware & PLC' },
  { key: 'siemens', name: 'Siemens Industry', brand: 'Siemens', Component: SiemensLogo, category: 'Hardware & PLC' },
  { key: 'omron', name: 'OMRON Automation', brand: 'Omron', Component: OmronLogo, category: 'Hardware & PLC' },
  { key: 'servo', name: 'Multi-Axis AC Servo Motion', brand: 'Motion', Component: ServoMotionLogo, category: 'Hardware & PLC' },
  { key: 'iot', name: 'IoT & Microcontroller (ESP/Arduino)', brand: 'IoT', Component: MicrocontrollerLogo, category: 'Hardware & PLC' },
  { key: 'sensor', name: 'Industrial Sensors & IMU', brand: 'Sensors', Component: SensorLogo, category: 'Hardware & PLC' },
  { key: 'solidworks', name: 'SOLIDWORKS 3D CAD', brand: 'SOLIDWORKS', Component: SolidworksLogo, category: 'Software' },
  { key: 'revit', name: 'Autodesk Revit BIM', brand: 'Autodesk', Component: AutodeskRevitLogo, category: 'Software' },
  { key: 'hmi', name: 'HMI & SCADA Interface', brand: 'HMI', Component: GtDesignerLogo, category: 'Software' },
  { key: 'cpp', name: 'C / C++ Embedded & Control', brand: 'C++', Component: CppLogo, category: 'Software' },
  { key: 'adobe', name: 'Adobe Design & Drafting Suite', brand: 'Adobe', Component: AdobeLogo, category: 'Software' },
  { key: 'lean', name: 'LEAN Kaizen & 5S', brand: 'LEAN', Component: LeanKaizenLogo, category: 'Methodologies' },
  { key: 'tpm', name: 'Total Productive Maintenance (TPM)', brand: 'TPM', Component: TpmLogo, category: 'Methodologies' },
  { key: 'problem_solving', name: '8-Step Problem Solving & 5-Why', brand: '8-Step', Component: ProblemSolvingLogo, category: 'Methodologies' },
  { key: 'leadership', name: 'Engineering Leadership (60+)', brand: 'Leadership', Component: LeadershipLogo, category: 'Interpersonal' },
  { key: 'opex', name: 'OPEX Budgeting & Cost Saving', brand: 'OPEX', Component: OpexBudgetLogo, category: 'Interpersonal' },
  { key: 'vendor', name: 'Vendor & Contractor Management', brand: 'Contractors', Component: VendorContractorLogo, category: 'Interpersonal' },
];

// Smart resolver to match any skill item to its primary logo and sub-badges
export function getSkillLogoComponent(
  skillOrName: { name: string; category?: string; customLogoUrl?: string; iconKey?: string } | string,
  categoryFallback?: string
) {
  let skillName = '';
  let category = categoryFallback;
  let customLogoUrl: string | undefined;
  let iconKey: string | undefined;

  if (typeof skillOrName === 'string') {
    skillName = skillOrName;
  } else if (skillOrName) {
    skillName = skillOrName.name || '';
    category = skillOrName.category || categoryFallback;
    customLogoUrl = skillOrName.customLogoUrl;
    iconKey = skillOrName.iconKey;
  }

  // 1. If user uploaded or specified custom logo URL
  if (customLogoUrl && customLogoUrl.trim()) {
    const CustomImageLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
      <img
        src={customLogoUrl}
        alt={skillName}
        className={`${className} object-contain rounded-md`}
      />
    );
    return {
      PrimaryLogo: CustomImageLogo,
      brandName: skillName,
      accentColor: 'border-blue-200 bg-blue-50/50 text-blue-700',
      pillLogos: [],
      isCustomImage: true,
    };
  }

  // 2. If user chose a specific built-in logo key
  if (iconKey) {
    const found = AVAILABLE_SKILL_LOGOS.find((l) => l.key === iconKey);
    if (found) {
      return {
        PrimaryLogo: found.Component,
        brandName: found.name,
        accentColor: 'border-slate-200 bg-slate-50 text-slate-700',
        pillLogos: [{ name: found.brand, Component: found.Component }],
        isCustomImage: false,
      };
    }
  }

  const s = skillName.toLowerCase();

  if (s.includes('mitsubishi servo') || s.includes('mr-j4')) {
    return {
      PrimaryLogo: ServoMotionLogo,
      brandName: 'Mitsubishi Electric (MR-J4)',
      accentColor: 'border-red-200 bg-red-50/50 text-red-700',
      pillLogos: [{ name: 'Mitsubishi', Component: MitsubishiLogo }],
    };
  }

  if (s.includes('gt designer') || s.includes('got')) {
    return {
      PrimaryLogo: GtDesignerLogo,
      brandName: 'Mitsubishi HMI (GT Designer3)',
      accentColor: 'border-blue-200 bg-blue-50/50 text-blue-700',
      pillLogos: [{ name: 'Mitsubishi', Component: MitsubishiLogo }],
    };
  }

  if (s.includes('plc') || s.includes('ladder')) {
    return {
      PrimaryLogo: MitsubishiLogo,
      brandName: 'Mitsubishi / Beckhoff / Siemens / Omron',
      accentColor: 'border-red-200 bg-red-50/30 text-red-700',
      pillLogos: [
        { name: 'Mitsubishi', Component: MitsubishiLogo },
        { name: 'Beckhoff', Component: BeckhoffLogo },
        { name: 'Siemens', Component: SiemensLogo },
        { name: 'Omron', Component: OmronLogo },
      ],
    };
  }

  if (s.includes('solidworks')) {
    return {
      PrimaryLogo: SolidworksLogo,
      brandName: 'Dassault Systèmes SOLIDWORKS',
      accentColor: 'border-red-200 bg-red-50/50 text-red-700',
      pillLogos: [{ name: 'SOLIDWORKS', Component: SolidworksLogo }],
    };
  }

  if (s.includes('revit') || s.includes('autodesk')) {
    return {
      PrimaryLogo: AutodeskRevitLogo,
      brandName: 'Autodesk REVIT',
      accentColor: 'border-sky-200 bg-sky-50/50 text-sky-700',
      pillLogos: [{ name: 'Autodesk', Component: AutodeskRevitLogo }],
    };
  }

  if (s.includes('lean') || s.includes('tpm')) {
    return {
      PrimaryLogo: LeanKaizenLogo,
      brandName: 'LEAN Kaizen & TPM Enterprise',
      accentColor: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
      pillLogos: [
        { name: 'LEAN', Component: LeanKaizenLogo },
        { name: 'TPM', Component: TpmLogo },
      ],
    };
  }

  if (s.includes('8 step') || s.includes('5-why') || s.includes('problem solving')) {
    return {
      PrimaryLogo: ProblemSolvingLogo,
      brandName: '8 Step & 5-Why Methodology',
      accentColor: 'border-indigo-200 bg-indigo-50/50 text-indigo-700',
      pillLogos: [{ name: '8-Step', Component: ProblemSolvingLogo }],
    };
  }

  if (s.includes('servo') || s.includes('motion')) {
    return {
      PrimaryLogo: ServoMotionLogo,
      brandName: 'Multi-Axis AC Servo Motion',
      accentColor: 'border-red-200 bg-red-50/50 text-red-700',
      pillLogos: [
        { name: 'Mitsubishi', Component: MitsubishiLogo },
        { name: 'Motion', Component: ServoMotionLogo },
      ],
    };
  }

  if (s.includes('microcontroller') || s.includes('iot') || s.includes('esp8266')) {
    return {
      PrimaryLogo: MicrocontrollerLogo,
      brandName: 'ATMEGA / ESP8266 / Arduino / STM32',
      accentColor: 'border-cyan-200 bg-cyan-50/50 text-cyan-700',
      pillLogos: [{ name: 'IoT', Component: MicrocontrollerLogo }],
    };
  }

  if (s.includes('sensor') || s.includes('instrumentation')) {
    return {
      PrimaryLogo: SensorLogo,
      brandName: 'Industrial Sensors & 6-DOF IMU',
      accentColor: 'border-sky-200 bg-sky-50/50 text-sky-700',
      pillLogos: [{ name: 'Sensors', Component: SensorLogo }],
    };
  }

  if (s.includes('c / c++') || s.includes('c++')) {
    return {
      PrimaryLogo: CppLogo,
      brandName: 'ISO C / C++ Embedded & Control',
      accentColor: 'border-blue-200 bg-blue-50/50 text-blue-700',
      pillLogos: [{ name: 'C++', Component: CppLogo }],
    };
  }

  if (s.includes('hmi')) {
    return {
      PrimaryLogo: GtDesignerLogo,
      brandName: 'Visual Studio / Nextion / Pro-face',
      accentColor: 'border-blue-200 bg-blue-50/50 text-blue-700',
      pillLogos: [{ name: 'HMI', Component: GtDesignerLogo }],
    };
  }

  if (s.includes('adobe')) {
    return {
      PrimaryLogo: AdobeLogo,
      brandName: 'Adobe Creative Suite',
      accentColor: 'border-red-200 bg-red-50/50 text-red-700',
      pillLogos: [{ name: 'Adobe', Component: AdobeLogo }],
    };
  }

  if (s.includes('budget') || s.includes('opex')) {
    return {
      PrimaryLogo: OpexBudgetLogo,
      brandName: 'OPEX Budgeting & Cost Saving',
      accentColor: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
      pillLogos: [{ name: 'OPEX', Component: OpexBudgetLogo }],
    };
  }

  if (s.includes('leadership') || s.includes('team')) {
    return {
      PrimaryLogo: LeadershipLogo,
      brandName: '60+ Members Engineering Leadership',
      accentColor: 'border-purple-200 bg-purple-50/50 text-purple-700',
      pillLogos: [{ name: 'Leadership', Component: LeadershipLogo }],
    };
  }

  if (s.includes('vendor') || s.includes('contractor')) {
    return {
      PrimaryLogo: VendorContractorLogo,
      brandName: 'Vendor & Project Commissioning',
      accentColor: 'border-amber-200 bg-amber-50/50 text-amber-700',
      pillLogos: [{ name: 'Contractors', Component: VendorContractorLogo }],
    };
  }

  // Default fallback
  return {
    PrimaryLogo: MitsubishiLogo,
    brandName: skillName,
    accentColor: 'border-slate-200 bg-slate-50 text-slate-700',
    pillLogos: [],
  };
}
