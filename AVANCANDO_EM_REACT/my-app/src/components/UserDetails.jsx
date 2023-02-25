import React from "react";

const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? (
        <p>Pode tirar carta de condução.</p>
      ) : (
        <p>Menor de idade.</p>
      )}
    </div>
  );
};

export default UserDetails;
