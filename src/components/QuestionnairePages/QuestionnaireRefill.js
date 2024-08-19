import React from "react";
import { useDispatch } from "react-redux";
import {
  setAppeal,
  setComfortWork,
  setComfortPsycho,
  setSpecExperience,
  setFormat,
  setPrice,
} from "../../redux/slices/questSlice";
import { Link } from "react-router-dom";
import QuestionnairePageComfort from "../../components/QuestionnaireComponents/QuestionnairePageComfort";
import QuestionnairePageExperience from "../../components/QuestionnaireComponents/QuestionnairePageExperience";

function QuestionnaireRefill() {
  const dispatch = useDispatch();

  let a = 1;

  const appealChange = (e) => dispatch(setAppeal(e.target.value));

  const comfortChange = (value) => dispatch(setComfortWork(value));
  const psychoChange = (value) => dispatch(setComfortPsycho(value));
  const specExpChange = (value) => dispatch(setSpecExperience(value));
  const formatChange = (value) => dispatch(setFormat(value));
  const priceChange = (value) => dispatch(setPrice(value));

  return (
    <div className="questionnaire__page">
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
      <div className="reduction__note">
        Для редактирования анкеты просто измените ответы на нужные вам <br></br>
        вопросы.
      </div>
      <div className="qu__page__next__options">
        <div className="qu__page__next__options__radio">
          <p className="qu__page__next__options__radio-title">
            Кто будет общаться с психологом?{" "}
          </p>
          <div className="qu__page__next__options__radio-item quest__checkbox">
            <input
              type="radio"
              id="me"
              name="choice"
              value="Только я"
              onChange={appealChange}
            />
            <label htmlFor="me">
              <div className="label-content">Только я</div>
            </label>
          </div>
          <div className="qu__page__next__options__radio-item quest__checkbox">
            <input
              type="radio"
              value="Мы с партнёром"
              id="partner"
              name="choice"
              onChange={appealChange}
            />
            <label htmlFor="partner">
              <div className="label-content">Мы с партнёром</div>
            </label>
          </div>
          <div className="qu__page__next__options__radio-item quest__checkbox">
            <input
              type="radio"
              id="family"
              name="choice"
              value="Мы с семьёй"
              onChange={appealChange}
            />
            <label htmlFor="family">
              <div className="label-content">Мы с семьёй</div>
            </label>
          </div>
          <div className="qu__page__next__options__radio-item quest__checkbox">
            <input type="radio" value="Другое" id="other" name="choice" />
            <label
              htmlFor="other"
              className="qu__page__next__options__radio-item--other quest__checkbox"
            >
              <div className="label-content">Другое: </div>

              <input
                className="qu__page__next__options__radio-item--text"
                onChange={appealChange}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="qu__page__next__options qu__page__next__options__refactory">
        <QuestionnairePageComfort
          comfortChange={comfortChange}
          psychoChange={psychoChange}
        />
        <QuestionnairePageExperience
          specExpChange={specExpChange}
          formatChange={formatChange}
          priceChange={priceChange}
        />
      </div>
      <div className="questionnaire__page__content__buttons-vertical">
        <Link to="/questionnaire_refill_2">
          <button className="button button_m button_primary quest_button_m ">
            Далее
          </button>
        </Link>

        <button className="button button_m button_secondary quest_button_m return_button">
          Вернуться позже
        </button>
      </div>
    </div>
  );
}

export default QuestionnaireRefill;
