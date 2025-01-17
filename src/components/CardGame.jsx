import React from 'react'

const CardGame = () => {
  return (
    <div className='game-container w-full'>
    
    <div className='cardGrid mt-20'>
    <div
            
              className={`card ${false || false ? "active" : ""} ${
                false ? "matched" : ""
              } ${false ? "gameover" : ""}`}
            >
              <div className="card-front">A</div>
              <div className="card-back">?</div>
            </div>
    </div>
    </div>
  )
}

export default CardGame;