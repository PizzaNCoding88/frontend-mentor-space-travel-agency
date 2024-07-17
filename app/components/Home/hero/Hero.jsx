import React from "react";
import Hero from "./Hero.module.css";

const hero = () => {
  return (
    <>
      <div className={Hero.hero}>
        <div>
          <p className={Hero.intro}>So, you want to travel to</p>
          <h1 className={Hero.h1}>Space</h1>
          <p className={Hero.subintro}>
            Let’s face it... if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={Hero.cta}>
          <a href="/destination">
            <button className={Hero.ctaBtn}>Explore</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default hero;
