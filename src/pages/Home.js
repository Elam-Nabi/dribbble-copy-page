import React, { useState } from "react";
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
          <IoMdHeartEmpty class="Icon-heart" />
        </button>
      </section>
      <aside>
        <div className="silver">
          <h5>Silver</h5>
        </div>
        <div className="pink">
          <h5>Pink</h5>
        </div>
        <div className="gray">
          <h5>Pace Gray</h5>
        </div>
      </aside>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  display: flex;

  img {
    width: 350px;
    position: absolute;
    left: 200px;
    top: 150px;
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
    right: 200px;
    top: 150px;
    h1 {
      color: #fff;
      font-weight: bolder;
      font-size: 3.7rem;
      span {
        display: block;
      }
    }

    p {
      color: #abacae;
      span {
        display: block;
      }
    }
    .buy-btn {
      height: 50px;
      width: 200px;
      outline: none;
      color: #494a4d;
      background: #f2f1ef;
      cursor: pointer;
      border-radius: 20px;
      border: none;
      transition: all 0.4s ease-in-out;
      font-size: 18px;
      font-weight: bolder;

      &:hover {
        opacity: 0.7;
      }
    }

    .icon-btn {
      position: relative;
      top: 10px;
      left: 20px;
      height: 50px;
      width: 85px;
      background: transparent;
      border-radius: 25px;
      outline: none;
      border: 2px solid #fff;
    }

    .Icon-heart {
      color: #fff;
      font-size: 32px;
      margin-top: 5px;
      transition: all 0.4s ease-in-out;

      &:hover {
        color: red;
      }
    }

    aside {
      position: absolute;
      .silver {
        color: #b5b6b8;
        font-size: 22px;
        h5 {
          color: #b5b6b8;
          font-size: 22px;
        }
      }

      .pink {
        h5 {
          color: #b5b6b8;
          font-size: 22px;
        }
      }

      .gray {
        h5 {
          color: #b5b6b8;
          font-size: 22px;
        }
      }
    }
  }
`;
