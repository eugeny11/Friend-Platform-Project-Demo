import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRegistrationFetch } from "../redux/slices/registrationSlice";
import RegByPhone from "./RegByPhone";
import RegByEmail from "./RegByEmail";
import EnterCode from "./EnterCode";

function CreateAccount() {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.registration.phone);
  const email = useSelector((state) => state.registration.email);

  const [policyAgreements, setPolicyAgreements] = useState(false);
  const [lisenceAgreements, setLisenceArgeements] = useState(false);
  const [isChenged, setRegMethod] = useState(true);

  let policyHandler = () => setPolicyAgreements(!policyAgreements);
  let lisenceHandler = () => setLisenceArgeements(!lisenceAgreements);
  let changeRegMethod = () => setRegMethod(!isChenged);

  let regMethod = "";
  let regComponent = {};
  let fetchBody = {};

  if (isChenged) {
    regMethod = "Зарегистрироваться по номеру телефона";
    regComponent = <RegByEmail />;
    fetchBody = { email: email };
  } else {
    regMethod = "Зарегистрироваться по электронной почте";
    regComponent = <RegByPhone />;
    fetchBody = { phone: phone };
  }

  let isDisabled = !(lisenceAgreements && policyAgreements);

  let payload = {
    body: fetchBody,
    nextComponent: <EnterCode />,
  };

  return (
    <>
      <h4>Создайте аккаунт</h4>

      {regComponent}

      {/* <button
        className="button button_tertiary button_tertiary_icon-right button_xs"
        onClick={changeRegMethod}
      >
        {regMethod}
      </button> */}

      <div className="Registration-box__agreements">
        <label className="agreements">
          <input type={"checkbox"} onClick={policyHandler} />Я согласен{" "}
          <a href="">с политикой обработки персональных данных</a>
        </label>

        <label className="agreements">
          <input type={"checkbox"} onClick={lisenceHandler} />Я принимаю{" "}
          <a href="">условия лицензионного соглашения</a>
        </label>

        <label className="agreements">
          <input type={"checkbox"} />
          Подписаться на новости и скидки
        </label>
      </div>

      <button
        className="button button_primary button_m button_Registration"
        onClick={() => dispatch(getRegistrationFetch(payload))}
        disabled={isDisabled}
      >
        Зарегистрироваться
      </button>

      <p>
        Уже есть личный кабинет?{" "}
        <Link className="button button_tertiary" to={"/sign-in"}>
          Войти
        </Link>
      </p>
    </>
  );
}

export default CreateAccount;
