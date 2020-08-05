import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import Cart from "./Cart/Cart";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
        <CartWrapper>
          <Cart />
        </CartWrapper>
      </Content>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: auto auto;
`;

const Header = styled.header`
  grid-area: 1 / 1 / 1 / 1;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: 2 / 1 / 2 / 1;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: 1 / 2 / span 2 / 2;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;

export default App;
