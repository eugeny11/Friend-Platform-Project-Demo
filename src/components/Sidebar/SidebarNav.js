import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout";

function SidebarNav() {
  return (
    <div className="sidebar__navbar">
      <Link to={"/devmode"} className="button sidebar__nav-btn">
        <img src="../img/icon_setup.svg" alt="setting" />
      </Link>

      <p>Профиль</p>

      <Logout />
    </div>
  );
}

export default SidebarNav;
