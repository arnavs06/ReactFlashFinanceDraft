import React from 'react';
import '../styles/index.css'; 

const JobPostings = () => (
  <div className="new-job-postings">
    <h2>New Job Postings</h2>
    <div className="job-card-container">
      <div className="job-card">
        <h3>IBInternships.com</h3>
        <p>Search for new internships to kickstart your career in finance</p>
      </div>
      {/* 
      <div className="job-card">
        <h3>Private Equity Associate</h3>
        <p>Work alongside experienced professionals in the private equity sector.</p>
      </div>
      */}
      <div className="job-card">
        <h3>Search Fund Fellows</h3>
        <p>Develop technical skills and internship experience through our program.</p>
      </div>
    </div>
  </div>
);

export default JobPostings;
