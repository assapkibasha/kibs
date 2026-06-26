"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  LayoutGrid,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import { featuredProjects, pricingTiers, skillGroups } from "@/data/portfolio";

const subjects = [
  { label: "Full stack systems", icon: Blocks },
  { label: "Flutter apps", icon: Smartphone },
  { label: "Frontend craft", icon: LayoutGrid },
  { label: "SaaS products", icon: Cpu },
  { label: "Dashboards", icon: BarChart3 },
  { label: "Databases", icon: Database },
  { label: "Product design", icon: Sparkles },
  { label: "Client delivery", icon: BriefcaseBusiness },
  { label: "Accessibility", icon: ShieldCheck },
  { label: "Team training", icon: UsersRound },
  { label: "Launch support", icon: Zap },
  { label: "Code foundations", icon: Code2 },
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

const heroCommands = ["/Ntsinzi", "/start-now", "/ship-products", "/launch-fast"];

const skillCapabilities = [
  {
    title: "Product interfaces",
    proof: "Premium landing pages, dashboards, commerce flows, and admin screens.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Full-stack systems",
    proof: "Business logic, databases, APIs, authentication, and operational workflows.",
    tools: ["Node.js", "Laravel", "Python", "PostgreSQL"],
  },
  {
    title: "Mobile and launch",
    proof: "Cross-platform app foundations, deployment support, DevOps, and client handoff.",
    tools: ["Flutter", "Dart", "GitHub", "DevOps"],
  },
];

const valueProps = [
  {
    title: "Turn ideas into shipped products",
    copy: "Discovery, design, frontend, backend, deployment, and launch support handled as one product-minded workflow.",
  },
  {
    title: "Build systems people can actually use",
    copy: "Dashboards, commerce flows, school systems, NGO platforms, and service websites shaped around real business pressure.",
  },
  {
    title: "Make the work feel premium",
    copy: "Sharp hierarchy, confident contrast, useful motion, and code that stays maintainable after the first launch.",
  },
];

const platformFeatures = [
  {
    title: "Guided project thinking",
    copy: "Every build starts with scope, goals, users, content, and the technical path that makes delivery realistic.",
  },
  {
    title: "Hands-on execution",
    copy: "I move from wireframe to interface to data model to deployment without losing sight of the user experience.",
  },
  {
    title: "After-launch care",
    copy: "Support, iteration, analytics, bug fixes, and improvements are available when the product needs to keep growing.",
  },
];

const filters = ["All", "Web apps", "Business systems", "Brand sites"];

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
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <a className="icon-link" href="#projects" aria-label="Search projects">
            <Search size={25} strokeWidth={1.8} />
          </a>
          <a className="login-link" href="#pricing">
            Pricing
          </a>
          <a className="signup-link" href="#contact">
            Hire Me
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
            <a href="#work" onClick={() => setMobileOpen(false)}>
              Work
            </a>
            <a href="#skills" onClick={() => setMobileOpen(false)}>
              Skills
            </a>
            <a href="#process" onClick={() => setMobileOpen(false)}>
              Process
            </a>
            <a href="#pricing" onClick={() => setMobileOpen(false)}>
              Pricing
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              Contact
            </a>
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
            <div className="hero-code hero-code-one">Build with</div>
            <div className="hero-code hero-code-two rotating-command" aria-label="Ntsinzi start now ship products launch fast">
              {heroCommands.map((command, index) => (
                <span
                  key={command}
                  style={{ "--command-index": index } as CSSProperties}
                >
                  {command}
                </span>
              ))}
            </div>
            <p>
              Full-stack developer for web apps, mobile products, dashboards,
              business systems, and launch-ready digital experiences.
            </p>
          </div>
          <div className="hero-system" aria-label="Animated developer system">
            <div className="system-core">
              <Terminal size={38} />
              <strong>NF</strong>
              <span>product engine</span>
            </div>
            {["Next.js", "Flutter", "PHP", "Python", "SQL", "DevOps"].map(
              (item, index) => (
                <span
                  className="system-node"
                  key={item}
                  style={
                    {
                      "--node-angle": `${index * 60}deg`,
                      "--node-delay": `${index * -0.45}s`,
                    } as CSSProperties
                  }
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="hero-card">
          <div className="signup-panel">
            <a className="google-button" href="#projects">
              <Terminal size={18} />
              Explore my work
            </a>
            <span>OR</span>
            <a className="more-button" href="#contact">
              More ways to work together
            </a>
          </div>
          <div>
            <p>
              Grow your product with a developer who builds web apps, mobile
              experiences, dashboards, and premium digital systems for serious
              teams.
            </p>
          </div>
        </div>

        <div className="trusted-strip">
          <span>Built with tools clients ask for</span>
          <div>
            {trustedTools.map((tool) => (
                <strong key={tool}>{tool}</strong>
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
                From landing pages to SaaS platforms, I help businesses turn
                scattered requirements into clear, usable software.
              </p>
            </div>
            <a href="#contact" aria-label="Contact Ntsinzi">
              <ArrowRight size={38} />
            </a>
          </div>

          <h2 className="code-heading">Build skills that stand out</h2>
          <div className="tab-row" role="tablist" aria-label="Portfolio skills">
            <button className="active-tab" type="button">
              Available skills
            </button>
            <button type="button">Project paths</button>
          </div>

          <div className="skills-proof-board" aria-label="Portfolio skill capabilities">
            <div className="skills-proof-intro">
              <span>{skillOrbit.length} skills available</span>
              <h3>Skills grouped by what they help you ship.</h3>
              <p>
                Modern portfolios work better when skills are tied to outcomes,
                not just dropped into a long list. These are the build paths I
                can cover from idea to launch.
              </p>
            </div>

            <div className="skills-capability-grid">
              {skillCapabilities.map((capability) => (
                <article className="skills-capability-card" key={capability.title}>
                  <span>{capability.title}</span>
                  <p>{capability.proof}</p>
                  <div>
                    {capability.tools.map((tool) => (
                      <strong key={tool}>{tool}</strong>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="skills-tool-cloud">
              {skillOrbit.map((skill) => (
                <span key={skill}>{skill}</span>
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
              <h3>Learn my build style</h3>
              <p>
                Review real work, stacks, outcomes, and the kind of products I
                can help you launch.
              </p>
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
            No matter your goal, there is a build for you
          </h2>
          <label className="project-search">
            <span>What kind of project do you need?</span>
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
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="section-title-row" id="work">
            <h3>Top projects</h3>
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
                      <small>{project.stack.slice(0, 3).join(" + ")}</small>
                    </div>
                  </a>
                ))}
                <a className="project-cta-card" href="#contact">
                  <span>Premium build slot</span>
                  <h4>Start yours next.</h4>
                  <p>
                    Bring the idea, the business goal, or the messy brief. I can
                    shape it into a polished product people can trust.
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

      <section id="process" className="experience-section section-pad">
        <div className="section-shell two-column">
          <div>
            <p className="eyebrow">The experience</p>
            <h2 className="code-heading">Designed for progress</h2>
          </div>
          <div className="value-stack">
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

      <section className="platform-section section-pad">
        <div className="section-shell">
          <p className="eyebrow">The platform</p>
          <h2 className="code-heading">Learn by building</h2>
          <div className="platform-grid">
            <div className="terminal-card">
              <div className="terminal-top">
                <span />
                <span />
                <span />
              </div>
              <pre>{`const portfolio = {
  developer: "Ntsinzi Francois",
  focus: ["web apps", "mobile", "systems"],
  promise: "premium products that ship"
};`}</pre>
            </div>
            {platformFeatures.map((feature) => (
              <article key={feature.title} className="feature-card">
                <BadgeCheck size={28} />
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section section-pad">
        <div className="section-shell">
          <p className="eyebrow">Plans</p>
          <h2 className="code-heading">Choose your build path</h2>
          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <article key={tier.name} className="price-card">
                <span>{tier.name}</span>
                <h3>{tier.label}</h3>
                <strong>{tier.range}</strong>
                <p>{tier.fits}</p>
                <a href="#contact">
                  Discuss this path <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="section-shell contact-panel">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2 className="code-heading">Start your next build</h2>
            <p>
              Tell me what you want to launch, what exists today, and what would
              make the project successful. I will help you shape the path.
            </p>
          </div>
          <div className="contact-actions">
            <a href="mailto:ntsinzifrancois@gmail.com">
              <Phone size={20} />
              Email me
            </a>
            <a href="#projects">
              <GraduationCap size={20} />
              Review projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
