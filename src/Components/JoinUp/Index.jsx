import React from "react";

import { StyledJoinUp,StyledBox,StyledTitle,StyledSubTitle,StyledForm,Email,Button } from "./styled";

const JoinUp = () => {
  return (
    <StyledJoinUp>
      <StyledBox>
        <StyledTitle>ÚNETE A NUESTRA BASE DE DATOS</StyledTitle>
        <StyledSubTitle>Y NUNCA TE QUEDES FUERA</StyledSubTitle>
        <StyledForm>
        <Email placeholder="ingresa tu email aqui*" />
        <Button>Unirse</Button>
        </StyledForm>
      </StyledBox>
    </StyledJoinUp>
  );
};

export default JoinUp;
