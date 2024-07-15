import React from "react";
import SideBar from "./Sidebar.module.css";
import { usePathname } from "next/navigation";
import "./sidebar.css";

const Sidebar = (props) => {
  const { status } = props;
  const pathname = usePathname();
  let path = 0;
  if (pathname == "/") {
    path = 1;
  } else if (pathname == "/destination") {
    path = 2;
  } else if (pathname == "/crew") {
    path = 3;
  } else if (pathname == "/technology") {
    path = 4;
  }
  return (
    <>
      <div className={SideBar.sidebar}>
        <div className={SideBar.closeBtnContainer}>
          <button onClick={() => status()} className={SideBar.closeBtn}>
            <span className={SideBar.spanTop}></span>
            <span className={SideBar.spanBottom}></span>
          </button>
        </div>
        <ul>
          <li className={`${path == 1 ? "pageIndicator" : ""}`}>
            <a className={SideBar.links} href="/">
              <p className={SideBar.count}>00</p>
              <p className={SideBar.name}>Home</p>
            </a>
          </li>
          <li className={`${path == 2 ? "pageIndicator" : ""}`}>
            <a href="/destination">
              <p className={SideBar.count}>01</p>
              <p className={SideBar.name}>Destination</p>
            </a>
          </li>
          <li className={`${path == 3 ? "pageIndicator" : ""}`}>
            <a href="">
              <p className={SideBar.count}>02</p>
              <p className={SideBar.name}>Crew</p>
            </a>
          </li>
          <li className={`${path == 4 ? "pageIndicator" : ""}`}>
            <a href="">
              <p className={SideBar.count}>03</p>
              <p className={SideBar.name}>Technlogy</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
