import React, { useState } from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import {
  StyledNav,
  StyledItems,
  StyledBtnCompra,
  StyledDropDown,
  StyledBurgerDown,
} from "./styled";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@mui/material";

const Menu = () => {
  let timeOut;

  const [btnCompraOpen, setCompraOpen] = useState(false);
  const [btnBurguer, setBtnBurguer] = useState(false);

  const activateBtn = () => {
    setCompraOpen(true);
    DeleteTemporizador();
  };
  const retrasoLeave = () => {
    timeOut = setTimeout(() => {
      setCompraOpen(false);
    }, 500);
  };
  const DeleteTemporizador = () => {
    clearTimeout(timeOut);
  };
  const amburguesa = () => {
    setBtnBurguer(!btnBurguer);
    console.log(btnBurguer);
  };

  return (
    <StyledNav>
      <StyledItems>
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
            onMouseEnter={(activateBtn)}
            onMouseLeave={retrasoLeave}>
            COMPRAR
          </StyledBtnCompra>
          {btnCompraOpen && (
            <StyledDropDown
              onMouseEnter={DeleteTemporizador}
              onMouseLeave={retrasoLeave}>
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
      </StyledItems>
      <BsFillBasketFill className="basket" />
      <GiHamburgerMenu className="cicleList" onClick={amburguesa} />
      {btnBurguer && (
        <StyledBurgerDown>
          <li>Mochila</li>
          <li>Bolsas de lona</li>
          <li>Mochilas de viaje</li>
        </StyledBurgerDown>
      )}
    </StyledNav>
  );
};

export default Menu;
