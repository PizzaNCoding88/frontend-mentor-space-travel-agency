import React from "react";
import MobileNavBar from "../components/Home/mobile-navbar/MobileNavBar";
import Crew from "./Crew.module.css";

const page = () => {
  return (
    <>
      <main className={Crew.main}>
        <MobileNavBar />
      </main>
    </>
  );
};

export default page;
