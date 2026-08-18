import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bashir Moamer | Software Engineer",
  description:
    "Fourth-year Software Engineering student at San José State University focused on full-stack development, AI systems, cloud technologies, and enterprise software.",
};

const projectData = [
  {
    number: "01",
    title: "Lost & Found Tracker",
    subtitle: "Full-Stack Lost & Found Management System",
    description:
      "A centralized platform for reporting, searching, and managing lost or found items, backed by secure authentication and a structured full-stack architecture.",
    features: [
      "JWT registration and authentication",
      "Role-based access control",
      "Lost and found item management",
      "Search and filtering",
      "Persistent MySQL storage",
      "REST communication across the stack",
    ],
    technologies: [
      "React",
      "Vite",
      "Redux",
      "Spring Boot",
      "MySQL",
      "JWT",
      "REST APIs",
    ],
    focus: "Full-stack architecture",
  },
  {
    number: "02",
    title: "Movie Rental Database System",
    subtitle: "Full-Stack Movie Rental Management Platform",
    description:
      "A database-driven application for managing inventory, customer accounts, rentals, returns, and transaction data through a connected user-facing system.",
    features: [
      "Relational schema design and normalization",
      "Inventory and customer management",
      "Rental and return tracking",
      "Search and lookup workflows",
      "CRUD operations",
      "Multi-tier backend integration",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "SQL", "React", "REST APIs"],
    focus: "Database engineering",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    subtitle: "Interactive Software Engineering Portfolio",
    description:
      "A responsive portfolio built to present engineering experience, technical projects, and professional background through a fast, accessible interface.",
    features: [
      "Responsive desktop and mobile layouts",
      "Interactive project details",
      "Smooth section navigation",
      "Accessible interaction states",
      "Performance-focused implementation",
      "Search-optimized metadata",
    ],
    technologies: ["React", "TypeScript", "CSS", "Vite", "Git", "Cloudflare"],
    focus: "Frontend engineering",
  },
];

const technologyGroups = [
  { label: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "Apex"] },
  { label: "Frontend", items: ["React", "Node.js", "Tailwind CSS", "HTML", "CSS", "LWC"] },
  { label: "Backend", items: ["Spring Boot", "REST APIs"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "SOQL"] },
  { label: "Cloud & Enterprise", items: ["AWS", "Salesforce", "Oracle"] },
  { label: "AI", items: ["RAG", "LLM APIs", "AI Agents"] },
  { label: "Developer Tools", items: ["Git", "Postman", "Docker", "Kubernetes"] },
];

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Bashir Moamer home">
          BM
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="home">
        <p className="eyebrow">Software Engineer</p>
        <h1>Bashir Moamer</h1>
        <p className="hero-copy">
          Fourth-year Software Engineering student at San José State University
          focused on full-stack development, AI systems, cloud technologies, and
          enterprise software.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my work
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>San José, California</span>
          <span>Open to opportunities</span>
        </div>
      </section>

      <section className="content-section about" id="about">
        <SectionHeading number="01" title="About" />
        <div className="about-grid">
          <p className="statement">
            I build reliable software at the intersection of enterprise systems,
            modern web development, and applied AI.
          </p>
          <div className="about-copy">
            <p>
              I’m a fourth-year Software Engineering student at San José State
              University with experience building enterprise applications,
              AI-powered systems, and full-stack web applications.
            </p>
            <p>
              I’ve worked with technologies across Salesforce, Oracle, AWS, React,
              Java, and SQL. I’m especially interested in software engineering,
              cloud infrastructure, and AI-driven applications.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section" id="experience">
        <SectionHeading number="02" title="Experience" />
        <article className="experience-card">
          <div className="experience-meta">
            <p className="date">Summer 2026</p>
            <p>Johnson &amp; Johnson MedTech</p>
            <p>Shockwave Medical</p>
          </div>
          <div className="experience-body">
            <p className="role">IT Technical Engineering Intern</p>
            <p className="experience-description">
              Built software solutions across Salesforce and AI solutions within
              Oracle, contributing to internal enterprise applications, automation
              workflows, AI agents, and data-driven tools. Collaborated with engineers
              and technical leadership to design, test, deploy, and improve
              production-facing solutions.
            </p>
            <div className="tag-list" aria-label="Experience technologies">
              {["Salesforce", "Apex", "LWC", "SOQL", "Oracle AI", "RAG", "AWS", "REST APIs"].map(
                (technology) => <span key={technology}>{technology}</span>,
              )}
            </div>
          </div>
        </article>
      </section>

      <section className="content-section" id="projects">
        <SectionHeading number="03" title="Selected Projects" />
        <div className="project-list">
          {projectData.map((project) => (
            <details className="project-card" key={project.title}>
              <summary>
                <span className="project-number">{project.number}</span>
                <span className="project-title-group">
                  <span className="project-title">{project.title}</span>
                  <span className="project-subtitle">{project.subtitle}</span>
                </span>
                <span className="project-focus">{project.focus}</span>
                <span className="expand-label" aria-hidden="true">View details</span>
              </summary>
              <div className="project-details">
                <p>{project.description}</p>
                <div>
                  <p className="detail-label">Core capabilities</p>
                  <ul>
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="detail-label">Technology stack</p>
                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="content-section" id="technologies">
        <SectionHeading number="04" title="Technologies" />
        <div className="technology-grid">
          {technologyGroups.map((group) => (
            <article className="technology-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something useful.</h2>
        <p>
          I’m interested in software engineering internships, collaborative
          projects, and opportunities involving full-stack systems, cloud
          infrastructure, enterprise platforms, or applied AI.
        </p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:bashirmoamer24@gmail.com">
            Email me
          </a>
          <a
            className="button button-outline-light"
            href="https://github.com/Bashir535?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button button-outline-light"
            href="https://www.linkedin.com/in/bashir-moamer-40896123b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#home" aria-label="Back to top">BM</a>
        <p>Designed and developed by Bashir Moamer.</p>
        <a className="back-to-top" href="#home">Back to top</a>
      </footer>
    </main>
  );
}
