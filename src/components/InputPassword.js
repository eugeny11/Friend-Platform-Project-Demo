import React from "react";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

function InputPassword(props) {
  let iconHint = "Показать пароль";
  let inputType = "password";
  let title = props.title;
  let dispatchName = props.dispatchName;

  const dispatch = useDispatch();
  const refName = useRef();
  const [isPassShown, setPassAppearence] = useState(false);

  function passwordToggler() {
    setPassAppearence(!isPassShown);
  }

  if (isPassShown) {
    inputType = "text";
    iconHint = "Спрятать пароль";
  } else {
    inputType = "password";
    iconHint = "Показать пароль";
  }

  return (
    <>
      <div className="input-container">
        <label className="input-container__label label">
          {title}
          <input
            className="input-container__input input input_label"
            type={inputType}
            ref={refName}
            onChange={() => dispatch(dispatchName(refName.current.value))}
          />
        </label>
        <label className="input-container__label input-container__label_checkbox label label_checkbox">
          <input
            type={"checkbox"}
            className="input-container__checkbox"
            onClick={passwordToggler}
          />
          <span className="input-container__checkbox-icon"></span>
          {iconHint}
        </label>
      </div>
    </>
  );
}

export default InputPassword;
