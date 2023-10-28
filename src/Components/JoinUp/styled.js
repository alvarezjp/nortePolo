import styled from "styled-components";
import { colorBlack, colorWhite, fontFira } from "../UI/variables";
import { SubTitle, Title } from "../UI";


export const StyledJoinUp = styled.section`
  height: 64vh;
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const StyledBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding-top: 60px;
`;
export const StyledTitle = styled(Title)`
  font-size: 60px;
  color: ${colorWhite};
  margin-bottom: 10px;
`;
export const StyledSubTitle = styled(SubTitle)`
font-size: 24px;
color: ${colorWhite};
margin-bottom: 10px;
`

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
border:2px solid transparent;
box-shadow: 0 0 30px rgba(10, 10, 10, 0.9);
box-sizing: border-box;
padding: 10px 10px 40px 10px;
`

export const Email = styled.input`
width: 650px;
height: 40px;
background-color: transparent;
font-size: 16px;
font-family: ${fontFira};
color:${colorWhite};
border: 1px solid white;
box-sizing: border-box;
padding-left: 24px;
outline: none;
&:hover {
    border: 3px solid white;
  }
`
export const Button = styled.button`
width: 650px;
height: 40px;
background-color: transparent;
font-size: 22px;
font-weight: 500;
font-family: ${fontFira};
color:${colorWhite};
border: 1px solid white;
box-sizing: border-box;
`