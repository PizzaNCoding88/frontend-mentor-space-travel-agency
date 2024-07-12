"use client";

import React from "react";
import Navbar from "./MobileNavbar.module.css";
import Logo from "../../../assets/shared/logo.svg";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const MobileNavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  function changeSidebarStatus() {
    setSidebar(!sidebar);
  }
  return (
    <>
      <nav className={Navbar.navigation}>
        <div>
          <Image alt="logo" src={Logo} />
        </div>
        <button
          onClick={() => {
            setSidebar(!sidebar);
          }}
          className={Navbar.burgermenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {sidebar && <Sidebar status={changeSidebarStatus} />}
      </nav>
    </>
  );
};

export default MobileNavBar;
