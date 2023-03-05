// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const More = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>More</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>
    </div>
  );
};

export default More;
