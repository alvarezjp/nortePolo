import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { Product } from "../Oferta/Oferta";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="esto">
      <Product
        $backgroundImage={"/pagPrincipal/img-6.webp"}
        titulo={"MOCHILA DE LONA"}
        subTitulo={"$ 1000"}
      />
      <Product
        $backgroundImage={"/pagPrincipal/img-7.webp"}
        titulo={"MOCHILA COMPLETA VIAJES"}
        subTitulo={"$ 1000"}
      />
      <Product
        $backgroundImage={"/pagPrincipal/img-8.webp"}
        titulo={"MOCHILA CAMUFLADAS"}
        subTitulo={"$ 1000"}
      />
    </Slider>
  );
}
