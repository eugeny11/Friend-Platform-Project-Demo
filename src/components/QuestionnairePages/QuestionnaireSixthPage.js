import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendQuestData } from "../../redux/slices/questSlice";
import getParseCooks from "../../hooks/getParseCooks";

function QuestionnaireSixthPage() {
  let dispatch = useDispatch();

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const getUserId = async () => {
      const data = await getParseCooks("id");
      setUserId(data);
    };
    getUserId();
  }, []);

  console.log(userId);

  const converse = useSelector((state) => state.quest.converse);
  const appeal = useSelector((state) => state.quest.appeal);
  const comfort_work = useSelector((state) => state.quest.comfort_work);

  const min_age = useSelector((state) => state.quest.min_age);
  const max_age = useSelector((state) => state.quest.max_age);
  const comfort_psycho = useSelector((state) => state.quest.comfort_psycho);

  const spec_experience = useSelector((state) => state.quest.spec_experience);
  const format = useSelector((state) => state.quest.format);
  const price = useSelector((state) => state.quest.price);

  const requests = useSelector((state) => state.quest.requests);
  const comment = useSelector((state) => state.quest.comment);
  const token = useSelector((state) => state.signIn.token);
  let common_data = {
    converse,
    appeal,
    comfort_work,
    min_age,
    max_age,
    comfort_psycho,
    spec_experience,
    format,
    price,
  };

  let problem_data = {
    requests,
    comment,
  };

  let payload = {
    token: token,
    body: {
      user_id: Number(userId),
      common_data: JSON.stringify(common_data),
      problem: JSON.stringify(problem_data),
      comment: JSON.stringify(comment),
    },
  };

  function handlerClick() {
    dispatch(sendQuestData(payload));
  }

  console.log(payload);

  return (
    <div className="questionnaire__page">
      <div className="questionnaire__page__header">
        <div className="questionnaire__page__menu">
          <div className="questionnaire__page__menu-item">Общие данные</div>
          <div className="questionnaire__page__menu-item">Запрос</div>
          <div className="questionnaire__page__menu-item">Подбор психолога</div>
        </div>
        <div className="questionnaire__page__units">
          <div className="questionnaire__page__units-unit questionnaire__page__units-unit--success">
            <div className="questionnaire__page__units-unit--number">1</div>
          </div>
          <div className="questionnaire__page__units-line" />
          <div className="questionnaire__page__units-unit questionnaire__page__units-unit--success">
            <div className="questionnaire__page__units-unit--number ">2</div>
          </div>
          <div className="questionnaire__page__units-line" />
          <div className="questionnaire__page__units-unit questionnaire__page__units-unit--active">
            <div className="questionnaire__page__units-unit--number">3</div>
          </div>
        </div>
      </div>
      <div className="questionnaire__page__content">
        <div className="questionnaire__page__content__title">
          Анкета заполнена успешно и направлена координатору
        </div>
        <div className="questionnaire__page__content__success-pic"></div>
        <Link to="/">
          <button
            className="button button_l button_primary quest_button_back"
            onClick={handlerClick}
          >
            Вернуться на главный экран
          </button>
        </Link>
      </div>
    </div>
  );
}

export default QuestionnaireSixthPage;
