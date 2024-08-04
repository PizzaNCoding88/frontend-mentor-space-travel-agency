import React from "react";
import Technology from "./Technology.module.css";
import MobileNavBar from "../components/Home/mobile-navbar/MobileNavBar";
import HeroTechnology from "./hero-technology/HeroTechnology";

const page = () => {
  return (
    <>
      <main className={Technology.main}>
        <MobileNavBar />
        <HeroTechnology />
      </main>
    </>
  );
};

export default page;
