import React from 'react';
import Header from '../components/Header';
import Question from '../components/Question';  // Corrected import to 'Question'
import '../styles/index.css';

const Math = () => (
  <div>
    <Header />
    <Question />  {/* Render the Question component */}
  </div>
);

export default Math;
