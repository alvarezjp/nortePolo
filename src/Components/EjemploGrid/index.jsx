import React from "react";
import styled from "styled-components";
import { tabletL } from "../UI/variables";

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 70vh;
  grid-template-columns: auto auto ;
  gap:0px;
  box-sizing: border-box;
  @media screen and (max-width: ${tabletL}) {
    display: grid;
  }
`;
const StyledDiv = styled.article`

`;

const GridEjemplo = () => {
  return (
    <Contain>
      <StyledDiv
        style={{ gridColumn: " 1", gridRow: "1", border: "3px solid red" }}>
        UNO
      </StyledDiv>
      <StyledDiv style={{ gridColumn: " 1", gridRow: "2", border: "3px solid green" }}>DOS</StyledDiv>
      <StyledDiv style={{ gridColumn: " 2", gridRow: "1/ span 3 ", border: "3px solid blue" }}>
        TRES
      </StyledDiv>
    </Contain>
  );
};

export default GridEjemplo;
