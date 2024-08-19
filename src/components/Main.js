import React from "react";
import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavbar";
import Sidebar from "./Sidebar";
import MainDroog from "./MainDroog";

function Main() {
  return (
    <>
      <MainDroog />

      <div className="lk">
        <Sidebar />

        <div className="main">
          <MainNavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Main;
