import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import AdminDashboard from "./AdminDashboard";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(auth.currentUser);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      setError("Invalid credentials or unauthorized access.");
      console.error(err);
    }
  };

  if (user) {
    return <AdminDashboard user={user} onLogout={() => setUser(null)} />;
  }

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "20px", background: "#111827", borderRadius: "8px", color: "#fff" }}>
      <h2 style={{ textAlign: "center", color: "#00f0ff" }}>Admin Portal Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #374151", background: "#1f2937", color: "#fff" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #374151", background: "#1f2937", color: "#fff" }}
          />
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.9rem" }}>{error}</p>}
        <button
          type="submit"
          style={{ padding: "10px", background: "#00f0ff", color: "#000", fontWeight: "bold", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;