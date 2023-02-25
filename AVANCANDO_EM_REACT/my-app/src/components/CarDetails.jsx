import React from "react";

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>
          <p> Marca:{brand}</p>
        </li>
        <li>
          <p> KM: {km} km</p>
        </li>
        <li>
          <p>Cor: {color}</p>
        </li>
        <li>
          <p>
            {newCar === true ? "Este carro é novo" : "Este carro não é novo"}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
