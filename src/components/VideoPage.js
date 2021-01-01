import React from "react";
import { motion } from 'framer-motion';
import styled from 'styled-components';

const VideoPage = ({closeVideo}) => {
  return (
    <Div onClick={() => closeVideo()} >
      <motion.iframe
      initial={{opacity: 0}}
      animate={{opacity:1}}
      transition={{ type: "spring", damping:30 }}
        title="Airpods"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/FXI_-OesT3A"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></motion.iframe>
    </Div>
  );
};

export default VideoPage;

const Div = styled.div`
top:0;
left:0;
height:100%;
width:100%;
position:absolute;
z-index: 4;
background: rgba(0,0,0,0.8);

iframe {
  display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    border: 3px solid white;
}

`