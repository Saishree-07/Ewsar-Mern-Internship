import React from 'react';
import me from './pic3.jpg';
import './App.css'; // Assuming you have a CSS file for styles

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="profile-image-container">
          <img src={me} alt="Saishree S" className="profile-image-circle" />
        </div>
        <div className="text-content">
          <h2>Hi! I'm Saishree S</h2>
          <p>
            I am a B.E. Artificial Intelligence and Machine Learning student at Sri Eshwar College of Engineering (2023–2027),
            with a strong foundation in programming and problem-solving.
            I have experience in developing projects and hold certifications in core technologies.
            Passionate about learning and innovation, I strive to create impactful solutions through my skills and dedication.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
