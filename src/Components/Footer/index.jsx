import React from "react";
import styled from "styled-components";
import { SubTitle } from "../UI";


const StyledFooter = styled.footer`
height: 8vh;
background-color: #1A1919;
display: flex;
align-items: center;
justify-content: center;
`

const StyledText = styled(SubTitle)`
font-size: 18px;
color: #a29c9c;
`

const Footer = () =>{
    return (
        <StyledFooter>
            <StyledText>Hecho por Jesus Alvarez 2023</StyledText>
        </StyledFooter>
    )
}

export default Footer;