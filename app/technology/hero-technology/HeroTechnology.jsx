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
      {/* <div className={Hero.slideCounter}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div> */}
    </div>
  );
};

export default HeroTechnology;
