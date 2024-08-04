import React from "react";
import Technology from "./Technology.module.css";
import MobileNavBar from "../components/Home/mobile-navbar/MobileNavBar";

const page = () => {
  return (
    <>
      <main className={Technology.main}>
        <MobileNavBar />
      </main>
    </>
  );
};

export default page;
