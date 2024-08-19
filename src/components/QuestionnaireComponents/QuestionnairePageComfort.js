import React from "react";
import MultiRange from "../../components/MultiRange";

function QuestionnairePageComfort(props) {
  const { comfortChange, psychoChange } = props;

  return (
    <>
      <div className="qu__page__next__options__radio">
        <p className="qu__page__next__options__radio-title">
          С кем тебе будет комфортнее работать?{" "}
        </p>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="С женщиной"
            id="woman"
            name="comfort"
            onChange={(e) => comfortChange(e.target.value)}
          />
          <label htmlFor="woman">
            <div className="label-content">С женщиной</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="С мужчиной"
            id="man"
            name="comfort"
            onChange={(e) => comfortChange(e.target.value)}
          />
          <label htmlFor="man">
            <div className="label-content">С мужчиной</div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Всё равно"
            id="nevermind"
            name="comfort"
            onChange={(e) => comfortChange(e.target.value)}
          />
          <label htmlFor="nevermind">
            <div className="label-content">Всё равно</div>
          </label>
        </div>
      </div>
      <p className="qu__page__next__options__radio-title">Возраст психолога </p>
      <div className="qu__page__range">
        <MultiRange className="multi-range-slider" />
      </div>

      <div className="qu__page__next__options__radio">
        <p className="qu__page__next__options__radio-title">
          Какой психолог для тебя был бы комфортнее?{" "}
        </p>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Поддерживающий, эмпатичный, понимающий"
            id="understanding"
            name="psycho_comfort"
            onChange={(e) => psychoChange(e.target.value)}
          />
          <label htmlFor="understanding">
            <div className="label-content">
              Поддерживающий, эмпатичный, понимающий{" "}
            </div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Консервативный, сдержанный, структурный"
            id="conservative"
            name="psycho_comfort"
            onChange={(e) => psychoChange(e.target.value)}
          />
          <label htmlFor="conservative">
            <div className="label-content">
              Консервативный, сдержанный, структурный{" "}
            </div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input
            type="radio"
            value="Мне это не важно"
            id="doesntmatter"
            name="psycho_comfort"
            onChange={(e) => psychoChange(e.target.value)}
          />
          <label htmlFor="doesntmatter">
            <div className="label-content">Мне это не важно </div>
          </label>
        </div>
        <div className="qu__page__next__options__radio-item quest__checkbox">
          <input type="radio" value="Другое" id="other" name="psycho_comfort" />
          <label htmlFor="other">
            <div className="label-content">Другое</div>
            <input
              className="qu__page__next__options__radio-item--text"
              onChange={(e) => psychoChange(e.target.value)}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default QuestionnairePageComfort;
