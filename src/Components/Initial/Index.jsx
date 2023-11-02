import React from "react";
import ImgIngress from "../ImgIngress";
import NewComers from "../NewComers";
import ImgMenu from "../ImgMenu";
import Oferta from "../Oferta/Oferta";
import About from "../About";
import Contact from "../Contact";
import JoinUp from "../JoinUp/Index";


const Initial = () => {
  return (
    <>
      <ImgIngress />
      <NewComers />
      <ImgMenu /> {/*Debo cambiar la transicion en este componente */}
      <Oferta />
      <About />
      <Contact />
      <JoinUp />
    </>
  );
};


export default Initial;
