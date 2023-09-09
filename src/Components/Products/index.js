import React, { useEffect, useState } from "react";
import { client } from "../../client";
import "./products.css";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState();

  const getProducts = () => {
    client
      .get("/products")
      .then((response) => {
          setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="allProdutos">
      {products ? (
        products.map((product , idx) => {
          return (
            <Link to={`/product/${product._id}`}>
              <div className="oneProduct" key={idx}>
                <p>
                  Nome: <span className="nameProduct">{product.name}</span>
                </p>
                <p>
                  Preço: <span>{product.price}</span>€
                </p>
                <img
                  className="imageProduct"
                  src={product.images[0]}
                  alt={product.name}
                />
              </div>
            </Link>
          );
        })
      ) : (
        <div>hello </div>
      )}
    </div>
  );
}

export default Products;
