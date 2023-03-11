import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // useEffect, sem dependencias
  useEffect(() => {
    // console.log("executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // useEffect, com array de dependencias vazio
  useEffect(() => {
    // console.log("executado apenas uma vez");
  }, []);

  // useEffect, com array de dependencias com algum item
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Executado apenas quando o anotherNumber muda.");
    }
  }, [anotherNumber]);

  // CleanUp do useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello, World!");
    //   setAnotherNumber(anotherNumber + 1);
    }, 2000);
    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Add</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar AnotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
