import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "./firebase";
import { FaTrash, FaSignOutAlt, FaEnvelope } from "react-icons/fa";

function AdminDashboard({ user, onLogout }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const msgs = querySnapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setMessages(msgs);
    } catch (err) {
      console.error("Error fetching inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    try {
      await deleteDoc(doc(db, "messages", id));
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      alert("Failed to delete message: " + err.message);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
    onLogout();
  };

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px", color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderBottom: "1px solid #374151", paddingBottom: "15px" }}>
        <h2><FaEnvelope style={{ color: "#00f0ff" }} /> Client Inquiries Inbox</h2>
        <div>
          <span style={{ marginRight: "15px", color: "#9ca3af" }}>{user.email}</span>
          <button
            onClick={handleSignOut}
            style={{ padding: "8px 15px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading inquiries...</p>
      ) : messages.length === 0 ? (
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
                  onClick={() => handleDelete(msg.id)}
                  style={{ background: "transparent", border: "1px solid #ef4444", color: "#ef4444", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
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
  );
}

export default AdminDashboard;