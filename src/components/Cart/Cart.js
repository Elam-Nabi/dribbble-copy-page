import React from "react";
import styled from "styled-components";

import { useHooks } from "../../hooks/useHooks";

const Cart = () => {
  const { cart } = useHooks();

  return (
    <Div>
      <div>
        {cart.map((c) => (
          <>
            <h5>{c.name}</h5>
            <h5>{c.color}</h5>
            <h5>{c.price}</h5>
          </>
        ))}
      </div>
    </Div>
  );
};

export default Cart;

const Div = styled.div``;
