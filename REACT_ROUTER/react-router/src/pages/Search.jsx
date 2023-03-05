import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [SearchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + SearchParams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados Disponiveis</h1>
      <ul>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
