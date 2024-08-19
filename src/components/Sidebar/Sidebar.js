import React from "react";
import SidebarNav from "./SidebarNav";
import SidebarUserPhoto from "./SidebarUserPhoto";
import SidebarMenu from "./SidebarMenu";
import ProgressBar from "./ProgressBar";
import SidebarUserName from "./SidebarUserName";

function Sidebar() {
  return (
    <div className="sidebar scroll">
      <SidebarNav />
      <SidebarUserPhoto />
      <SidebarUserName name={"Евгений Иванов"} />
      <ProgressBar 
				doneClientSession={2} 
				totalClientSession={10} 
				newQuests={2}
				totalQuests={10}
				newClients = {4}
				donePsySession={24}
				totalClients = {20}
			/>
      <SidebarMenu />
    </div>
  );
}

export default Sidebar;
