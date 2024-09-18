import Image from "next/image";
import React from "react";
import Slides from "./Slides.module.css";

const SlidesTechnology = (props) => {
  const { technology, index } = props;
  return (
    <div className={Slides.container}>
      <div className={Slides.imageContainer}>
        <Image
          alt="technology pic"
          src={technology.images.portrait}
          objectFit="cover"
          // width={200}
          // height={200}
          fill="true"
        />
      </div>
      <div className={Slides.slideIndicator}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className={Slides.name}>
        <h2>{technology.name}</h2>
        <p></p>
      </div>
    </div>
  );
};

export default SlidesTechnology;
