import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import styled from "styled-components";
import { BsFillBasketFill } from "react-icons/bs";
import { responsive1 } from "../UI/variables";

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
  /* @media screen and (max-width: ${responsive1}) {
    justify-content: center;
  } */
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
