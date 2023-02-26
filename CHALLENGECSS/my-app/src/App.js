import "./App.css";
import CarDetails from "./components/CarDetails.jsx";

function App() {
  const myCars = [
    { id: 1, name: "Porsche", km: 10000, color: "Preto" },
    { id: 2, name: "Ferrari", km: 0, color: "Vermelho" },
    { id: 3, name: "BMW", km: 100, color: " Branco" },
  ];

  return (
    <div className="App">
      <h1>Car Details</h1>
      {myCars.map((car) => (
        <CarDetails
          key={car.id}
          name={car.name}
          km={car.km}
          color={car.color}
        />
      ))}
    </div>
  );
}

export default App;
