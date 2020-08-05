import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";
import Button from "../Button";

const Cart = () => {
  return (
    <Wrapper>
      <h2 style={{ padding: "10px 30px 0px" }}>Your Cart</h2>
      <ItemsInCart>1 Item</ItemsInCart>
      <ul>
        <CartItem />
      </ul>
      <CheckOut>
        <p>
          Total: <span>$12.34</span>
        </p>
        <Button style={{ height: "40px", width: "120px" }}>Purchase</Button>
      </CheckOut>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 24.5%;
  right: 0;
  color: white;
  background-color: #3c2241;
  ul {
    display: flex;
    padding: 15px;
  }
`;

const CheckOut = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 20px;
  justify-content: space-evenly;
  width: 100%;
  p {
    padding: 10px;
    span {
      font-weight: bold;
    }
  }
`;

const ItemsInCart = styled.p`
  font-size: 12px;
  padding: 0px 30px 10px;
`;
