import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import { Link } from "react-router-dom";

import "./Product.css";

const Product = () => {
  // 4 - Rota Dinamica
  const { id } = useParams(); // Tras um objeto com todos os parametros da url

  // 5 - Carregamento Dado Individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>ID do Produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price} €</p>
          {/*6 - Nested Routes*/}
          <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
        </div>
      )}
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </>
  );
};

export default Product;
