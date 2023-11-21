import styled from "styled-components";
import React from "react";
import { colorWhite, fontFira, fontPlay, responsive1 } from "../UI/variables";
import { HiChevronDown } from "react-icons/hi";
import { SubTitle, Title } from "../UI";
import { Link as ScrollLink } from "react-scroll";

const StyledIngress = styled.section`
  background-image: url("/pagPrincipal/img-1.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledTiltle = styled(Title)`
  padding-top: 15vh;
  @media screen and (max-width:${responsive1}){
    font-size: 80px;
  }
`;

export const StyledSubTitle = styled(SubTitle)`
  font-weight: 600;
  text-shadow: 2px 2px 2px rgba(0, 0, 0);
`;

const Block = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 70vh;
  margin-top: 25vh;
  .down {
    font-size: 100px;
    color: ${colorWhite};
    &:hover {
      cursor: pointer;
    }
  }
`;

const ImgIngress = () => {
  return (
    <StyledIngress id="start">
      <Block>
        <StyledTiltle>PLANEA TU AVENTURA</StyledTiltle>
        <StyledSubTitle>COMPRAR AHORA</StyledSubTitle>
        <ScrollLink  activeClass='active' to='down'spy={true} smooth={true} offset={-100} duration={500}><HiChevronDown className="down" /> </ScrollLink>
      </Block>
    </StyledIngress>
  );
};

export default ImgIngress;
