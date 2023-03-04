import "./App.css";
import { useState, useEffect } from "react";
const url = "http://localhost:3000/products/";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando Dados -
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  // 2 - Add de Produtos -
  const handleSubmit = async (e) => {
    e.prevendDefault();
    const product = {
      name,
      price,
    };
    
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    console.log(res)
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <hr />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} €
          </li>
        ))}
      </ul>
      <hr />
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name={name}
              onChange={(e) => setName(e.target.value)}
            />
            Preço:
            <input
              type="text"
              value={price}
              name={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
