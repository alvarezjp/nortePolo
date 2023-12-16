import React from "react";
import styled from "styled-components";
import { Title, SubTitle } from "../UI";
import { tabletS } from "../UI/variables";

const StyledNewComers = styled.section`
  display: flex;
  box-sizing: border-box;
  /* border: 2px solid red; */
  @media screen and (max-width: ${tabletS}) {
    flex-direction: column;
  }
`;
const BoxText = styled.h2`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 50vw;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: ${tabletS}) {
    width: auto;
    height: 40vh;
  }
`;

const StyledTitle = styled(Title)`
  font-size: 60px;
  line-height: normal;
  box-sizing: border-box;
`;

const StyledImg = styled.div`
  background-image: url("/pagPrincipal/img-2.png");
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  width: 50vw;
  height: 70vh;
  @media screen and (max-width: ${tabletS}) {
    width: auto;
    height: 50vh;
  }
`;

const NewComers = () => {
  return (
    <StyledNewComers id="down">
      <BoxText>
        <StyledTitle>RECIÉN</StyledTitle>
        <StyledTitle>LLEGADOS</StyledTitle>
        <SubTitle> COMPRAR AHORA</SubTitle>
      </BoxText>
      <StyledImg />
    </StyledNewComers>
  );
};

export default NewComers;
