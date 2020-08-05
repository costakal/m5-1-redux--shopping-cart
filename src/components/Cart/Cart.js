import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Button from "../Button";
import { getStoreItemArray } from "../../reducers";

const Cart = () => {
  const state = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  return (
    <Wrapper>
      <h2 style={{ padding: "10px 30px 0px" }}>Your Cart</h2>
      <ItemsInCart>{storeItems.length} Item</ItemsInCart>
      <ul>
        {storeItems.map((item) => {
          return <CartItem item={item} />;
        })}
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
    padding: 15px;
  }
`;

const CheckOut = styled.div`
  display: flex;
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
