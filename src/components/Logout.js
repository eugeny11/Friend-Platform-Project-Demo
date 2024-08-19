import React from "react";
import { useDispatch } from "react-redux";
import { setToken, setExpire } from "../redux/slices/signInSlice";
import {
  setEmail,
  setPhone,
  setPassword,
  setPassConformation,
} from "../redux/slices/registrationSlice";

function Logout() {
  let dispatch = useDispatch();

  function logout() {
    dispatch(setEmail(""));
    dispatch(setPhone(0));
    dispatch(setPassword(""));
    dispatch(setPassConformation(""));

    dispatch(setToken(""));
    dispatch(setExpire(""));
    localStorage.setItem("token", "");
    localStorage.setItem("email", "");

    window.history.pushState(null, "", "/");
    window.location.reload();
  }

  return (
    <button className="button sidebar__nav-btn" onClick={logout}>
      <img src="../img/icon_logout.svg" alt="logout" />
    </button>
  );
}

export default Logout;
