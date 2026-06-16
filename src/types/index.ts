export interface Experience {
  role: string;
  company: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  date: string;
  tags: string[];
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  dateRange: string;
  cgpa: string;
  recognition: string;
}

export interface LeadershipRole {
  role: string;
  organization: string;
  dateRange?: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
