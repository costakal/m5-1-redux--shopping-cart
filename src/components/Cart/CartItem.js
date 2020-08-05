import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { removeItem } from "../../actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ItemWrapper>
      <ItemDetails>
        <h2>{item.title}</h2>
        <button onClick={() => dispatch(removeItem(item))}>X</button>
      </ItemDetails>
      <Quantity>
        Quantity: <span>{item.quantity}</span>
      </Quantity>
    </ItemWrapper>
  );
};

export default CartItem;

const ItemWrapper = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  width: 100%;
`;

const ItemDetails = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 18px;
    text-align: left;
    padding: 0px;
    margin: 0px;
  }
`;

const Quantity = styled.p`
  background-color: #2d1931;
  font-size: 14px;
  margin: 0px;
  padding: 10px;
  span {
    padding: 4px 8px;
    background-color: white;
    color: black;
  }
`;
