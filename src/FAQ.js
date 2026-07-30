import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle, FaEnvelope } from "react-icons/fa";
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

  // --- Process & Pricing ---
  {
    id: 11,
    category: "Process & Pricing",
    question: "How much does a typical website or network project cost?",
    answer: "Pricing depends on scope, number of pages, and technical complexity. Basic websites start around $300-$500, while custom full-stack web applications or full network designs are quoted based on detailed project specifications."
  },
  {
    id: 12,
    category: "Process & Pricing",
    question: "What are your standard payment terms for freelance work?",
    answer: "Projects typically run on a 50/50 payment split: a 50% deposit before work begins, and the remaining 50% upon final review, approval, and live deployment."
  },
  {
    id: 13,
    category: "Process & Pricing",
    question: "How long does it take to complete a project?",
    answer: "A standard 5-to-6 page portfolio or business website takes about 1 to 2 weeks. Custom web apps with backend databases or complex network topology projects take around 2 to 4 weeks."
  },
  {
    id: 14,
    category: "Process & Pricing",
    question: "Who provides the website copy, images, and brand assets?",
    answer: "Clients generally provide logos, text copy, and images. However, I can also source high-quality stock photography, configure UI icons, and assist in structuring content for optimal user engagement."
  },
  {
    id: 15,
    category: "Process & Pricing",
    question: "How do we get started on a new project?",
    answer: "Simply submit an inquiry via the Contact page with your project goals! I will review your requirements, follow up with a proposal/quote, and schedule an initial discovery discussion."
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
    <main className="faq-container">
      <section className="faq-hero">
        <span className="badge">Got Questions?</span>
        <h1>Frequently Asked Questions</h1>
        <p>Explore 15 detailed answers regarding my web development, networking, database, and workflow processes.</p>
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
        <h2>Still have an unanswered question?</h2>
        <p>Feel free to reach out directly through the contact page for customized inquiries.</p>
        <Link to="/contacts" className="btn btn-primary">
          <FaEnvelope className="btn-icon" /> Start a Conversation
        </Link>
      </div>
    </main>
  );
}

export default FAQ;