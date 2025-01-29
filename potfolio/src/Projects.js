import React from 'react'

const Projects = () => {
  return (
    <div>
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
        
    </div>
  )
}

export default Projects;