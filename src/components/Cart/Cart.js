import React from "react";
import styled from "styled-components";

const Cart = ({ cart }) => {
  return (
    <Div>
      <div> {cart.map((c) => c.name)} </div>
    </Div>
  );
};

export default Cart;

const Div = styled.div``;
