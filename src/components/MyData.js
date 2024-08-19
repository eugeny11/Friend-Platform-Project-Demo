import React from "react";
import Union from "../img/Union.svg";

function MyData() {
  return (
    <div className="my__data">
      <div className="my__data-title">Мои данные</div>
      <div className="my__data__fields">
        <div className="my__data-field">
          <div className="my__data-field--key">Фамилия</div>
          <div className="my__data-field--value">
            <div className="my__data-field--lastname">Иванов</div>
            <img src={Union} alt="union" />
          </div>
        </div>
        <div className="my__data-field">
          <div className="my__data-field--key">Имя</div>
          <div className="my__data-field--value">
            <div className="my__data-field--lastname">Евгений</div>
            <img src={Union} alt="union" />
          </div>
        </div>
        <div className="my__data-field">
          <div className="my__data-field--key">Отчество</div>
          <div className="my__data-field--value">
            <div className="my__data-field--lastname">Александрович</div>
            <img src={Union} alt="union" />
          </div>
        </div>
        <div className="my__data-field">
          <div className="my__data-field--key">Дата рождения</div>
          <div className="my__data-field--value">
            <div className="my__data-field--lastname">14.08.1983</div>
            <img src={Union} alt="union" />
          </div>
        </div>
        <div className="my__data-field">
          <div className="my__data-field--key">Телефон</div>
          <div className="my__data-field--value">
            <div className="my__data-field--lastname">+7 (999) 999 99 99</div>
            <img src={Union} alt="union" />
          </div>
        </div>
        <div className="my__data-field">
          <div className="my__data-field--key">Электронная почта</div>
          <div className="my__data-field--value">
            <div className="my__data-field--lastname">me@droog.com</div>
            <img src={Union} alt="union" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyData;
