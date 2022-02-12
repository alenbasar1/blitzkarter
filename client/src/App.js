import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAKE_DATA = [
  {
    _id: '6204b2227f734e9b938cc273',
    question: 'What is this db?',
    answer: 'mongodb',
    options: ['mongodb', 'mariaDB'],
    __v: 0,
  },
  {
    _id: '6204c9fa41c3a26088a3b13c',
    question: "What's 2x2?",
    answer: '4',
    options: ['4', 'Blacktown', '8'],
    __v: 0,
  },
];

function App() {
  const [newCardAnimate, setNewCardAnimate] = useState(false);
  const [cardData, setCardData] = useState(FAKE_DATA);

  const getCardsData = async () => {
    try {
      const res = await fetch('http://localhost:8000/cards');
      const data = await res.json();
      //   console.log(data.map((card, idx) => card.question));
      setCardData(data);
      //   return JSON.stringify(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <div className='App'>
      <header className='c-header'>
        <h1>BlitzKarter</h1>
        <ul className='c-header__nav'>
          <li className='c-header__nav__btn'>
            <button
              onClick={() => {
                setNewCardAnimate(!newCardAnimate);
              }}
            >
              {newCardAnimate ? 'My Cards' : 'Create New'}
            </button>
          </li>
        </ul>
      </header>
      <section className='c-body'>
        <FlashcardList cardData={cardData} />
      </section>
    </div>
  );
}

export default App;
