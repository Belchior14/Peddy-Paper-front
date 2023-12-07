import React, { useState, useEffect } from "react";
import { client } from "../../client";
import "./product.css";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Product() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState();

  const [slides, setSlides] = useState([]);

  const [theSlide, setTheSlide] = useState(0);

  const nextSlide = () => {
    if (theSlide === 0 || theSlide === 1) {
      setTheSlide(theSlide + 1);
    } else {
      setTheSlide(0);
    }
  };

  const prevSlide = () => {
    if (theSlide === 2 || theSlide === 1) {
      setTheSlide(theSlide - 1);
    } else {
      setTheSlide(2);
    }
  };

  const getProduct = () => {
    client
      .get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        setSlides([
          {
            src: response.data.product.images[0],
            alt: response.data.product.name,
          },
          {
            src: response.data.product.images[1],
            alt: response.data.product.name,
          },
          {
            src: response.data.product.images[2],
            alt: response.data.product.name,
          },
        ]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const goToContact = () => {
    navigate("/contactos");
  };

  return (
    <div className="test">
      {product ? (
        <div className="product">
          <div className="carousel">
            <BsArrowLeftCircleFill
              className="arrow arrow-l"
              onClick={prevSlide}
            />
            {slides.map((slide, idx) => {
              return (
                <img
                  className={theSlide === idx ? "slide" : "slide slide-hidden"}
                  src={slide.src}
                  alt={slide.alt}
                  key={idx}
                />
              );
            })}

            <BsArrowRightCircleFill
              className="arrow arrow-r"
              onClick={nextSlide}
            />
            <span className="indicators">
              {slides.map((_, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={null}
                    className={
                      theSlide === idx
                        ? "indicator"
                        : "indicator indicator-inactive"
                    }
                  ></button>
                );
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
            <h3>
              Quantidade: <span>{product.quantity}</span>
            </h3>
            <div className="description">
              {product.description.map((descri, idx) => {
                return (
                  <ul>
                    <li key={idx}>{descri}</li>
                    <br></br>
                  </ul>
                );
              })}
            </div>
            {product.quantity === 0 ? (
              <div className="buttonsMin850">
                <button onClick={goToContact} className="contactButton">
                  Contactar
                </button>
              </div>
            ) : (
              <div className="buttonsMin850">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={product.link}
                  className="button"
                >
                  Comprar
                </a>
                <button onClick={goToContact} className="contactButton">
                  Contactar
                </button>
              </div>
            )}
          </div>

          {product.quantity === 0 ? (
            <div className="buttonsMax850">
              <button onClick={goToContact} className="contactButton">
                Contactar
              </button>
            </div>
          ) : (
            <div className="buttonsMax850">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={product.link}
                className="button"
              >
                Comprar
              </a>
              <button onClick={goToContact} className="contactButton">
                Contactar
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Product;
