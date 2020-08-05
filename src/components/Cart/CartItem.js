import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { removeItem } from "../../actions";
import { updateQuantity } from "../../actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ItemWrapper>
      <ItemDetails>
        <h2>{item.title}</h2>
        <button onClick={() => dispatch(removeItem(item))}>X</button>
      </ItemDetails>
      <Quantity>
        <label>Quantity</label>
        <input
          value={item.quantity}
          onChange={(ev) => {
            dispatch(
              updateQuantity({
                ...item,
                quantity: parseInt(ev.target.value) || 0,
              })
            );
          }}
        ></input>
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
  input {
    padding-left: 6px;
    height: 25px;
    width: 30px;
    background-color: white;
    color: black;
  }
`;
