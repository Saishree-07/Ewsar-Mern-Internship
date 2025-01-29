import React from 'react'
import './App.css';

const Certifications = () => {
  return (
    <div>
        <section className="certifications-section">
            <h2>Certifications</h2>
            <ul>
            <li>Introduction in C - <span className="highlight">Sololearn</span></li>
            <li>Mastering in Data Structures - <span className="highlight">Udemy</span></li>
            <li>Pandas - <span className="highlight">Kaggle</span></li>
            <li>Matplotlib - <span className="highlight">Great Learning</span></li>
            <li>Introduction to ML – <span className="highlight">Kaggle</span></li>
            <li>SQL (Basics) – <span className="highlight">Hackerank</span></li>
          </ul>
          </section>
    </div>
  )
}
export default Certifications;