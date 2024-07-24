import React from "react";
import Slide from "./Slides.module.css";
import Image from "next/image";
import Douglas from "../../assets/crew/image-douglas-hurley.png";

const Slides = () => {
  return (
    <div className={Slide.container}>
      <p className={Slide.job}>Commander</p>
      <h1 className={Slide.fullname}>Douglas Hurley</h1>
      <p className={Slide.description}>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
      <div className={Slide.slideIndicator}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={Slide.pictureContainer}>
        <Image
          alt="crew"
          src={Douglas}
          objectFit="contain"
          fill
          className="w-full h-full top-0 left-0 !relative"
        />
      </div>
    </div>
  );
};

export default Slides;
