import React from 'react';

const Portfolio = ({ section }) => {
  const renderSection = () => {
    switch (section) {
      case 'portfolio':
        return (
          <section className="portfolio-section">
            <h1>Welcome to Saishree's Portfolio</h1>
          </section>
        );

      case 'about':
        return (
          <section className="about-section">
            <h2>About Me</h2>
            <p>
              Hello! I am Saishree S, currently pursuing a B.E. in Artificial Intelligence and
              Machine Learning at Sri Eshwar College of Engineering, expected to graduate in 2027. 
              I have a keen interest in technology-driven solutions and a passion for problem-solving, 
              continuously enhancing my skills to keep up with advancements in the field.
            </p>
          </section>
        );

      case 'skills':
        return (
          <section className="skills">
            <ul>
            <h1>Technical Skills</h1>
      <h3>LANGUAGES KNOWN:  C | Python | HTML | CSS | JavaScript | Java</h3>
      <h3>CORE:  Data Structures and Algorithms | OOPS | DBMS</h3>
     <h3>TOOLS:  VSCode | PyCharm | Canva | GitHub | CodeBlocks | MySQL
   Workbench | Eclips</h3>
            </ul>
          </section>
        );

      case 'projects':
        return (
          <section className="projects-section">
            <h2>Projects</h2>
            <ul>
              <li>
                <h3>Ecommerce Shopping Cart System</h3>
                <p><strong>Programming Language:</strong> Java with JDBC</p>
                <p>
                  <strong>About the Project:</strong> This system allows users to browse products, 
                  add items to a cart, and proceed to checkout. It leverages a relational database 
                  to manage inventory, track orders, and ensure seamless transactions. JDBC 
                  (Java Database Connectivity) facilitates efficient data retrieval and updates.
                </p>
              </li>
              <li>
                <h3>Event Management System</h3>
                <p><strong>Programming Language:</strong> C</p>
                <p>
                  <strong>About the Project:</strong> A system designed to organize events by managing schedules, 
                  participants, and resources. The project uses C's robust handling of data structures, 
                  such as arrays and linked lists, to ensure smooth management of event-related information.
                </p>
              </li>
              <li>
                <h3>Currency Converter</h3>
                <p><strong>Programming Language:</strong> Python</p>
                <p>
                  <strong>About the Project:</strong> A tool that provides real-time currency conversion rates by 
                  integrating APIs for accurate exchange rates.
                </p>
              </li>
            </ul>
          </section>
        );

      case 'certifications':
        return (
          <section className="certifications-section">
            <h2>Certifications</h2>
            <ul>
              <li>Introduction to C - Sololearn</li>
              <li>Mastering Data Structures - Udemy</li>
              <li>Pandas - Kaggle</li>
              <li>Matplotlib - Great Learning</li>
              <li>Introduction to ML - Kaggle</li>
              <li>SQL (Basics) - HackerRank</li>
              <li>Java (Basics) - SkillRack</li>
            </ul>
          </section>
        );

      case 'contact':
        return (
          <section className="contact-section">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:saishree.s2023aiml@sece.ac.in">saishree.s2023aiml@sece.ac.in</a></p>
            <p>
              Connect with me on{' '}
              <a
                href="https://www.linkedin.com/in/saishree-selvan-028a45291"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </section>
        );

      default:
        return (
          <section className="error-section">
            <h1>404: Section Not Found</h1>
          </section>
        );
    }
  };

  return <main className="portfolio-container">{renderSection()}</main>;
};

export default Portfolio;
