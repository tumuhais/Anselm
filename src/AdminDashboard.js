import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "./firebase";
import { FaTrash, FaSignOutAlt, FaEnvelope, FaComments, FaCheck, FaTimes, FaUser } from "react-icons/fa";
import SEO from "./SEO";

function AdminDashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("inquiries");
  const [messages, setMessages] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch Messages
      const msgsSnapshot = await getDocs(collection(db, "messages"));
      const msgsData = msgsSnapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setMessages(msgsData);

      // Fetch Comments
      const commentsSnapshot = await getDocs(collection(db, "comments"));
      const commentsData = commentsSnapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setComments(commentsData);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Toggle Comment Approval Status (Approved vs Pending)
  const handleToggleApprove = async (id, currentStatus) => {
    const newStatus = currentStatus === "approved" ? "pending" : "approved";
    try {
      await updateDoc(doc(db, "comments", id), {
        status: newStatus,
      });
      setComments((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
      );
    } catch (err) {
      alert("Failed to update status: " + err.message);
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    try {
      await deleteDoc(doc(db, "messages", id));
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      alert("Failed to delete message: " + err.message);
    }
  };

  const handleDeleteComment = async (id) => {
    if (!window.confirm("Delete this comment?")) return;
    try {
      await deleteDoc(doc(db, "comments", id));
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Failed to delete comment: " + err.message);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
    onLogout();
  };

  return (
    <>
      <SEO
        title="Admin Dashboard | Inquiries & Comments"
        description="Private administrative portal for managing client inquiries and blog comments."
        noindex={true}
      />

      <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px", color: "#fff" }}>
        {/* Header Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #374151", paddingBottom: "15px" }}>
          <h2>Admin Management Portal</h2>
          <div>
            <span style={{ marginRight: "15px", color: "#9ca3af" }}>{user?.email}</span>
            <button
              onClick={handleSignOut}
              style={{ padding: "8px 15px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "25px" }}>
          <button
            onClick={() => setActiveTab("inquiries")}
            style={{
              padding: "10px 20px",
              background: activeTab === "inquiries" ? "#00f0ff" : "#1f2937",
              color: activeTab === "inquiries" ? "#000" : "#fff",
              fontWeight: "bold",
              border: "1px solid #374151",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaEnvelope /> Inquiries ({messages.length})
          </button>
          <button
            onClick={() => setActiveTab("comments")}
            style={{
              padding: "10px 20px",
              background: activeTab === "comments" ? "#00f0ff" : "#1f2937",
              color: activeTab === "comments" ? "#000" : "#fff",
              fontWeight: "bold",
              border: "1px solid #374151",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaComments /> Comments ({comments.length})
          </button>
        </div>

        {/* Content Section */}
        {loading ? (
          <p>Loading dashboard data...</p>
        ) : activeTab === "inquiries" ? (
          /* INQUIRIES TAB */
          <div>
            {messages.length === 0 ? (
              <p style={{ color: "#9ca3af" }}>No inquiries found in Firestore.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {messages.map((msg) => (
                  <div key={msg.id} style={{ background: "#111827", border: "1px solid #374151", borderRadius: "8px", padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                      <div>
                        <h3 style={{ margin: 0, color: "#00f0ff" }}>{msg.name}</h3>
                        <a href={`mailto:${msg.email}`} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.9rem" }}>
                          {msg.email}
                        </a>
                      </div>
                      <button
                        onClick={() => handleDeleteInquiry(msg.id)}
                        style={{ background: "transparent", border: "1px solid #ef4444", color: "#ef4444", padding: "5px 10px", borderRadius: "4px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "5px" }}
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                    <p style={{ fontWeight: "bold", margin: "10px 0 5px 0" }}>Subject: {msg.subject || "No Subject"}</p>
                    <p style={{ color: "#d1d5db", whiteSpace: "pre-wrap" }}>{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* COMMENTS TAB */
          <div>
            {comments.length === 0 ? (
              <p style={{ color: "#9ca3af" }}>No comments found in Firestore.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {comments.map((comment) => {
                  const authorName = comment.author || comment.name || comment.userName || "Anonymous";
                  const authorEmail = comment.email || comment.userEmail || "";
                  const isApproved = comment.status === "approved";

                  return (
                    <div key={comment.id} style={{ background: "#111827", border: "1px solid #374151", borderRadius: "8px", padding: "20px" }}>
                      {/* Top Header Row */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                        <div>
                          {/* Commenter Identity */}
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <FaUser style={{ color: "#00f0ff" }} />
                            <h3 style={{ margin: 0, color: "#00f0ff" }}>{authorName}</h3>
                            {/* Status Badge */}
                            <span
                              style={{
                                fontSize: "0.75rem",
                                padding: "2px 8px",
                                borderRadius: "12px",
                                background: isApproved ? "#059669" : "#d97706",
                                color: "#fff",
                                textTransform: "uppercase",
                                fontWeight: "bold",
                              }}
                            >
                              {comment.status || "pending"}
                            </span>
                          </div>

                          {authorEmail && (
                            <a href={`mailto:${authorEmail}`} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.85rem", display: "block", marginTop: "4px" }}>
                              {authorEmail}
                            </a>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div style={{ display: "flex", gap: "8px" }}>
                          <button
                            onClick={() => handleToggleApprove(comment.id, comment.status)}
                            style={{
                              background: isApproved ? "#374151" : "#10b981",
                              color: "#fff",
                              border: "none",
                              padding: "6px 12px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              fontSize: "0.85rem",
                            }}
                          >
                            {isApproved ? <><FaTimes /> Unapprove</> : <><FaCheck /> Approve</>}
                          </button>
                          <button
                            onClick={() => handleDeleteComment(comment.id)}
                            style={{
                              background: "transparent",
                              border: "1px solid #ef4444",
                              color: "#ef4444",
                              padding: "6px 10px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              fontSize: "0.85rem",
                            }}
                          >
                            <FaTrash /> Delete
                          </button>
                        </div>
                      </div>

                      {/* Associated Post Context (if present) */}
                      {comment.postTitle && (
                        <p style={{ fontSize: "0.85rem", color: "#9ca3af", margin: "0 0 10px 0" }}>
                          On post: <strong>{comment.postTitle}</strong>
                        </p>
                      )}

                      {/* Comment Body */}
                      <p style={{ color: "#d1d5db", whiteSpace: "pre-wrap", margin: 0 }}>
                        {comment.text || comment.content || comment.comment}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default AdminDashboard;