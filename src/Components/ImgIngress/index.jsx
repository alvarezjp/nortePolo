import styled from "styled-components";
import React from "react";
import Header from "../Header";
import { colorWhite, fontFira, fontPlay } from "../UI/variables";
import { HiChevronDown } from "react-icons/hi";

const StyledIngress = styled.section`
  background-image: url("/public/pagPrincipal/img_1.png");
  background-position: center bottom;
  background-size: cover;
  height: 100vh;
  box-sizing: border-box;
  /* border: 1px solid red; */
`;
export const Tiltle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: ${fontFira};
  color: ${colorWhite};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 90px;
  padding-top: 25vh;
`;

export const SubTitle = styled.h3`
  font-family: ${fontPlay};
  color: ${colorWhite};
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 24px;
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
      <Header />
      <Block>
        <Tiltle>PLANEA TU AVENTURA</Tiltle>
        <SubTitle>COMPRAR AHORA</SubTitle>
        <HiChevronDown className="down" />
      </Block>
    </StyledIngress>
  );
};

export default ImgIngress;
