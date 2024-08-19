import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  setComfortWork,
  setComfortPsycho,
} from "../../redux/slices/questSlice";

import QuestionnairePageComfort from "../../components/QuestionnaireComponents/QuestionnairePageComfort";

function QuestionnaireThirdPage() {
  const dispatch = useDispatch();

  const comfortChange = (value) => dispatch(setComfortWork(value));
  const psychoChange = (value) => dispatch(setComfortPsycho(value));

  return (
    <div className="questionnaire__page qu__page__next">
      <div className="questionnaire__page__header">
        <div className="questionnaire__page__menu">
          <div className="questionnaire__page__menu-item">Общие данные</div>
          <div className="questionnaire__page__menu-item">Запрос</div>
          <div className="questionnaire__page__menu-item">Подбор психолога</div>
        </div>
        <div className="questionnaire__page__units">
          <div className="questionnaire__page__units-unit questionnaire__page__units-unit--active">
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
      <div className="qu__page__next__title">Анкета. Общие данные</div>
      <div className="qu__page__next__options">
        <QuestionnairePageComfort
          comfortChange={comfortChange}
          psychoChange={psychoChange}
        />
      </div>
      <div className="questionnaire__page__content__buttons-vertical">
        <Link to="/questionnaire_4">
          <button className="button button_m button_primary quest_button_m">
            Далее
          </button>
        </Link>
        <Link to="/questionnaire_2">
          <button className="button button_m button_primary quest_button_m">
            Назад
          </button>
        </Link>
        <button className="button button_m button_secondary quest_button_m return_button">
          Вернуться позже
        </button>
      </div>
    </div>
  );
}

export default QuestionnaireThirdPage;
