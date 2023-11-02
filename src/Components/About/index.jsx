import React from "react";
import styled from "styled-components";
import { TextParagraph, Title } from "../UI";

const StyledAbout = styled.section`
  height: 70vh;
  background-image: url("/pagPrincipal/img-fin.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const BoxAbout = styled.article`
  width: 50vw;
  height: 70vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5vw;
  box-sizing: border-box;
`;
const TitleAbout = styled(Title)`
  font-size: 60px;
  width: 220px;
  height: auto;
  box-sizing:border-box;
`;

const TextAbout = styled(TextParagraph)`
font-size: 22px ;
width: 420px;
line-height: 1.4em;
`


const About = () => {
  return (
    <StyledAbout id="about">
      <BoxAbout>
        <TitleAbout>SOBRE NOTROS</TitleAbout>
        <TextAbout>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam suscipit voluptates fugiat debitis quas numquam alias error enim beatae deserunt velit laudantium cupiditate eligendi nam porro, impedit animi. Explicabo, perspiciatis.</TextAbout>
      </BoxAbout>
    </StyledAbout>
  );
};

export default About;
