import React, { useState } from "react";
import SimpleSlider from "../carrucel/carrusel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import { useMediaQuery } from "react-responsive";
import { tabletL, tabletS } from "../UI/variables";

const Product = (props) => {
  const { titulo, subTitulo } = props;
  const [details, setDetails] = useState(false);
  const [viewTitles, setView] = useState(true);
  const screenTablet = useMediaQuery({ minWidth: tabletL });

  return (
    <StyledImgProduct
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}>
      <ImgProduct $backgroundImage={props.$backgroundImage} />
      <BoxDetails>
        {screenTablet && (
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
        )}
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
  const MinScreenS = useMediaQuery({ maxWidth: tabletS });
  const MaxScreenS = useMediaQuery({ minWidth: tabletS });
  return (
    <StyledOferta>
      <StyledTiltle>AHORA EN OFERTA</StyledTiltle>
      <StyledSubTitle>HASTA 50% OFF</StyledSubTitle>
      {MinScreenS && (
        <>
        <SimpleSlider/>
        </>
        )}
      {MaxScreenS && (
        <StyledProduct>
          <Product
            $backgroundImage={"/pagPrincipal/img-6.webp"}
            titulo={"MOCHILA DE LONA"}
            subTitulo={"$ 1000"}
          />
          <Product
            $backgroundImage={"/pagPrincipal/img-7.webp"}
            titulo={"MOCHILA COMPLETA VIAJES"}
            subTitulo={"$ 1000"}
          />
          <Product
            $backgroundImage={"/pagPrincipal/img-8.webp"}
            titulo={"MOCHILA CAMUFLADAS"}
            subTitulo={"$ 1000"}
          />
        </StyledProduct>
      )}
    </StyledOferta>
  );
};

// debemos seguir con la párte de agregar "ver detalle " a los textos

export default Oferta;
export {Product}