import React from "react";
import "./gameBox.style.css";
import { useState } from "react";

const allPossibleAnswers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];



function GameBox() {
  const [currentPlayer, setcurrentPlayer] = useState("X");
  const [playerXResult, setPlayerXResult] = useState([]);
  const [playerOResult, setPlayerOResult] = useState([]);

const checkAnswers = (playerAnswers) => {
    for( correct of allPossibleAnswers) {

        


        if(playerAnswers && )
    }
}


  const onClickHandler = (id) => {
    if (currentPlayer === "X") {
      setPlayerXResult([...playerXResult, id]);
      setcurrentPlayer("O");
    } else {
      setPlayerOResult([...playerOResult, id]);
      setcurrentPlayer("X");
    }
    console.log("current", currentPlayer);
    console.log("X result", playerXResult);
    console.log("O result", playerOResult);
  };

  return (
    <div className="game__box--container">
      <div className="game__box">
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(1)}
        ></div>
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(2)}
        ></div>
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(3)}
        ></div>
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(4)}
        ></div>
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(5)}
        ></div>
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(6)}
        ></div>
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(7)}
        ></div>
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(8)}
        ></div>
        <div
          className="game__box--cell"
          onClick={() => onClickHandler(9)}
        ></div>
      </div>
    </div>
  );
}

export default GameBox;
