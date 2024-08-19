import React from "react";
import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { setEmail, setPhone } from "../redux/slices/registrationSlice";

function RegByEmail() {
  const emailInput = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPhone(0));
  });

  return (
    <input
      className="input input_Registration"
      ref={emailInput}
      onChange={() => dispatch(setEmail(emailInput.current.value))}
      placeholder="Введите ваш электронный адрес"
    />
  );
}

export default RegByEmail;
