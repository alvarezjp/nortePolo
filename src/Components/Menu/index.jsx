import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BsFillBasketFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import {
  StyledNav,
  StyledItems,
  StyledDropDown,
  StyledBurgerDown,
} from "./styled";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@mui/material";

const Menu = () => {
  let timeOut;

  const [btnCompraOpen, setCompraOpen] = useState(false);
  const [btnBurguer, setBtnBurguer] = useState(false);
  const [resBtnCompra,setResBtnCompra]=useState(false)
  const pantallaMovil = useMediaQuery({ maxWidth: 900 });

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
  };
  const actionBtnResponsive = () => {
    setCompraOpen(!btnCompraOpen);
  };
  const btnRespCompra = () => {
  setResBtnCompra(!resBtnCompra)
  }

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
          <li
            onMouseEnter={pantallaMovil ? null : activateBtn}
            onMouseLeave={pantallaMovil ? null : retrasoLeave}
            onClick={pantallaMovil ? actionBtnResponsive : null}
            >
            COMPRAR
          </li>
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
      {btnBurguer?(<IoClose className="equis" onClick={amburguesa}/>):null}
      {!btnBurguer?(<GiHamburgerMenu className="cicleList" onClick={amburguesa} />):null}
      
      {btnBurguer && (
        <StyledBurgerDown>
          <li>
            <ScrollLink
              activeClass="active"
              to="start"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              INICIO
            </ScrollLink>
          </li>
          <li>
            <li
              onClick={pantallaMovil ? actionBtnResponsive : null}
              >
              
              COMPRAR
              <IoIosArrowDown className="arrow" />
            </li>
          </li>
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
        </StyledBurgerDown>
      )}
    </StyledNav>
  );
};

export default Menu;
