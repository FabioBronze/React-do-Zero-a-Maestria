import React from "react";

const CarDetails = ({ name, km, color }) => {
  return (
    <div>
      <h2>{name}: </h2>
      <div className="car-container">
        <p>KM: {km}</p>
        <p>Color: {color}</p>
        {km > 0 ? "Carro Usado" : "Carro Novo"}
      </div>
    </div>
  );
};

export default CarDetails;
