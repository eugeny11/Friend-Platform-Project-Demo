import React from "react";
import { Link } from "react-router-dom";

function Questionnaire() {
  return (
    <div className="questionnaire__page">
      <div className="questionnaire__page__header">
        <div className="questionnaire__page__menu">
          <div className="questionnaire__page__menu-item">Общие данные</div>
          <div className="questionnaire__page__menu-item">Запрос</div>
          <div className="questionnaire__page__menu-item">Подбор психолога</div>
        </div>
        <div className="questionnaire__page__units">
          <div className="questionnaire__page__units-unit">
            <div className="questionnaire__page__units-unit--number">1</div>
          </div>
          <div className="questionnaire__page__units-line" />
          <div className="questionnaire__page__units-unit">
            <div className="questionnaire__page__units-unit--number">2</div>
          </div>
          <div className="questionnaire__page__units-line" />
          <div className="questionnaire__page__units-unit">
            <div className="questionnaire__page__units-unit--number">3</div>
          </div>
        </div>
      </div>
      <div className="questionnaire__page__content">
        <div className="questionnaire__page__content__title">
          Привет, Евгений! Для подбора специалиста предстоит заполнить небольшую
          анкету
        </div>
        <div className="questionnaire__page__content__frame">
          <div className="questionnaire__page__content__frame-pic"></div>
          <div className="questionnaire__page__content__frame-tooltip">
            <div className="questionnaire__page__content__frame-tooltip--content">
              Чтобы перейти к следующему шагу нажимай кнопку “далее”. <br />
              <br /> В любой момент можно прервать заполнение и вернуться в
              Профиль - все данные сохранятся.
            </div>
          </div>
        </div>
        <div className="questionnaire__page__content__buttons">
          <button className="button button_l button_secondary quest_button_l">
            Вернуться позже
          </button>
          <Link to="/questionnaire_2">
            <button className="button button_l button_primary quest_button_l">
              Далее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
