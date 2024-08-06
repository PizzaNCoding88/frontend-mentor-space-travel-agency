import Image from "next/image";
import React from "react";
import Slides from "./Slides.module.css";

const SlidesTechnology = (props) => {
  const { technology, index } = props;
  console.log(technology);
  return (
    <div className={Slides.container}>
      <div className={Slides.imageContainer}>
        <Image
          alt="technology pic"
          src={technology.images.portrait}
          width={350}
          height={350}
        />
      </div>
      <div className={Slides.slideIndicator}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={Slides.technology}>
        <p></p>
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
};

export default SlidesTechnology;
