import React from "react";
import { useSelector } from "react-redux";

function ProgressBar(props) {

	let {
		doneClientSession, 
		totalClientSession, 
		newQuests,
		totalQuests,
		newClients,
		donePsySession,
		totalClients
	} = props;

	let {role} = useSelector(state => state.registration);

  let [
		clientProgressMessage, 
		modProgressMessage, 
		psyProgressMessage, 
		newClientsProgress, 
		donePsySessionProgress,
		donePsySessionLastNum,
		totalCLientsProgress
	] = new Array(7).fill('');


	switch (doneClientSession) {
    case 1:
      clientProgressMessage = "сессия из";
      break;
    case 2:
    case 3:
    case 4:
      clientProgressMessage = "сессии из";
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      clientProgressMessage = "сессий из";
      break;
    default:
      clientProgressMessage = "нет сессий";
      break;
  }

  switch (newQuests) {
    case 1:
      modProgressMessage = "новая анкета из";
      break;
    case 2:
    case 3:
    case 4:
      modProgressMessage = "новые анкеты из";
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      modProgressMessage = "новых анкет из";
      break;
    default:
      modProgressMessage = "нет анкет";
      break;
  };

  let width = totalClientSession > 0 ? (doneClientSession / totalClientSession) * 100 : 0;
  let style = { width: `${width}%` };

	newClientsProgress = (newClients === 1) ? "новый клиент" : (newClients < 1 || newClients > 4) ? "новых клиентов" : "новых клиента";
	
	donePsySessionLastNum = +String(donePsySession).slice(1);
	donePsySessionProgress = (donePsySessionLastNum === 1) ? "сессия" : (donePsySessionLastNum < 1 || donePsySessionLastNum > 4) ? "сессий" : "сессии";

	totalCLientsProgress = (totalClients === 1) ? "постоянный клиент" : (totalClients < 1 || totalClients > 4) ? "постоянных клиентов" : "постоянных клиента";

  clientProgressMessage = (<>
		<p>{`${doneClientSession} ${clientProgressMessage} ${totalClientSession}`}</p>
		<div className="sidebar__progressbar-body">
			<div className="sidebar__progressbar-done" style={style}></div>
		</div>
	</>);		

	modProgressMessage = (<>
		<p>{`${newQuests} ${modProgressMessage} ${totalQuests}`}</p>
		<div className="sidebar__progressbar-body">
			<div className="sidebar__progressbar-done" style={style}></div>
		</div>
	</>);
	
	psyProgressMessage = (<>
		<p className="sidebar__progressbar-legend"><span className="sidebar__progressbar-nums">&#43; {`${newClients}`}</span> {`${newClientsProgress} за неделю`}</p>
		<p className="sidebar__progressbar-legend"><span className="sidebar__progressbar-nums">{`${donePsySession}`}</span> {`${donePsySessionProgress} за неделю`}</p>
		<p className="sidebar__progressbar-legend"><span className="sidebar__progressbar-nums">{`${totalClients}`}</span> {`${totalCLientsProgress}`}</p>
	</>);

  return (
    <div className="sidebar__progressbar">
			{role === "client" ? clientProgressMessage : (role === "psy") ? psyProgressMessage : modProgressMessage}
    </div>
  );
}


export default ProgressBar;
