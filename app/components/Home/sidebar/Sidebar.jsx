import React from "react";
import SideBar from "./Sidebar.module.css";

const Sidebar = (props) => {
  const { status } = props;
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
          <li>
            <a href="/">
              <p className={SideBar.count}>00</p>
              <p className={SideBar.name}>Home</p>
            </a>
          </li>
          <li>
            <a href="/destination">
              <p className={SideBar.count}>01</p>
              <p className={SideBar.name}>Destination</p>
            </a>
          </li>
          <li>
            <a href="">
              <p className={SideBar.count}>02</p>
              <p className={SideBar.name}>Crew</p>
            </a>
          </li>
          <li>
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
