import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataUrl from "./../../data/data.json";
import Slides from "./Slides";

const SlidingCarousel = () => {
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

  let crew = dataUrl.crew;

  return (
    <Slider {...settings}>
      {crew.map((crew, index) => (
        <Slides crew={crew} key={index} />
      ))}
    </Slider>
  );
};

export default SlidingCarousel;
