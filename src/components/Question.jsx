import React, { useState } from 'react';
import '../styles/Math.css';

const Question = () => {
  // Define the correct net income
  const correctAnswer = 50000;

  // State to track user's input and feedback
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  // Handle form submission and check answer
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) === correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Please try again.');
    }
  };

  return (
    <section className="questions-section">
      <h2>Math Interview Style Questions</h2>
      <div className="question-card">
        <h3>What is the net income if the following details are provided?</h3>
        <p>
          Revenue: $500,000 <br />
          Cost of Goods Sold (COGS): $300,000 <br />
          Operating Expenses: $100,000 <br />
          Interest Expense: $20,000 <br />
          Taxes: $30,000 <br />
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer" >Enter your answer: </label>
          <input
            type="number"
            id="answer"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Enter net income"
            className='answer-input'
          />
          <button type="submit" className='submit-btn'>Submit</button>
        </form>

        {/* Show feedback message */}
        {feedback && <p className={`feedback ${feedback === 'Correct!' ? 'correct' : 'incorrect'}`}>{feedback}</p>}
      </div>
    </section>
  );
};

export default Question;
