import styled from "styled-components";
import { fonoL, fonoS, tabletL } from "../UI/variables";
import { SubTitle } from "../UI";

export const StyledImgMenu = styled.section`
  display: flex;
  box-sizing: border-box;
  @media screen and (max-width: ${tabletL}) {
    /* flex-direction: column; */
    display: grid;
  }
`;

export const StyledText = styled(SubTitle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
  text-align: center;
  box-sizing: border-box;
  font-size: 16px;
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 5s ease-in, transform 5s ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 0.3s ease-in, transform 0.3s ease-in;
  }
`;

export const StyleBox = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: ${tabletL}) {
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }
    &:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    &:nth-child(3) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
  }
  @media screen and (max-width: ${fonoS}) {
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }
    &:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    &:nth-child(3) {
      grid-column: 1;
      grid-row: 3
    }
  }
  /* Estilos de entrada */
`;

export const MenuImg = styled.article`
  width: 33.5vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-position: center bottom;
  background-size: cover;
  box-sizing: border-box;
  filter: ${(props) => (props.$actiFilter ? "brightness(40%)" : "none")};
  transition: filter 0.5s ease-out;

  @media screen and (max-width: ${tabletL}) {
    filter: ${(props) => (props.$actiFilter ? "brightness(70%)" : "none")};
    width: auto;
    &.tercero {
      height: 100vh;
    }
    @media screen and (max-width: ${fonoS}) {
    &.tercero {
      height: 50vh;
    }
  }
  }
`;
