import React from "react";
import Swap from "../img/swap.svg";
import Search from "../img/search.svg";
import Iconex from "../img/iconex.svg";

function CoordinatorMainPage() {
  return (
    <div className="coordinator__main__page coordinator__page">
      <div className="coordinator__main__page__header">
        <div className="coordinator__page-title">
          Анкеты на подбор специалиста
        </div>
        <div className="coordinator__main__page__header-menu">
          <div className="coordinator__main__page__header-menu--left">
            <div className="menu-item">Дата</div>
            <div className="menu-item">Специалисты</div>
            <div className="menu-item">Запросы</div>
          </div>
          <div className="coordinator__main__page__header-menu--right">
            <img src={Swap} alt="swap" />
            <img src={Search} alt="search" />
          </div>
        </div>
      </div>
      <div className="coordinator__main__page__content">
        <div className="coordinator__main__page__content-request">
          <div className="content-request-left">
            <div className="request-data">10.03.2023</div>
            <img
              className="request-avatars"
              src={require("../img/avatars.png")}
              alt="avatars"
            />
            <div className="request-count">
              250+ <br /> психологов
            </div>
            <div className="request-spec request-not-match">Не подобран</div>
          </div>

          <div className="request-spec request-match">
            Подобрать специалиста
          </div>
        </div>
        <div className="coordinator__main__page__content-request">
          <div className="content-request-left">
            <div className="request-data">10.03.2023</div>
            <img
              className="request-avatars"
              src={require("../img/avatars.png")}
              alt="avatars"
            />
            <div className="request-count">
              250+ <br /> психологов
            </div>
            <div className="request-spec request-not-match">Не подобран</div>
          </div>

          <div className="request-spec request-match">
            Подобрать специалиста
          </div>
        </div>
        <div className="coordinator__main__page__content-request">
          <div className="content-request-left">
            <div className="request-data">10.03.2023</div>
            <img
              className="request-avatars"
              src={require("../img/avatars.png")}
              alt="avatars"
            />
            <div className="request-count">
              250+ <br /> психологов
            </div>
            <div className="request-spec request-not-match">Не подобран</div>
          </div>

          <div className="request-spec request-match">
            Подобрать специалиста
          </div>
        </div>
        <div className="coordinator__main__page__content-request">
          <div className="content-request-left">
            <div className="request-data">10.03.2023</div>
            <img
              className="request-avatars"
              src={require("../img/avatars.png")}
              alt="avatars"
            />
            <div className="request-count">
              250+ <br /> психологов
            </div>
            <div className="request-spec request-progress">Ждёт одобрения</div>
          </div>

          <div className="request-spec request-match">
            Подобрать специалиста
          </div>
        </div>
        <div className="coordinator__main__page__content-request">
          <div className="content-request-left">
            <div className="request-data">10.03.2023</div>
            <img
              className="request-avatars"
              src={require("../img/avatars.png")}
              alt="avatars"
            />
            <div className="request-count">
              250+ <br /> психологов
            </div>
            <div className="request-spec request-progress">Ждёт одобрения</div>
          </div>

          <div className="request-points">
            <div className="request-points-spec">Гештальт</div>
            <div className="request-points-spec">12+ опыта</div>
            <div className="request-points-spec">Женщина</div>
            <img src={Iconex} alt="Iconex" />
          </div>
        </div>
        <div className="coordinator__main__page__content-request">
          <div className="content-request-left">
            <div className="request-data">10.03.2023</div>
            <img
              className="request-avatars"
              src={require("../img/avatars.png")}
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
            <div className="request-points-spec">Семейная психология</div>
            <div className="request-points-spec">12+ опыта</div>
            <div className="request-points-spec">Женщина</div>
            <img src={Iconex} alt="Iconex" />
          </div>
        </div>
        <div className="coordinator__main__page__content-request">
          <div className="content-request-left">
            <div className="request-data">10.03.2023</div>
            <img
              className="request-avatars"
              src={require("../img/avatars.png")}
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
            <div className="request-points-spec">Физио-психология</div>
            <div className="request-points-spec">12+ опыта</div>
            <div className="request-points-spec">Женщина</div>
            <img src={Iconex} alt="Iconex" />
          </div>
        </div>
        <div className="coordinator__main__page__content-request">
          <div className="content-request-left">
            <div className="request-data">10.03.2023</div>
            <img
              className="request-avatars"
              src={require("../img/avatars.png")}
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
            <div className="request-points-spec">Физио-психология</div>
            <div className="request-points-spec">12+ опыта</div>
            <div className="request-points-spec">Женщина</div>
            <img src={Iconex} alt="Iconex" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoordinatorMainPage;
