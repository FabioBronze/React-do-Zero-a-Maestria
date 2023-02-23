import React from "react";

const num1 = 40;
const num2 = 30;

const handleClick = () => {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

const Component = () => {
  return (
    <div>
      <p>Número 1: {num1}</p>
      <p>Número 2: {num2}</p>
      <button onClick={handleClick}>Somar</button>
    </div>
  );
};

export default Component;
