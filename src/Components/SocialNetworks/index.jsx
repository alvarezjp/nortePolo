import styled from "styled-components";
import React from "react";
import { tabletL,tabletS } from "../UI/variables";

const StyledSocial = styled.section`
  height: 215px;
  width: 100px;
  position: fixed;
  top: 40%;
  right: 0px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: ${tabletL}) {
    height: 215px;
    width: 70px;
  }
  @media screen and (max-width: ${tabletS}) {
    display: none;
  }
  
`;

const StyledImg = styled.img`
  width: 40px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width:${tabletL}) {
    width: 35px;
  }
`;

const SocialNetwork = () => {
  return (
    <StyledSocial>
      <StyledImg src="/pagPrincipal/face.png" />
      <StyledImg src="/pagPrincipal/twiter.png" />
      <StyledImg src="/pagPrincipal/insta.png" />
    </StyledSocial>
  );
};

export default SocialNetwork;
