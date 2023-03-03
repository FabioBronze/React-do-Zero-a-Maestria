import "./App.css";
import { useState, useEffect } from "react";

// 4 - Custom Hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  // 4 - Custom Hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 1 - Resgatar os Dados -
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:3000/products");
  //     const data = await res.json();
  //     setProducts(data);
  //   };

  //   fetchData();
  // }, []);

  // 2 - Add de Produtos -
  const handleSubmit = async (e) => {
    e.preventDefault();
    const products = {
      name,
      price,
    };
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(products),
    // });

    // // 3 - Carregamento Dinâmico -
    // const addedProduct = await res.json(); // Converte em um objeto JS, para poder utilizar.
    // setProducts((prevProducts) => [...prevProducts, addedProduct]); // Pega os antigos produtos + os novos.

    // 5 - Refatorando o POST
    httpConfig(products, "POST");

    setName("");
    setPrice("");
  };

  // 8 - Desafio -
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/*6 - Loading*/}
      {loading && <p>A Carregar Dados</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price} €
                <button onClick={() => handleRemove(product.id)}>
                  Remover
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/*7 - State de Loading no POST*/}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
