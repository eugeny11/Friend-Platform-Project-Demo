import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import MainLogo from "./MainLogo";
import MainNavbarIcons from "./MainNavbarIcons";

function MainNavbar() {
  return (
    <div className="main__navbar">
      <Breadcrumbs />
      <MainLogo />
      <MainNavbarIcons />
    </div>
  );
}

export default MainNavbar;
