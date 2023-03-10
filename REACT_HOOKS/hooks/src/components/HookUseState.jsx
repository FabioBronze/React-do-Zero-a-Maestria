import { useState } from "react";

const HookUseState = () => {
  let userName = "Fábio";
  const [name, setName] = useState("Fábio");
  const changeNames = () => {
    userName = "Fábio Bronze";
    setName("Fábio Bronze");
  };

  const [age, setAge] = useState(18);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(age);
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
      {/* useState e Input*/}
      <p>Digite a sua idade abaixo</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <p>Você tem {age} anos!</p>
      <button onClick={handleSubmit}>Enviar</button>
      <hr />
    </div>
  );
};

export default HookUseState;
