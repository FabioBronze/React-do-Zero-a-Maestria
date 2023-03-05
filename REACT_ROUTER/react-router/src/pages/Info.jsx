import React from "react";
import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams(); // Tras um objeto com todos os parametros da url
  return (
    <div>
      <h1>Mais informações sobre o produto: {id}</h1>
    </div>
  );
};

export default Info;
