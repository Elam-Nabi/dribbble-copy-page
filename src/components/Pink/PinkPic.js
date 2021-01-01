import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const SilverPage = ({ closePinkPic }) => {
  return (
    <Div>
      <MdClose
        onClick={() => closePinkPic()}
        style={{ fontSize: "30px" }}
        className="close-btn"
      />
      <motion.img
        src={"/img/pinkphones.png"}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", damping: 30 }}
      />
    </Div>
  );
};

export default SilverPage;

const Div = styled.div`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);

  .close-btn {
    background: transparent;
    position: absolute;
    right: 450px;
    top: 30px;
    z-index: 3;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    width: 500px;
    position: absolute;
    left: 350px;
    top: 20px;
    border-radius: 3em;
    backdrop-filter: blur(10px);
    background-clip: padding-box;
    border: solid 0.3px #000;
    background: rgba(255, 255, 255, 0.2);
  }
`;
