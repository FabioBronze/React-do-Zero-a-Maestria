import "./GameOver.css";
import React from "react";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim do Jogo</h1>
      <h2>
        A sua Pontuação foi:{" "}
        {score >= 100 ? (
          <span>{score} || Parabéns!</span>
        ) : (
          <span>{score} || Ohhh, que pena! :/</span>
        )}
      </h2>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  );
};

export default GameOver;
