import React, { useState, useEffect } from "react";
import Specialist from "../Specialist";
import unmatchedList from "../specialists_lists/unmatchedList";
import matchedList from "../specialists_lists/matchedList";
import progressList from "../specialists_lists/progress";
import Close from "../../img/icon_close.svg";
import ClientQuest from "../QuestionnairePages/ClientQuest";
import clientQuestData from "../clients/clientQuestData";
import { useLocation } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

function DetailedQuestionnaire() {
  const [matched, setMatched] = useState(false);
  const [progress, setProgress] = useState(false);
  const location = useLocation();
  const item = location.state?.item;

  let selection;
  if (matched) {
    selection = (
      <div className="client__quest__page__header-left-selection client__quest__page__header-left-selection--matched">
        Подобран
      </div>
    );
  } else if (!matched && progress) {
    selection = (
      <div className="client__quest__page__header-left-selection client__quest__page__header-left-selection--progress">
        В процессе
      </div>
    );
  } else if (!matched && !progress) {
    selection = (
      <div className="client__quest__page__header-left-selection client__quest__page__header-left-selection--not-matched">
        Не подобран
      </div>
    );
  }

  return (
    <div className="client__quest__page">
      <div className="client__quest__page__header">
        <div className="client__quest__page-title">
          Анкета клиента на подбор специалиста
        </div>
        <div className="client__quest__page__header__info">
          <div className="client__quest__page__header-left">
            <div className="client__quest__page__header-left-data">
              {formatDate(item.created_at)}
            </div>
            {selection}
          </div>

          <img src={Close} alt="close" />
        </div>
      </div>

      <ClientQuest clientQuestData={clientQuestData} item={item} />
      <div className="client__quest__page-title">Подходящие специалисты</div>
      {!matched &&
        !progress &&
        unmatchedList.map((specialist) => (
          <Specialist key={specialist.id} specialist={specialist} />
        ))}
      {matched &&
        matchedList.map((specialist) => (
          <Specialist key={specialist.id} specialist={specialist} />
        ))}
      {!matched &&
        progress &&
        progressList.map((specialist) => (
          <Specialist key={specialist.id} specialist={specialist} />
        ))}
    </div>
  );
}

export default DetailedQuestionnaire;
