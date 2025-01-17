"use client";
import GameStateHook from '@/hooks/GameStateHook';
import React, { useEffect, useState } from 'react'
const CardGame = () => {
    const { boardCards, shuffle } = GameStateHook();

    useEffect(() => {
        shuffle();
      }, []);
  return (
    <div className="game-container w-full">
      <div className="cardGrid mt-20">

        {boardCards.map((data, index) => {
          return (
            <div
            key={index}
              className={`card ${false ? "active" : ""} `}
            >
              <div className="card-front">{data}</div>
              <div className="card-back">?</div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default CardGame;