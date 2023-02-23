import React from "react";

const TemplateExpressions = () => {
  const name = "Fábio";
  const data = {
    age: 20,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>
        Você atua como: {data.job} e tem {data.age} anos
      </p>
      <p>{5 + 5}</p>
    </div>
  );
};

export default TemplateExpressions;
