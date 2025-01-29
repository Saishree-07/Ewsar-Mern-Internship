import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <div className="DIV contact-section">
      <div className="contact-container">
        <div className="section-content">
          <h2>Contact Me</h2>
          <div className="contact-details">
            <p><strong>Phone :</strong> 9677330011</p>
            <p><strong>Email : </strong> 
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=saishree.s2023aiml@sece.ac.in&su=Hello&body=I wanted to reach out...">saishree.s2023aiml@sece.ac.in</a>

</p>

            <p>
              <a href="https://www.linkedin.com/in/saishree-selvan-028a45291" target="_blank" rel="noopener noreferrer">
                <button>Visit My LinkedIn</button>
              </a>
            </p>
            <p>
              <a href="https://github.com/Saishree-07" target="_blank" rel="noopener noreferrer">
                <button>Visit My GitHub</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;