import {
  Experience,
  SkillGroup,
  Project,
  Education,
  LeadershipRole,
  NavLink,
} from '@/types';

export const personalInfo = {
  name: 'Chashman',
  title: 'Mechatronics & Control Engineer',
  tagline: 'PLC systems. Railway signaling. Industrial automation.',
  email: 'chashman7015@gmail.com',
  phone: '+92-341-5810670',
  linkedin: 'https://linkedin.com/in/chashman-zafar-225089242',
  location: 'Lahore, Pakistan',
  availability: 'Available for opportunities',
  yearsExperience: '1+',
  projectsCompleted: '5+',
  technologies: '10+',
};

export const aboutBio = `Graduate Mechatronics & Control Engineer with hands-on experience in PLC-based industrial automation and railway signaling systems. Currently deployed on the Thar Coal Railway Signaling Project — a safety-critical freight corridor requiring precise interlocking logic and regulatory compliance. Familiar with the full project lifecycle from design through FAT/SAT validation.`;

export const stats = [
  { label: 'CGPA', value: '3.26/4.00' },
  { label: 'Degree', value: 'BE Mechatronics' },
  { label: 'University', value: 'UET Lahore' },
  { label: 'Location', value: 'Lahore, Pakistan' },
];

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Industrial Automation & Control',
    icon: 'Cpu',
    skills: [
      'Siemens TIA Portal',
      'PLC Programming (Ladder Logic)',
      'Function Block Diagram (FBD)',
      'Siemens S7-1200',
      'Siemens LOGO! 8',
      'SCADA Systems',
      'HMI Design',
      'Safety Interlocking',
    ],
  },
  {
    title: 'Instrumentation & Mechanical',
    icon: 'Gauge',
    skills: [
      'Pneumatic Systems',
      'Hydraulic Systems',
      'Actuators & Sensors',
      'Process Control',
      'Industrial Sensors',
    ],
  },
  {
    title: 'Software & Programming',
    icon: 'Code',
    skills: [
      'Python',
      'C/C++',
      'MATLAB/Simulink',
      'Machine Learning',
      'Computer Vision',
      'Data Analysis',
    ],
  },
  {
    title: 'Embedded & Real-Time Systems',
    icon: 'CircuitBoard',
    skills: [
      'Microcontrollers',
      'STM32',
      'Arduino',
      'Real-Time Systems',
      'Sensor Fusion',
      'Embedded C',
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: 'Graduate Trainee Engineer (GTE)',
    company: 'Pakistan Railways',
    dateRange: 'Feb 2026 – Present',
    location: 'Lahore, Pakistan',
    bullets: [
      'Deployed on Thar Coal Railway Signaling Project — a safety-critical PLC-based signaling and interlocking system for an industrial freight corridor',
      'Programmed Siemens S7-1200 PLC via TIA Portal using Ladder Logic for signal control logic, track occupancy detection, and level crossing interlocking',
      'Developed logic for Siemens LOGO! 8 smart relay modules using Function Block Diagram (FBD) for auxiliary signaling and local control panels',
      'Conducted FAT and SAT for signaling panels, verifying interlocking logic against railway safety regulations',
    ],
  },
  {
    role: 'Robotics & Industrial Automation Instructor',
    company: 'Punjab Group of Colleges',
    dateRange: 'Aug 2025 – Jan 2026',
    location: 'Lahore, Pakistan',
    bullets: [
      'Delivered instruction in control systems and microcontroller-based systems',
      'Developed structured curriculum covering process control, sensor integration, and automated system design',
      'Mentored students on embedded programming and industrial troubleshooting',
    ],
  },
  {
    role: 'Research Intern — Machine Learning',
    company: 'NUST, Islamabad',
    dateRange: 'Jun – Jul 2023',
    location: 'Islamabad, Pakistan',
    bullets: [
      'ML research on brain tumor segmentation using BraTS\'23 dataset',
      'Contributed to academic publication with reproducible results',
    ],
  },
  {
    role: 'STEM & Robotics Instructor',
    company: 'MechaBotix',
    dateRange: 'Jun 2022',
    location: 'Lahore, Pakistan',
    bullets: [
      'Taught robotics fundamentals; guided microcontroller-based prototype development',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Automatic Traffic Light Control System (PLC/SCADA)',
    date: 'Nov – Dec 2024',
    tags: ['Siemens PLC', 'Ladder Logic', 'FBD'],
    bullets: [
      'Developed PLC program using Ladder Logic for traffic light control with normal and emergency modes',
      'Implemented Function Block Diagram (FBD) for timing logic and pedestrian crossing sequences',
      'Configured SCADA system for real-time traffic monitoring and centralized control',
    ],
  },
  {
    title: 'Automatic Bottle Repositioning System (Hydraulics/Pneumatics)',
    date: 'Nov – Dec 2023',
    tags: ['Pneumatics', 'Actuators', 'Sensors'],
    bullets: [
      'Designed pneumatic actuator system with sensor feedback for automated conveyor belt repositioning',
      'Integrated proximity sensors for object detection and position verification',
    ],
  },
  {
    title: 'Human-Aware Mobile Robot Navigation (ML/Computer Vision)',
    date: 'May 2024 – Jul 2025',
    tags: ['Python', 'ML', 'Computer Vision', 'Sensor Fusion'],
    bullets: [
      'Developed ML-based navigation system with real-time sensor fusion — 90% accuracy',
      'Implemented computer vision algorithms for dynamic obstacle avoidance',
    ],
  },
];

export const education: Education = {
  degree: 'BE Mechatronics & Control Engineering',
  institution: 'UET Lahore',
  dateRange: 'Nov 2021 – Jun 2025',
  cgpa: '3.26/4.00',
  recognition: 'HEC Recognized, PEC Accredited',
};

export const leadershipRoles: LeadershipRole[] = [
  {
    role: 'Trust School Outreach Program',
    organization: 'Mechatronics Club, UET Lahore',
  },
  {
    role: 'Trust School Exhibition',
    organization: 'Mechatronics Club, UET Lahore',
  },
  {
    role: 'Lahore Science Mela Exhibition',
    organization: 'Khwarizmi Science Society',
  },
  {
    role: 'Deaf Foundation Outreach Program',
    organization: 'Mechatronics Club, UET Lahore',
  },
];

export const contactInfo = [
  {
    label: 'Email',
    value: 'chashman7015@gmail.com',
    href: 'mailto:chashman7015@gmail.com',
    icon: 'Mail',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/chashman-zafar-225089242',
    href: 'https://linkedin.com/in/chashman-zafar-225089242',
    icon: 'Linkedin',
  },
  {
    label: 'Phone',
    value: '+92-341-5810670',
    href: 'tel:+923415810670',
    icon: 'Phone',
  },
];
