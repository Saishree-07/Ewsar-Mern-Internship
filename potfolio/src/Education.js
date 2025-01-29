import React from 'react';

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="section-content">
        {/* Education Box 1 */}
        <div className="education-category">
          <h3>B.E. in Artificial Intelligence and Machine Learning</h3>
          <p>Sri Eshwar College of Engineering</p>
          <p>2023 - 2027 | Ongoing</p>
        </div>

        {/* Education Box 2 */}
        <div className="education-category">
          <h3>HSC (Higher Secondary Certificate)</h3>
          <p>St. Mary’s Girls Higher Secondary School</p>
          <p>2021 - 2023 | 71%</p>
        </div>

        {/* Education Box 3 */}
        <div className="education-category">
          <h3>SSLC (Secondary School Leaving Certificate)</h3>
          <p>St. Mary’s Girls Higher Secondary School</p>
          <p>2020 - 2021 | All Pass</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
