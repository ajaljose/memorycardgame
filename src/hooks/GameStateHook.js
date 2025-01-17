import { useState } from 'react'

const GameStateHook = () => {

    const [boardCards, setBoardCards] = useState([]);
  
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

  
    return { boardCards, shuffle };

}

export default GameStateHook;