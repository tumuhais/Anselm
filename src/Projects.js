import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaMobileAlt,
  FaNetworkWired,
  FaBrain,
} from "react-icons/fa";
import SEO from "./SEO"; // 1. Import SEO component
import "./Projects.css";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Nexora & Anso Tech Platform",
    category: "web",
    description:
      "A modern corporate technology interface built with clean component architecture, active navigation, and responsive layouts.",
    tags: ["React", "JavaScript", "CSS3", "React Router"],
    github: "https://github.com/tumuhais/nexora",
    demo: "#",
    icon: FaCode,
  },
  {
    id: 2,
    title: "Anso Loan Management System",
    category: "web",
    description:
      "An interactive web platform engineered for tracking loan applications, client records, and transaction states.",
    tags: ["React.js", "Node.js", "REST API", "CSS Modules"],
    github: "https://github.com/tumuhais",
    demo: "#",
    icon: FaCode,
  },
  {
    id: 3,
    title: "Multi-Building Campus Network Infrastructure",
    category: "network",
    description:
      "Designed and simulated a multi-building university network topology featuring segmented VLANs, OSPF/EIGRP routing, and DHCP pools.",
    tags: ["Cisco Packet Tracer", "VLANs", "Subnetting", "OSPF"],
    github: "https://github.com/tumuhais",
    demo: "#",
    icon: FaNetworkWired,
  },
  {
    id: 4,
    title: "AI Student Performance Predictor",
    category: "ai",
    description:
      "A predictive analytics tool designed to forecast academic trends and student performance based on historical learning indicators.",
    tags: ["Python", "Data Analysis", "Machine Learning", "AI Logic"],
    github: "https://github.com/tumuhais",
    demo: "#",
    icon: FaBrain,
  },
  {
    id: 5,
    title: "Hospital Information System",
    category: "web",
    description:
      "A digital platform designed for managing patient records, appointment scheduling, and clinical department workflows.",
    tags: ["React", "JavaScript", "Database Design"],
    github: "https://github.com/tumuhais",
    demo: "#",
    icon: FaCode,
  },
  {
    id: 6,
    title: "Student Management System",
    category: "web",
    description:
      "An administrative dashboard built to manage student enrollment data, course allocations, and academic reports.",
    tags: ["React", "State Management", "Tailwind/CSS"],
    github: "https://github.com/tumuhais",
    demo: "#",
    icon: FaCode,
  },
  {
    id: 7,
    title: "Mobile & Desktop Application Development",
    category: "apps",
    description:
      "A performant native mobile application engineered with React Native, supporting real-time data sync and intuitive navigation.",
    tags: ["React Native", "JavaScript", "Mobile Design", "REST API"],
    github: "https://github.com/tumuhais",
    demo: "#",
    icon: FaMobileAlt,
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeFilter);

  return (
    <>
      {/* Dynamic SEO meta tags for the Projects page */}
      <SEO 
        title="Portfolio & Projects | Senior Software Engineer, Networking & AI"
        description="Explore Anselm Tumuhaise's software engineering portfolio, featuring React web applications, mobile & desktop software, campus network topologies, loan management systems, and AI analytics tools."
        keywords="React portfolio, Senior Software Engineer, Cisco network projects, Nexora, Anso Tech, Mobile App Development, Loan management system, AI student performance predictor, campus network design"
      />

      <section className="projects-section">
        <div className="projects-container">
          {/* Header */}
          <div className="projects-header">
            <span className="section-subtitle">Portfolio & Work</span>
            <h1 className="section-title">
              Featured <span className="highlight">Projects</span>
            </h1>
            <p className="projects-intro">
              A showcase of systems, network architectures, and software applications I've engineered across web & mobile platforms, networking, and artificial intelligence.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Work
            </button>
            <button
              className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
              onClick={() => setActiveFilter("web")}
            >
              Web Apps
            </button>
            <button
              className={`filter-btn ${activeFilter === "apps" ? "active" : ""}`}
              onClick={() => setActiveFilter("apps")}
            >
              Mobile & Desktop
            </button>
            <button
              className={`filter-btn ${activeFilter === "network" ? "active" : ""}`}
              onClick={() => setActiveFilter("network")}
            >
              Networking
            </button>
            <button
              className={`filter-btn ${activeFilter === "ai" ? "active" : ""}`}
              onClick={() => setActiveFilter("ai")}
            >
              AI & Analytics
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const CardIcon = project.icon;
              return (
                <div key={project.id} className="project-card">
                  <div className="card-top">
                    <div className="folder-icon-wrapper">
                      <CardIcon className="project-type-icon" />
                    </div>
                    <div className="project-actions">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="icon-link"
                      >
                        <FaGithub />
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="icon-link"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>

                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-desc">{project.description}</p>

                  {/* Tech Stack Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;