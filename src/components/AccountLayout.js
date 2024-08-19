import React from "react";
import { Outlet } from "react-router-dom";

import MainNavBar from "./MainNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainDroog from "./MainDroog";

function Main() {
  return (
    <>
      <div className="lk">
        <Sidebar />

        <div className="main">
          <MainNavBar />
          <div className="main__content scroll">
            <Outlet />
          </div>
        </div>
      </div>
      <MainDroog />
    </>
  );
}

export default Main;
