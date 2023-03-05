import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.jsx";
import { Link } from "react-router-dom";

const Product = () => {
  // 4 - Rota Dinamica
  const { id } = useParams(); // Tras um objeto com todos os parametros da URL.

  // 5 - Carregamento de Dado Individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <h1>ID do Produto: {id}</h1>
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
    </>
  );
};

export default Product;
