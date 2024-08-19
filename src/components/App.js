import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateToken } from "../redux/slices/signInSlice";

import AccountRouter from "../router/AccountRouter";
import RegistrationRouter from "../router/RegistrationRouter";

function App() {
  let token = useSelector((state) => state.signIn.token);
  let dispatch = useDispatch();
  let showComponent = {};

  if (token === "") {
    showComponent = <RegistrationRouter />;
  } else {
    dispatch(updateToken(token));
    showComponent = <AccountRouter />;
  }

  return <div>{showComponent}</div>;
}

export default App;
