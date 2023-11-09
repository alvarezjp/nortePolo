import React, { useState } from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { StyledNav, StyledBtnCompra, StyledDropDown } from "./styled";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@mui/material";

const Menu = () => {
  let timeOut;

  const [btnCompraOpen, setCompraOpen] = useState(false);

  const activateBtn = () => {
    setCompraOpen(true);
  };

  const retrasoLeave = () => {
    timeOut = setTimeout(() => {
      setCompraOpen(false)
    }, 500);
  };

  const DeleteTemporizador = () => {
    clearTimeout(timeOut);
  };

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
      
      <div>
        <StyledBtnCompra
          onMouseEnter={activateBtn}
          onMouseLeave={retrasoLeave}>
          COMPRAR
        </StyledBtnCompra>
        {btnCompraOpen && (
          <StyledDropDown onMouseEnter={DeleteTemporizador} onMouseLeave={retrasoLeave}>
            <li>Mochila</li>
            <li>Bolsas de lona</li>
            <li>Mochilas de viaje</li>
          </StyledDropDown>
        )}
      </div>

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
