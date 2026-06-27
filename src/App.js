import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Services from "./Services";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Skills from "./Skills"
import Footer from "./Footer";
function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>

      

    </BrowserRouter>
  );
}

export default App;