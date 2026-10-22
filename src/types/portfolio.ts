export interface ProfileData {
  name: string;
  title: string;
  degree: string;
  university: string;
  gpa: string;
  birthDate: string;
  phone: string;
  email: string;
  location: string;
  postalCode: string;
  photoUrl: string;
  summary: string;
  qualities: string[];
  languages: { language: string; level: string; stars?: number; rating?: string }[];
  socials: { platform: string; handle: string; url: string }[];
  stats: { label: string; value: string; detail: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Industrial IoT' | 'Robotics & CNC' | 'PLC & HMI' | 'Embedded & Drone' | 'LEAN & Process';
  year: string;
  summary: string;
  goals: string;
  imageUrl: string;
  techStack: string[];
  madeWith?: string;
  metrics?: string;
  featured?: boolean;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  type?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Award' | 'Academic' | 'Professional' | 'Employment';
  description: string;
  imageUrl?: string;
  appliedSkill?: string;
  recipient?: string;
}

export interface SkillItem {
  name: string;
  category: 'Software' | 'Hardware & PLC' | 'Methodologies' | 'Interpersonal';
  level: number; // 1-5 or 1-10
  description?: string;
  customLogoUrl?: string;
  iconKey?: string;
}

export interface PortfolioDatabase {
  profile: ProfileData;
  projects: ProjectItem[];
  experiences: WorkExperienceItem[];
  certificates: CertificateItem[];
  skills: SkillItem[];
  updatedAt: string;
}
