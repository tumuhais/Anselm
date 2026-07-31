import React from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaNetworkWired,
  FaShieldAlt,
  FaRobot,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import SEO from "./SEO"; // 1. Import SEO component
import "./Services.css";

const SERVICES_DATA = [
  {
    icon: FaLaptopCode,
    title: "Web Engineering & Development",
    description:
      "Crafting high-performance, responsive, and scalable web applications engineered with clean UI architectures.",
    features: [
      "Custom React & Single Page Apps",
      "Responsive Layouts & CSS Frameworks",
      "RESTful API Integration",
      "Frontend Performance Optimization",
    ],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile & Desktop Application Development",
    description:
      "Engineering seamless, cross-platform mobile and standalone desktop software built for performance, security, and exceptional user experiences.",
    features: [
      "Cross-Platform Mobile Apps (React Native)",
      "Standalone Desktop Applications (Electron.js)",
      "Offline-First Data Storage & Sync",
      "Intuitive UI/UX & Native Desktop GUIs",
    ],
  },
  {
    icon: FaNetworkWired,
    title: "Network Infrastructure & Design",
    description:
      "Designing, testing, and optimizing multi-building network topologies with enterprise routing and switching standards.",
    features: [
      "VLAN Segmentation & Subnetting",
      "Cisco Router & Switch Configuration",
      "DHCP, NAT & Routing Protocols",
      "Network Troubleshooting & Audits",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity & System Defense",
    description:
      "Implementing essential security protocols and access management strategies to protect corporate and educational networks.",
    features: [
      "Firewall & ACL Implementation",
      "Network Isolation Protocols",
      "Access Control & Authentication",
      "Security Best Practices Assessment",
    ],
  },
  {
    icon: FaRobot,
    title: "AI Solutions & Automation",
    description:
      "Building intelligent workflows and data-driven prediction platforms to streamline operational efficiency.",
    features: [
      "Predictive Data Modeling",
      "Automated Workflow Scripts",
      "Intelligent Analytics Integration",
      "Homelab & Server Virtualization (Proxmox)",
    ],
  },
];

function Services() {
  return (
    <>
      {/* 2. Dynamic SEO meta tags for Services & Technical Expertise */}
      <SEO 
        title="Services & Technical Expertise | Web, Mobile, Desktop Apps, Networking & AI"
        description="Comprehensive technical services by Anselm Tumuhaise: Custom web, cross-platform mobile, and desktop application development, campus network infrastructure design, cybersecurity protocols, and AI automation workflows."
        keywords="Web development services, Mobile app development, Desktop software, React Native, Electron, React frontend engineering, Cisco network design, VLAN setup, network security, AI automation, Proxmox virtualization, technical consulting"
      />

      <section className="services-section">
        <div className="services-container">
          {/* Header */}
          <div className="services-header">
            <span className="section-subtitle">Services & Expertise</span>
            <h1 className="section-title">
              Solutions Tailored to <span className="highlight">Your Needs</span>
            </h1>
            <p className="services-intro">
              From web, cross-platform mobile, and desktop applications to complex campus network topologies and automated systems, I deliver end-to-end technical solutions built on modern standards.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {SERVICES_DATA.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="service-card">
                  <div className="service-icon-wrapper">
                    <IconComponent className="service-icon" />
                  </div>
                  <h2>{service.title}</h2>
                  <p className="service-desc">{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <FaCheck className="feature-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contacts" className="service-link">
                    <span>Inquire Now</span>
                    <FaArrowRight />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Call to Action Banner */}
          <div className="services-cta-box">
            <div className="cta-content">
              <h2>Have a app project or network setup in mind?</h2>
              <p>Let's collaborate to build reliable web, mobile, and desktop software, or configure secure infrastructure for your operations.</p>
            </div>
            <Link to="/contacts" className="cta-btn">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;