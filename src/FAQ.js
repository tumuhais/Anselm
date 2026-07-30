import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import SEO from "./SEO"; // 1. Import SEO component
import "./FAQ.css";

const FAQ_CATEGORIES = [
  "All", 
  "Web Development", 
  "Network Engineering", 
  "Databases & Cloud", 
  "Process & Pricing"
];

const FAQ_DATA = [
  // --- Web Development ---
  {
    id: 1,
    category: "Web Development",
    question: "What core technologies do you use for web development?",
    answer: "I build responsive, full-stack web applications using React.js, JavaScript (ES6+), HTML5, CSS3/Tailwind, Node.js, and Firebase or MySQL for database management."
  },
  {
    id: 2,
    category: "Web Development",
    question: "Will my website be mobile-friendly and responsive?",
    answer: "Yes! Every website is built with a mobile-first approach using CSS Grid, Flexbox, and viewport safe-area rules to guarantee flawless layout scaling across Android phones, iPhones, tablets, and desktop monitors."
  },
  {
    id: 3,
    category: "Web Development",
    question: "Can you help update or redesign an existing website?",
    answer: "Absolutely. I can audit your current website, optimize its performance, overhaul the UI/UX design, or migrate static codebases into modern React applications."
  },
  {
    id: 4,
    category: "Web Development",
    question: "Do you offer post-launch maintenance and support?",
    answer: "Yes, I offer ongoing maintenance packages covering software dependency updates, security patches, performance monitoring, content updates, and bug fixes."
  },

  // --- Network Engineering ---
  {
    id: 5,
    category: "Network Engineering",
    question: "What network engineering and infrastructure services do you offer?",
    answer: "I design, configure, and troubleshoot enterprise networks—including Cisco router and switch configurations, VLAN segmentation, DHCP, NAT, inter-VLAN routing, subnetting, and firewall security."
  },
  {
    id: 6,
    category: "Network Engineering",
    question: "Do you work with virtualization and server environments?",
    answer: "Yes. I have experience setting up and managing Linux server environments (Ubuntu/Debian) and virtualization hypervisors like Proxmox VE for lightweight container (LXC) and virtual machine deployment."
  },
  {
    id: 7,
    category: "Network Engineering",
    question: "Can you design a secure network architecture for a school or office campus?",
    answer: "Yes, I design end-to-end campus network topologies—implementing access/distribution/core layer models, redundant links, guest Wi-Fi isolation, and custom security access control lists (ACLs)."
  },

  // --- Databases & Cloud ---
  {
    id: 8,
    category: "Databases & Cloud",
    question: "How do you store and secure user/client data?",
    answer: "Depending on project requirements, I implement relational databases like MySQL or NoSQL cloud databases like Firebase Firestore. Data access is strictly controlled using backend security rules and environment secret keys."
  },
  {
    id: 9,
    category: "Databases & Cloud",
    question: "Can you integrate user login and authentication systems?",
    answer: "Yes. I set up secure user authentication using OAuth protocols, JWT tokens, or Firebase Auth—allowing role-based permissions (such as Admin Dashboards vs. regular client views)."
  },
  {
    id: 10,
    category: "Databases & Cloud",
    question: "Where will my web application be hosted?",
    answer: "I deploy web applications on high-performance platforms such as Vercel, Netlify, Firebase Hosting, or custom Linux VPS instances depending on your backend needs."
  },

  // --- Process & Pricing (UPDATED WITH UGX TIERS) ---
  {
    id: 11,
    category: "Process & Pricing",
    question: "What is the cost of a Basic Website (UGX 500,000 – 1,000,000)?",
    answer: "Suitable for standard 6-page sites (Home, About, Services, Gallery, Contact, FAQ). Includes responsive design, a functional contact form, Google Maps integration, social media links, and smooth basic animations."
  },
  {
    id: 12,
    category: "Process & Pricing",
    question: "What is included in a Standard Business Website (UGX 1,000,000 – 2,500,000)?",
    answer: "Includes everything in the Basic package plus modern UI/UX design, custom graphics/icons, an optional admin panel, Blog or News section, on-page SEO optimization, fast loading speeds, and domain/hosting setup."
  },
  {
    id: 13,
    category: "Process & Pricing",
    question: "What features come with a Premium Website (UGX 2,500,000 – 5,000,000+)?",
    answer: "Designed for full custom web applications. Includes user accounts & login authentication, database integration, payment gateway implementation, admin dashboards, booking systems, API integrations, and advanced security hardening."
  },
  {
    id: 14,
    category: "Process & Pricing",
    question: "What are your standard payment terms for freelance work?",
    answer: "Projects typically run on a 50/50 payment split: a 50% deposit before development begins, and the remaining 50% due upon final review, testing approval, and live deployment."
  },
  {
    id: 15,
    category: "Process & Pricing",
    question: "How long does it take to complete a website project?",
    answer: "Basic websites typically take 1 week, Standard Business websites take 1 to 2 weeks, and Premium custom web applications/network topology setups take around 2 to 4 weeks depending on scope."
  }
];

function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = selectedCategory === "All"
    ? FAQ_DATA
    : FAQ_DATA.filter((faq) => faq.category === selectedCategory);

  return (
    <>
      {/* 2. Add dynamic SEO tags tailored for FAQ page */}
      <SEO 
        title="FAQ & Web Packages Pricing"
        description="Frequently asked questions about web development packages (Basic, Standard Business, Premium in UGX), network engineering, databases, and IT workflows."
        keywords="web package pricing UGX, website cost Uganda, React developer FAQ, Cisco network setup FAQ, Anselm Tumuhaise"
      />

      <main className="faq-container">
        <section className="faq-hero">
          <span className="badge">Got Questions?</span>
          <h1>Frequently Asked Questions</h1>
          <p>Explore detailed answers regarding web development packages, pricing in UGX, networking, and workflows.</p>
        </section>

        {/* Category Filter Tabs */}
        <div className="faq-categories">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-card ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">
                    <FaQuestionCircle className="faq-icon" /> {faq.question}
                  </span>
                  <FaChevronDown className={`chevron-icon ${isOpen ? "rotate" : ""}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="faq-cta">
          <h2>Still have unanswered questions?</h2>
          <p>Visit the contact page to get in touch directly.</p>
          <Link to="/contacts" className="btn btn-primary">
            <FaEnvelope className="btn-icon" /> Get in Touch
          </Link>
        </div>
      </main>
    </>
  );
}

export default FAQ;