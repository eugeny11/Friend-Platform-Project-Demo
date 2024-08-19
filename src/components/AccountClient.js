import React from "react";
import MyData from "./MyData";
import Right from "../img/icon_right.svg";
import Message from "../img/icon_message.svg";
import Headphones from "../img/icon_headphones.svg";
import { useState } from "react";
import questionsList from "./questions/questionsList";
import { Link } from "react-router-dom";

function AccountClient() {
  const [questions, setQuestions] = useState(questionsList);

  const changeDropdown = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, dropdown: !question.dropdown }
          : question
      )
    );
  };

  return (
    <div className="client__private__page">
      <MyData />
      <div className="client__private__page__compilation__section">
        <div className="compilation__section__left">
          <div className="compilation__section__left-header">
            10 вопросов из 85
          </div>
          <div className="compilation__section__left-quest client__private-header">
            Анкета
          </div>
          <div className="compilation__section__left-complete">
            Заполни анкету и мы подберём для тебя специалиста
          </div>
          <Link to="/questionnaire_refill">
            <button className="button complete_button button_primary quest_button_s">
              Заполнить
            </button>
          </Link>
        </div>
        <div className="compilation__section__right">
          <div className="compilation__section__right-img"></div>
          <div className="compilation__section__right-psycho">
            <div className="psycho__header">
              Подобрать <br></br> психолога
            </div>
            <button className="button psycho_button button_primary">
              Подобрать
            </button>
          </div>
        </div>
      </div>
      <div className="client__private__page__notes__and__meetings__section">
        <div className="notes__section">
          <div className="notes__section-header client__private-header">
            Мои заметки
          </div>
          <div className="notes__section__write">
            <div className="notes__section__write-header">Мои заметки</div>
            <div className="notes__section__write-thoughts">
              Сюда ты можешь записывать все свои мысли
            </div>
          </div>
          <div className="notes__section__write-open">
            <div>Открыть заметки</div>
            <img src={Right} alt="right" />
          </div>
        </div>
        <div className="meetings__section">
          <div className="meetings__section-header client__private-header">
            Мои встречи
          </div>
          <div className="my__meetings">
            <div className="my__meetings-part">
              <div className="part-date">13.02.2023</div>
              <div className="part-time">
                <div>Консультация в 18:30</div>
                <img src={Message} alt="message" />
              </div>
            </div>
            <div className="my__meetings-part">
              <div className="part-date">21.02.2023</div>
              <div className="part-time">
                <div>Консультация в 16:00</div>
                <img src={Message} alt="message" />
              </div>
            </div>
          </div>
          <div className="meetings__section-open">
            <div>Открыть заметки</div>
            <img src={Right} alt="right" />
          </div>
        </div>
      </div>
      <div className="often__questions__section">
        <div className="often__questions__section-header client__private-header">
          Частые вопросы
        </div>
        <div className="questions__list">
          {questions.map((question) => (
            <>
              <div
                className={
                  !question.dropdown ? "question__list__item-title" : "hide"
                }
                key={question.id}
              >
                {question.title}
                <img
                  alt="envelope"
                  src="img/icon_envelope.svg"
                  onClick={() => changeDropdown(question.id)}
                />
              </div>
              <div
                className={
                  question.dropdown ? "question__list__item-desc" : "hide"
                }
              >
                <div className="item-desc-title">
                  <div className="desc-title-info">
                    <div className="title-and-button">
                      {question.title}{" "}
                      <img
                        alt="envelope"
                        src="img/icon_envelope.svg"
                        onClick={() => changeDropdown(question.id)}
                      />
                    </div>
                    <p className="desc-p">{question.info}</p>
                  </div>
                </div>
                <div className="item-desc-options variants_list">
                  <ul>
                    {question.variants.map((variant) => (
                      <li key={variant}>{variant}</li>
                    ))}
                  </ul>
                </div>
                <p className="desc-p">{question.resume}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="client__private__page__support">
        <img src={Headphones} alt="Headphones" />
        <div>Обратиться в чат поддержки</div>
      </div>
    </div>
  );
}

export default AccountClient;
