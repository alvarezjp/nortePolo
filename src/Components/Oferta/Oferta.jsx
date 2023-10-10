import React from "react";
import styled from "styled-components";

const StyledOferta = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: black;

  h1 {
    color: white;
    font-size: 150px;
  }
`;

const Oferta = () => {
  return (
    <StyledOferta>
      <h1>Funcionando las ofertas</h1>
    </StyledOferta>
  );
};

export default Oferta;
