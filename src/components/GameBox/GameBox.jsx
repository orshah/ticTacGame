import React from "react";
import "./gameBox.style.css";
import { useState, useEffect } from "react";

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
  const [isWinner, setIsWinner] = useState(false);
  const [winnerPlayer, setWinnerPlayer] = useState("");

  const checkAnswers = (userArr) => {
    let isWinner = false;
    for (let item of allPossibleAnswers) {
      isWinner = item.every((el) => userArr.includes(el));
      if (isWinner) {
        setIsWinner(true);
        setWinnerPlayer(currentPlayer);
        break;
      }
    }
    return isWinner;
  };

  const onClickHandler = (id) => {
    if (!isWinner) {
      if (currentPlayer === "X") {
        setPlayerXResult([...playerXResult, id]);

        checkAnswers([...playerXResult, id]);

        setcurrentPlayer("O");
      } else {
        setPlayerOResult([...playerOResult, id]);
        checkAnswers([...playerOResult, id]);
        setcurrentPlayer("X");
      }
      console.log("current", currentPlayer);
      console.log("X result", playerXResult);
      console.log("O result", playerOResult);
    }
  };

  const checkCellValue = (id) => {
    if (playerXResult.includes(id)) {
      return "x";
    } else if (playerOResult.includes(id)) {
      return "o";
    } else {
      return;
    }
  };

  useEffect(() => {}, [isWinner]);

  return (
    <div className="game__box--container">
      <div className="game__box">
        <div
          className={`game__box-cell ${checkCellValue(1)}`}
          onClick={() => onClickHandler(1)}
        >
          {checkCellValue(1)}
        </div>
        <div
          className={`game__box-cell ${checkCellValue(2)}`}
          onClick={() => onClickHandler(2)}
        >
          {checkCellValue(2)}
        </div>
        <div
          className={`game__box-cell ${checkCellValue(3)}`}
          onClick={() => onClickHandler(3)}
        >
          {checkCellValue(3)}
        </div>
        <div
          className={`game__box-cell ${checkCellValue(4)}`}
          onClick={() => onClickHandler(4)}
        >
          {checkCellValue(4)}
        </div>
        <div
          className={`game__box-cell ${checkCellValue(5)}`}
          onClick={() => onClickHandler(5)}
        >
          {checkCellValue(5)}
        </div>
        <div
          className={`game__box-cell ${checkCellValue(6)}`}
          onClick={() => onClickHandler(6)}
        >
          {checkCellValue(6)}
        </div>
        <div
          className={`game__box-cell ${checkCellValue(7)}`}
          onClick={() => onClickHandler(7)}
        >
          {checkCellValue(7)}
        </div>
        <div
          className={`game__box-cell ${checkCellValue(8)}`}
          onClick={() => onClickHandler(8)}
        >
          {checkCellValue(8)}
        </div>
        <div
          className={`game__box-cell ${checkCellValue(9)}`}
          onClick={() => onClickHandler(9)}
        >
          {checkCellValue(9)}
        </div>
      </div>
      {isWinner && <h1>Winner is {winnerPlayer}</h1>}
    </div>
  );
}

export default GameBox;
