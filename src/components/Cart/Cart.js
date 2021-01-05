import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

import { useHooks } from "../../hooks/useHooks";

const Cart = () => {
  const { cart, closeCart } = useHooks();

  return (
    <Div>
      <div className="itemContainer">
        {cart.map((c, index) => (
          <div className="items" key={index}>
            <h5>{c.name}</h5>
            <h5>{c.color}</h5>
            <h5>{c.price}</h5>
          </div>
        ))}
      </div>
    </Div>
  );
};

export default Cart;

const Div = styled.div`
  .items {
    display: flex;
    h5 {
    }
  }
`;
