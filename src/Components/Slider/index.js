import "./slider.css";
import React, { useEffect, useState } from "react";
import { client } from "../../client";

function Slider() {
  const [slideProducts, setSlideProducts] = useState();

  const getSlideProducts = () => {
    client
      .get("/products")
      .then((response) => {
        setSlideProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSlideProducts();
  }, []);
  return (
    <div className="mainPictures">
      <div className="mainPicturesSlide">
        {slideProducts
          ? slideProducts.map((slideProduct) => {
              return (
                <img src={slideProduct.images[0]} alt={slideProduct.name} />
              );
            })
          : null}
      </div>

      <div className="mainPicturesSlide">
        {slideProducts
          ? slideProducts.map((slideProduct) => {
              return (
                <img src={slideProduct.images[0]} alt={slideProduct.name} />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Slider;
