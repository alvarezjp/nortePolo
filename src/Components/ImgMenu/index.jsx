import styled from "styled-components";
import React from "react";
import img3 from "../../assets/img/menuPrincipal/img-3.png";
import img4 from "../../assets/img/menuPrincipal/img-4.png";
import img5 from "../../assets/img/menuPrincipal/img-5.png";
import { MenuImg } from "../UI";

const StyledImgMenu = styled.section`
  display: flex;
  box-sizing: border-box;
`;
const StyledCuadro = styled.article`
display: flex;
`


const ImgMenu = () => {
  return (
    <StyledImgMenu>
      <MenuImg src={img3} alt="Mochilas"/>
      <MenuImg src={img4} alt="Bolsos de lona" />
      <MenuImg src={img5} alt="Bolsos de viaje" />
    </StyledImgMenu>
  );
};

export default ImgMenu;
