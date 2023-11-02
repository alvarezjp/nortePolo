import React from "react";
import styled from "styled-components";
import { Title, SubTitle } from "../UI";

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

const StyledTitle=styled(Title)`
font-size: 60px;
line-height: normal;
`

const StyledImg = styled.div`
  background-image: url("/pagPrincipal/img-2.png");
  background-position: center;
  background-size: cover;
  width: 50vw;
  height: 70vh;
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
