import React from "react";

function Specialist(props) {
  const { specialist } = props;
  const blocks = specialist.blocks;
  const requests = specialist.requests;

  return (
    <div className="client__quest__page__specialist">
      <div className="client__quest__page__specialist__left">
        <div className="left-img left-img--spec">
          <div className="avatar">
            <img
              className="avatar"
              src={require(`../img/${specialist.path}`)}
              alt="lifestyle"
            ></img>
          </div>
        </div>
        <div className="video__bussiness__card">
          <div>Видео-визитка</div>
          <img src={require("../img/video.png")} alt="video" />
        </div>
        <button className="button button_m button_primary quest_button_m recommend">
          Рекомендовать
        </button>
      </div>
      <div className="client__quest__page__specialist__right">
        {blocks.map((block, index) => (
          <div key={index} className="specialist-block">
            <div className="specialist-title">{block.title}</div>
            <div className="specialist-info">{block.info}</div>
          </div>
        ))}
        <div className="specialist-title">{specialist.request_title}</div>{" "}
        <div className="specialist-requests">
          {requests.map((request, index) => (
            <div key={index} className="specialist-requests--item">
              {request.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialist;
