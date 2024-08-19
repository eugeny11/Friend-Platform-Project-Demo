import React from "react";
import { Link } from "react-router-dom";
import Message from "../img/icon_message.svg";
import Bell from "../img/icon_bell.svg";

function MainNavbarIcons() {
  return (
    <div className="main-navbar__icons">
      <Link to="/chat" className="button main-navbar__icon-btn">
        <img src={Message} alt="message" />
      </Link>

      <button className="button main-navbar__icon-btn">
        <img src={Bell} alt="bell" />
      </button>
    </div>
  );
}

export default MainNavbarIcons;
