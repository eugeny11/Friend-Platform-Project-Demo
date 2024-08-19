import React from "react";
import { Routes, Route } from "react-router-dom";

import RegistrationLayout from "../components/RegistrationLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Registration() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationLayout />}>
        <Route index element={<SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default Registration;
