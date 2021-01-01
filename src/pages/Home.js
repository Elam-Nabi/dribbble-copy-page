import React, { useEffect } from "react";
import styled from "styled-components";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsPlay } from "react-icons/bs";

import SilverPage from "../components/SilverPage";
import VideoPage from "../components/VideoPage";
import { useHooks } from "../useHooks";

const Home = () => {
  const {
    silver,
    count,
    addLikes,
    handleSilver,
    closeImage,
    video,
    watchVideo,
    closeVideo
  } = useHooks();

  useEffect(() => console.log(count), [count]);

  return (
    <Div>
      <h4 className="likes-count">{count}</h4>
      {silver ? <SilverPage closeImage={closeImage} /> : null}
      {video ? <VideoPage closeVideo={closeVideo} /> : null}
      <Img
        src={"/img/silverphones.png"}
        alt=""
        onClick={() => handleSilver()}
      />
      <Section>
        <div className="silver">
          <img src={"/img/silver.png"} alt="" />
          <h5>Silver</h5>
        </div>
        <div className="pink">
          <img src={"/img/pink.png"} alt="" />
          <h5>Pink</h5>
        </div>
        <div className="gray">
          <img src={"/img/gray.png"} alt="" />
          <h5>Pace Gray</h5>
        </div>
      </Section>
      <section>
        <h1>
          AirPods Max
          <span>True Apple</span>
        </h1>
        <p>
          a perfect balance of exhilarating high-fidelity audio{" "}
          <span>and the effortless magic of AirPods.</span>
        </p>
        <button className="buy-btn">Buy now</button>
        <button className="video-btn" onClick={() => watchVideo()}>
          <BsPlay className="icon-play" />
        </button>
        <button className="icon-btn" onClick={() => addLikes()}>
          <IoMdHeartEmpty className="Icon-heart" />
        </button>
      </section>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  display: flex;

  .likes-count {
    position: absolute;
    text-align: center;
    color: red;
    background: #fff;
    border: 0.3px solid gainsboro;
    border-radius: 50%;
    height: 18px;
    width: 18px;
    font-size: 12px;
    font-weight: bold;
    right: 160px;
    top: 43px;
    clip-path: polygon(50% 0, 100% 50%, 50% 700%, 0 50%);
  }

  section {
    position: absolute;
    right: 130px;
    top: 150px;
    h1 {
      color: #fff;
      font-weight: bolder;
      font-size: 4.2rem;
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

    h1,
    p {
      position: relative;
      bottom: 30px;
    }

    .buy-btn {
      position: relative;
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
      cursor: pointer;

    }

    .video-btn {
      position: relative;
      height: 50px;
      width: 85px;
      top: 15px;
      left: 10px;
      border-radius: 25px;
      background: transparent;
      border: 2px solid #fff;
      cursor: pointer;
      outline:none;
    }

    .icon-play {
      color: #fff;
      font-size: 45px;
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
  }
`;

const Img = styled.img`
  width: 390px;
  position: absolute;
  left: 155px;
  top: 100px;
  border-radius: 200px;
  border: 0.3px solid #626367;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    bottom: 20px;
  }
`;

const Section = styled.header`
  z-index: 1;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  right: 600px;
  top: 150px;

  div {
    img {
      border-radius: 50%;
      width: 60px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }
    h5 {
      color: #b5b6b8;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
