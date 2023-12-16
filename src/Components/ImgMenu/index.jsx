import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { StyleBox, StyledImgMenu, StyledText,MenuImg } from "./style";

const ImgText = (props) => {
  const [mostrarTexto, actualizarMostrar] = useState(false);
  const setEstados = () => {
    actualizarMostrar(!mostrarTexto);
  };
  return (
    <StyleBox
        // onMouseEnter={setEstados}
        // onMouseLeave={setEstados}
        // style={{ position: "relative" }}
        >
        <MenuImg
          $backgroundImage={props.$backgroundImage}
          $actiFilter={mostrarTexto}
        />
        {/* <CSSTransition
          in={mostrarTexto}
          timeout={{ enter: 150, exit: 200 }}
          classNames="fade"
          unmountOnExit>
          <StyledText>{props.content}</StyledText>
        </CSSTransition> */}
    </StyleBox>
  );
};

const ImgMenu = () => {
  return (
    <StyledImgMenu>
      <ImgText
        $backgroundImage="/pagPrincipal/img-3.png"
        content="MOCHILAS"
      />
      <ImgText
        $backgroundImage="/pagPrincipal/img-4.png"
        content="BOLSOS DE LONA"
      />
      <ImgText
        $backgroundImage="/pagPrincipal/img-5.png"
        content="BOLSOS DE VIAJE "
        className="tercero"
      />
    </StyledImgMenu>
  );
};

export default ImgMenu;
