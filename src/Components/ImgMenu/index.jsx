import styled from "styled-components";
import React, { useState } from "react";
import { MenuImg } from "../UI";

const StyledImgMenu = styled.section`
  display: flex;
  box-sizing: border-box;
  border: 5px solid black;
`;
const StyledText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: 10px; */
  color: white;
  font-size: 30px;
  text-align: center;
`;

const StyleBox = styled.div`
  position: relative;
  flex: 1;
`;

const ImgText = (props) => {
  const [mostrarTexto, actualizarMostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarTexto);
  };
  return (
    <StyleBox>
      <MenuImg
        backgroundImage={props.backgroundImage}
        onMouseEnter={cambiarMostrar}
        onMouseLeave={cambiarMostrar}
      />
      {mostrarTexto && <StyledText>{props.content}</StyledText>}
    </StyleBox>
  );
};

const ImgMenu = () => {
  return (
    <StyledImgMenu>
      <ImgText
        backgroundImage="/public/pagPrincipal/img-3.png"
        content="HOla"
      />
      <ImgText
        backgroundImage="/public/pagPrincipal/img-4.png"
        content="Chao"
      />
      <ImgText
        backgroundImage="/public/pagPrincipal/img-5.png"
        content="Quetal "
      />
    </StyledImgMenu>
  );
};

export default ImgMenu;
