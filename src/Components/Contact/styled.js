import styled from "styled-components";
import { colorBlack } from "../UI/variables";

export const StyledContact = styled.section`
  height: 80vh;
  width: auto;
  background-color: ${colorBlack};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:100px;
`;

export const FormContact = styled.form`
  height: 55vh;
  width: 30vw;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
`;
export const BoxTitleContact = styled.article`
  // cambiar a article y especificar los parametros necesarios
  height: 55vh;
  width: 30vw;
  margin-left: 150px; 
  
`;
