import React, { useState, useEffect } from 'react';
import '../styles/Math.css';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // Fetch questions from the JSON file
    fetch('/questions.json')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error loading questions:', error));
  }, []);

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = questions[currentIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) === correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Please try again.');
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer('');
    setFeedback('');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <section className="questions-section">
      <h2>Math Interview Style Questions</h2>
      <div className="question-card">
        <h3>{currentQuestion.question}</h3>
        <p>
          {Object.entries(currentQuestion.details).map(([key, value]) => (
            <span key={key}>
              {key}: ${value} <br />
            </span>
          ))}
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer">Enter your answer: </label>
          <input
            type="number"
            id="answer"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Enter net income"
            className="answer-input"
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {feedback && <p className={`feedback ${feedback === 'Correct!' ? 'correct' : 'incorrect'}`}>{feedback}</p>}

        <button onClick={handleNextQuestion} className="next-btn">Next Question</button>
      </div>
    </section>
  );
};

export default Question;
