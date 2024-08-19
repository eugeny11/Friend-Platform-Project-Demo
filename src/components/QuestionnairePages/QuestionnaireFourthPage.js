import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setSpecExperience,
  setFormat,
  setPrice,
} from "../../redux/slices/questSlice";
import QuestionnairePageExperience from "../../components/QuestionnaireComponents/QuestionnairePageExperience";

function QuestionnaireFourthPage() {
  const dispatch = useDispatch();
  const specExpChange = (value) => dispatch(setSpecExperience(value));
  const formatChange = (value) => dispatch(setFormat(value));
  const priceChange = (value) => dispatch(setPrice(value));

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
        <QuestionnairePageExperience
          specExpChange={specExpChange}
          formatChange={formatChange}
          priceChange={priceChange}
        />
      </div>
      <div className="questionnaire__page__content__buttons-vertical">
        <Link to="/questionnaire_5">
          <button className="button button_m button_primary quest_button_m">
            Далее
          </button>
        </Link>
        <Link to="/questionnaire_3">
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

export default QuestionnaireFourthPage;
