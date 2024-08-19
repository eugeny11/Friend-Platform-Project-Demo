import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setComponent } from "../redux/slices/registrationSlice";
import { getSignInFetch } from "../redux/slices/signInSlice";
import SignIn from "./SignIn";

function Greeting() {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.registration.email);
  const phone = useSelector((state) => state.registration.phone);
  const password = useSelector((state) => state.registration.password);

  function sendRequest() {
    let payload = {
      phone: phone,
      email: email,
      password: password,
    };

    if (email !== "") delete payload.phone;
    if (phone !== 0) delete payload.email;

    dispatch(setComponent(<SignIn />));
    dispatch(getSignInFetch(payload));

    window.history.pushState(null, "", "/");
  }

  return (
    <>
      <h2>Поздравляем!</h2>
      <p className="p p_Greeting">
        Регистрация прошла
        <br />
        успешно
      </p>
      <img src="./img/reg_Success.png" alt="Greeting" />
      <button
        className="button button_primary button_m button_Registration"
        onClick={sendRequest}
      >
        Перейти к заполнению анкеты
      </button>
    </>
  );
}

export default Greeting;
