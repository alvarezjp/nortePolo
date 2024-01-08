import styled from "styled-components";
import { SubTitle, Title } from "../UI";
import { tabletL, tabletS } from "../UI/variables";

export const StyledOferta = styled.section`
  height: 100vh;
  background-color: black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 400px 0px;
`;

export const StyledTiltle = styled(Title)`
  font-size: 60px;
  line-height: 1.5;
  letter-spacing: 0px;
  /* letter-spacing: 0px */
`;
export const StyledSubTitle = styled(SubTitle)`
  font-size: 24px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;
export const StyledImgProduct = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  @media screen and (max-width: ${tabletS}) {
    display: absolute;
    width: auto;
  }
`;

export const TitleProduct = styled(Title)`
  font-size: 32px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0px;
  box-sizing: border-box;
  @media screen and (max-width: ${tabletL}) {
    font-size: 26px;
  }
  @media screen and (max-width: ${tabletS}) {
    font-size: 20px;
  }
`;

export const SubTitleProduct = styled(SubTitle)`
  font-size: 17px;
  letter-spacing: 0px;
`;

export const ImgProduct = styled.div`
  width: 100%;
  height: 340px;
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledProduct = styled.article`
  /* width: 75vw; */
  display: flex;
  @media screen and (max-width: ${tabletS}) {
  
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 0px;
    :nth-child(1){
      width: 10vw;
    }
    :nth-child(2){
      width: 10vw;
    }
    :nth-child(3){
      width: 10vw;
    }
  }
`;
export const BoxDetails = styled.article`
  height: 134px;
  width: 259px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MiniBox = styled(BoxDetails)`
  background-color: rgba(255, 255, 255, 0.6);
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms ease, transform 300ms ease;
  }
  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease, transform 800ms ease;
  }
`;

export const ViewDetails = styled(Title)`
  font-size: 31px;
  letter-spacing: 0px;
`;

