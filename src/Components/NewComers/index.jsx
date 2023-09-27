import React from "react";
import styled from "styled-components";
import { colorWhite, fontFira } from "../UI/variables";
import { Tiltle,SubTitle } from "../ImgIngress";

const StyledNewComers = styled.section`
  display: flex;
`;
const BoxText = styled.h2`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 50vw;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;


const StyledImg = styled.div`
  background-image: url("/public/pagPrincipal/img-2.png");
  background-position: center;
  background-size: cover;
  width: 50vw;
  height: 70vh;
`;

const NewComers = () => {
  return (
    <StyledNewComers>
      <BoxText>
        <Tiltle>Recien </Tiltle>
        <Tiltle>Leguegados </Tiltle>
        <SubTitle>COMPRAR AHORA</SubTitle>
      </BoxText>
      <StyledImg />
    </StyledNewComers>
  );
};

export default NewComers;
