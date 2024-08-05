import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlidesTechnology from "./SlidesTechnology";
// import dataJson from "./../../data/data.json";

const SlidingCarouselTechnology = () => {
  //   const settings = {
  //     dots: true,
  //     fade: true,
  //     infinite: true,
  //     speed: 800,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     waitForAnimate: false,
  //     arrows: true,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //   };

  return (
    <Slider {...settings}>
      {crew.map((crew, index) => (
        <SlidesTechnology crew={crew} key={index} />
      ))}
    </Slider>
  );
};

export default SlidingCarouselTechnology;
