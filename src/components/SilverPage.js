import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { MdClose } from "react-icons/md";

const SilverPage = ({closeImage}) => {
    return (
        <Div>
         <MdClose onClick={() => closeImage()} style={{ fontSize: "40px" }} />
            <img src={"/img/silverphones.png"} alt="" />
        </Div>
    )
}

export default SilverPage


const Div = styled.div`
z-index:2;
padding:0;
margin:0;
box-sizing:border-box;

position:absolute;

img {
width:500px;
position:relative;
left:350px;
}

`