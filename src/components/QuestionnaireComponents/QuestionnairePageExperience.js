import React from "react";

function QuestionnairePageExperience(props) {
  const { specExpChange, formatChange, priceChange } = props;
  return (
    <>
      <div className="qu__page__next__options__radio">
        <p className="qu__page__next__options__radio-title">
          Если для тебя важен опыт работы специалиста, с которым у тебя
          состоится сессия, проголосуй в этом пункте.{" "}
        </p>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Готов(а) работать с молодыми специалистами"
            id="ready"
            name="work"
            onChange={(e) => specExpChange(e.target.value)}
          />
          <label htmlFor="ready">
            <div className="label-content">
              Готов(а) работать с молодыми специалистами
            </div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="От 2 лет"
            id="2_years"
            name="work"
            onChange={(e) => specExpChange(e.target.value)}
          />
          <label htmlFor="2_years">
            <div className="label-content">От 2 лет</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="От 5 лет"
            id="5_years"
            name="work"
            onChange={(e) => specExpChange(e.target.value)}
          />
          <label htmlFor="5_years">
            <div className="label-content">От 5 лет</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Мне не важен опыт, рассмотрю разные варианты"
            id="exp"
            name="work"
            onChange={(e) => specExpChange(e.target.value)}
          />
          <label htmlFor="exp">
            <div className="label-content">
              Мне не важен опыт, рассмотрю разные варианты
            </div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input type="radio" value="Другое" id="other" name="work" />
          <label
            htmlFor="other"
            className="qu__page__next__options__radio-item--other quest__checkbox"
          >
            <div className="label-content">Другое: </div>
            <input
              className="qu__page__next__options__radio-item--text"
              onChange={(e) => specExpChange(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="qu__page__next__options__radio">
        <p className="qu__page__next__options__radio-title">
          Какой формат работы с психологом тебе интереснее: групповой или
          индивидуальный?
        </p>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Индивидуальный"
            id="individual"
            name="format"
            onChange={(e) => formatChange(e.target.value)}
          />
          <label htmlFor="individual">
            <div className="label-content">Индивидуальный</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Групповой"
            id="group"
            name="format"
            onChange={(e) => formatChange(e.target.value)}
          />
          <label htmlFor="group">
            <div className="label-content">Групповой</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Оба варианта интересны"
            id="both"
            name="format"
            onChange={(e) => formatChange(e.target.value)}
          />
          <label htmlFor="both">
            <div className="label-content">Оба варианта интересны</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Не понимаю, нужны подробности"
            id="dont_understand"
            name="format"
            onChange={(e) => formatChange(e.target.value)}
          />
          <label htmlFor="dont_understand">
            <div className="label-content">Не понимаю, нужны подробности</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input type="radio" value="Другое" id="other_2" name="format" />
          <label
            htmlFor="other_2"
            className="qu__page__next__options__radio-item--other quest__checkbox"
          >
            <div className="label-content">Другое: </div>
            <input
              className="qu__page__next__options__radio-item--text"
              onChange={(e) => formatChange(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="qu__page__next__options__radio">
        <p className="qu__page__next__options__radio-title">
          Какая стоимость сессии (продолжительность до 60 минут) для тебя
          комфортна?
        </p>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="До 1490 руб."
            id="1490"
            name="price"
            onChange={(e) => priceChange(e.target.value)}
          />
          <label htmlFor="1490">
            <div className="label-content">До 1490 руб.</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="До 2990 руб."
            id="2990"
            name="price"
            onChange={(e) => priceChange(e.target.value)}
          />
          <label htmlFor="2990">
            <div className="label-content">До 2990 руб.</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="До 4990 руб."
            id="4990"
            name="price"
            onChange={(e) => priceChange(e.target.value)}
          />
          <label htmlFor="4990">
            <div className="label-content">До 4990 руб.</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Цена не важна, рассмотрю разные варианты"
            id="variants"
            name="price"
            onChange={(e) => priceChange(e.target.value)}
          />
          <label htmlFor="variants">
            <div className="label-content">
              Цена не важна, рассмотрю разные варианты
            </div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input type="radio" value="Другое" id="other_3" name="price" />
          <label
            htmlFor="other_3"
            className="qu__page__next__options__radio-item--other quest__checkbox"
          >
            <div className="label-content">Другое: </div>
            <input
              className="qu__page__next__options__radio-item--text"
              onChange={(e) => priceChange(e.target.value)}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default QuestionnairePageExperience;
