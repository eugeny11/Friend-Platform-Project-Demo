import React from "react";
import Cookie from "./Cookie";
import { Outlet } from "react-router-dom";

function RegistrationLayout() {
  return (
    <>
      <div className="Registration">
        <div className="logo">&#945; - версия</div>
        <div className="Registration_box">
          <Outlet />
        </div>
      </div>
      <Cookie />
    </>
  );
}

export default RegistrationLayout;
