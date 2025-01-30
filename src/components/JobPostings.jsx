import React from 'react';
import '../styles/index.css'; 

const JobPostings = () => (
  <div className="new-job-postings">
    <h2>Partnered Services</h2>
    <div className="job-card-container">
      <div className="job-card">
        <h3>IBInternships.com</h3>
        <p>Search for new internships to kickstart your career in finance</p>
        <a href="https://www.ibinternships.com" target="_blank" rel="noopener noreferrer" className="job-link">Visit IBInternships</a>
      </div>
      <div className="job-card">
        <h3>Search Fund Fellows</h3>
        <p>Develop technical skills and internship experience through our program.</p>
        <a href="https://www.searchfundfellows.com" target="_blank" rel="noopener noreferrer" className="job-link">Visit Search Fund Fellows</a>
      </div>
    </div>
  </div>
);

export default JobPostings;
