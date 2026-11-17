// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — no layout code needs to change.
// ─────────────────────────────────────────────────────────────

export type LinkType = 'App Store' | 'Google Play' | 'GitHub' | 'Live Demo' | 'pub.dev' | 'Web';

export interface ProjectLink {
  type: LinkType;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  cover: string;
  date: string;
  company: string;
  role: string;
  featured?: boolean;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
}

export const profile = {
  name: 'Amira Shinnawi',
  firstName: 'Amira',
  title: 'Mobile App Developer',
  specialty: 'Flutter Specialist',
  location: 'Cairo, Egypt',
  availability: 'Open to remote roles',
  email: 'devamirashinnawi@gmail.com',
  phone: '+20 102 516 7595',
  whatsapp: 'https://wa.me/201025167595',
  github: 'https://github.com/Amira-Shinnawi',
  githubHandle: 'Amira-Shinnawi',
  linkedin: 'https://www.linkedin.com/in/amira-shinnawi/',
  linkedinHandle: 'in/amira-shinnawi',
  cv: './assets/downloads/Amira_Shinnawi_CV.pdf',
  photo: './profile.webp',
  valueProp:
    'I build and ship cross-platform Flutter apps for business, e-commerce and education — ERP-integrated POS systems, offline-first products, real-time features and payment flows — from first commit to App Store and Google Play.',
  about: [
    'Flutter developer with 3 years of professional experience building and delivering cross-platform mobile applications for business, e-commerce, education and customer-facing products.',
    'Most of my work sits where mobile meets real operations: ERP-integrated POS apps, thermal printing, barcode & QR scanning, offline-first data sync, SignalR real-time updates and payment gateways.',
    'I have independently taken a freelance product from development to release on both the App Store and Google Play, and I also contribute to team-based products in a professional, review-driven environment.',
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional' },
  ],
};

export const stats = [
  { value: '3+', label: 'Years building Flutter apps' },
  { value: '10', label: 'Production & client projects' },
  { value: '4', label: 'Apps live on the stores' },
  { value: '1', label: 'Package published on pub.dev' },
];

export interface TimelineItem {
  kind: 'work' | 'education';
  role: string;
  org: string;
  orgNote: string;
  location: string;
  date: string;
  dateNote?: string;
  current?: boolean;
  points: string[];
  tags?: string[];
  links?: ProjectLink[];
}

export const experience: TimelineItem[] = [
  {
    kind: 'work',
    role: 'Flutter Developer',
    org: 'Sporton',
    orgNote: 'Sports Platform',
    location: 'Remote',
    date: 'May 2026 – Present',
    dateNote: 'Part-time May – Jun 2026 · Full-time since Jul 2026',
    current: true,
    points: [
      'Building a sports platform with athlete profiles and CVs, AI-powered video analysis, a sports marketplace, professional accounts and targeted advertising.',
      'Developing AI-powered profile and CV analysis features that evaluate athlete data and present insights in the app.',
      'Contributing to the AI video analysis feature — video upload, processing status and displaying analysis results.',
      'Building the app foundation and responsive UI with Clean Architecture and BLoC/Cubit.',
    ],
    tags: ['Flutter', 'Clean Architecture', 'BLoC/Cubit', 'AI Integration'],
  },
  {
    kind: 'work',
    role: 'Freelance Flutter Developer',
    org: 'BraceUp',
    orgNote: 'Dental Education Platform',
    location: 'Remote',
    date: 'Mar 2026 – Present',
    current: true,
    points: [
      'Independently built and launched an offline-first educational app for dental fellowships — published on both stores and actively maintained.',
      'Implemented SQLite with Supabase synchronization for authentication, database, storage and real-time features.',
      'Built a Flutter Web admin platform for managing mock exams, courses and student bookings, deployed on Vercel.',
      'Set up CI/CD with Codemagic and continue to maintain and improve the product.',
    ],
    tags: ['Flutter', 'SQLite', 'Supabase', 'Flutter Web', 'Codemagic'],
    links: [
      { type: 'App Store', url: 'https://apps.apple.com/us/app/brace-up/id6754993784' },
      { type: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.ortho.app' },
    ],
  },
  {
    kind: 'work',
    role: 'Flutter Developer',
    org: 'GIRIX',
    orgNote: 'ERP & Business Management Solutions',
    location: 'Mansoura, Egypt · Full-time',
    date: 'Nov 2024 – Jun 2026',
    points: [
      'Developed and maintained cross-platform Flutter apps across ERP, POS, e-commerce & delivery, sales and customer-support products.',
      'Integrated REST APIs, implemented UI/UX designs, and prepared and deployed apps to Google Play and the App Store.',
      'Co-developed the reusable erp_calculator package with the team lead to centralize tax, discount and billing calculations previously duplicated across apps; validated it against real flows and integrated it into Spider.',
    ],
    tags: ['ERP', 'POS', 'REST', 'GraphQL', 'SignalR', 'Package Dev'],
    links: [{ type: 'pub.dev', url: 'https://pub.dev/packages/erp_calculator' }],
  },
  {
    kind: 'work',
    role: 'Flutter Instructor',
    org: 'Mindset Trainings',
    orgNote: 'Training Center',
    location: 'Kafr El Sheikh, Egypt',
    date: 'Jun 2024 – Nov 2024',
    points: [
      'Delivered Flutter courses from beginner to advanced — UI development, state management, API integration and Firebase.',
      'Guided students through practical projects and best practices.',
    ],
    tags: ['Teaching', 'Flutter', 'Firebase'],
  },
];

export const education: TimelineItem[] = [
  {
    kind: 'education',
    role: 'B.Sc. Computers & Information Sciences',
    org: 'Kafr El-Shaykh University',
    orgNote: 'Information Science Department',
    location: 'Kafr El Sheikh, Egypt',
    date: 'Oct 2020 – Jun 2024',
    points: [
      'Graduated Very Good with Honors (81.36%).',
      'Graduation project: Ghosn — a personal plant assistant app with AI-based disease diagnosis, an online plant store, care guidance, reminders and a community.',
    ],
  },
];

export const certifications = [
  {
    title: 'Software Engineer Certificate of Accomplishment',
    issuer: 'HackerRank',
    date: 'Sep 2025',
    url: 'https://drive.google.com/file/d/1visXhBXvUUBzqSgyLRDkxnQ-9iwYOp34/view',
  },
  {
    title: 'Software Technology Track',
    issuer: 'Orange Digital Center',
    date: 'Aug – Sep 2023',
    detail: 'OOP, design patterns & unit testing',
    url: 'https://drive.google.com/file/d/16zQG-nUFwrQMq8-DAF-mRi1DzedN5g_v/view',
  },
  {
    title: 'Flutter Diploma',
    issuer: 'Google Developer Student Club',
    date: 'Dec 2022 – Sep 2023',
    url: 'https://drive.google.com/file/d/162_cLU-KS5VF391oMRc0tMVmpTyfZJly/view?usp=sharing',
  },
];

export const projects: Project[] = [
  {
    id: 'braceup',
    name: 'BraceUp',
    tagline: 'Offline-first dental education app + Flutter Web admin',
    description:
      'Independently built and shipped an offline-first learning app for dental fellowship preparation, backed by SQLite ↔ Supabase sync and a Flutter Web admin platform for exams, courses and bookings.',
    cover: './covers/braceup_cover.webp',
    date: 'Mar 2026 – Present',
    company: 'Freelance',
    role: 'Sole developer — design to store release',
    featured: true,
    stack: ['Flutter', 'SQLite', 'Supabase', 'Offline-first', 'Flutter Web', 'Codemagic CI/CD'],
    highlights: [
      'Offline-first learning experience for dental fellowship preparation',
      'Local SQLite storage with Supabase synchronization',
      'Authentication, database, storage and real-time features',
      'Flutter Web admin for mock exams, courses and student bookings (Vercel)',
      'CI/CD pipeline with Codemagic',
      'Published on Google Play and the App Store',
    ],
    links: [
      { type: 'App Store', url: 'https://apps.apple.com/us/app/brace-up/id6754993784' },
      { type: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.ortho.app' },
    ],
  },
  {
    id: 'the-kitchen',
    name: 'The Kitchen',
    tagline: 'Restaurant POS with real-time ERP sync',
    description:
      'Restaurant POS covering dine-in, takeaway and delivery orders, with thermal invoice printing, order transfers, table switching, daily sessions, refunds and reporting.',
    cover: './covers/the_kitchen.webp',
    date: 'Nov 2025 – Mar 2026',
    company: 'GIRIX',
    role: 'Flutter developer · calculation & account testing',
    featured: true,
    stack: ['Flutter', 'Cubit', 'Clean Architecture', 'ERP Sync', 'Thermal Printing'],
    highlights: [
      'Full POS flow for dine-in, takeaway and delivery',
      'Invoice creation with thermal printing',
      'Table switching and order transfers',
      'Daily open/close sessions with financial reports',
      'Collections and refund management',
      'ERP and CRM integration',
    ],
    links: [
      { type: 'App Store', url: 'https://apps.apple.com/us/app/the-kitchen/id6759858829' },
      { type: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.thekitchen.pos' },
    ],
  },
  {
    id: 'spider',
    name: 'Spider',
    tagline: 'Real-time business management & POS',
    description:
      'Real-time business management and POS app with custom ERP integration, receipt printing, barcode & QR scanning and FCM — powered by the reusable erp_calculator package.',
    cover: './covers/spider.webp',
    date: 'Mar 2026 – Jun 2026',
    company: 'GIRIX',
    role: 'Flutter developer · package co-author',
    featured: true,
    stack: ['Flutter', 'BLoC/Cubit', 'MVVM', 'ERP', 'erp_calculator', 'Barcode/QR', 'FCM'],
    highlights: [
      'Real-time business management and POS workflows',
      'Custom ERP integration',
      'erp_calculator package for tax, discount and billing calculations',
      'Receipt printing and barcode/QR scanning',
      'Firebase Cloud Messaging and localization',
      'Validated through package + app demo flows',
    ],
    links: [{ type: 'pub.dev', url: 'https://pub.dev/packages/erp_calculator' }],
  },
  {
    id: 'islami-hub',
    name: 'Islami Hub',
    tagline: 'Offline Quran, prayer times & Qibla',
    description:
      'Fully offline Islamic app: complete Quran with tafseer and multiple reciters, prayer-time notifications, Qibla compass, radio and live Quran channels.',
    cover: './covers/islami_cover.webp',
    date: 'Oct 2025 – Nov 2025',
    company: 'GIRIX',
    role: 'Flutter developer',
    stack: ['Flutter', 'Clean Architecture', 'Cubit', 'Hive', 'Audio'],
    highlights: [
      'Offline-first architecture with Hive',
      'Complete Quran with tafseer and multiple reciters',
      'Prayer-time notifications with Azan alerts',
      'Qibla compass',
      'Islamic radio and live Quran channels',
      'Daily Azkar and Duas',
    ],
    links: [{ type: 'App Store', url: 'https://apps.apple.com/us/app/islami-hub/id6756878998' }],
  },
  {
    id: 'gts-ecommerce',
    name: 'GTS E-commerce',
    tagline: 'ERP-integrated shopping with live orders',
    description:
      'Sole Flutter developer in a cross-functional team. ERP-integrated e-commerce with payment gateways and SignalR real-time order updates.',
    cover: './covers/ecommerce_cover.webp',
    date: 'Jul 2025 – Oct 2025',
    company: 'GIRIX',
    role: 'Sole Flutter developer',
    stack: ['Flutter', 'Cubit', 'MVVM', 'SignalR', 'Payments', 'Localization'],
    highlights: [
      'ERP-integrated product browsing and checkout',
      'Payment gateway integration',
      'Real-time order updates via SignalR',
      'Animations and localization',
    ],
    links: [],
  },
  {
    id: 'gts-delivery',
    name: 'GTS Delivery',
    tagline: 'Driver app with real-time assignments',
    description:
      'Companion app for delivery staff: accept or reject orders in real time over SignalR, track deliveries and collect payments.',
    cover: './covers/delivery_cover.webp',
    date: 'Sep 2025 – Oct 2025',
    company: 'GIRIX',
    role: 'Sole Flutter developer',
    stack: ['Flutter', 'Cubit', 'MVVM', 'SignalR', 'Secure Storage'],
    highlights: [
      'Real-time order assignment and status management',
      'Accept / reject orders instantly via SignalR',
      'Delivery tracking and payment collection',
      'Multi-language support',
    ],
    links: [],
  },
  {
    id: 'crm-gts',
    name: 'CRM GTS',
    tagline: 'Customer-support ticketing',
    description:
      'Submit and track support tickets, with REST + GraphQL APIs and real-time push notifications through Firebase Cloud Messaging.',
    cover: './covers/crm.webp',
    date: 'Apr 2025 – Aug 2025',
    company: 'GIRIX',
    role: 'Flutter developer',
    stack: ['Flutter', 'Cubit/BLoC', 'MVVM', 'REST', 'GraphQL', 'FCM'],
    highlights: [
      'Ticket submission and tracking',
      'Real-time push notifications (FCM)',
      'REST and GraphQL integration',
      'MVVM with Cubit/BLoC',
    ],
    links: [{ type: 'App Store', url: 'https://apps.apple.com/us/app/crm-gts/id6755529911' }],
  },
  {
    id: 'gts-system',
    name: 'GTS Sales ERP',
    tagline: 'ERP for field sales representatives',
    description:
      'Sales-rep ERP for invoices, receipt vouchers with ESC/POS thermal printing, stock-transfer requests, customers and shareable reports.',
    cover: './covers/erp_cover.webp',
    date: 'Jan 2025 – Mar 2025',
    company: 'GIRIX',
    role: 'Flutter developer',
    stack: ['Flutter', 'Cubit/BLoC', 'MVC', 'Firebase', 'Thermal Printing', 'PDF'],
    highlights: [
      'Invoices and receipt vouchers with ESC/POS printing',
      'Real-time stock transfer requests',
      'Customer management',
      'PDF report generation and sharing',
    ],
    links: [],
  },
  {
    id: 'dalil',
    name: 'Dalil',
    tagline: 'Services guide with live chat & calls',
    description:
      'Technical-services guide app with Agora real-time chat and calls for support, Moyasar in-app payments, FCM and localization.',
    cover: './covers/dalil_mockup.webp',
    date: 'Nov 2024 – Jan 2025',
    company: 'GIRIX',
    role: 'Flutter developer',
    stack: ['Flutter', 'BLoC/Cubit', 'MVVM', 'Agora', 'Moyasar', 'FCM'],
    highlights: [
      'Catalog of technical services',
      'Agora real-time chat and calls',
      'Moyasar in-app payments',
      'Localization',
    ],
    links: [],
  },
  {
    id: 'ghosn',
    name: 'Ghosn',
    tagline: 'AI plant assistant & store',
    description:
      'Graduation project: plant-care assistant with AI disease diagnosis from photos, an online plant store, care reminders and a community.',
    cover: './covers/Ghosn.webp',
    date: '2024 · Graduation project',
    company: 'Kafr El-Shaykh University',
    role: 'Flutter developer',
    stack: ['Flutter', 'Cubit/BLoC', 'MVVM', 'GraphQL', 'Firebase', 'AI/ML'],
    highlights: [
      'AI disease diagnosis via image recognition',
      'Online plant store',
      'Watering / pruning reminders (WorkManager)',
      'Community hub',
    ],
    links: [],
  },
];

export const skillGroups = [
  {
    title: 'Mobile Development',
    icon: 'phone',
    skills: ['Flutter', 'Dart', 'Android', 'iOS', 'Flutter Web', 'Responsive UI', 'Animations', 'Localization'],
  },
  {
    title: 'Architecture & State',
    icon: 'layers',
    skills: ['Clean Architecture', 'BLoC / Cubit', 'MVVM', 'MVC', 'SOLID', 'Design Patterns', 'Dependency Injection'],
  },
  {
    title: 'Networking & Real-Time',
    icon: 'bolt',
    skills: ['REST APIs', 'GraphQL', 'SignalR', 'Agora Chat & Calls', 'Firebase Cloud Messaging'],
  },
  {
    title: 'Data & Backend',
    icon: 'db',
    skills: ['Firebase', 'Supabase', 'SQLite', 'Hive', 'Offline-first', 'Data Sync'],
  },
  {
    title: 'Business Systems & Hardware',
    icon: 'receipt',
    skills: ['ERP Integration', 'POS Systems', 'Payment Gateways', 'Thermal Printing', 'Barcode & QR', 'Package Development'],
  },
  {
    title: 'AI',
    icon: 'spark',
    skills: ['AI Profile & CV Analysis', 'AI Video Analysis', 'Copilot', 'Cursor', 'Claude Code', 'ChatGPT'],
  },
  {
    title: 'Testing, CI/CD & Release',
    icon: 'rocket',
    skills: ['Unit & Widget Tests', 'Calculation Validation', 'Codemagic', 'Google Play Console', 'App Store Connect'],
  },
  {
    title: 'Tools & Practices',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'Jira', 'Agile', 'Code Reviews', 'Postman', 'Figma'],
  },
] as const;
