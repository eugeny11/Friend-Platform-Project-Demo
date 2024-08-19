import React from "react";
import InputWithLabel from "./InputWithLabel";

function Setup() {
  // props.title
  // props.dispatchName
  // props.defaultValue

  return (
    <div className="setup-page">
      <InputWithLabel title="Имя Фамилия" />
      <InputWithLabel title="Возраст" />

      <input type="radio" id="age1" name="age" value="female" />
      <label htmlFor="age1">женский</label>
      <input type="radio" id="age2" name="age" value="male" />
      <label htmlFor="age2">мужской</label>
      <br />

      <button className="button button_primary button_m">Сохранить</button>
    </div>
  );
}

export default Setup;
