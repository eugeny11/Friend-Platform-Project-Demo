import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useSelector } from "react-redux";
import {
  setSmsCode,
  setPassword,
  setPassConformation,
  getRegistrationFetch,
} from "../redux/slices/registrationSlice";
import InputPassword from "./InputPassword";
import InputWithLabel from "./InputWithLabel";
import Greeting from "./Greeting";

function EnterCode() {
  const codeInput = useRef();
  const dispatch = useDispatch();

  const email = useSelector((state) => state.registration.email);
  const phone = useSelector((state) => state.registration.phone);
  const smsCode = useSelector((state) => state.registration.smsCode);
  const password = useSelector((state) => state.registration.password);
  const passConformation = useSelector(
    (state) => state.registration.passConformation
  );

  let login = "";
  let isDisabled = true;
  let payload = {};
  let fetchBody = {};

  fetchBody = {
    phone: phone,
    email: email,
    sms_code: smsCode,
    password: password,
    role: "",
  };

  if (email !== "") {
    login = email;
    delete fetchBody.phone;
  }
  if (phone !== 0) {
    login = phone;
    delete fetchBody.email;
  }

  if (password && passConformation) {
    isDisabled = password === passConformation ? false : true;
  }

  payload = {
    body: fetchBody,
    nextComponent: <Greeting />,
  };

  return (
    <>
      <h4>Введите код для подтверждения&nbsp;эл.&nbsp;адреса</h4>

      <input
        className="input input_EnterCode"
        ref={codeInput}
        maxLength={"4"}
        placeholder="____"
        onChange={() => dispatch(setSmsCode(codeInput.current.value))}
      />

      <p className="p p_EnterCode">Код отправлен на {login}</p>

      <InputWithLabel title={"Логин"} defaultValue={login} />
      <InputPassword title={"Придумайте пароль"} dispatchName={setPassword} />
      <InputPassword
        title={"Повторите пароль"}
        dispatchName={setPassConformation}
      />

      <button
        className="button button_primary button_m button_Registration"
        onClick={() => dispatch(getRegistrationFetch(payload))}
        disabled={isDisabled}
      >
        Зарегистрироваться
      </button>
    </>
  );
}

export default EnterCode;
