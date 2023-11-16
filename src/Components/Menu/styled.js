import styled from "styled-components";
import { BsController } from "react-icons/bs";
import { colorWhite, fontFira, fontMavenPro } from "../UI/variables";

export const StyledNav = styled.article`
display: flex;
margin-right: 64px;
box-sizing: border-box;
justify-content: space-between;
gap: 76px;
/* border: 1px solid blue; */

`

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
  /* margin-right: 64px; */
  color: #888383;
  /* border: 1px solid green; */
  p,
  li:hover {
    color: ${colorWhite};
    cursor: pointer;
  }
  p {
    color: ${colorWhite};
  }
  /* @media screen and (max-width: 1050px) {
    border: 1px solid green;
    display: none;
  } */
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
  margin-top: 34px;
  right: 430px;
  gap: 10px;
  box-sizing: border-box;
  padding: 4px 10px;
  font-family: ${fontFira};
  letter-spacing: 0.2px;
  font-size: 18px;
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
