export type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  url: string;
  stack: string[];
  screenshot: string;
  outcome: string;
  proofPoints: string[];
  accent: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "NoBarriers",
    category: "Accessibility platform",
    description: "Sign language learning with inclusive, gamified UX.",
    url: "https://nobarriers.onrender.com/",
    stack: ["React", "TypeScript", "Accessibility"],
    screenshot: "/projects/nobarriers.png",
    outcome: "Inclusive learning interface",
    proofPoints: ["Lesson flow", "Inclusive UX", "Live education product"],
    accent: "#1da59a",
  },
  {
    title: "Higura",
    category: "POS + inventory SaaS",
    description: "AI-powered stock, checkout, and reporting software.",
    url: "https://www.higura.com/",
    stack: ["Next.js", "SaaS", "Product design"],
    screenshot: "/projects/higura.png",
    outcome: "Retail operations SaaS",
    proofPoints: ["Stock + checkout", "Retail reporting", "Live SaaS product"],
    accent: "#15a35d",
  },
  {
    title: "Youth Generation Club",
    category: "NGO / youth platform",
    description: "Youth empowerment site with program storytelling.",
    url: "https://www.youthgenerationclub.org/",
    stack: ["React", "Brand storytelling", "NGO"],
    screenshot: "/projects/ygc.png",
    outcome: "Community landing page",
    proofPoints: ["Programs + events", "Community trust", "Live NGO platform"],
    accent: "#45d47b",
  },
  {
    title: "Intambwe School System",
    category: "Education management",
    description: "School operations landing page for enrollment and admin.",
    url: "https://intambwe-system.onrender.com/",
    stack: ["Web app", "Education", "Systems"],
    screenshot: "/projects/intambwe.png",
    outcome: "School system positioning",
    proofPoints: ["Admin workflow", "Enrollment path", "School operations"],
    accent: "#2b6fff",
  },
  {
    title: "Eazy1Teck",
    category: "Premium electronics marketplace",
    description: "Premium storefront for phones and devices.",
    url: "https://eazy1teck.vercel.app/",
    stack: ["Next.js", "Commerce", "UI systems"],
    screenshot: "/projects/eazy1teck.png",
    outcome: "High-contrast commerce UX",
    proofPoints: ["Product browsing", "Retail storefront", "Commerce path"],
    accent: "#f5bb00",
  },
  {
    title: "Uwatese Decor",
    category: "Wedding and events brand",
    description: "Decor and rental site for weddings and events.",
    url: "https://uwatese-decor.vercel.app/",
    stack: ["Brand experience", "Local business", "Lead generation"],
    screenshot: "/projects/uwatese.png",
    outcome: "Service showcase with booking intent",
    proofPoints: ["Service inquiry", "Booking intent", "Event services"],
    accent: "#f37d1f",
  },
];

export const experienceTimeline = [
  {
    role: "Software Developer",
    context: "HIGURA VENTURES",
    period: "2025 - Present",
    status: "DEPLOYED",
    mode: "Business systems",
    scope:
      "Contributing to scalable business and community systems, improving user experience and performance, and supporting backend architecture decisions.",
    evidence: [
      "Backend development",
      "System architecture",
      "AI-driven features",
    ],
  },
  {
    role: "Web Designer, Social Media Manager and ICT Trainer",
    context: "Bright Future Cornerstone",
    period: "2026 - Present",
    status: "TRAINED",
    mode: "Digital operations",
    scope:
      "Managing website visibility, social communication, content campaigns, and practical training across AI, software development, and ICT.",
    evidence: [
      "Website management",
      "Digital campaigns",
      "AI and ICT training",
    ],
  },
  {
    role: "Trainer",
    context: "INTANGO TSS",
    url: "https://www.intangotss.rw/",
    period: "2025 - Present",
    status: "TRAINING",
    mode: "TVET delivery",
    scope:
      "Delivering part-time software development training, supporting practical TVET skills, and adapting learning materials to course goals.",
    evidence: ["Software training", "TVET curriculum", "Student support"],
  },
  {
    role: "Software Development Trainer",
    context: "Codebridge Academy",
    url: "https://codebridgecademy.com/",
    period: "Training role",
    status: "TRAINED",
    mode: "Software academy",
    scope:
      "Training learners in software development through a company focused on helping people build practical coding and technology skills.",
    evidence: ["Software training", "Practical coding", "Learner support"],
  },
  {
    role: "Certificates and credentials",
    context: "Certification Body",
    period: "Credential board",
    status: "CERTIFIED",
    mode: "Certification body",
    scope:
      "A collected proof board for digital skills, ICDL modules, project management, leadership, AI, cloud, analytics, and professional learning milestones.",
    evidence: ["Digital skills", "ICDL modules", "Professional learning"],
    credentialHighlights: [
      {
        label: "DSE",
        value: "Digital employment",
        detail: "Mastercard Foundation and DOT Rwanda",
      },
      {
        label: "ICDL",
        value: "10 modules",
        detail: "Office, security, AI, cloud, analytics, and e-commerce",
      },
      {
        label: "DPro",
        value: "Project management",
        detail: "Humentum Modules 1 and 2",
      },
      {
        label: "HP LIFE",
        value: "4 courses",
        detail: "Leadership, AI, critical thinking, and agile delivery",
      },
    ],
    certificates: [
      {
        title: "Digital Skills for Employment (DSE)",
        issuer: "Mastercard Foundation and DOT Rwanda",
        detail:
          "Digital employability training covering practical workplace technology skills.",
      },
      {
        title: "ICDL - Computer and Online Essentials",
        issuer: "ICDL",
        detail:
          "Windows 10, Chrome, and Office 365 essentials module completed on 27/01/2026.",
      },
      {
        title: "ICDL - Documents",
        issuer: "ICDL",
        detail:
          "Microsoft Office 365 documents module completed on 04/02/2026.",
      },
      {
        title: "ICDL - Cyber Security",
        issuer: "ICDL",
        detail: "Cyber Security v2.0 module completed on 04/02/2026.",
      },
      {
        title: "ICDL - Artificial Intelligence",
        issuer: "ICDL",
        detail: "Artificial Intelligence v1.0 module completed on 05/02/2026.",
      },
      {
        title: "ICDL - E-Commerce",
        issuer: "ICDL",
        detail: "E-Commerce v1.0 module completed on 05/02/2026.",
      },
      {
        title: "ICDL - Cloud Computing",
        issuer: "ICDL",
        detail: "Cloud Computing v1.0 module completed on 05/02/2026.",
      },
      {
        title: "ICDL - Teamwork",
        issuer: "ICDL",
        detail: "Teamwork v1.0 module completed on 05/02/2026.",
      },
      {
        title: "ICDL - Data Analytics",
        issuer: "ICDL",
        detail:
          "Microsoft Office 2016 data analytics module completed on 07/02/2026.",
      },
      {
        title: "ICDL - Spreadsheets",
        issuer: "ICDL",
        detail:
          "Microsoft Office 365 spreadsheets module completed on 07/02/2026.",
      },
      {
        title: "ICDL - Presentation Advanced",
        issuer: "ICDL",
        detail:
          "Microsoft Office 365 advanced presentations module completed on 10/02/2026.",
      },
      {
        title: "DPro Project Management - Modules 1 and 2",
        issuer: "Humentum",
        detail:
          "Project management learning focused on structured delivery and nonprofit development work.",
      },
      {
        title: "Effective Leadership",
        issuer: "HP LIFE",
        detail: "Leadership course completed in 2025.",
      },
      {
        title: "Critical Thinking in the AI Era",
        issuer: "HP LIFE",
        detail: "AI-era critical thinking course completed in 2026.",
      },
      {
        title: "AI for Business Professionals",
        issuer: "HP LIFE",
        detail: "Business-focused artificial intelligence course completed in 2026.",
      },
      {
        title: "Agile Project Management",
        issuer: "HP LIFE",
        detail: "Agile project management course completed in 2026.",
      },
      {
        title: "Certified Codebridge Trainer",
        issuer: "Codebridge Academy",
        url: "https://codebridgecademy.com/",
        detail: "Certified trainer credential for practical software development learning.",
      },
      {
        title: "Program Completion",
        issuer: "St Kizito Save TSS",
        detail: "Completed technical education program milestone shown on the CV profile.",
      },
    ],
  },
  {
    role: "Co-founder and Software Developer",
    context: "NoBarriers",
    period: "Product build",
    status: "CO-FOUNDED",
    mode: "Accessibility product",
    featured: true,
    scope:
      "Co-founded and built a sign language learning platform, working across both frontend and backend to support accessible education.",
    evidence: [
      "Frontend development",
      "Backend development",
      "Accessible learning",
    ],
  },
  {
    role: "Backend Developer and Project Manager",
    context: "Intambwe School Management System",
    period: "School operations platform",
    status: "ARCHITECTED",
    mode: "School operations",
    featured: true,
    scope:
      "Worked on a school management system for full school operations, including marks, student data, administration workflows, backend logic, and project delivery.",
    evidence: ["Project management", "Backend systems", "Marks + admin workflows"],
  },
  {
    role: "Software Developer",
    context: "Revant Group",
    period: "2024 - 2026",
    status: "SHIPPED",
    mode: "Youth platform",
    scope:
      "Developed the Youth Generation Club platform and management system while collaborating with stakeholders on youth engagement and operations tools.",
    evidence: ["Management system", "Stakeholder delivery", "Community operations"],
  },
];

export const heroMetrics = [
  "Full Stack Developer",
  "Flutter Developer",
  "Creative Frontend Engineer",
];

export const heroPanels = [
  {
    title: "Systems",
    value: "Web apps, CRMs, admin dashboards, e-commerce, and internal tools.",
  },
  {
    title: "Creative",
    value: "Cinematic interfaces, smooth motion, brand-sensitive frontend craft.",
  },
  {
    title: "Delivery",
    value: "From planning to deployment, with practical product thinking built in.",
  },
];

export const processLayers = [
  {
    label: "Layer 01",
    title: "Discover the business pressure behind the brief.",
    copy:
      "I translate vague requests into product goals, user journeys, priorities, and realistic technical scope before design starts drifting.",
    metric: "Discovery",
    progress: "82%",
    background: "rgba(13, 13, 13, 0.72)",
  },
  {
    label: "Layer 02",
    title: "Design the experience so it feels premium and useful.",
    copy:
      "Visual direction, hierarchy, rhythm, and motion are treated as product decisions, not styling afterthoughts.",
    metric: "Experience",
    progress: "90%",
    background: "rgba(20, 20, 20, 0.8)",
  },
  {
    label: "Layer 03",
    title: "Build systems that survive real-world use.",
    copy:
      "The final layer is always reliability: code structure, deployment, database thinking, maintainability, and long-term scale.",
    metric: "Execution",
    progress: "96%",
    background: "rgba(28, 28, 28, 0.88)",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Backend",
    items: ["Node.js", "PHP", "Laravel", "Python"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Sequelize"],
  },
  {
    title: "DevOps & Systems",
    items: ["DevOps", "Linux", "CI/CD", "Deployment architecture", "GitHub"],
  },
];

export const softSkills = [
  "Communication",
  "Product thinking",
  "Client discovery",
  "Collaboration",
  "Problem solving",
  "Mentoring",
  "Presentation",
  "Adaptability",
];

export const aboutPillars = [
  {
    title: "Product Thinking",
    copy:
      "I care about what the product is trying to solve, not just how the UI looks in isolation.",
  },
  {
    title: "Motion Direction",
    copy:
      "Animation is used to clarify hierarchy, reveal structure, and give interfaces a premium rhythm.",
  },
  {
    title: "Business Systems",
    copy:
      "Admin panels, operational software, and workflow tools are a major part of how I create value.",
  },
  {
    title: "Cross-Platform Delivery",
    copy:
      "I move comfortably between modern web stacks, mobile interfaces, backend logic, and deployment layers.",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    label: "Landing page / portfolio",
    range: "350,000 - 900,000 RWF",
    usd: "~$250 - 650 USD",
    timeline: "1 - 2 weeks",
    fits: "For portfolios, NGOs, events, and service sites.",
    bullets: [
      "Custom design system, responsive build, deployment",
      "Clear conversion structure, contact forms, SEO basics",
      "Best when the goal is credibility, visibility, and lead generation",
    ],
  },
  {
    name: "Growth",
    label: "Business system / e-commerce",
    range: "1,200,000 - 3,500,000 RWF",
    usd: "~$850 - 2,500 USD",
    timeline: "3 - 6 weeks",
    fits: "For stores, booking systems, dashboards, and inventory tools.",
    bullets: [
      "Authentication, dashboards, CRUD flows, databases, admin logic",
      "Payment or commerce-ready foundations when needed",
      "The most common tier for serious SMEs and funded local operations",
    ],
  },
  {
    name: "Premium",
    label: "SaaS / full platform",
    range: "4,000,000 - 12,000,000+ RWF",
    usd: "~$2,800 - 8,500+ USD",
    timeline: "6 - 14 weeks",
    fits: "For SaaS platforms, roles, integrations, APIs, and scale.",
    bullets: [
      "Architecture planning, multi-user flows, scale-minded backend work",
      "Premium UX, stronger documentation, and production-focused delivery",
      "Best fit for startups, donor-funded systems, and larger business bets",
    ],
  },
];

export const pricingNotes = [
  "Kigali clients do pay for quality, but they respond best to clarity, confidence, and scope-based pricing rather than random discounts.",
  "I prefer milestone-based agreements with a meaningful upfront payment before work starts.",
  "For NGOs, diaspora-backed teams, and international organizations, quoting in USD is often more stable than quoting only in RWF.",
];

export const retainers = [
  {
    title: "Monthly support",
    range: "120,000 - 600,000 RWF / month",
    copy:
      "For bug fixes, hosting support, improvements, reporting, and continued product care after launch.",
  },
];
