import React, { useState, useEffect } from "react";
import { client } from "../../client";
import "./product.css";
import { useParams } from "react-router-dom";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState();

  const [slides , setSlides] = useState([])

  const [theSlide , setTheSlide] = useState(0)

  const nextSlide = () => {
    if(theSlide === 0 || theSlide === 1) {
      setTheSlide(theSlide + 1)
    } else {
      setTheSlide(0)
    }
     
  }

  
  const prevSlide = () => {
    if(theSlide === 2 || theSlide=== 1) {
      setTheSlide(theSlide - 1)
    } else {
      setTheSlide(2)
    }
  }

  const getProduct = () => {
    client
      .get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        setSlides(
          [
            {
              "src": response.data.product.images[0],
              "alt": response.data.product.name,
            },
            {
              "src": response.data.product.images[1],
              "alt": response.data.product.name,
            },
            {
              "src": response.data.product.images[2],
              "alt": response.data.product.name,
            }
          ]
        )
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);




console.log(slides)

  return (
    <div className="test">
      {product ? (
        <div className="product">

          
          <div className="carousel">
          <BsArrowLeftCircleFill className="arrow arrow-l" onClick={prevSlide}/>
          {slides.map((slide, idx) => {
            return (
              <img className= {theSlide === idx ? "slide" : "slide slide-hidden"} src={slide.src} alt={slide.alt} key={idx} />
            )
          })}
          
          <BsArrowRightCircleFill className="arrow arrow-r" onClick={nextSlide}/>
          <span className="indicators">
            {slides.map((_, idx) => {
              return (
                <button key={idx} onClick={null} className={theSlide === idx ? "indicator" : "indicator indicator-inactive"}></button>
              )
            })}
          </span>
          </div>
    

          <div className="divider"></div>

          <div className="details">
            <h3>
              Nome: <span>{product.name}</span>
            </h3>
            <h3>
              Preço: <span>{product.price}€</span>
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={product.link}
              className="button"
            >
              Comprar
            </a>
          </div>

          <div className="divider"></div>

          <div className="description">
            <p>{product.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Product;
