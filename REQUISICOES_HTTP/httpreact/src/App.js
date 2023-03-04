import "./App.css";
import { useState, useEffect } from "react";
// 4 - Custom Hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products/";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - Custom Hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando Dados -
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   };
  //   fetchData();
  // }, []);

  // 2 - Add de Produtos -
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Carregamento Dinâmico -
    // const addedProducts = await res.json();
    // setProducts((PrevProducts) => [...PrevProducts, addedProducts]); // Pega os antigos produtos e adiciona + o novo.

    // 5 - Refatorando o POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // 8 - Desafio
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <hr />
      {/*6 - Loading*/}
      {loading && <p>A Carregar Dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price} €
                <button onClick={() => handleRemove(product.id)}>
                  Excluir
                </button>
              </li>
            ))}
        </ul>
      )}
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
              type="number"
              value={price}
              name={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/*7 - State de Loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
