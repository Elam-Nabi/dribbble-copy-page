import React from "react";
import styled from "styled-components";
import { IoMdHeartEmpty } from "react-icons/io";

const Home = () => {
  return (
    <Div>
      <img src={"/img/hörlurar.png"} alt="" />
      <section>
        <h1>
          AirPods Max <span>True Apple</span>
        </h1>
        <p>
          a perfect balance of exhilarating high-fidelity audio{" "}
          <span>and the effortless magic of AirPods.</span>
        </p>
        <button className="buy-btn">Buy now</button>
        <button className="icon-btn">
          <IoMdHeartEmpty />
        </button>
      </section>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  display: flex;

  img {
    width: 350px;
    position: absolute;
    left: 80px;
    border-radius: 200px;
    border: 1px solid #626367;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      box-shadow: 3px 5px 3px 5px #000;
      transform: scale(1.1);
    }
  }

  section {
    position: absolute;
    right: 150px;
    h1 {
      color: #fff;
      font-weight: bolder;
      font-size: 3.3rem;
      span {
        display: block;
      }
    }

    p {
      span {
        display: block;
      }
    }
  }

  .buy-btn {
    height: 50px;
    width: 200px;
    outline: none;
    color: #494a4d;
    background: #fff;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    transition: all 0.4s ease-in-out;
    font-size: 18px;
    font-weight: bolder;

    &:hover {
      box-shadow: 3px 3px silver;
    }
  }
`;
