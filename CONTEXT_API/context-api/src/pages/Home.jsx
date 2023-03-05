// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";

// 4 - Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Contexto mais Complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - Contexto mais Complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - Alterando o Contexto Complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando Valor Contexto */}
      <ChangeCounter />
      {/* 6 - Alterando o Contexto Complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
