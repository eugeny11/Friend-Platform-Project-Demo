import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InputPassword from "./InputPassword";
import InputWithLabel from "./InputWithLabel";
import {
  setPassword,
  setEmail,
  setComponent,
} from "../redux/slices/registrationSlice";
import { getSignInFetch } from "../redux/slices/signInSlice";
import { Link } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.registration.email);
  // const phone = useSelector((state) => state.registration.phone);
  const password = useSelector((state) => state.registration.password);

  function sendRequest() {
    let payload = {
      // phone: phone,
      email: email,
      password: password,
    };

    // if (email !== "") delete payload.phone;
    // if (phone !== 0) delete payload.email;

    dispatch(setComponent(<SignIn />));
    dispatch(getSignInFetch(payload));

    window.history.pushState(null, "", "/");
  }

  return (
    <>
      <h4>
        Привет,
        <br />с возвращением.
      </h4>

      <InputWithLabel
        title={"Введите адрес вашей электронной почты"}
        dispatchName={setEmail}
      />
      <InputPassword title={"Введите ваш пароль"} dispatchName={setPassword} />

      <button
        className="button button_primary button_m button_Registration"
        onClick={sendRequest}
        // disabled={isDisabled}
      >
        Войти в личный кабинет
      </button>

      <p>
        Впервые у нас? Сначала{" "}
        <Link to={"/sign-up"} className="button button_tertiary">
          Зарегистрируйся
        </Link>
      </p>
    </>
  );
}

export default SignIn;
