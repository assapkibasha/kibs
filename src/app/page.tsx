"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  CloudCog,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  Kanban,
  LayoutGrid,
  Menu,
  Phone,
  Search,
  ServerCog,
  Smartphone,
  Terminal,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siBootstrap,
  siCss,
  siDart,
  siFlutter,
  siFramer,
  siGithub,
  siGreensock,
  siHtml5,
  siJavascript,
  siLaravel,
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siSequelize,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
} from "simple-icons";
import {
  experienceTimeline,
  featuredProjects,
  pricingTiers,
  skillGroups,
} from "@/data/portfolio";
import { MorphingNavMenu } from "@/components/ui/morphing-nav-menu";

const emptySubscribe = () => () => {};
const getCurrentYear = (): number | null => new Date().getFullYear();
const getServerYear = (): number | null => null;

const subjects = [
  { label: "Full stack systems", icon: Blocks },
  { label: "Flutter apps", icon: Smartphone },
  { label: "Frontend craft", icon: LayoutGrid },
  { label: "SaaS products", icon: Cpu },
  { label: "Dashboards", icon: BarChart3 },
  { label: "Launch support", icon: Zap },
];

const addedSkills = [
  "MySQL",
  "NoSQL",
  "JavaScript",
  "HTML",
  "Windows Server Management",
  "Vue.js",
  "Project Management",
];

const existingSkillItems = skillGroups.flatMap((group) => group.items);
const skillOrbit = Array.from(new Set([...existingSkillItems, ...addedSkills]));

type SkillVisual =
  | { kind: "brand"; icon: SimpleIcon }
  | { kind: "lucide"; icon: LucideIcon };

const skillVisuals: Record<string, SkillVisual> = {
  React: { kind: "brand", icon: siReact },
  "Next.js": { kind: "brand", icon: siNextdotjs },
  TypeScript: { kind: "brand", icon: siTypescript },
  CSS: { kind: "brand", icon: siCss },
  "Tailwind CSS": { kind: "brand", icon: siTailwindcss },
  Bootstrap: { kind: "brand", icon: siBootstrap },
  GSAP: { kind: "brand", icon: siGreensock },
  "Framer Motion": { kind: "brand", icon: siFramer },
  Flutter: { kind: "brand", icon: siFlutter },
  Dart: { kind: "brand", icon: siDart },
  "Node.js": { kind: "brand", icon: siNodedotjs },
  PHP: { kind: "brand", icon: siPhp },
  Laravel: { kind: "brand", icon: siLaravel },
  Python: { kind: "brand", icon: siPython },
  PostgreSQL: { kind: "brand", icon: siPostgresql },
  MongoDB: { kind: "brand", icon: siMongodb },
  Prisma: { kind: "brand", icon: siPrisma },
  Sequelize: { kind: "brand", icon: siSequelize },
  DevOps: { kind: "lucide", icon: CloudCog },
  Linux: { kind: "brand", icon: siLinux },
  "CI/CD": { kind: "lucide", icon: GitBranch },
  "Deployment architecture": { kind: "lucide", icon: ServerCog },
  GitHub: { kind: "brand", icon: siGithub },
  MySQL: { kind: "brand", icon: siMysql },
  NoSQL: { kind: "lucide", icon: Database },
  JavaScript: { kind: "brand", icon: siJavascript },
  HTML: { kind: "brand", icon: siHtml5 },
  "Windows Server Management": { kind: "lucide", icon: ServerCog },
  "Vue.js": { kind: "brand", icon: siVuedotjs },
  "Project Management": { kind: "lucide", icon: Kanban },
};

const pricingCues: Record<string, string> = {
  Starter: "Visibility",
  Growth: "Most requested",
  Premium: "Platform",
};

function isDarkBrandColor(hex: string) {
  const normalized = hex.replace("#", "");
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  return luminance < 0.18;
}

function SkillIconTile({
  skill,
  compact = false,
}: {
  skill: string;
  compact?: boolean;
}) {
  const visual = skillVisuals[skill];
  const className = `skill-logo-tile${compact ? " is-compact" : ""}`;
  const tileStyle =
    visual?.kind === "brand"
      ? ({
          "--brand-color": `#${visual.icon.hex}`,
        } as CSSProperties)
      : undefined;
  const darkBrandClass =
    visual?.kind === "brand" && isDarkBrandColor(visual.icon.hex)
      ? " has-dark-brand"
      : "";

  return (
    <span
      className={`${className}${darkBrandClass}`}
      style={tileStyle}
      title={skill}
      aria-label={skill}
    >
      {visual?.kind === "brand" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d={visual.icon.path} />
        </svg>
      ) : visual?.kind === "lucide" ? (
        (() => {
          const Icon = visual.icon;
          return (
            <Icon
              aria-hidden="true"
              size={compact ? 20 : 25}
              strokeWidth={1.9}
            />
          );
        })()
      ) : (
        <b aria-hidden="true">{skill.slice(0, 2).toUpperCase()}</b>
      )}
    </span>
  );
}

const trustedTools = [
  "React",
  "Next.js",
  "Flutter",
  "Laravel",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Vue.js",
  "DevOps",
];

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const heroSignals = ["Full-stack builds", "Flutter apps", "Launch systems"];

const skillCapabilities = [
  {
    title: "Product interfaces",
    proof: "Landing pages, dashboards, commerce flows, and admin screens.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Full-stack systems",
    proof: "APIs, auth, databases, and workflow logic.",
    tools: ["Node.js", "Laravel", "Python", "PostgreSQL"],
  },
  {
    title: "Mobile and launch",
    proof: "Flutter apps, deployment, DevOps, and handoff.",
    tools: ["Flutter", "Dart", "GitHub", "DevOps"],
  },
];

const valueProps = [
  {
    title: "Turn ideas into shipped products",
    copy: "Scope, design, build, deploy.",
  },
  {
    title: "Build systems people can actually use",
    copy: "Dashboards, stores, school systems, NGO platforms.",
  },
  {
    title: "Make the work feel premium",
    copy: "Sharp UI, useful motion, maintainable code.",
  },
];

const filters = ["All", "Web apps", "Business systems", "Brand sites"];
const contactSignals = [
  "Replies within 24 hours",
  "Best for web apps, dashboards, mobile MVPs, and business systems",
  "Scope, design, build, launch support",
];

const experienceKernel = [
  { label: "Honors", value: "Build / Train / Lead" },
  { label: "Rooms", value: "Business, school, accessibility" },
  { label: "Craft", value: "Frontend, backend, AI, PM" },
];

function projectBucket(category: string) {
  const lower = category.toLowerCase();
  if (
    lower.includes("saas") ||
    lower.includes("management") ||
    lower.includes("marketplace")
  ) {
    return "Business systems";
  }
  if (lower.includes("ngo") || lower.includes("events")) {
    return "Brand sites";
  }
  return "Web apps";
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNavHref, setActiveNavHref] = useState("");
  const [certificateIndex, setCertificateIndex] = useState(0);
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    getCurrentYear,
    getServerYear,
  );
  const heroProof = featuredProjects[1] ?? featuredProjects[0];
  const heroProofPoint = heroProof.proofPoints[0];

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        element: document.getElementById(item.href.slice(1)),
      }))
      .filter(
        (section): section is { href: string; element: HTMLElement } =>
          section.element !== null,
      )
      .sort((a, b) => a.element.offsetTop - b.element.offsetTop);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.38;
      let currentSection = "";

      for (const { element, href } of sections) {
        if (element.getBoundingClientRect().top <= readingLine) {
          currentSection = href;
        }
      }

      setActiveNavHref(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return featuredProjects.filter((project) => {
      const haystack = [
        project.title,
        project.category,
        project.description,
        project.stack.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      const matchesFilter =
        activeFilter === "All" || projectBucket(project.category) === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  const visibleProjects = filteredProjects.slice(0, 6);
  const featuredProject = visibleProjects[0];
  const supportingProjects = visibleProjects.slice(1);

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--cc-black)] text-[var(--cc-white)]">
      <header className="portfolio-nav">
        <a className="code-logo" href="#top" aria-label="Ntsinzi Francois home">
          <span>N</span>
          <i />
        </a>
        <MorphingNavMenu activeHref={activeNavHref} items={navItems} />
        <div className="nav-actions">
          <a className="icon-link" href="#projects" aria-label="Search projects">
            <Search size={25} strokeWidth={1.8} />
          </a>
          <a className="login-link" href="#pricing">
            Pricing
          </a>
          <a className="signup-link" href="#contact">
            Start a build
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={25} /> : <Menu size={27} />}
          </button>
        </div>
        {mobileOpen ? (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                aria-current={activeNavHref === item.href ? "location" : undefined}
                className={activeNavHref === item.href ? "is-active" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <section id="top" className="hero-section">
        <div className="hero-frame">
          <div className="hero-console">
            <div className="console-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="hero-status">Available for focused builds</span>
            <h1 className="hero-title">
              <span>Products that</span>
              <span>launch clean</span>
            </h1>
            <p>
              I help founders, teams, and local businesses turn rough ideas into
              premium web, mobile, dashboard, and business-system products.
            </p>
            <div className="hero-actions">
              <a className="more-button" href="#contact">
                Start a build
              </a>
              <a className="hero-text-link" href="#work">
                See proof <ArrowRight size={18} />
              </a>
            </div>
            <div className="hero-signal-row" aria-label="Core build capabilities">
              {heroSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
          <div className="hero-system" aria-label="Ntsinzi Francois portrait">
            <span className="hero-color-plane hero-color-plane-yellow" />
            <div className="hero-portrait-stage">
              <Image
                src="/media/kibs2-cutout.png"
                alt="Studio portrait of Ntsinzi Francois"
                fill
                priority
                sizes="(max-width: 760px) 88vw, 43vw"
                className="hero-portrait-image"
              />
              <span className="portrait-scan" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="hero-card">
          <a
            className="hero-proof-card"
            href={heroProof.url}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src={heroProof.screenshot}
              alt={`${heroProof.title} live project screenshot`}
              width={220}
              height={140}
              sizes="220px"
            />
            <span>Live proof</span>
            <strong>{heroProof.title}</strong>
            <small>{heroProofPoint}</small>
          </a>
          <div className="signup-panel">
            <a className="more-button" href="#contact">
              Start a build
            </a>
            <a className="google-button" href="#projects">
              <Terminal size={18} />
              View work
            </a>
          </div>
          <div>
            <p>Open for focused web and mobile builds.</p>
          </div>
        </div>

        <div className="trusted-strip">
          <span>Built with tools clients ask for</span>
          <div>
            {trustedTools.map((tool) => (
              <SkillIconTile compact key={tool} skill={tool} />
              ))}
          </div>
        </div>
      </section>

      <section id="skills" className="dark-band section-pad">
        <div className="section-shell">
          <div className="team-callout">
            <span>
              <ArrowRight size={25} />
            </span>
            <div>
              <h2>Transform your idea with full-stack product delivery</h2>
              <p>
                Clear scope, sharp interface, working software.
              </p>
            </div>
            <a href="#contact" aria-label="Contact Ntsinzi">
              <ArrowRight size={38} />
            </a>
          </div>

          <h2 className="code-heading">Ship-ready capabilities</h2>

          <div className="skills-proof-board" aria-label="Portfolio skill capabilities">
            <div className="skills-proof-intro">
              <span>Core build stack</span>
              <h3>Stack coverage for real launches.</h3>
              <p>Plan it. Build it. Keep it running.</p>
            </div>

            <div className="skills-capability-grid">
              {skillCapabilities.map((capability) => (
                <article className="skills-capability-card" key={capability.title}>
                  <span>{capability.title}</span>
                  <p>{capability.proof}</p>
                  <div>
                    {capability.tools.map((tool) => (
                      <SkillIconTile compact key={tool} skill={tool} />
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="skills-tool-cloud">
              {skillOrbit.slice(0, 18).map((skill) => (
                <SkillIconTile key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <div className="subject-grid compact-subjects">
            {subjects.map(({ label, icon: Icon }) => (
              <a key={label} className="subject-card" href="#projects">
                <Icon size={26} strokeWidth={1.8} />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="builder-card">
            <div>
              <span>
                <ArrowRight size={25} />
              </span>
              <h3>Review delivery proof</h3>
              <p>Live projects, real stacks, clear outcomes.</p>
            </div>
            <a href="#projects" aria-label="View projects">
              <ArrowRight size={44} />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="search-section section-pad">
        <div className="section-shell">
          <h2 className="code-heading centered">
            Shipped work. Real proof.
          </h2>
          <label className="project-search">
            <span>Find a project type</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search dashboards, SaaS, NGO, commerce..."
            />
            <Search size={30} />
          </label>

          <div className="filter-row" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "is-active" : ""}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="section-title-row" id="work">
            <h3>Shipped work</h3>
            <a href="#contact">
              Start a project <ArrowRight size={18} />
            </a>
          </div>

          {visibleProjects.length > 0 && featuredProject ? (
            <div className="project-showcase">
              <a
                className="project-featured"
                href={featuredProject.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="project-featured-copy">
                  <span className="project-index">Featured case study</span>
                  <h4>{featuredProject.title}</h4>
                  <p>{featuredProject.description}</p>
                  <div className="project-meta-row">
                    <span>{projectBucket(featuredProject.category)}</span>
                    <span>{featuredProject.outcome}</span>
                  </div>
                  <div className="project-stack-row">
                    {featuredProject.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <ul className="project-proof-list">
                    {featuredProject.proofPoints.slice(0, 2).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <strong>
                    View live project <ArrowRight size={18} />
                  </strong>
                </div>
                <div className="project-featured-shot">
                  <Image
                    src={featuredProject.screenshot}
                    alt={`${featuredProject.title} project screenshot`}
                    width={960}
                    height={610}
                    loading="eager"
                    sizes="(max-width: 760px) 100vw, 55vw"
                  />
                </div>
              </a>

              <div className="project-case-grid">
                {supportingProjects.map((project, index) => (
                  <a
                    className="project-case-card"
                    href={project.url}
                    key={project.title}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="project-case-shot">
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} project screenshot`}
                        width={520}
                        height={330}
                        loading="eager"
                        sizes="(max-width: 760px) 100vw, 38vw"
                      />
                    </div>
                    <div className="project-case-copy">
                      <span className={`course-pill pill-${(index + 1) % 4}`}>
                        {projectBucket(project.category)}
                      </span>
                      <h4>{project.title}</h4>
                      <p>{project.outcome}</p>
                      <ul className="project-proof-list compact">
                        {project.proofPoints.slice(0, 2).map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <small>{project.stack.slice(0, 3).join(" + ")}</small>
                    </div>
                  </a>
                ))}
                <a className="project-cta-card" href="#contact">
                  <span>Project planning</span>
                  <h4>Start yours next.</h4>
                  <p>
                    Bring the idea. I will shape the build.
                  </p>
                  <strong>
                    Plan your build <ArrowRight size={18} />
                  </strong>
                </a>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              No project matched that search. Try SaaS, NGO, Flutter, or
              dashboard.
            </div>
          )}
        </div>
      </section>

      <section id="experience" className="experience-section section-pad">
        <div className="section-shell experience-ledger">
          <div className="experience-copy">
            <span className="mission-command">hall.of.fame</span>
            <h2 className="code-heading">A wall of rooms where trust was earned.</h2>
            <p>
              The work spans software development, AI integration, ICT
              training, backend decisions, digital communication, and client
              delivery so projects can move from unclear ideas to working
              systems.
            </p>
            <div className="kernel-grid" aria-label="Experience range summary">
              {experienceKernel.map((item) => (
                <span key={item.label}>
                  <strong>{item.label}</strong>
                  <em>{item.value}</em>
                </span>
              ))}
            </div>
          </div>

          <div className="experience-timeline" aria-label="Experience hall of fame">
            <div className="mission-console-bar">
              <span>HALL OPEN</span>
              <strong>{experienceTimeline.length} HONORS</strong>
            </div>
            {experienceTimeline.map((item, index) => (
              <article
                key={`${item.context}-${item.role}`}
                className={`experience-item${item.featured ? " is-featured" : ""}`}
              >
                <div className="plaque-hanger" aria-hidden="true">
                  <span />
                  <span />
                </div>
                <div className="experience-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Trophy size={20} strokeWidth={1.9} />
                </div>
                <div className="experience-item-copy">
                  <div className="experience-item-head">
                    <span>{item.status}</span>
                    <small>{item.period}</small>
                  </div>
                  <h3>
                    {"url" in item && item.url ? (
                      <a href={item.url} rel="noreferrer" target="_blank">
                        {item.context}
                      </a>
                    ) : (
                      item.context
                    )}
                  </h3>
                  <strong>{item.role}</strong>
                  <p>{item.scope}</p>
                  {"credentialHighlights" in item &&
                  item.credentialHighlights?.length ? (
                    <div
                      className="credential-highlight-grid"
                      aria-label="Credential highlights"
                    >
                      {item.credentialHighlights.map((credential) => (
                        <div
                          className="credential-highlight-card"
                          key={credential.label}
                        >
                          <span>{credential.label}</span>
                          <strong>{credential.value}</strong>
                          <small>{credential.detail}</small>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {"certificates" in item && item.certificates?.length ? (
                    <div className="certificate-board">
                      {(() => {
                        const activeIndex =
                          certificateIndex % item.certificates.length;
                        const certificate = item.certificates[activeIndex];

                        return (
                          <>
                            <div className="certificate-board-head">
                              <span>
                                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                {String(item.certificates.length).padStart(2, "0")}
                              </span>
                              <div>
                                <button
                                  type="button"
                                  aria-label="Show previous certificate"
                                  disabled={item.certificates.length < 2}
                                  onClick={() =>
                                    setCertificateIndex((current) =>
                                      current === 0
                                        ? item.certificates.length - 1
                                        : current - 1,
                                    )
                                  }
                                >
                                  <ArrowRight size={16} />
                                </button>
                                <button
                                  type="button"
                                  aria-label="Show next certificate"
                                  disabled={item.certificates.length < 2}
                                  onClick={() =>
                                    setCertificateIndex(
                                      (current) =>
                                        (current + 1) % item.certificates.length,
                                    )
                                  }
                                >
                                  <ArrowRight size={16} />
                                </button>
                              </div>
                            </div>
                            <a
                              className="certificate-slide"
                              href={certificate.url ?? undefined}
                              rel={
                                certificate.url ? "noreferrer" : undefined
                              }
                              target={certificate.url ? "_blank" : undefined}
                              aria-disabled={certificate.url ? undefined : true}
                            >
                              <span>{certificate.issuer}</span>
                              <strong>{certificate.title}</strong>
                              <small>{certificate.detail}</small>
                            </a>
                          </>
                        );
                      })()}
                    </div>
                  ) : null}
                  <div className="experience-evidence">
                    <span>{item.mode}</span>
                    {item.evidence.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div id="process" className="section-shell process-anchor">
          <div className="process-head">
            <h2 className="code-heading">From brief to launch</h2>
          </div>
          <div className="value-stack launch-pipeline">
            {valueProps.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section section-pad">
        <div className="section-shell">
          <h2 className="code-heading">Choose your build path</h2>
          <p className="pricing-bridge">
            Not sure which tier fits? Start with the project goal. I will shape
            the scope.
          </p>
          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`price-card ${tier.name === "Growth" ? "is-recommended" : ""}`}
              >
                <div className="price-card-head">
                  <span>{tier.name}</span>
                  <em>{pricingCues[tier.name]}</em>
                </div>
                <h3>{tier.label}</h3>
                <div className="price-range">
                  <strong>{tier.range}</strong>
                  <small>
                    {tier.usd} / {tier.timeline}
                  </small>
                </div>
                <p>{tier.fits}</p>
                <a href="#contact">
                  Discuss path <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="section-shell contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="code-heading">Let&apos;s scope your build</h2>
            <p>
              Send the idea, goal, or problem. I&apos;ll help shape the scope,
              recommend the right build path, and reply within 24 hours.
            </p>
            <div className="contact-signal-grid" aria-label="Why start here">
              {contactSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
            <blockquote>
              Bring it early, rough, or half-defined. I&apos;ll turn it into a
              clear next step.
            </blockquote>
          </div>
          <div className="contact-actions">
            <a href="mailto:ntsinzifrancois@gmail.com?subject=Project%20brief%20from%20portfolio">
              <Phone size={20} />
              Email project brief
            </a>
            <a href="#pricing">
              <GraduationCap size={20} />
              Review pricing
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>
          &copy; {currentYear ?? ""} Ntsinzi Francois. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
