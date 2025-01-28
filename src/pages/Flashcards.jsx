import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Flashcard from '../components/Flashcard';
import '../styles/index.css';
import '../styles/Flashcards.css';

const Flashcards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/flashcards')
      .then((response) => response.json())
      .then((data) => {
        const formattedCards = data.map((card) => ({
          id: card.id,
          frontHTML: <div className="flashcard-content">{card.title}</div>,
          backHTML: <div className="flashcard-content">{card.description}</div>,
        }));
        setCards(formattedCards);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching flashcards:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  if (loading) {
    return <div>Loading flashcards...</div>; // Display a loading message
  }

  return (
    <div
    >
      <Navbar />
      <Flashcard cards={cards} />
    </div>
  );
};

export default Flashcards;