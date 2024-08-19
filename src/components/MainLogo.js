import React from "react";
import { Link } from "react-router-dom";

function MainLogo() {
  return (
    <Link to="/">
      <div className="main__logo"></div>
    </Link>
  );
}

export default MainLogo;
