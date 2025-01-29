import React from 'react';
import './App.css';

const Skills = () => {
  return (
    <div className="DIV skills-section">
      <div className="skills-container">
        <div className="section-content">
          <h1>Skills</h1>
          <div className="skills-category">
            <h2>Languages Known</h2>
            <p>C | Python | HTML | CSS | JavaScript | Java</p>
          </div>
          <div className="skills-category">
            <h2>Core Skills</h2>
            <p>Data Structures and Algorithms | OOPS | DBMS</p>
          </div>
          <div className="skills-category">
            <h2>Tools</h2>
            <p>VSCode | PyCharm | Canva | GitHub | CodeBlocks | MySQL Workbench | Eclipse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;