import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import styled from "styled-components";

const StyledHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  height: 100px
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
