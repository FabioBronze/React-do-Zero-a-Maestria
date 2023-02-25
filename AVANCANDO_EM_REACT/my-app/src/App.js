import "./App.css";
import City from "./assets/city.jpg";
import ManageData from "./components/ManageData.jsx";
import ListRender from "./components/ListRender.jsx";
import ConditionalRender from "./components/ConditionalRender.jsx";
import ShowUsername from "./components/ShowUsername";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Children from "./components/Children.jsx";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";
import { useState } from "react";

function App() {
  const cars = [
    { id: 1, brand: " BMW", km: 0, color: " Preto", newCar: true },
    { id: 2, brand: " Porsche", km: 100000, color: " Vermelho", newCar: false },
    { id: 3, brand: " Fiat", km: 0, color: " Branco", newCar: true },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("Escolha um número");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Fábio", age: 20, job: "Programador" },
    { id: 2, name: "João", age: 30, job: "Advogado" },
    { id: 3, name: "Joana", age: 17, job: "Estudante" },
    { id: 4, name: "Pedro", age: 20, job: "Estudante" },
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em asset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*Props*/}
      <ShowUsername name="Fábio" />
      {/*Destructring*/}
      <CarDetails brand="Porsche" km={100000} color="Preto" newCar={false} />
      {/*Reaproveitamento*/}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Ferrari" km={4400} color="Preto" newCar={false} />
      {/*Loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/*Fragment*/}
      <Fragment popFragment="teste" />
      {/*Children*/}
      <Children myValue="Testing...">
        <p>conteúdo</p>
      </Children>
      <Children myValue="Testing... 2">
        <p>conteúdo 2</p>
      </Children>
      {/*Executar Função*/}
      <ExecuteFunction myFunction={showMessage} />
      {/*State Lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
