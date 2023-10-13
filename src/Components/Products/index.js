import React, { useEffect, useState } from "react";
import { client } from "../../client";
import "./products.css";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState();
  const [inputText , setInputText] = useState("")

  const getProducts = () => {
    client
      .get("/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  const filteredProduts = () => {
    let productsFilter = products
    if(inputText) {
        productsFilter = productsFilter.filter((product) => product.name.toLowerCase().includes(inputText.toLowerCase()) )
    } 

    return productsFilter
  }

  useEffect(() => {
    getProducts();
    filteredProduts()
  }, []);

  return (
    <div className="thePage">
      <div className="form__group field"><input className="form__field" placeholder="Producto"  type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/></div>
      <div className="allProducts">
      {products ? (
        filteredProduts().map((product, idx) => {
          return (
            < div key={idx}>
            <Link to={`/product/${product._id}`}>
              <div className="oneProduct" >
                <p className="artigo">
                  Artigo: <span className="nameProduct">{product.name}</span>
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
    </div>
  );
}

export default Products;
