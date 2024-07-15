import React from "react";
import HeroDestination from "./HeroDesination.module.css";

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
      </div>
    </>
  );
};

export default hero;
