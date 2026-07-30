import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// Updated import path: assumes firebase.js is located in src/firebase.js
import { db } from "./firebase"; 
import SEO from "./SEO"; // 1. Import SEO component
import "./Contacts.css";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: false, message: "" });

    try {
      // Save contact submission directly to the 'messages' collection in Firestore
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        subject: form.subject || "No Subject",
        message: form.message,
        createdAt: serverTimestamp(),
      });

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Thank you! Your message has been saved and sent successfully.",
      });

      // Clear the form fields after successful submission
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error saving message to Firestore:", error);
      
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Failed to send message (${error.code || error.message || "Unknown error"}). Check Firestore Rules.`,
      });
    }
  };

  return (
    <>
      {/* 2. Add dynamic SEO meta tags for Contact page */}
      <SEO 
        title="Contact Me | Web Development & Network Consulting"
        description="Get in touch for custom web development, React projects, Cisco network infrastructure consulting, or freelance work."
        keywords="contact developer, hire React developer Kampala, Cisco network consultant Uganda, Anselm Tumuhaise"
      />

      <section className="contacts-section">
        <div className="contacts-container">
          {/* Header */}
          <div className="contacts-header">
            <span className="section-subtitle">Get In Touch</span>
            <h1 className="section-title">
              Let's Build Something <span className="highlight">Together</span>
            </h1>
            <p className="contacts-intro">
              Have a project in mind, need network consulting, or looking to collaborate? Drop me a message and I'll get back to you promptly.
            </p>
          </div>

          <div className="contacts-grid">
            {/* Left Column: Direct Info */}
            <div className="contact-info-wrapper">
              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>Reach out directly for inquiries</p>
                  <a href="mailto:tumuhaiseanselm65@gmail.com" className="info-link">
                    tumuhaiseanselm65@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaGithub />
                </div>
                <div className="info-details">
                  <h3>GitHub</h3>
                  <p>Explore source code & repositories</p>
                  <a
                    href="https://github.com/tumuhais"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    github.com/tumuhais
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-details">
                  <h3>Location</h3>
                  <p>Primary Workstation</p>
                  <span className="info-text">Kampala, Uganda</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Tumuhaise Anselm"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tumuhaiseanselm65@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Collaboration / Consultation"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me a bit about your project or what can i build for you..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Status Notifications */}
                {status.success && (
                  <div className="status-message status-success">
                    <FaCheckCircle /> {status.message}
                  </div>
                )}

                {status.error && (
                  <div className="status-message status-error">
                    <FaExclamationCircle /> {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="btn-icon" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;