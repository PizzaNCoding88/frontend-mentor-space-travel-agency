"use client";
import React from "react";
import Hero from "./HeroCrew.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlidingCarousel from "./SlidingCarousel";

const HeroCrew = () => {
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
