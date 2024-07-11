import React from "react";
import Navbar from "./MobileNavbar.module.css";
import Logo from "../../../assets/shared/logo.svg";
import Image from "next/image";

const MobileNavBar = () => {
  return (
    <>
      <nav className={Navbar.navigation}>
        <div>
          <Image alt="logo" src={Logo} />
        </div>
        <div className={Navbar.burgermenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default MobileNavBar;
