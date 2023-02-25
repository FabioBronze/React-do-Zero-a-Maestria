import React from "react";

const Children = ({ children, myValue }) => {
  return (
    <div>
      <h1>Este é o título do container</h1>
      {children}
      <p>O valor é: {myValue}</p>
    </div>
  );
};

export default Children;
