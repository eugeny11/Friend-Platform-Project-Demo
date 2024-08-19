import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <Link to={"/"}>Главная страница</Link>
    </>
  );
}

export default NotFoundPage;
