import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { StyleBox, StyledImgMenu, StyledText, MenuImg } from "./style";
import { useMediaQuery } from "react-responsive";
import { tabletL } from "../UI/variables";

const ImgText = (props) => {
  const [mostrarTexto, actualizarMostrar] = useState(false);
  const setEstados = () => {
    actualizarMostrar(!mostrarTexto);
  };
  const screenTablet = useMediaQuery({ maxWidth: tabletL });
  return screenTablet ? (
    <StyleBox>
      <MenuImg
        $backgroundImage={props.$backgroundImage}
        className={props.className}
        $actiFilter={true}
      />
        <StyledText>{props.content}</StyledText>
    </StyleBox>
  ) : (
    <StyleBox
      onMouseEnter={setEstados}
      onMouseLeave={setEstados}
      style={{ position: "relative" }}>
      <MenuImg
        $backgroundImage={props.$backgroundImage}
        $actiFilter={mostrarTexto}
        className={props.className}
      />
      <CSSTransition
        in={mostrarTexto}
        timeout={{ enter: 150, exit: 200 }}
        classNames="fade"
        unmountOnExit>
        <StyledText>{props.content}</StyledText>
      </CSSTransition>
    </StyleBox>
  );
};

const ImgMenu = () => {
  return (
    <StyledImgMenu>
      <ImgText $backgroundImage="/pagPrincipal/img-3.png" content="MOCHILAS" />
      <ImgText
        $backgroundImage="/pagPrincipal/img-4.png"
        content="BOLSOS DE LONA"
      />
      <ImgText
        className="tercero"
        $backgroundImage="/pagPrincipal/img-5.png"
        content="BOLSOS DE VIAJE "
      />
    </StyledImgMenu>
  );
};

export default ImgMenu;
