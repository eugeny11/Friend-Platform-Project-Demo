import React from "react";
import { path } from "../clients/clientQuestData";
import { client } from "../clients/clientQuestData";
import { headers } from "../problems/headers";

function ClientQuest({ clientQuestData, item }) {
  const { connection, problem_description } = clientQuestData;

  const requestsValues = item.problem.requests;

  console.log(item);

  return (
    <div className="client__quest__page__content">
      <div className="client__quest__page__content__left">
        <div className="left-img">
          <img
            className="avatar"
            src={require(`../../img/${path}`)}
            alt="lifestyle"
          ></img>
        </div>
      </div>
      <div className="client__quest__page__content__right">
        <div className="client__quest__page__content__right-title content-title">
          {client}
        </div>
        <div className="client__quest__page__content__right__data">
          <div className="content-title">Общие сведения</div>
          <div className="data__list">
            <div className="data__list-item">
              <div className="data__list-item--key">Общение</div>
              {item.common_data.appeal ? (
                <div className="data__list-item--value">
                  {item.common_data.appeal}
                </div>
              ) : (
                <div className="data__list-item--value">Не заполнено</div>
              )}
            </div>
            <div className="data__list-item">
              <div className="data__list-item--key">Муж/жен</div>
              {item.common_data.comfort_work ? (
                <div className="data__list-item--value">
                  {item.common_data.comfort_work}
                </div>
              ) : (
                <div className="data__list-item--value">Не заполнено</div>
              )}
            </div>
            <div className="data__list-item">
              <div className="data__list-item--key">Возраст</div>
              <div className="data__list-item--value">
                {item.common_data.min_age}-{item.common_data.max_age}
              </div>
            </div>
            <div className="data__list-item">
              <div className="data__list-item--key">Формат связи</div>
              <div className="data__list-item--value">{connection}</div>
            </div>
            <div className="data__list-item">
              <div className="data__list-item--key">Поддержка</div>

              {item.common_data.format ? (
                <div className="data__list-item--value">
                  {item.common_data.format}
                </div>
              ) : (
                <div className="data__list-item--value">Не заполнено</div>
              )}
            </div>
            <div className="data__list-item">
              <div className="data__list-item--key">Стоимость</div>

              {item.common_data.price ? (
                <div className="data__list-item--value">
                  {item.common_data.price}
                </div>
              ) : (
                <div className="data__list-item--value">Не заполнено</div>
              )}
            </div>
            <div className="data__list-item">
              <div className="data__list-item--key">Опыт</div>

              {item.common_data.spec_experience ? (
                <div className="data__list-item--value">
                  {item.common_data.spec_experience}
                </div>
              ) : (
                <div className="data__list-item--value">Не заполнено</div>
              )}
            </div>
            <div className="data__list-item">
              <div className="data__list-item--key">Психолог</div>

              {item.common_data.comfort_psycho ? (
                <div className="data__list-item--value">
                  {item.common_data.comfort_psycho}
                </div>
              ) : (
                <div className="data__list-item--value">Не заполнено</div>
              )}
            </div>
            <div className="data__list-item">
              <div className="data__list-item--key">Формат</div>

              {item.common_data.format ? (
                <div className="data__list-item--value">
                  {item.common_data.format}
                </div>
              ) : (
                <div className="data__list-item--value">Не заполнено</div>
              )}
            </div>
          </div>
          <div className="client__quest__page__content__right__request">
            <div className="content-title">Запрос</div>
            <div className="request__body">{problem_description}</div>
          </div>
          {requestsValues &&
            Object.keys(requestsValues).map((key, index) => (
              <div key={index} className="request__item">
                <div className="request__item-title">{headers[key]}</div>
                {requestsValues[key] && requestsValues[key].length !== 0 ? (
                  <div className="request__item__points">
                    {requestsValues[key].map((point, index) => (
                      <div key={index} className="request__item__points-point">
                        {point}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div key={index} className="request__item">
                    Запросов нет
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ClientQuest;
