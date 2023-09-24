import React from "react";
import styled from "styled-components";
import { colorLogo1,colorLogo2 } from "../UI/variables";

const StyledLogo = styled.h1`
font-family: 'Fira Sans Extra Condensed', sans-serif;
font-size: 37px;
color: ${colorLogo2};
border: 5px solid white;
padding: 8px;
box-sizing: border-box;
margin-left:64px;
span{
    color:${colorLogo1};
}
`

const Logo = () =>{
    return (
        <StyledLogo>
        <span>EL</span>
         POLONORTE
        </StyledLogo>
        
    )
}

export default Logo;