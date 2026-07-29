import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./Header";
import Footer from "./Footer";

// Page Components
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Education from "./Education";
import Contacts from "./Contacts";
import AdminLogin from "./AdminLogin"; // Admin route import

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header stays sticky at the top of every page */}
        <Header />

        {/* Dynamic page content renders here */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contacts" element={<Contacts />} />
            
            {/* Admin Route to view client inquiries */}
            <Route path="/admin" element={<AdminLogin />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;