import React from "react";
import MobileNavBar from "../components/Home/mobile-navbar/MobileNavBar";
import Crew from "./Crew.module.css";
import HeroCrew from "./hero-crew/HeroCrew";

const page = () => {
  return (
    <>
      <main className={Crew.main}>
        <MobileNavBar />
        <HeroCrew />
      </main>
    </>
  );
};

export default page;
