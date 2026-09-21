// ═══════════════════════════════════════════════════════════════════════════
//  SINGLE SOURCE OF TRUTH
//  Everything the site displays lives in this file. Edit here, nowhere else.
//  Anything marked  ← EDIT  is a placeholder you should replace.
// ═══════════════════════════════════════════════════════════════════════════

export const profile = {
  name: 'Rashik Mahmud Orchi',
  firstName: 'Rashik',
  role: 'Business Intelligence Analyst',
  company: 'Shannex',
  location: ' Canada',

  // The slogan that sits under the rotating headline
  tagline: 'I turn data into actionable insights.',

  rotatingWords: ['data pipelines', 'analytics', 'automation', 'ML models'],

  // Intro paragraphs, moved up from the old About section.
  // Add or remove array entries freely — each renders as its own paragraph.
  about: [
    'Designing analytics, data engineering, automation, and machine learning solutions that support business decision-making. Hands-on experience developing data pipelines, ETL/ELT processes, data models, and enterprise reporting systems on large datasets. Comfortable owning solutions end-to-end — from ingestion and modelling through to delivery and automation.',
  ],

  // ── Contact ─────────────────────────────────────────────────────────────
  email: 'rashikmahmud13[at]gmail[dot]com',
  linkedin: 'https://www.linkedin.com/in/rashikmahmud/',
  github: 'https://github.com/rashikmahmud',

  // Drop your PDF at public/resume.pdf then set this to '/resume.pdf'
  resume: null,

  photo: '/assets/resources/rashik.png',
};

// Small headline stats under the hero. Set to [] to hide the strip.
export const stats = [
  { value: '4+', label: 'Years in data & analytics' },
];
export const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rashikmahmud/',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/rashikmahmud',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3z"/></svg>',
  },
  {
    name: 'Email',
    href: 'mailto:rashikmahmud13@gmail.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 4.99-8-4.99V6l8 5 8-5v2.24z"/></svg>',
  },
  // Optional — uncomment and fill in if you use these:
  // {
  //   name: 'Credly',
  //   href: 'https://www.credly.com/users/your-profile',
  //   icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2 3 7v6c0 5 3.8 8.7 9 9 5.2-.3 9-4 9-9V7l-9-5zm0 4.5 5 2.8v3.4c0 3-2.1 5.4-5 5.7-2.9-.3-5-2.7-5-5.7V9.3l5-2.8z"/></svg>',
  // },
];
// ═══════════════════════════════════════════════════════════════════════════
//  SKILLS
//  Each group has tags + a short "where I actually used this" paragraph.
//  That context is what makes a skills section convincing rather than a
//  keyword dump — keep the paragraphs concrete.
// ═══════════════════════════════════════════════════════════════════════════
// export const skillsIntro =
// 'I speak fluent SQL. In addition to that, I am skilled in —';
export const skills = [
  {
    title: 'Data Engineering & Pipelines',
    icon: '◈',
    tags: ['Microsoft Fabric', 'Databricks', 'PySpark', 'Lakehouse', 'ETL / ELT', 'BigQuery', 'Data Modelling'],
    body:
      'Led migration of legacy reporting workloads from GCP/BigQuery and SSRS into Microsoft Fabric — rebuilding semantic models, Lakehouse tables, and SQL Analytics Endpoints along the way. Currently deepening Spark and ingestion patterns through the Databricks certification track.',
  },
  {
    title: 'Languages & Query',
    icon: '⌘',
    tags: ['SQL', 'Python', 'PySpark', 'DAX', 'Power Query / M', 'T-SQL'],
    body:
      'SQL is my primary language day to day — CTEs, window functions, and parameterized queries powering paginated and interactive reports. Python (Pandas and PySpark) handles the transformation and analysis work that does not belong in a query engine.',
  },
  {
    title: 'Business Intelligence & Reporting',
    icon: '▦',
    tags: ['Power BI', 'SSRS', 'Paginated Reports', 'Semantic Models', 'Dynamic Subscriptions'],
    body:
      'Build and maintain HR and operational reporting used across multiple business units and sites — from executive dashboards down to pixel-perfect paginated reports with dynamic subscriptions and clean Excel exports.',
  },
  {
    title: 'Automation & Integration',
    icon: '⚡',
    tags: ['Power Automate', 'SharePoint', 'Microsoft Forms', 'REST APIs', 'SMTP'],
    body:
      'Designed end-to-end automated workflows — conditional reminder logic driven by database row counts, dynamic email generation, multi-select form responses mapped into SQL tables, and SharePoint lists acting as the operational front end.',
  },
  {
    title: 'Machine Learning',
    icon: '◎',
    tags: ['scikit-learn', 'Feature Engineering', 'Forecasting', 'Model Evaluation'],
    body:
      'Applying predictive modelling to operational datasets where forecasting and anomaly detection add measurable value on top of descriptive reporting.',
  },
  {
    title: 'Cloud & Platforms',
    icon: '☁',
    tags: ['Azure', 'Google Cloud Platform', 'SQL Server', 'ArcGIS', 'Git'],
    body:
      'Work across Azure and GCP environments, manage SQL Server backends, and handle permissions, service accounts, and secure access patterns for automated flows. Earlier work included building and ingesting spatial datasets in ArcGIS.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
//  EXPERIENCE  (newest first)
// ═══════════════════════════════════════════════════════════════════════════

export const experience = [
  {
    role: 'Business Intelligence Analyst',
    org: 'Shannex',
    location: 'Halifax, NS',
    period: '2025 Mar - Present',
    current: true,
    points: [
      'Development of BI dashboards and reporting solutions supporting finance, operations, HR, and leadership (SQL, Power BI, Fabric).',
      'Automation of reporting workflows and manual processes (Power Automate, SharePoint, Python).',
      'Data pipeline, ETL, and data modeling for enterprise analytics (SQL, SSIS, Python, Fabric)',
      'Build automated reference-check systems for recruitment — bilingual (EN/FR) forms, SharePoint list design, Power Automate flows, and SQL backend integration.',
      //'Act as the technical point of contact for stakeholders across HR analytics and operational reporting projects.',
    ],
    stack: ['Python', 'Microsoft SQL Server','Power BI', 'Microsoft Fabric', 'Power Automate'],
  },
  {
    // ← EDIT: replace this whole block with your previous role
    role: 'Data Anayst',
    org: 'Government of Nova Scotia',
    location: 'Halifax, NS',
    period: '2024 Jul — 2025 Mar',
    current: false,
    points: [
      'Development of data solutions and reporting processes supporting departmental operations and decision-making (SQL, Python, Power BI).',
      'Design of relational geodatabase structures and automated data collection and ingestion workflows (ArcGIS Pro).',
      'Data transformation, validation, and spatial analysis to improve data quality and reporting efficiency.'
    ],
    stack: ['SQL', 'ArcGIS','Power BI', 'Excel'],
  },
  {
    // ← EDIT: replace this whole block with your previous role
    role: 'Data Anayst',
    org: 'Saleha Metal Industries',
    location: 'Dhaka, Bangladesh',
    period: '2022 Apr — 2023 Jun',
    current: false,
    points: [
      'Data analysis and reporting to support business operations and decision-making (Excel, SQL, Power BI).',
      'Development of dashboards and analytical solutions to identify trends and business insights.',
      'Data preparation and process improvement to enhance reporting efficiency.'
    ],
    stack: ['SQL','Excel'],
  },
];

// ═══════════════════════════════════════════════════════════════════════════
//  PROJECTS
//
//  IMAGES — `image: null` renders a styled gradient placeholder card.
//  To add a real screenshot:
//    1. save it to  public/assets/projects/your-file.png   (1600x900 ideal)
//    2. set         image: '/assets/projects/your-file.png'
// ═══════════════════════════════════════════════════════════════════════════

export const projects = [
  {
    title: 'Sentiment Analysis of the Canadian Job Market from CBC News Articles',
    blurb:
      'This project analyzes the sentiment of CBC News articles to understand public perception and trends in the Canadian job market in 2024. It uses NLP techniques and machine learning algorithms to classify sentiments as positive, negative, or neutral.',
    tags: ['NLP', 'LLM', 'PyTorch', 'Transformer'],
    year: null,
    featured: true,
    image: '/assets/projects/sentiment.png',            // ← '/assets/projects/reference-portal.png'
    link: 'https://github.com/rashikmahmud/Sentiment-Analysis-of-the-Canadian-Job-Market-from-CBC-News-Articles-in-2024',   
  },
  {
    title: 'Bank Customer Churn Prediction using Machine Learning Models',
    blurb:
      'This project focuses on predicting customer churn in banks using machine learning techniques.',
    tags: ['Python', 'scikit-learn', 'Classification', 'Feature Engineering'],
    year: null,
    featured: true,
    image: '/assets/projects/bank_churn.jpg',
    link: 'https://github.com/rashikmahmud/Bank-Customer_Chrun-CLassifcation',
  },
  {
    title: 'Business Performance Power BI Report',
    blurb:
      'This interactive Power BI dashboard is designed to provide decision-makers with a comprehensive view of business performance. It combines four high-impact reports into a single user-friendly interface, offering actionable insights for growth and efficiency.',
    tags: ['SQL','Power BI','Power Query','DAX'],
    year: null,
    featured: false,
    image: '/assets/projects/business.png',
    link: 'https://github.com/rashikmahmud/Business-Performance-Dashboard',
  },
  {
    title: 'Smoking Behavior in Bangladesh with Logistic-Regression & Random-Effects-Analysis',
    blurb:
      'Using logistic regression and random effects modeling, the study aims to identify the factors associated with smoking behaior in Bangladesh.',
    tags: ['R', 'Logistic Regression', 'Random Effects', 'Statistical Modeling'],
    year: null,
    featured: false,
    image: '/assets/projects/Smoking.png',
    link: 'https://github.com/rashikmahmud/Modeling-Smoking-Behavior-in-Bangladesh-Logistic-Regression-with-Random-Effects-Analysis-',
  },
    {
    title: 'Air Quality Prediction Using Temporal Fusion Transformer (TFT)',
    blurb:
      'This project aims to predict air quality(CO2 level) using the Temporal Fusion Transformer (TFT) model, implemented in Python with PyTorch',
    tags: ['PyTorch', 'Transformer', 'Time Series', 'Python'],
    year: null,
    featured: false,
    image: '/assets/projects/air.jpg',
    link: 'https://github.com/rashikmahmud/Air-Quality-Prediction-Using-Temporal-Fusion-Transformer-TFT-',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
//  CERTIFICATIONS  
// ═══════════════════════════════════════════════════════════════════════════

export const certifications = [
  {
    name: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    status: 'Completed',
    year: '2024',
    image: '/assets/certificates/ibm.png',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/BEYE5V42G75W',
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Google',
    status: 'Completed',
    year: '2022',
    image: '/assets/certificates/googledata.png', 
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/UFYDCHJTACQ3',
  },
  {
    name: 'Google Project Management',
    issuer: 'Google',
    status: 'Completed',
    year: '2023',
    image: '/assets/certificates/project.png', 
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/4WCX2PXCWT5M',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
//  EDUCATION  — now stacked one per row with a logo beside the text
// ═══════════════════════════════════════════════════════════════════════════

export const education = [
  {
    degree: 'Master\u2019s / in Data Science',   // ← EDIT to the exact degree name
    school: 'Dalhousie University',
    location: 'Halifax, Nova Scotia',
    period: '2023 — 2024',
    logo: '/assets/education/dalhousie.jpg',   // ← '/assets/education/dalhousie.png'
    note: 'Optional: specialization, thesis topic, or notable coursework.',
  },
  {
    degree: 'Bachelor\u2019s in Economics',
    school: 'Bangladesh University of Professionals',
    location: 'Dhaka, Bangladesh',
    period: '2018 — 2022',
    logo: '/assets/education/bup.png',   // ← '/assets/education/bup.png'
    note: 'Optional: specialization, thesis topic, or notable coursework.',
  },
];
export const publications = [
  {
    title: 'Remittances, exports, ODA, and economic growth in Bangladesh: A time series analysis',

    // Wrap your own name in <b></b> to bold it — the component renders it.
    authors: 'Rashik Mahmud Orchi, Md. Adib Ahmed',

    // Journal, conference, publisher, or platform
    venue: 'The Journal of International Trade & Economic Development',

    year: '2025',

    // Short label shown as a pill. Examples:
    // 'Journal Article', 'Conference Paper', 'Thesis', 'Blog', 'Report', 'Preprint'
    type: 'Journal Article',

    // Optional one or two sentence description. Remove the line to hide it.
    summary:
      'This empirical study has explored the symmetric and asymmetric associations among GDP, remittances, Official Development Assistance (ODA), and exports by employing both the Autoregressive Distributed Lag (ARDL) and the Non-Linear Autoregressive Distributed Lag (NARDL) frameworks from 1986–2021',

    // Optional topic tags. Remove the line to hide them.
    tags: ['Time Series Forecasting','Statistics','Economics'],

    // Optional DOI / journal / Medium / PDF link.
    // When set, the whole card becomes clickable and an arrow appears on hover.
    link: 'https://www.tandfonline.com/doi/full/10.1080/09638199.2024.2323662',
  },

  // Copy the shape above for each additional publication.
  // Every field except `title` is optional — omit what does not apply.
];
// ═══════════════════════════════════════════════════════════════════════════
//  NAVIGATION — ids must match the <Section id="..."> values in app/page.jsx
// ═══════════════════════════════════════════════════════════════════════════

export const navLinks = [
  { id: 'home',           label: 'Home' },
  { id: 'skills',         label: 'Skills' },
  { id: 'experience',     label: 'Experience' },
  { id: 'education',      label: 'Education' },
  { id: 'publications',   label: 'Publications' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  // { id: 'contact',        label: 'Contact' },
];
