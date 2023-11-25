import styled from "styled-components";
import { BsController } from "react-icons/bs";
import {
  colorWhite,
  fonoL,
  fonoS,
  fontFira,
  fontMavenPro,
  tabletL,
  tabletS,
} from "../UI/variables";

export const StyledNav = styled.article`
  display: flex;
  margin-right: 64px;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 77px;
  .basket {
    color: #888383;
    font-size: 24px;
    &:hover {
      color: ${colorWhite};
      cursor: pointer;
    }
  }
  .equis {
    color: #888383;
    font-size: 32px;
    position: absolute;
    left: 14px;
    top: 32px;
    &:hover {
      color: ${colorWhite};
      cursor: pointer;
    }
  }
  .cicleList {
    display: none;
    color: #888383;
    font-size: 24px;
    &:hover {
      color: ${colorWhite};
      cursor: pointer;
    }
  }
  @media screen and (max-width: ${tabletL}) {
    gap: 50px;
  }
  @media screen and (max-width: ${tabletS}) {
    gap: 30px;
    .basket {
      font-size: 22px;
    }
  }
  @media screen and (max-width: ${fonoL}) {
    .basket {
      position: absolute;
      right: 36px;
      top: 35px;
      font-size: 26px;
    }
    .cicleList {
      display: block;
      position: absolute;
      left: 36px;
      top: 35px;
      font-size: 26px;
    }
  }

  @media screen and (max-width: ${fonoS}) {
    .basket {
      right: 16px;
      font-size: 26px;
    }
    .cicleList {
      left: 16px;
      font-size: 26px;
    }
  }
`;

export const StyledItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 530px;
  font-family: ${fontFira};
  font-size: 18px;
  font-weight: 400;
  box-sizing: border-box;
  color: #888383;
  p,
  li:hover {
    color: ${colorWhite};
    cursor: pointer;
  }
  p {
    color: ${colorWhite};
  }
  @media screen and (max-width: ${tabletL}) {
    width: 450px;
    p,
    li {
      font-size: 17px;
    }
  }
  @media screen and (max-width: ${tabletS}) {
    width: 380px;
  }
  @media screen and (max-width: ${fonoL}) {
    display: none;
  }
`;

export const StyledDropDown = styled.ul`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  margin-top: 38px;
  right: 470px;
  gap: 10px;
  box-sizing: border-box;
  padding: 4px 10px;
  font-family: ${fontFira};
  letter-spacing: 0.2px;
  font-size: 18px;
  @media screen and (max-width: ${tabletL}) {
    right: 400px;
  }
  @media screen and (max-width: ${tabletS}) {
    right: 320px;
  }
`;

export const StyledBurgerDown = styled(StyledDropDown)`
  @media screen and (max-width: ${tabletL}) {
    background-color: rgba(0, 0, 0, 1);
    width: 50vw;
    height: 100vh;
    left: 0px;
    padding-top: 10vh;
    margin-top: 50px;
    font-size: 16px;
    gap: 16px;
    /* border: 1px solid green; */
    > * {
      color: #888383;
      font-size: 24px;
      border-bottom: 1px solid ${colorWhite};
      padding-bottom: 8px;
    }
    .arrow {
      position: absolute;
      right: 50px;
      /* top: 90px; */
    }
    li:hover {
      cursor: pointer;
    }
    // como poner la flecha abajo para que se vea mejor
  }
`;

export const StyledCompraRes = styled.nav`
  margin-right: 30px;
  border: 3px solid red;
  height: auto;
  border: 1px solid green;
  /* @media screen and (max-width: 1050px) and (min-width: 1051px) {
    border: 1px solid yellow;
    display: grid;
  } */
`;

// debemos ver la distancia que hay entre los elementos del navbar
export const StyledBtnCompra = styled.li`
 
`;
