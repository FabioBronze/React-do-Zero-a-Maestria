import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.jsx";

const Home = () => {
  // 3 - Carregamento de Dados
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.price} €</p>
              {/* 4 - Rota Dinamica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
