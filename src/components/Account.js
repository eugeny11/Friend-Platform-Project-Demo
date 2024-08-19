import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserData } from "../redux/slices/registrationSlice";

import AccountClient from "../components/AccountClient";
import AccountPsy from "./AccountPsy";
import AccountMod from "./AccountMod";

function Account() {
  let dispatch = useDispatch();

  let role = useSelector((state) => state.registration.role);
  let email = useSelector((state) => state.registration.email);
  let token = useSelector((state) => state.signIn.token);
  let quantity = 50;

  // Загрузить данные пользователя

  let payload = {
    email: email,
    role: role,
    token: token,
    quantity: quantity,
  };

  useEffect(() => {
    dispatch(getUserData(payload));
  });

  return (
    <>
      <div className="account-page">
        {(role === "" || role === "client") && <AccountClient />}
        {role === "psy" && <AccountPsy />}
        {role === "mod" && <AccountMod />}
      </div>
    </>
  );
}

export default Account;
