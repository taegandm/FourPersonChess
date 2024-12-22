// Chessboard.js
import React from "react";
import "../styles/chessboard.css";

const Chessboard = () => {
  const rows = 8;
  const cols = 8;
  const board = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isBlack = (row + col) % 2 === 1;
      board.push(
        <div
          key={`${row}-${col}`}
          className={`square ${isBlack ? "black" : "white"}`}
        ></div>
      );
    }
  }

  return <div className="chessboard-container"><div className="chessboard">{board}</div></div>;
};

export default Chessboard;
