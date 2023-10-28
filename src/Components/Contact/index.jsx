import React from "react";
import styled from "styled-components";
import { StyledContact, FormContact, BoxTitleContact } from "./styled";
import { SubTitle, TextParagraph, Title } from "../UI/index";
import { fontFira, fontMavenPro } from "../UI/variables";

const TitleContact = styled(Title)`
  font-size: 60px;
  margin-bottom: 10px;

`;
const TextContact = styled(TextParagraph)`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Styleinput = styled.input`
  font-family: ${fontMavenPro};
  font-size: 22px;
  font-weight: 600;
  padding: 20px;
  width: 30vw;
  height: 45px;
  box-sizing: border-box;
  outline: none;
  &:hover {
    border: 4px solid gray;
  }
`;

const StyleTextArea = styled.textarea`
  font-family: ${fontMavenPro};
  font-size: 22px;
  font-weight: 600;
  padding-left: 20px;
  padding-top: 8px;
  width: 30vw;
  height: auto;
  border: 1px solid green;
  box-sizing: border-box;
  outline: none;
  &:hover {
    border: 4px solid gray;
  }
`;

const StyledButton = styled.button`
  width: 5em;
  height: 2em;
  font-family: ${fontMavenPro};
  font-size: 22px;
  font-weight: 600;
`;

export const Campo = (props) => {
  return (
    <>
      <Styleinput type={props.tipo} placeholder={props.etiqueta} required />
    </>
  );
};

const Form = () => {
  return (
    <>
      <Campo etiqueta="Nombre" tipo="text" />
      <Campo etiqueta="Email" tipo="email" />
      <Campo etiqueta="Telefono" />
      <StyleTextArea rows="5" cols="2" placeholder="Escribe tu mensaje" />
      <StyledButton>Enviar</StyledButton>
    </>
  );
};

const Contact = () => {
  return (
    <StyledContact>
      <FormContact>
        <Form />
      </FormContact>
      <BoxTitleContact>
        <TitleContact>CONTACTO</TitleContact>
        <TextContact style={{lineHeight:1.1 }}>
          Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí
          puedes contar tu historia y permitir a tus usuarios saber más sobre
          ti.
        </TextContact>
        <div>
          <TextContact style={{marginBottom:"0px"}}>info@misitio.com</TextContact>
          <TextContact>Tel: 914-123-456</TextContact>
        </div>
      </BoxTitleContact>
    </StyledContact>
  );
};

export default Contact;
