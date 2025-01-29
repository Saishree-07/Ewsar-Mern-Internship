import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Education from './Education';
import Projects from './Projects';
import Certifications from './Certifications';
import Skills from './Skills';
import Contact from './Contact';
import Home from './Home';
import './App.css';

function Nav() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1 className="h1">PORTFOLIO</h1>
          <nav className="join">
            <ul>
              <li><Link to="/">Home</Link></li>    
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default Nav;
