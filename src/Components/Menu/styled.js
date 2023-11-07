import styled from "styled-components";
import { BsController} from "react-icons/bs";
import { colorWhite, fontFira, fontMavenPro } from "../UI/variables";

export const StyledNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  width: 600px;
  font-family: ${fontFira};
  font-size: 18px;
  font-weight: 400;
  box-sizing: border-box;
  margin-right: 64px;
  color: #888383;
  p,
  li:hover {
    color: ${colorWhite};
    cursor: pointer;
  }
  .basket {
    font-size: 25px;
  }

  p {
    color: ${colorWhite};
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
  margin-top: 34px;
  right: 430px;
  gap: 10px;
  box-sizing: border-box;
  padding: 4px 10px;
  font-family: ${fontFira};
  letter-spacing: 0.2px;
  font-size: 18px;
`;
