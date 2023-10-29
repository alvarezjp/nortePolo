import styled from "styled-components";
import React from "react";
import Header from "../Header";
import { colorWhite, fontFira, fontPlay } from "../UI/variables";
import { HiChevronDown } from "react-icons/hi";
import { SubTitle, Title } from "../UI";

const StyledIngress = styled.section`
  background-image: url("/pagPrincipal/img_1.png");
  background-position: center bottom;
  background-size: cover;
  height: 100vh;
  box-sizing: border-box;
  /* border: 1px solid red; */
`;
export const StyledTiltle = styled(Title)`
  padding-top: 25vh;
`;

export const StyledSubTitle = styled(SubTitle)`  
  margin-top: -15vh;;
`;

const Block = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 84vh;

  .down {
    font-size: 10vh;
    color: ${colorWhite};
  }
`;

const ImgIngress = () => {
  return (
    <StyledIngress>
      <Block>
        <StyledTiltle>PLANEA TU AVENTURA</StyledTiltle>
        <StyledSubTitle>COMPRAR AHORA</StyledSubTitle>
        <HiChevronDown className="down" />
      </Block>
    </StyledIngress>
  );
};

export default ImgIngress;
