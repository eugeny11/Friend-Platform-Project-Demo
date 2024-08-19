import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setRole, getUserData } from "../redux/slices/registrationSlice";
import getParseCooks from "../hooks/getParseCooks";

function DevMode() {
  let dispatch = useDispatch();

  let email = useSelector((state) => state.registration.email);
  let phone = useSelector((state) => state.registration.phone);
  let message = useSelector((state) => state.registration.message);
  let smsCode = useSelector((state) => state.registration.smsCode);
  let login = useSelector((state) => state.registration.login);
  let password = useSelector((state) => state.registration.password);
  let passConformation = useSelector(
    (state) => state.registration.passConformation
  );
  let role = useSelector((state) => state.registration.role);
  let id = useSelector((state) => state.registration.id);

  let token = useSelector((state) => state.signIn.token);
  let expire = useSelector((state) => state.signIn.expire);

  let quantity = 50;

  function getUser() {
    let payload = {
      email: email,
      role: role,
      token: token,
      quantity: quantity,
    };

    dispatch(getUserData(payload));
  }

  return (
    <div className="setup-page">
      <h4>DevMode</h4>

      <div className="setup-page__row">
        <div>
          <h5>store.registration</h5>
          <p>email: {email}</p>
          <p>phone: {phone}</p>
          <p>message: {message}</p>
          <p>smsCode: {smsCode}</p>
          <p>login: {login}</p>
          <p>password: {password}</p>
          <p>passConformation: {passConformation}</p>
          <p>role: {role}</p>
          <p>id: {id}</p>
          <h5>store.signIn</h5>
          <p style={{ overflowX: "hidden", width: "300px" }}>token: {token}</p>
          <p>expire: {expire}</p>
        </div>

        <div>
          <h5>Настройки</h5>
          <p>Установить роль:</p>
          <label className="lable">
            <input
              type={"radio"}
              value={""}
              checked={role === ""}
              onChange={() => dispatch(setRole(""))}
            />{" "}
            Клиент
          </label>
          <br />

          <label className="lable">
            <input
              type={"radio"}
              value={"psy"}
              checked={role === "psy"}
              onChange={() => dispatch(setRole("psy"))}
            />{" "}
            Психолог
          </label>
          <br />

          <label className="lable">
            <input
              type={"radio"}
              value={"mod"}
              checked={role === "mod"}
              onChange={() => dispatch(setRole("mod"))}
            />{" "}
            Координатор
          </label>
        </div>
      </div>

      <button className="button" onClick={getUser}>
        Получить данные пользователя
      </button>
    </div>
  );
}

export default DevMode;
