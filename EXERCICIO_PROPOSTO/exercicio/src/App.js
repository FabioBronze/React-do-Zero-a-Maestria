import "./App.css";
import UserDetails from "./components/UserDetails.jsx";

function App() {
  const pessoas = [
    { nome: "Fábio", idade: 20, profissao: "Programador" },
    { nome: "João", idade: 30, profissao: "Guitarrista" },
    { nome: "Joana", idade: 15, profissao: "Estudante" },
  ];

  return (
    <div className="App">
      {pessoas.map((pessoa) => {
        <UserDetails
          key={pessoa.id}
          name={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />;
      })}
    </div>
  );
}

export default App;
