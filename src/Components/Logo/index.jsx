import React from "react";
import styled from "styled-components";
import { colorLogo1,colorLogo2,fonoL,fontFira, tabletL, tabletS } from "../UI/variables";

const StyledLogo = styled.h1`
font-family: ${fontFira};
font-size: 37px;
color: ${colorLogo2};
border: 5px solid white;
padding: 8px;
box-sizing: border-box;
margin-left:64px;
span{
    color:${colorLogo1};
}
@media screen and (max-width: ${tabletS}) {
    font-size: 25px;
  }
  @media screen and (max-width: ${fonoL}) {
    font-size: 30px;
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