import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { problemList } from "../../components/problems/problemList";
import { setRequests } from "../../redux/slices/questSlice";
import { setComment } from "../../redux/slices/questSlice";
import QuestionnairePageRequests from "../../components/QuestionnaireComponents/QuestionnairePageRequests";

const QuestionnaireFifthPage = () => {
  const [categories, setCategories] = useState(problemList);
  const [checked, setChecked] = useState({});

  const [customValues, setCustomValues] = useState({});

  const dispatch = useDispatch();

  const handleCustomValueChange = (value, categoryId) => {
    const newCustomValues = { ...customValues };
    newCustomValues[categoryId] = value;

    setCustomValues(customValues, value);

    console.log(customValues, categoryId, value);
  };

  const changeDropdown = (id) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? { ...category, dropdown: !category.dropdown }
          : category
      )
    );
  };

  const handleCommentChange = (e) => {
    dispatch(setComment(e.target.value));
  };

  const handleChange = (categoryId, value) => {
    const newChecked = { ...checked };
    let categoryChecked = newChecked[categoryId]
      ? [...newChecked[categoryId]]
      : [];

    if (!categoryChecked.includes(value)) {
      categoryChecked.push(value);
    } else {
      categoryChecked = categoryChecked.filter((item) => item !== value);
    }

    newChecked[categoryId] = categoryChecked;

    const customCategoryValue = customValues[categoryId];
    console.log(customCategoryValue);

    if (customCategoryValue !== "") {
      let customCategoryChecked = newChecked[categoryId]
        ? [...newChecked[categoryId]]
        : [];

      customCategoryChecked.push(customCategoryValue);

      if (customCategoryChecked.includes(customCategoryValue)) {
        customCategoryChecked = customCategoryChecked.filter(
          (item) => item !== customCategoryValue
        );
      }

      newChecked[categoryId] = customCategoryChecked;
      console.log(customCategoryChecked);
    }

    setChecked({ ...newChecked });

    dispatch(setRequests({ ...newChecked }));
  };

  console.log(checked);

  return (
    <div className="questionnaire__page qu__page__next">
      <div className="questionnaire__page__header">
        <div className="questionnaire__page__menu">
          <div className="questionnaire__page__menu-item">Общие данные</div>
          <div className="questionnaire__page__menu-item">Запрос</div>
          <div className="questionnaire__page__menu-item">Подбор психолога</div>
        </div>
        <div className="questionnaire__page__units">
          <div className="questionnaire__page__units-unit questionnaire__page__units-unit--success">
            1
          </div>
          <div className="questionnaire__page__units-line" />
          <div className="questionnaire__page__units-unit questionnaire__page__units-unit--active">
            2
          </div>
          <div className="questionnaire__page__units-line" />
          <div className="questionnaire__page__units-unit">3</div>
        </div>
      </div>
      <div className="qu__page__next__title">Анкета. Определение запроса</div>
      <div className="qu__page__next__topics">
        Ниже приведены локальные темы в широких направлениях.Отметь те из них,
        которые для тебя наиболее актуальны для обсуждения с психологом.
        <br />
        <br />В каждом разделе можно выбрать несколько вариантов ответов.
      </div>
      <div className="questionnaire__page__request">
        <div className="questionnaire__page__request-title">Запрос:</div>
        <div className="questionnaire__page__request-items">
          <div className="questionnaire__page__request-items-item">
            Родители болеют
          </div>
          <div className="questionnaire__page__request-items-item">
            Сепарация
          </div>
          <div className="questionnaire__page__request-items-item">
            Финансовые изменения
          </div>
          <div className="questionnaire__page__request-items-item">
            Смена работы
          </div>
        </div>
      </div>
      <QuestionnairePageRequests
        categories={categories}
        handleChange={handleChange}
        handleCommentChange={handleCommentChange}
        changeDropdown={changeDropdown}
        customValues={customValues}
        setCustomValues={setCustomValues}
        checked={checked}
        setChecked={setChecked}
        handleCustomValueChange={handleCustomValueChange}
      />

      <div className="questionnaire__page__content__buttons-vertical">
        <Link to="/questionnaire_6">
          <button className="button button_m button_primary quest_button_m" s>
            Далее
          </button>
        </Link>
        <Link to="/questionnaire_4">
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
};

export default QuestionnaireFifthPage;
