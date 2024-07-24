"use client";
import React from "react";
import Hero from "./HeroCrew.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Douglas from "../../../public/assets/crew/image-douglas-hurley.png";
import SlidingCarousel from "./SlidingCarousel";
// import Douglas from "../../assets/crew/image-douglas-hurley.png";

const HeroCrew = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: true,
  };

  return (
    <>
      <div className="slider-container">
        <div className={Hero.header}>
          <p>02</p>
          <h1>meet your crew</h1>
        </div>
        <SlidingCarousel />
      </div>
    </>
  );
};

export default HeroCrew;
