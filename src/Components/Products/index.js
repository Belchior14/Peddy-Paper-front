import React, { useEffect, useState } from "react";
import { client } from "../../client";
import "./products.css";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState();
  const [inputText, setInputText] = useState("");


  const getProducts = () => {
    client
      .get("/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  const filteredProduts = () => {
    let productsFilter = products;
    if (inputText) {
      productsFilter = productsFilter.filter((product) =>
        product.name.toLowerCase().includes(inputText.toLowerCase())
      );
    }

    return productsFilter;
  };

  const orderByName = () => {
    const productsListsByName = [...products].sort((a,b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0 )
    setProducts(productsListsByName)
  }

  const orderByPrice = () => {
    const productsListsByPrice = [...products].sort((a,b) => (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0)
    setProducts(productsListsByPrice)
  }

  const orderByCreation = () => {
    const productsListsByCreation = [...products].sort((a,b) => (a.createdAt > b.createdAt) ? 1 : (a.createdAt < b.createdAt) ? -1 : 0)
    setProducts(productsListsByCreation)
  }


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    getProducts();
    filteredProduts();
  }, []);

  return (
    <div className="thePage">
      <div className="form__group field">
        <input
          className="form__field"
          placeholder="Producto"
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </div>
      <div className="orderForm">
        <div>
          <h3>Ordenar por:</h3>
        </div>
          <div className="buttonsOrderContainer">
        <div>
          <button className="order" onClick={orderByName}>Nome</button>
        </div>

        <div>
          <button className="order" onClick={orderByPrice}>Preço</button>
        </div>
        <div>
          <button className="order" onClick={orderByCreation}>Criação</button>
        </div>
          </div>

      </div>
      <div className="allProducts">
        {products ? (
          filteredProduts().map((product, idx) => {
            return (
              <div key={idx}>
                <Link to={`/product/${product._id}`}>
                  <div className="oneProduct">
                    <p className="artigo">
                      Artigo:{" "}
                      <span className="nameProduct">{product.name}</span>
                    </p>
                    <img
                      className="imageProduct"
                      src={product.images[0]}
                      alt={product.name}
                    />
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div>hello </div>
        )}
      </div>

      <div>
          <button className="backToTop" onClick={scrollToTop}>Voltar ao topo</button>
        </div>

    </div>
  );
}

export default Products;
