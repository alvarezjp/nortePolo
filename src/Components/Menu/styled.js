import styled from "styled-components";
import { BsController } from "react-icons/bs";
import { colorWhite, fontFira, fontMavenPro, responsive1 } from "../UI/variables";


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
  .cicleList {
    display: none;
    color: #888383;
    font-size: 24px;
  }
  @media screen and (max-width: ${responsive1}){
    gap: 50px;
  }
  /* @media screen and (max-width: ${responsive1}) {
    .basket {
      position: absolute;
      right: 36px;
      top: 35px;
      font-size: 30px;
      
    }
    .cicleList {
      display: block;
      position: absolute;
      left: 36px;
      top: 35px;
      font-size: 30px;
      
    }
  } */
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
  @media screen and (max-width: ${responsive1}) {
    width: 450px;
  }
`;

export const StyledBtnCompra = styled.li`
  /* color: red; */
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
  @media screen and (max-width:${responsive1} ){
    right: 400px;
  }
  
`;

export const StyledBurgerDown = styled(StyledDropDown)`
@media screen and (max-width: ${responsive1}) {
    background-color: rgba(0, 0, 0, 1);
    width: 30vw;
    height: 100vh;
    left: 0px;
    padding-top: 10vh;
    margin-top: 50px;
    font-size: 30px;
    gap: 10px;
    border: 1px solid green;
    >*{
      border-bottom: 1px dashed white;
      
    }
  
  }
`;

export const StyledNavRes = styled.nav`
  margin-right: 30px;
  border: 1px solid red;
  height: auto;
  /* @media screen and (max-width: 1050px) and (min-width: 1051px) {
    border: 1px solid yellow;
    display: grid;
  } */
`;

// debemos ver la distancia que hay entre los elementos del navbar