import styled from "styled-components";
import { fontFira, colorWhite, fontPlay } from "./variables";

export const Title = styled.h2`
  font-family: ${fontFira};
  color: ${colorWhite};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 90px;
  letter-spacing: 4px;
`;

export const SubTitle = styled.h3`
  font-family: ${fontPlay};
  color: ${colorWhite};
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 24px;
  line-height: normal;
`;

export const MenuImg = styled.img`
  width: 33vw;
  height: 50vh;
  background-position: center bottom;
  background-size: cover;
  box-sizing: border-box;
  /* &:hover {
    filter: brightness(40%);
   
  }

  ::after {
  content: "Texto en Hover"; 
 
} */


`;
