"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataFile from "../../data/data.json";
import SlidesTechnology from "./SlidesTechnology";
import SlidingCarousel from "./SlidingCarousel.module.css";

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
    autoplaySpeed: 3500,
  };
  const technology = dataFile.technology;

  return (
    <>
      <Slider {...settings}>
        {technology.map((technology, index) => (
          <SlidesTechnology technology={technology} key={index} />
        ))}
      </Slider>

      {/* <div className={SlidingCarousel.technology}>
        <p>The Terminology...</p>
        <h2>{technology[0].name}</h2>
        {console.log(technology[0].name)}
        <p></p>
      </div> */}
    </>
  );
};

export default SlidingCarouselTechnology;
