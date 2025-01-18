import React from 'react';
import Navbar from '../components/Navbar';
import Flashcard from '../components/Flashcard';
import '../styles/index.css';
import '../styles/Flashcards.css';

const Flashcards = () => {
  const cards = [
    {
      id: 1,
      frontHTML: <div className="flashcard-content">What is a DCF?</div>,
      backHTML: <div className="flashcard-content">Discounted Cash Flow</div>,
    },
    {
      id: 2,
      frontHTML: <div className="flashcard-content">What is an LBO?</div>,
      backHTML: <div className="flashcard-content">Leveraged Buy-Out</div>,
    },
    {
      id: 3,
      frontHTML: <div className="flashcard-content">What is the capital of New York?</div>,
      backHTML: <div className="flashcard-content">Albany</div>,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <Navbar />
      <Flashcard cards={cards} />
    </div>
  );
};

export default Flashcards;
