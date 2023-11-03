import React, { useState } from "react";
import styled from "styled-components";
import { BsFillBasketFill } from "react-icons/bs";
import { colorWhite, fontFira } from "../UI/variables";
import { Link as ScrollLink } from "react-scroll";

const StyledNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  width: 600px;
  font-family: ${fontFira};
  font-size: 18px;
  font-weight: 400;
  box-sizing: border-box;
  margin-right: 64px;
  color: #888383;
  p,
  li:hover {
    color: ${colorWhite};
    cursor: pointer;
  }
  .basket {
    font-size: 25px;
  }

  p {
    color: ${colorWhite};
  }
`;

const StyledBtnCompra = styled.li`
color:red;
`

const StyledDropDown = styled.div`


`

const Menu = () => {
  const [btnCompraOpen, setCompraOpen] = useState(false);
  const toggleBtnCompra = () => {
    setCompraOpen(!btnCompraOpen);
    console.log(btnCompraOpen);
  }

  return (
    <StyledNav>
      <p>
        <ScrollLink
          activeClass="active"
          to="start"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          INICIO
        </ScrollLink>
      </p>
      <StyledBtnCompra onClick={toggleBtnCompra}>COMPRAR</StyledBtnCompra>
      {btnCompraOpen&&(
        <StyledDropDown>
          <ul>
            <li>
              Mochila
            </li>
          </ul>
        </StyledDropDown>

      )

      }
      <li>
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          {" "}
          SOBRE NOSOTROS
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          CONTACTO
        </ScrollLink>
      </li>
      <li>
        <BsFillBasketFill className="basket" />
      </li>
    </StyledNav>
  );
};

export default Menu;
