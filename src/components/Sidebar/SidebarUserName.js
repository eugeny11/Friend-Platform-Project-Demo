import React from "react";

function SidebarUserName(props) {
  return (
    <div className="sidebar__username">
      <h6>
        <button className="button username-btn"></button>
        {props.name}
      </h6>
    </div>
  );
}

export default SidebarUserName;
