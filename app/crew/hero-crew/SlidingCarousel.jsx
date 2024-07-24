import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  async function fetchData() {
    const temp = await fetch("/public/data/data.json");
    // const temp = await fetch(`/../data/data.json`);
    const final = await temp.json();
    console.log(final);
    // fetch("/../data/data.json")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }

  const getData = async () => {
    try {
      const temp = await (await fetch(dataUrl)).json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      <Slider {...settings}>
        <Slides />
        {/* <div>
          <Image
            alt="crew pic"
            src="/assets/crew/image-douglas-hurley.png"
            objectFit="fill"
            fill
            className="w-full h-full top-0 left-0 !relative"
          />
        </div>
        <div>
          <Image
            alt="crew pic"
            src="/assets/crew/image-anousheh-ansari.png"
            objectFit="fill"
            fill
            className="w-full h-full top-0 left-0 !relative"
          />
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
      {/* <button onClick={fetchData}>Get Data</button> */}
    </div>
  );
};

export default SlidingCarousel;
