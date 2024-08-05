import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./HeroTechnology.module.css";
import SlidingCarouselTechnology from "./SlidingCarouselTechnology";

const HeroTechnology = () => {
  return (
    <div>
      <div className={Hero.header}>
        <p>03</p>
        <h1>space launch 101</h1>
      </div>
      <SlidingCarouselTechnology />
    </div>
  );
};

export default HeroTechnology;
