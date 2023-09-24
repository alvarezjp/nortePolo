import React from "react";
import styled from "styled-components";
import { BsFillBasketFill } from "react-icons/bs";
import { colorWhite } from "../UI/variables";


const StyledNav = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: baseline;
width: 600px;
font-family: 'Fira Sans Extra Condensed', sans-serif;
font-size: 18px;
font-weight: 400;
box-sizing: border-box;
margin-right: 64px;
color:#888383;
p,li:hover{
  color:${colorWhite};
  cursor:pointer;
}
.basket{
  font-size:25px
}

p{
  color:${colorWhite}
}
`

const Menu = () => {
  return (
    <StyledNav>
      <p>INICIO</p>
      <li>COMPRAR</li>
      <li>SOBRE NOSOTROS</li>
      <li>CONTACTO</li>
      <li><BsFillBasketFill className="basket"/></li>
    </StyledNav>
  );
};

export default Menu
