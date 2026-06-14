export type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  url: string;
  stack: string[];
  screenshot: string;
  outcome: string;
  accent: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "NoBarriers",
    category: "Accessibility platform",
    description:
      "A sign language learning experience designed to make deaf inclusion, gamified education, and language access feel modern and welcoming.",
    url: "https://nobarriers.onrender.com/",
    stack: ["React", "TypeScript", "Accessibility"],
    screenshot: "/projects/nobarriers.png",
    outcome: "Interactive education interface with inclusive UX",
    accent: "#1da59a",
  },
  {
    title: "Higura",
    category: "POS + inventory SaaS",
    description:
      "AI-powered stock, checkout, and reporting software built for real retail workflows across Rwanda and beyond.",
    url: "https://www.higura.com/",
    stack: ["Next.js", "SaaS", "Product design"],
    screenshot: "/projects/higura.png",
    outcome: "Operations software with a clean, trust-first conversion flow",
    accent: "#15a35d",
  },
  {
    title: "Youth Generation Club",
    category: "NGO / youth platform",
    description:
      "A mission-led website for youth empowerment, leadership programs, and community engagement with strong visual storytelling.",
    url: "https://www.youthgenerationclub.org/",
    stack: ["React", "Brand storytelling", "NGO"],
    screenshot: "/projects/ygc.png",
    outcome: "Community-focused landing page with event-forward messaging",
    accent: "#45d47b",
  },
  {
    title: "Intambwe School System",
    category: "Education management",
    description:
      "A school system landing page focused on enrollment, administration, and operational clarity for education stakeholders.",
    url: "https://intambwe-system.onrender.com/",
    stack: ["Web app", "Education", "Systems"],
    screenshot: "/projects/intambwe.png",
    outcome: "Clear product positioning for school operations technology",
    accent: "#2b6fff",
  },
  {
    title: "Eazy1Teck",
    category: "Premium electronics marketplace",
    description:
      "A polished storefront for phones and devices, built around modern commerce presentation and direct product discovery.",
    url: "https://eazy1teck.vercel.app/",
    stack: ["Next.js", "Commerce", "UI systems"],
    screenshot: "/projects/eazy1teck.png",
    outcome: "High-contrast retail experience with premium product framing",
    accent: "#f5bb00",
  },
  {
    title: "Uwatese Decor",
    category: "Wedding and events brand",
    description:
      "A visually rich decor and clothes rental site that brings wedding services, event styling, and trust signals into one premium showcase.",
    url: "https://uwatese-decor.vercel.app/",
    stack: ["Brand experience", "Local business", "Lead generation"],
    screenshot: "/projects/uwatese.png",
    outcome: "Hospitality-grade presentation for services and booking intent",
    accent: "#f37d1f",
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
    fits: "Strong for personal brands, NGOs, events, local service businesses, and polished single-purpose marketing sites.",
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
    fits: "Good for stores, booking systems, dashboards, inventory tools, and multi-page business products that need real workflows.",
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
    fits: "For platforms with multiple user roles, integrations, subscriptions, APIs, and long-term product ambition.",
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
