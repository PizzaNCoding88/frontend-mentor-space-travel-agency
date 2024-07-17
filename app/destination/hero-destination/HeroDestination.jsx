"use client";
import React from "react";
import HeroDestination from "./HeroDesination.module.css";
import Image from "next/image";
import Moon from "../../../public/assets/destination/image-moon.png";
// import Moon from "../../../assets/destination/image-moon.webp";
import data from "../../data/data.json";
import { useState } from "react";

const hero = () => {
  const [dataDisplay, setDataDisplay] = useState({ data });
  const [imgSrc, setImgSrc] = useState({ Moon });
  let dataJson = data;
  console.log(data.destinations[0]);
  // let imgSrc = data.destinations[0].images.png;

  function setDataOnButton(num) {
    setDataDisplay(dataJson.destinations[num]);
    setImgSrc(dataJson.destinations[num].images.png);
    console.log(dataDisplay);
    // console.log(dataDisplay.images.png);
  }
  return (
    <>
      <div className={HeroDestination.hero}>
        <div className={HeroDestination.destinationPickerContainer}>
          <p className={HeroDestination.number}>01</p>
          <p>Pick your destination</p>
        </div>

        <div className={HeroDestination.pictureContainer}>
          {/* <Image alt="destination picture" src={Moon} /> */}
          <Image
            alt="destination picture"
            src={imgSrc ? imgSrc : Moon}
            width={100}
            height={100}
          />
        </div>

        <div className={HeroDestination.destinationSelectorContainer}>
          <button
            onClick={() => {
              setDataOnButton(0);
            }}
          >
            Moon
          </button>
          <button
            onClick={() => {
              setDataOnButton(1);
            }}
          >
            Mars
          </button>
          <button
            onClick={() => {
              setDataOnButton(2);
            }}
          >
            Europa
          </button>
          <button
            onClick={() => {
              setDataOnButton(3);
            }}
          >
            Titan
          </button>
        </div>
        <div className={HeroDestination.planetSelected}>
          {dataDisplay.name ? dataDisplay.name : "Moon"}
        </div>
        <div className={HeroDestination.plantedExplanation}>
          {dataDisplay.description
            ? dataDisplay.description
            : "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."}
        </div>
        <div className={HeroDestination.divider}></div>
        <div className={HeroDestination.bottomPart}>
          <div className={HeroDestination.distance}>
            <p>avg. distance</p>
            <h2>
              {dataDisplay.distance ? dataDisplay.distance : "384,400 KM"}
            </h2>
          </div>
          <div className={HeroDestination.travelTime}>
            <p>Est. travel time</p>
            <h2>{dataDisplay.travel ? dataDisplay.travel : "3 days"}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
