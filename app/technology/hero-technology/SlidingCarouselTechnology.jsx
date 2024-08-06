"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataFile from "../../data/data.json";
import SlidesTechnology from "./SlidesTechnology";

const SlidingCarouselTechnology = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const technology = dataFile.technology;

  return (
    <Slider {...settings}>
      {technology.map((technology, index) => (
        <SlidesTechnology technology={technology} key={index} />
      ))}
    </Slider>
  );
};

export default SlidingCarouselTechnology;
