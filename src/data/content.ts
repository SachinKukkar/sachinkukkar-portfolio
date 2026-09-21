/**
 * Single source of truth for every word on the site.
 * Edit here — no component needs touching.
 */

export const profile = {
  name: 'Sachin Kukkar',
  wordmark: 'SACHIN K®',
  role: 'Machine Learning Engineer',
  focus: 'Computer Vision · Medical Imaging',
  location: 'Jaipur, Rajasthan, India',
  email: 'sachinkukkar1998@gmail.com',
  phone: '+918766633316',
  phoneDisplay: '+91 87666 33316',
  availability: 'Open to ML / CV roles — 2026',
  resumeUrl: '/Sachin_Kukkar_Resume.pdf',
  socials: {
    github: 'https://github.com/SachinKukkar',
    linkedin: 'https://linkedin.com/in/sachinkukkar',
    leetcode: 'https://leetcode.com/u/SachinKukkar/',
  },
} as const;

export const hero = {
  // Rendered as four stacked lines, matching the Figma hero stack.
  headlineLines: ['I TEACH', 'MACHINES', 'TO SEE', 'WHAT MATTERS'],
  tagline: ['— Not just metrics.', 'I ship vision models', 'clinicians can trust'],
  stickers: [
    { label: 'Computer Vision', tone: 'green' as const, icon: 'eye' as const },
    { label: 'Deep Learning', tone: 'pink' as const, icon: 'brain' as const },
    { label: 'Medical AI', tone: 'purple' as const, icon: 'activity' as const },
  ],
  // Floating "case study" card, bottom-right of the hero.
  spotlight: {
    kicker: 'PYTORCH',
    title: 'MSK X-RAY TRIAGE',
    year: '2026',
    cta: 'View case study',
    href: '#work',
  },
} as const;

export const about = {
  badge: 'About',
  headlineLines: ['I BUILD MODELS', 'PEOPLE CAN TRUST'],
  body: 'I train computer-vision systems for medical imaging — classification, detection, segmentation. Reproducible pipelines, honest metrics, and results that hold up outside the training set.',
  cta: { label: 'Start a conversation', href: '#contact' },
  stats: [
    {
      value: 0.896,
      display: '0.896',
      suffix: '',
      decimals: 3,
      label: 'ROC-AUC',
      body: 'Normal vs. abnormal MSK radiograph triage across 58,000+ images, benchmarking EfficientNetV2, ConvNeXt and Swin Transformer.',
    },
    {
      value: 98.23,
      display: '98.23',
      suffix: '%',
      decimals: 2,
      label: 'F1 — Fracture Detection',
      body: 'Faster R-CNN and Detectron2 with ROI preprocessing and high-resolution training. 97.57% precision, 98.90% recall.',
    },
    {
      value: 15,
      display: '15',
      prefix: '₹',
      suffix: 'L',
      decimals: 0,
      label: 'Research Grant',
      body: 'Funding secured from MSME, Govt. of India for Project EHSAAS — a TENS wearable for menstrual pain relief.',
    },
    {
      value: 9.04,
      display: '9.04',
      suffix: '',
      decimals: 2,
      label: 'CGPA / 10',
      body: 'B.Tech Computer Science & Engineering, First Division with Distinction. SKIT Jaipur, class of 2026.',
    },
  ],
} as const;

export type Project = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  href?: string;
  /** Drives the generated cover art — no stock photography. */
  art: 'xray' | 'roc' | 'bbox' | 'quantum' | 'wearable' | 'nlp';
  accent: string;
  rotate: number;
  clip: string;
};

export const projects: Project[] = [
  {
    id: 'msk',
    title: 'MSK X-Ray Triage',
    blurb:
      'End-to-end musculoskeletal radiograph classifier over 58K+ images. AMP, AdamW, cosine annealing, focal loss, MixUp, CLAHE and test-time augmentation.',
    tags: ['PyTorch', 'EfficientNetV2', 'Swin'],
    year: '2026',
    art: 'xray',
    accent: '#4a96ed',
    rotate: -2.4,
    clip: '#8168fd',
  },
  {
    id: 'pleurasight',
    title: 'PleuraSight AI',
    blurb:
      'Pleural effusion detection on NIH ChestX-ray14 (112K) and CheXpert (191K). 0.877 / 0.822 AUROC in-domain and cross-institution.',
    tags: ['DenseNet-121', 'Swin-B', 'Medical Imaging'],
    year: '2026',
    art: 'roc',
    accent: '#34c75a',
    rotate: 1.8,
    clip: '#ec68fd',
  },
  {
    id: 'fracture',
    title: 'Fracture Localizer',
    blurb:
      'Detection pipeline reaching 98.23% F1 on fracture localization, with SAM2 / MedSAM segmentation layered in for explainable predictions.',
    tags: ['Detectron2', 'Faster R-CNN', 'SAM2'],
    year: '2025',
    art: 'bbox',
    accent: '#e8d210',
    rotate: -1.4,
    clip: '#93ba06',
  },
  {
    id: 'quantum',
    title: 'Quantum Sim Suite',
    blurb:
      "Grover's, Deutsch–Jozsa and QFT simulated from first principles in NumPy — no Qiskit Aer. Built at DRDO, Ministry of Defence.",
    tags: ['NumPy', 'Quantum ML', 'DRDO'],
    year: '2025',
    art: 'quantum',
    accent: '#8168fd',
    rotate: 2.2,
    clip: '#039cfb',
  },
  {
    id: 'ehsaas',
    title: 'Project EHSAAS',
    blurb:
      'Founded and lead a wearable TENS device for menstrual pain relief. ₹15 lakh MSME grant, from research through working prototype.',
    tags: ['TENS', 'Embedded', 'MSME Funded'],
    year: '2022 →',
    art: 'wearable',
    accent: '#ec68fd',
    rotate: -2,
    clip: '#e8a2a6',
  },
  {
    id: 'ipc',
    title: 'IPC Section Suggester',
    blurb:
      'Maps free-text crime descriptions to relevant IPC sections. TF-IDF with Logistic Regression / Naive Bayes at 87% accuracy.',
    tags: ['NLP', 'TF-IDF', 'Scikit-Learn'],
    year: '2024',
    href: 'https://github.com/SachinKukkar/IPC_Section_Suggestin_ML',
    art: 'nlp',
    accent: '#039cfb',
    rotate: 1.6,
    clip: '#52de85',
  },
];

export type Capability = {
  title: string;
  detail: string;
  icon: 'eye' | 'scan' | 'brain' | 'boxes' | 'atom';
  bg: string;
  accent: string;
};

export const capabilities: Capability[] = [
  {
    title: 'Computer Vision',
    detail: 'Classification, detection and segmentation pipelines that survive real data.',
    icon: 'eye',
    bg: '#fbe7e3',
    accent: '#e8a2a6',
  },
  {
    title: 'Medical Imaging AI',
    detail: 'X-ray and radiograph models built alongside radiologists, not around them.',
    icon: 'scan',
    bg: '#d9e7f5',
    accent: '#4a96ed',
  },
  {
    title: 'Deep Learning Pipelines',
    detail: 'AMP, schedulers, augmentation and reproducible training on H100 infrastructure.',
    icon: 'brain',
    bg: '#f3eebe',
    accent: '#e8d210',
  },
  {
    title: 'Detection & Segmentation',
    detail: 'Faster R-CNN, Detectron2, SAM2 / MedSAM for localization and explainability.',
    icon: 'boxes',
    bg: '#dcf5e0',
    accent: '#52de85',
  },
  {
    title: 'Quantum Machine Learning',
    detail: 'Algorithm simulation from first principles — superposition, entanglement, QFT.',
    icon: 'atom',
    bg: '#ebe6f3',
    accent: '#8168fd',
  },
];

export type Role = {
  company: string;
  companyMark: string;
  role: string;
  period: string;
  place: string;
  pull: string;
  body: string;
  stack: string[];
  accent: string;
  rotate: number;
  certificate?: string;
};

export const experience: Role[] = [
  {
    company: 'ThoughtsWin Systems',
    companyMark: 'TW',
    role: 'Machine Learning Engineer Intern',
    period: 'Sep 2025 — Jun 2026',
    place: 'Jaipur, Rajasthan',
    pull: 'Built X-ray triage a radiologist could actually read.',
    body: 'Owned the MSK classification pipeline end to end, optimized Faster R-CNN and Detectron2 for fracture localization, and integrated SAM2 / MedSAM for explainable predictions. Trained at scale on NVIDIA H100 infrastructure.',
    stack: ['PyTorch', 'Detectron2', 'SAM2', 'CUDA'],
    accent: '#4a96ed',
    rotate: -2.2,
  },
  {
    company: 'DRDO — Ministry of Defence',
    companyMark: 'DR',
    role: 'Quantum Computing Intern',
    period: 'May 2025 — Jul 2025',
    place: 'Delhi, India',
    pull: "Rebuilt Grover's and QFT from first principles.",
    body: "Selected as a Quantum Computing Intern at DRDO. Simulated Grover's, Deutsch–Jozsa and the Quantum Fourier Transform in pure Python, and wrote NumPy simulators that reproduce superposition and entanglement without Qiskit's Aer module.",
    stack: ['Python', 'NumPy', 'Quantum ML'],
    accent: '#8168fd',
    rotate: 1.6,
    certificate:
      'https://drive.google.com/file/d/1wRhfhPb3yjnFpgTEoZYFNQdKIb8rXsFP/view?usp=drive_link',
  },
  {
    company: 'Arootle Internet Pvt. Ltd.',
    companyMark: 'AR',
    role: 'Summer Trainee — Machine Learning',
    period: 'Jul 2024 — Aug 2024',
    place: 'Jaipur, Rajasthan',
    pull: 'From raw CSVs to a wildfire classifier at 85%.',
    body: 'Cleaned, preprocessed and explored real-world datasets with Pandas, NumPy and Matplotlib, then applied regression and classification with feature scaling and encoding — 85% accuracy and 0.81 F1 on the Algerian forest fires dataset.',
    stack: ['Scikit-Learn', 'Pandas', 'EDA'],
    accent: '#52de85',
    rotate: -1.5,
    certificate: 'https://drive.google.com/file/d/1TwmCTODiAjr0UGhABGDIzAILzjUY2xam/view?usp=sharing',
  },
];

export type Faq = {
  q: string;
  a: string;
  tone: 'rose' | 'mint' | 'sand' | 'blue' | 'lime';
};

export const faqs: Faq[] = [
  {
    q: 'What do you actually build?',
    a: 'Computer-vision systems end to end — data pipeline, augmentation, training, evaluation and the deployment story. Most recently medical imaging: X-ray classification, fracture localization and segmentation.',
    tone: 'rose',
  },
  {
    q: 'Which stack do you work in?',
    a: 'PyTorch first. Detectron2 and Torchvision for detection, OpenCV and Albumentations for imaging, Scikit-Learn for the classical side. Comfortable on Linux with CUDA and multi-GPU training.',
    tone: 'lime',
  },
  {
    q: 'Only medical imaging?',
    a: 'No — that is where the deepest work sits, but I have shipped NLP classification, classical ML on tabular data, and quantum algorithm simulators at DRDO. The tooling transfers.',
    tone: 'blue',
  },
  {
    q: 'Are you open to roles?',
    a: 'Yes. I graduate in 2026 and I am looking for ML / computer-vision engineering roles. Remote, hybrid or relocation all work.',
    tone: 'sand',
  },
  {
    q: 'How do I reach you?',
    a: 'Email or LinkedIn are fastest. The resume button up top has the full detail — publications, metrics and the complete project list.',
    tone: 'mint',
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'C/C++', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  {
    group: 'ML / DL & Vision',
    items: ['PyTorch', 'Detectron2', 'Torchvision', 'OpenCV', 'Albumentations', 'Scikit-Learn'],
  },
  { group: 'Tools', items: ['Git', 'GitHub', 'VSCode', 'Postman', 'CUDA', 'Linux'] },
  { group: 'Libraries', items: ['Pandas', 'NumPy', 'Matplotlib'] },
] as const;

export const footer = {
  headlineLines: ["LET'S BUILD", 'SOMETHING', 'THAT SEES'],
  kicker: 'Have an idea?',
  sub: "Let's turn it into a model that actually ships.",
  cta: "Let's chat",
  marquee: "let's build",
  stickers: [
    { label: 'Computer Vision', tone: 'pink' as const },
    { label: 'Medical AI', tone: 'green' as const },
    { label: 'Deep Learning', tone: 'purple' as const },
  ],
} as const;

/** Every section, in order — drives scroll-spy. */
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'path', label: 'Path' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
];

export type DockItem = {
  id: string;
  label: string;
  /** Icon exported from the Figma "Apple Dock-Nav" frame. */
  src: string;
};

/**
 * The four tiles in the Figma "Apple Dock-Nav" frame, pointing at the same
 * four destinations the design links to. The remaining sections are reachable
 * from the footer nav.
 */
export const dockItems: DockItem[] = [
  { id: 'about', label: 'About', src: '/images/dock/about.png' },
  { id: 'work', label: 'Work', src: '/images/dock/work.png' },
  { id: 'skills', label: 'Skills', src: '/images/dock/skills.png' },
  { id: 'contact', label: 'Contact', src: '/images/dock/contact.png' },
];
