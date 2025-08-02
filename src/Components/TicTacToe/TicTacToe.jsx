import React, { useState } from 'react'
import './TicTacToe.css'
import cross_image from '../../assets/cross.png'
import circle_image from '../../assets/circle.png'


const TicTacToe = () => {

    const [boite, setBoite] = useState(Array(9).fill(""));

    const [count, setCount] = useState(0)

    const toggle = ( num) => {
        if (boite[num] !== "") {
            return;
        }

        const newBoite = [...boite]; // creation d'une copie de boite afin de la modifier

        if (count % 2 === 0) {
            newBoite[num] = "X";
        } else {
            newBoite[num] = "O";
        }

        setBoite(newBoite); // insertion de la copie dans la boite principale
        setCount(prev => prev + 1);
        checkWin(newBoite);
    };

    const won = (mirou) => {
  alert(`Le joueur ${mirou} a gagné !`);
  // Ou toute autre logique, comme bloquer le jeu, afficher un message, etc.
};

    const checkWin = (boite) => {
        const winCondition =
            [[0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],]
        for (const [a, b, c] of winCondition) if (boite[a] && boite[a] === boite[b] && boite[b] === boite[c]) {
            won(boite[a])
            return
        }

    }



    return (
       <div className='container'>
  <h1 className="title">Tic Tac Toe gaming <span>React</span></h1>
  <div className='board'>
    {boite.map((val, index) => (
      <div
        key={index}
        className="boxes"
        onClick={() => toggle(index)}
      >
        {val === "X" && <img src={cross_image} alt="X" />}
        {val === "O" && <img src={circle_image} alt="O" />}
      </div>
    ))}
  </div>
  <button className='reset'>Reset</button>
</div>
    )
}

export default TicTacToe