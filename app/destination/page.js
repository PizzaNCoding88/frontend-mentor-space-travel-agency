import React from "react";
import MobileNavBar from "../components/Home/mobile-navbar/MobileNavBar";
import HeroDestination from "./hero-destination/HeroDestination";

const page = () => {
  return (
    <>
      <main>
        <MobileNavBar />
        <HeroDestination />
      </main>
    </>
  );
};

export default page;
