import React from "react";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import ImgIngress from "./Components/ImgIngress";
import NewComers from "./Components/NewComers";
import ImgMenu from "./Components/ImgMenu";
import Oferta from "./Components/Oferta/Oferta";
import About from "./Components/About";
import Contact from "./Components/Contact";
import JoinUp from "./Components/JoinUp/Index";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      
      <Header/>      
      <GlobalStyle />
      <ImgIngress />
      <NewComers />
      <ImgMenu /> {/*Debo cambiar la transicion en este componente */}
      <Oferta />
      <About />
      <Contact />
      <JoinUp />
      <Footer />
    </>
  );
}

export default App;
