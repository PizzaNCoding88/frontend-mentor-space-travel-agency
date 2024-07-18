import React from "react";
import Hero from "./HeroCrew.module.css";
import Image from "next/image";

const HeroCrew = () => {
  const staffDefault = {
    title: "Commander",
    fullName: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  };

  return (
    <>
      <div className={Hero.hero}>
        <div className={Hero.destinationPickerContainer}>
          <p className={Hero.number}>02</p>
          <p>Meet your crew</p>
        </div>
        <div className={Hero.staffContainer}>
          <p className={Hero.staffTitle}>Commander</p>
          <p className={Hero.staffName}>Douglas Hurley</p>
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
        </div>
      </div>
    </>
  );
};

export default HeroCrew;
