import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let menuClient = [
  {
    title: "Анкеты",
    className: "sidebar__menu-questionnaire",
    url: "/questionnaires_list",
  },
  {
    title: "Заметки",
    className: "sidebar__menu-note",
    url: "/note",
  },
  {
    title: "Встречи",
    className: "sidebar__menu-meeting",
    url: "/meeting",
  },
  {
    title: "Чат с психологом",
    className: "sidebar__menu-chat",
    url: "/chat",
  },
  {
    title: "Частые вопросы",
    className: "sidebar__menu-faq",
    url: "/faq",
  },
  {
    title: "Поддержка",
    className: "sidebar__menu-support",
    url: "/support",
  },
];

let menuPsy = [
  {
    title: "Заметки",
    className: "sidebar__menu-note",
    url: "/note",
  },
  {
    title: "Встречи",
    className: "sidebar__menu-meeting",
    url: "/coordinator",
  },
  {
    title: "Чат с клиентами",
    className: "sidebar__menu-chat",
    url: "/chat",
  },
  {
    title: "Поддержка",
    className: "sidebar__menu-support",
    url: "/support",
  },
];

function SidebarMenu() {
  let { role } = useSelector((state) => state.registration);
  let sidebarMenu =
    role === "client" || role === ""
      ? menuClient
      : role === "psy"
      ? menuPsy
      : "";

  return (
    <>
      <div className="sidebar__menu">
        {sidebarMenu &&
          sidebarMenu.map((item, i) => (
            <Link to={item.url} className={`${item.className}`} key={i}>
              {item.title}
            </Link>
          ))}
      </div>
    </>
  );
}

export default SidebarMenu;
