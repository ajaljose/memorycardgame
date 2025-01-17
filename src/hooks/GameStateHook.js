import { useState } from 'react'

const GameStateHook = () => {

    const [boardCards, setBoardCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const cardData = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
    ];
  
    const shuffle = () => {
      const shuffledCards = [...cardData, ...cardData]
        .sort(() => Math.random() - 0.5)
        .map((v) => v);
  
      setBoardCards(shuffledCards);
    };
  
    const handleCardClick = (index) => {
      if (!flippedCards.includes(index)) {

        if (flippedCards.length === 1) {
          const firstIdx = flippedCards[0];
          const secondIdx = index;
          if (boardCards[firstIdx] === boardCards[secondIdx]) {
            setMatchedCards((prev) => [...prev, firstIdx, secondIdx]);
          }else{
            setTimeout(() => {
              setFlippedCards([]);
            }, 1000);
          }
          
          setFlippedCards([...flippedCards, index]);
        } else if (flippedCards.length === 2) {
          setFlippedCards([index]);
        } else {
          setFlippedCards([...flippedCards, index]);
        }
        setMoves(moves+1);
      }
    };
  const resetGame=()=>{
    shuffle();
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  }
    return { boardCards, flippedCards, matchedCards, shuffle, handleCardClick,moves,resetGame };

}

export default GameStateHook;