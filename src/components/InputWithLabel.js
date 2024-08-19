import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function InputWithLabel(props) {
  // props.title
  // props.dispatchName
  // props.defaultValue

  let title = props.title;
  let dispatchName = props.dispatchName;

  const dispatch = useDispatch();
  const refName = useRef();

  function cb() {
    if (props.dispatchName !== undefined) {
      dispatch(dispatchName(refName.current.value));
    } else {
      return;
    }
  }

  let defaultValue = props.defaultValue !== undefined ? props.defaultValue : "";

  return (
    <>
      <div className="input-container">
        <label className="input-container__label label">
          {title}
          <input
            className="input-container__input input input_label"
            ref={refName}
            onChange={cb}
            defaultValue={defaultValue}
          />
        </label>
      </div>
    </>
  );
}

export default InputWithLabel;
