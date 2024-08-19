import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Plus from "../../img/icon_big_plus.svg";
import Iconex from "../../img/iconex.svg";
import Swap from "../../img/swap.svg";
import Search from "../../img/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { getQuestData } from "../../redux/slices/questSlice";
import getParseCooks from "../../hooks/getParseCooks";
import { formatDate } from "../../utils/formatDate";
import { Link } from "react-router-dom";

function QuestionnairesList() {
  const token = useSelector((state) => state.signIn.token);
  const dispatch = useDispatch();
  const questData = useSelector((state) => state.quest);
  const navigate = useNavigate();

  const [user_id, setUserId] = useState(null);
  const [quest, setQuest] = useState(null);

  useEffect(() => {
    const getUserId = async () => {
      const data = await getParseCooks("id");
      setUserId(data);
    };
    getUserId();
  }, []);

  useEffect(() => {
    if (user_id !== undefined) {
      // добавляем проверку
      dispatch(
        getQuestData({ body: {}, token: token, user_id: Number(user_id) })
      );
    }
  }, [user_id, dispatch.token]);

  useEffect(() => {
    const parseData = async () => {
      if (questData?.quest) {
        let parsedData = await Promise.all(
          questData.quest.map(async (q) => {
            let parsedCommonData = JSON.parse(q.common_data);
            let parsedProblem = JSON.parse(q.problem);

            return {
              ...q,
              common_data: parsedCommonData,
              problem: parsedProblem,
            };
          })
        );

        setQuest(parsedData);
      }
    };

    parseData();
  }, [questData]);

  console.log(user_id);
  console.log(quest);

  return (
    <div className="questionnaires__list">
      <div className="questionnaires__list-title">Мои анкеты</div>
      <div className="questionnaires__list__header">
        <div className="questionnaires__list__header-add">
          <Link to="/questionnaire">
            <img className="big_plus_icon" src={Plus} alt="plus" />
          </Link>
          <div className="questionnaires__list-create">Создайте новую</div>
        </div>
        <div className="questionnaires__list__header-created-at">
          <div className="request-spec request-match">Психолог подобран</div>
          <div className="creation-date">Создана 21.02.2023</div>
          <div className="created-request-title">Запрос</div>
          <div className="created-requests">
            <div className="created-requests-item">гештальт терапия</div>
            <div className="created-requests-item">женщина</div>
            <div className="created-requests-item">эмоции</div>
            <div className="created-requests-item">5+ опыта</div>
          </div>
        </div>
        <div className="questionnaires__list__header-choose">
          <img src={require("../../img/avatars_big.png")} alt="avatars" />
          <button className="button button_s button_primary quest_button_s ">
            Выбрать психолога
          </button>
        </div>
      </div>
      <div className="questionnaires__list-data-header">
        <div className="questionnaires__list-data-header-left">
          <div className="questionnaires__list-data-header-left--item">
            Дата
          </div>
          <div className="questionnaires__list-data-header-left--item">
            Название
          </div>
          <div className="questionnaires__list-data-header-left--item">
            Статус
          </div>
          <div className="questionnaires__list-data-header-left--item">
            Запрос
          </div>
        </div>
        <div className="questionnaires__list-data-header-right">
          <img src={Swap} alt="swap" />
          <img src={Search} alt="search" />
        </div>
      </div>
      <div className="questionnaires__list__content">
        {quest &&
          quest?.map((item) => (
            <div
              key={item.id}
              className="questionnaires__list__content-request"
            >
              <div className="content-request-left">
                <div className="request-data">
                  {formatDate(item.created_at)}
                </div>
                <img
                  className="request-avatars"
                  src={require("../../img/avatars.png")}
                  alt="avatars"
                />
                <div className="request-count">
                  250+ <br /> психологов
                </div>
                <div className="request-spec request-match">
                  Подобрать специалиста
                </div>
              </div>
              <div className="request-points">
                {item.common_data.appeal ? (
                  <div className="request-points-spec">
                    {item.common_data.appeal}
                  </div>
                ) : (
                  <div className="request-points-spec">Не заполнено</div>
                )}
                {item.common_data.comfort_psycho ? (
                  <div className="request-points-spec">
                    {item.common_data.comfort_psycho}
                  </div>
                ) : (
                  <div className="request-points-spec">Не заполнено</div>
                )}
                {item.common_data.comfort_work ? (
                  <div className="request-points-spec">
                    {item.common_data.comfort_work}
                  </div>
                ) : (
                  <div className="request-points-spec">Не заполнено</div>
                )}

                <img
                  src={Iconex}
                  alt="Iconex"
                  onClick={() =>
                    navigate(`/request/${item.id}`, { state: { item } })
                  }
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default QuestionnairesList;
