import React from 'react';
import '../styles/index.css'; 

const JobPostings = () => (
  <div className="new-job-postings">
    <h2>New Job Postings</h2>
    <div className="job-card-container">
      <div className="job-card">
        <h3>Investment Banking Analyst</h3>
        <p>Join a leading firm for an exciting and challenging role.</p>
      </div>
      <div className="job-card">
        <h3>Private Equity Associate</h3>
        <p>Work alongside experienced professionals in the private equity sector.</p>
      </div>
      <div className="job-card">
        <h3>Search Fund Fellows</h3>
        <p>Develop technical skills and internship experience through our program.</p>
      </div>
    </div>
  </div>
);

export default JobPostings;
