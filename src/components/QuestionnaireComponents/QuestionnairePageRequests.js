import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import Open from "../../img/icon_open.svg";
import Unopen from "../../img/icon_unopen.svg";

function QuestionnairePageRequests(props) {
  const {
    categories,
    handleChange,
    changeDropdown,
    handleCommentChange,
    customValues,
    handleCustomValueChange,
    checked,
  } = props;

  // const [currentValue, setCurrentValue] = useState("");

  return (
    <>
      <div className="questionnaire__page__points__list">
        {categories.map((category) => (
          <>
            <div
              className={
                !category.dropdown ? "points__list__item-title" : "hide"
              }
              key={category.id}
            >
              {category.title}
              <img
                alt="envelope"
                src={Open}
                onClick={() => changeDropdown(category.id)}
              />
            </div>

            <div
              className={category.dropdown ? "points__list__item-desc" : "hide"}
            >
              <div className="item-desc-title">
                {category.title}
                <img
                  alt="envelope"
                  className="unopen"
                  src={Unopen}
                  onClick={() => changeDropdown(category.id)}
                />
              </div>
              <div className="item-desc-options">
                {category.problems.map((problem) => (
                  <Checkbox
                    problem={problem}
                    checked={checked}
                    key={problem.id}
                    category={category}
                    handleChange={handleChange}
                  />
                ))}
                <div className="item-desc-options-string">
                  <input
                    type="checkbox"
                    id={category.id}
                    className="points_checkbox"
                    onChange={() =>
                      handleChange(category.id, customValues[category.id] || "")
                    }
                  />
                  <label htmlFor={category.id}>
                    Другое
                    <input
                      className="qu__page__next__options__radio-item--text"
                      type="text"
                      defaultValue={customValues[category.id] || ""}
                      onChange={(e) =>
                        handleCustomValueChange(e.target.value, category.id)
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
          </>
        ))}

        <div className="questionnaire__page__points__list__suggestion">
          При желании ты можешь описать в нескольких предложениях свою
          ситуацию/что тебя тревожит/к чему хотелось бы прийти.
          <input
            className="questionnaire__page__points__list__suggestion-input"
            onChange={handleCommentChange}
          />
        </div>
      </div>
    </>
  );
}

export default QuestionnairePageRequests;
