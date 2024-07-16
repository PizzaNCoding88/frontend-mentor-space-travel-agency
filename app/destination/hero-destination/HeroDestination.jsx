import React from "react";
import HeroDestination from "./HeroDesination.module.css";
import Image from "next/image";
import Moon from "../../assets/destination/image-moon.webp";

const hero = () => {
  return (
    <>
      <div className={HeroDestination.hero}>
        {/* <div>
          <p className={Hero.intro}>So, you want to travel to</p>
          <h1 className={Hero.h1}>Space</h1>
          <p className={Hero.subintro}>
            Let’s face it... if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div> */}
        <div className={HeroDestination.destinationPickerContainer}>
          <p className={HeroDestination.number}>01</p>
          <p>Pick your destination</p>
        </div>

        <div className={HeroDestination.pictureContainer}>
          <Image alt="destination picture" src={Moon} />
        </div>

        <div className={HeroDestination.destinationSelectorContainer}>
          <button>Moon</button>
          <button>Mars</button>
          <button>Europa</button>
          <button>Titan</button>
        </div>
        <div className={HeroDestination.planetSelected}>
          <h1>Moon</h1>
        </div>
        <div className={HeroDestination.plantedExplanation}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </div>
        <div className={HeroDestination.divider}></div>
        <div className={HeroDestination.distance}>
          <p>avg. distance</p>
          <h2>384,400 KM</h2>
        </div>
        <div className={HeroDestination.travelTime}></div>
      </div>
    </>
  );
};

export default hero;
