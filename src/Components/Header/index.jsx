import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import styled from "styled-components";
import { BsFillBasketFill } from "react-icons/bs";

const StyledHeader = styled.section`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  height: 100px;
  width: 100vw;
  z-index: 100;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

export default Header;
