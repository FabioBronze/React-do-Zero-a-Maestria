import React from "react";

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h1>Carta de Condução</h1>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
};

export default UserDetails;
