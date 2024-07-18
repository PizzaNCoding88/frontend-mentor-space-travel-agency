"use client";
import React from "react";
import Hero from "./HeroCrew.module.css";
import Image from "next/image";
import Slider from "react-slick";
// import { baseUrl } from "/app/config.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Douglas from "../../../public/assets/crew/image-douglas-hurley.png";
// import Douglas from "../../assets/crew/image-douglas-hurley.png";

const HeroCrew = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const staffDefault = {
    title: "Commander",
    fullName: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  };

  return (
    <>
      {/* <div className={Hero.hero}> */}
      <div className="slider-container">
        <Slider {...settings}>
          <div>
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
          </div>
        </Slider>
        {/* <div>
              <img src={baseUrl + "/abstract03.jpg"} />
            </div>
            <div>
              <img src={baseUrl + "/abstract04.jpg"} />
            </div> */}
      </div>
      {/* <div className={Hero.destinationPickerContainer}>
          <p className={Hero.number}>02</p>
          <p>Meet your crew</p>
        </div>
        <div className={Hero.staffContainer}>
          <p className={Hero.staffTitle}>{staffDefault.title}</p>
          <p className={Hero.staffName}>{staffDefault.fullName}</p>
        </div>
        <p className={Hero.staffBio}>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
        <div className={Hero.staffSelector}>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className={Hero.imgContainer}>
          <Image
            alt="staff pic"
            src="/assets/crew/image-douglas-hurley.png"
            objectFit="fill"
            fill
            className="w-full h-full top-0 left-0 !relative"
          />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default HeroCrew;
// import React from "react";
// import Hero from "./HeroCrew.module.css";
// import Image from "next/image";

// const HeroCrew = () => {
//   const staffDefault = {
//     title: "Commander",
//     fullName: "Douglas Hurley",
//     bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
//   };

//   return (
//     <>
//       <div className={Hero.hero}>
//         <div className={Hero.destinationPickerContainer}>
//           <p className={Hero.number}>02</p>
//           <p>Meet your crew</p>
//         </div>
//         <div className={Hero.staffContainer}>
//           <p className={Hero.staffTitle}>Commander</p>
//           <p className={Hero.staffName}>Douglas Hurley</p>
//         </div>
//         <p className={Hero.staffBio}>
//           Douglas Gerald Hurley is an American engineer, former Marine Corps
//           pilot and former NASA astronaut. He launched into space for the third
//           time as commander of Crew Dragon Demo-2.
//         </p>
//         <div className={Hero.staffSelector}>
//           <button></button>
//           <button></button>
//           <button></button>
//           <button></button>
//         </div>
//         <div className={Hero.imgContainer}>
//           <Image
//             alt="staff pic"
//             src="/assets/crew/image-douglas-hurley.png"
//             objectFit="fill"
//             fill
//             className="w-full h-full top-0 left-0 !relative"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroCrew;
