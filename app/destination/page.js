import React from "react";
import MobileNavBar from "../components/Home/mobile-navbar/MobileNavBar";
import HeroDestination from "./hero-destination/HeroDestination";
import Destination from "./Destination.module.css";

const page = () => {
  return (
    <>
      <main className={Destination.main}>
        <MobileNavBar />
        <HeroDestination />
      </main>
    </>
  );
};

export default page;
