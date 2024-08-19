import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs() {
  return (
    <ul className="breadcrumbs">
      <li>
        <Link to={"/"}>Главная</Link>
      </li>
      <li className="activ">Анкеты</li>
    </ul>
  );
}

export default Breadcrumbs;
