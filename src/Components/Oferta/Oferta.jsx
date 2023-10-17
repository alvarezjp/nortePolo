import React, { useState } from "react";
import {
  StyledOferta,
  StyledTiltle,
  StyledSubTitle,
  StyledImgProduct,
  TitleProduct,
  SubTitleProduct,
  ImgProduct,
  StyledProduct,
  BoxDetails,
  MiniBox,
  ViewDetails,
} from "./style";
import { CSSTransition } from "react-transition-group";



const Product = ({ srcImage, titulo, subTitulo }) => {
  const [details, setDetails] = useState(false);
  const [viewTitles, setView] = useState(true);

  return (
    <StyledImgProduct
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}>
      <ImgProduct src={srcImage} />
      <BoxDetails>
        <CSSTransition
          in={details}
          timeout={{ enter: 300, exit: 200 }}
          classNames="fade"
          onEnter={() => setView(false)}
          onExited={() => setView(true)}
          unmountOnExit>
          <MiniBox>
            <ViewDetails>VER DETALLES </ViewDetails>
          </MiniBox>
        </CSSTransition>
        {viewTitles && (
          <>
            <TitleProduct>{titulo}</TitleProduct>
            <SubTitleProduct> {subTitulo}</SubTitleProduct>
          </>
        )}
      </BoxDetails>
    </StyledImgProduct>
  );
};

const Oferta = () => {
  return (
    <StyledOferta>
      <StyledTiltle>AHORA EN OFERTA</StyledTiltle>
      <StyledSubTitle>HASTA 50% OFF</StyledSubTitle>
      <StyledProduct>
        <Product
          srcImage={"/pagPrincipal/img-6.webp"}
          titulo={"MOCHILA DE LONA"}
          subTitulo={"$ 1000"}
        />
        <Product
          srcImage={"/pagPrincipal/img-7.webp"}
          titulo={"MOCHILA COMPLETA VIAJES"}
          subTitulo={"$ 1000"}
        />
        <Product
          srcImage={"/pagPrincipal/img-8.webp"}
          titulo={"MOCHILA CAMUFLADAS"}
          subTitulo={"$ 1000"}
        />
      </StyledProduct>
    </StyledOferta>
  );
};

// debemos seguir con la párte de agregar "ver detalle " a los textos

export default Oferta;
