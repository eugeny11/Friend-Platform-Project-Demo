import React from "react";
import { useSelector } from "react-redux";

function SignUp() {
  const component = useSelector((state) => state.registration.component);
  return <>{component}</>;
}

export default SignUp;
