import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Products = () => {
  const [products] = useState([
    {
      id: "1",
      name: "AirPods Max True Apple Silver",
      price: "699$",
      image:
        "https://www.elgiganten.se/image/dv_web_D180001002634421/266122/apple-airpods-max-traadloesa-around-ear-hoerlurar-silver.jpg",
    },
    {
      id: "2",
      name: "AirPods Max True Apple Pink",
      price: "699$",
      image:
        "https://www.elgiganten.se/image/dv_web_D180001002634457/266125/apple-airpods-max-traadloesa-around-ear-hoerlurar-rosa.jpg",
    },
    {
      id: "3",
      name: "AirPods Max True Apple Pace Gray",
      price: "699$",
      image:
        "https://www.elgiganten.se/image/dv_web_D180001002634420/266110/apple-airpods-max-traadloesa-around-ear-hoerlurar-rymdgraa.jpg",
    },
  ]);

  useEffect(() => {
    console.log("Here are the products", products);
  }, [products]);

  return (
    <Div>
      <div className="top-text">
        {" "}
        <h1>
          AirPods <span>Headphones</span>
        </h1>
        <h4>Here are our headphones, the "best" and the most expensive.</h4>
      </div>
      <div>
        {products.map((p) => (
          <div className="products-container">
            <h1>
              <img src={p.image} alt={p.image} />
            </h1>
            <div className="info-container">
              <h1 className="p-name">{p.name}</h1>
              <h1 className="p-price">{p.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </Div>
  );
};

export default Products;

const Div = styled.div`
  .top-text {
    padding: 150px;

    h1 {
      font-size: 5rem;
      span {
        display: block;
      }
    }
    h4 {
    }
  }

  .products-container {
    display: block;
    text-align: center;
    top: 100px;
    .info-container {
      .p-name {
        font-size: 25px;
      }

      .p-price {
      }
    }
    img {
      width: 150px;
      margin: 10px;
      border-radius: 50%;
    }
  }
`;
