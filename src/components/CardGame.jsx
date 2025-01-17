"use client";
import { useEffect } from "react";
import GameStateHook from "@/hooks/GameStateHook";
const CardGame = () => {
  const {
    boardCards,
    flippedCards,
    matchedCards,
    shuffle,
    handleCardClick,
    moves,
    resetGame
  } = GameStateHook();

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <div className="game-container w-full">
      <h1>No. of Moves: {moves}</h1>
      <div className="cardGrid mt-20">
        {boardCards.map((data, index) => {
          const flipped = flippedCards.includes(index) ? true : false;
          const matched = matchedCards.includes(index) ? true : false;
          return (
            <div
              key={index}
              onClick={() => handleCardClick(index, data)}
              className={`card ${flipped || matched ? "active" : ""} ${
                matched ? "matched" : ""
              }`}
            >
              <div className="card-front">{data}</div>
              <div className="card-back">?</div>
            </div>
          );
        })}
      </div>
      <button className="mt-5 mb-5 pl-5 pr-5" onClick={()=>resetGame()}>Restart Game</button>
{
    matchedCards.length==16?

      <h1>YOU WON the Game</h1>:""
}
    </div>
  );
};

export default CardGame;
