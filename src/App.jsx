import React from "react";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import ImgIngress from "./Components/ImgIngress";
import NewComers from "./Components/NewComers";
import ImgMenu from "./Components/ImgMenu";
import Oferta from "./Components/Oferta/Oferta";

function App() {
  return (
    <>
      <GlobalStyle />
        <ImgIngress />
        <NewComers/>
        <ImgMenu/>
        <Oferta/>
    </>
  );
}

export default App;
