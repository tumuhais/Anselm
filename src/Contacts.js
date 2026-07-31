import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaCommentDots,
  FaStar,
} from "react-icons/fa";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
// Import firebase configuration
import { db } from "./firebase";
import SEO from "./SEO"; // Import SEO component
import "./Contacts.css";

function Contacts() {
  // Direct Contact Form State
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

  // Client Comment / Feedback Form State (Added email field)
  const [commentForm, setCommentForm] = useState({
    clientName: "",
    email: "",
    company: "",
    rating: 5,
    comment: "",
  });

  const [commentStatus, setCommentStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  // Approved Client Comments list state
  const [commentsList, setCommentsList] = useState([]);

  // Fetch real-time client comments from Firestore (ONLY APPROVED ONES)
  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("status", "==", "approved"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedComments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCommentsList(fetchedComments);
      },
      (error) => {
        console.error("Error fetching client comments:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCommentChange = (e) => {
    setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
  };

  // Submit Contact Form (Direct Messages / Inquiries)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
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
      await addDoc(collection(db, "messages"), {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || "No Subject",
        message: form.message.trim(),
        status: "unread",
        createdAt: serverTimestamp(),
      });

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Thank you! Your message has been sent successfully.",
      });

      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error saving message to Firestore:", error);
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Failed to send message (${
          error.code || error.message || "Unknown error"
        }). Check Firestore Rules.`,
      });
    }
  };

  // Submit Client Comment Form (Saved as PENDING / UNAPPROVED by default)
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!commentForm.clientName.trim() || !commentForm.comment.trim()) {
      setCommentStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Please provide your name and a comment.",
      });
      return;
    }

    setCommentStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await addDoc(collection(db, "comments"), {
        // Standardized names so the dashboard reads commenter identities cleanly
        clientName: commentForm.clientName.trim(),
        author: commentForm.clientName.trim(),
        name: commentForm.clientName.trim(),
        email: commentForm.email.trim() || "",
        company: commentForm.company.trim() || "Client / Partner",
        rating: Number(commentForm.rating),
        comment: commentForm.comment.trim(),
        text: commentForm.comment.trim(),
        status: "pending",     // Used for admin approval logic
        isApproved: false,     // Legacy flag compatibility
        createdAt: serverTimestamp(),
      });

      setCommentStatus({
        submitting: false,
        success: true,
        error: false,
        message:
          "Thank you for your feedback! Your comment has been submitted and will appear on the site once approved by the admin.",
      });

      setCommentForm({ clientName: "", email: "", company: "", rating: 5, comment: "" });
    } catch (error) {
      console.error("Error saving comment to Firestore:", error);
      setCommentStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Failed to submit feedback (${
          error.code || error.message || "Unknown error"
        }).`,
      });
    }
  };

  // Utility to safely format Firestore timestamps
  const formatDate = (timestamp) => {
    if (!timestamp) return "Just now";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Dynamic SEO Meta Tags */}
      <SEO
        title="Contact Me & Client Reviews | Software Engineer & Network Consultant"
        description="Get in touch for web, mobile, desktop development, or Cisco network infrastructure consulting. Leave feedback or read client comments."
        keywords="contact developer, hire React developer, Cisco network consultant Uganda, Anselm Tumuhaise, client testimonials"
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
              Have a project in mind, need network consulting, or looking to
              collaborate? Drop me a message or leave client feedback below.
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
                  <a
                    href="mailto:tumuhaiseanselm65@gmail.com"
                    className="info-link"
                  >
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
                      placeholder="e.g. Alex Morgan"
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
                      placeholder="alex@example.com"
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
                    placeholder="Tell me a bit about your project or network infrastructure requirements..."
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

          {/* Client Feedback & Comment Section */}
          <div className="comments-wrapper">
            <div className="comments-header">
              <h2>
                Client <span className="highlight">Feedback & Reviews</span>
              </h2>
              <p>
                Have we worked together? Share your thoughts or read reviews from
                previous clients.
              </p>
            </div>

            <div className="comments-grid">
              {/* Comment Submission Form */}
              <div className="comment-form-card">
                <h3>Leave a Comment</h3>
                <form onSubmit={handleCommentSubmit} className="comment-form">
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="clientName">Name *</label>
                      <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        placeholder="e.g. Sarah Jenkins"
                        value={commentForm.clientName}
                        onChange={handleCommentChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="commentEmail">Email (Optional)</label>
                      <input
                        type="email"
                        id="commentEmail"
                        name="email"
                        placeholder="sarah@example.com"
                        value={commentForm.email}
                        onChange={handleCommentChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company / Role (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="CEO, Tech Innovations"
                      value={commentForm.company}
                      onChange={handleCommentChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <div className="star-rating-selector">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          className={`star-btn ${
                            star <= commentForm.rating ? "active" : ""
                          }`}
                          onClick={() =>
                            setCommentForm({ ...commentForm, rating: star })
                          }
                          aria-label={`Rate ${star} stars`}
                        >
                          <FaStar />
                        </button>
                      ))}
                      <span className="rating-label">
                        ({commentForm.rating}/5 Stars)
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="comment">Your Review / Comment *</label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows="4"
                      placeholder="Write your feedback regarding web apps, networking setups, or collaboration..."
                      value={commentForm.comment}
                      onChange={handleCommentChange}
                      required
                    />
                  </div>

                  {commentStatus.success && (
                    <div className="status-message status-success">
                      <FaCheckCircle /> {commentStatus.message}
                    </div>
                  )}

                  {commentStatus.error && (
                    <div className="status-message status-error">
                      <FaExclamationCircle /> {commentStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={commentStatus.submitting}
                  >
                    {commentStatus.submitting ? (
                      "Posting..."
                    ) : (
                      <>
                        Post Comment <FaCommentDots className="btn-icon" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Display Approved Live Client Comments */}
              <div className="comments-list-card">
                <h3>Recent Client Comments ({commentsList.length})</h3>
                <div className="comments-scroll-container">
                  {commentsList.length === 0 ? (
                    <p className="no-comments-text">
                      No approved comments yet. Be the first client to leave feedback!
                    </p>
                  ) : (
                    commentsList.map((item) => (
                      <div key={item.id} className="comment-item">
                        <div className="comment-item-top">
                          <div>
                            <h4 className="comment-client-name">
                              {item.clientName || item.author || item.name}
                            </h4>
                            <span className="comment-client-company">
                              {item.company} • {formatDate(item.createdAt)}
                            </span>
                          </div>
                          <div className="comment-rating-stars">
                            {[...Array(item.rating || 5)].map((_, i) => (
                              <FaStar key={i} className="star-icon" />
                            ))}
                          </div>
                        </div>
                        <p className="comment-text">"{item.comment || item.text}"</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;