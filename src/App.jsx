import React from "react";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import ImgIngress from "./Components/ImgIngress";
import NewComers from "./Components/NewComers";

function App() {
  return (
    <>
      <GlobalStyle />
        <ImgIngress />
        <NewComers/>
    </>
  );
}

export default App;
