import "./App.css";
import { useState } from "react";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Fábio");
  const redTitle = true;
  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React com CSS</h1>
      {/*CSS de Componentes*/}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/*CSS Inline*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "1px solid red" }}>
        Este elemento utiliza CSS Inline.
      </p>
      {/*CSS Inline Dinâmico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        Este elemento utiliza CSS Inline Dinâmico
      </h2>
      <h2
        style={
          name === "Fábio" ? { color: "green", background: "white" } : null
        }
      >
        {name}
      </h2>
      {/*Classe Dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/*CSS Modules*/}
      <Title />
    </div>
  );
}

export default App;
