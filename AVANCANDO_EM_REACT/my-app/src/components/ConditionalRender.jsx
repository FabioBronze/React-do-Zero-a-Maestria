import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("André");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h1>If Ternário</h1>
      {name === "Fábio" ? (
        <div>
          <p>O nome é Fábio.</p>
        </div>
      ) : (
        <div>
          <p>Nome não validado.</p>
        </div>
      )}
      <button onClick={() => setName("Fábio")}>Autenticar</button>
    </div>
  );
};

export default ConditionalRender;
