import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";
import { agoraTokenUrl } from "../environment/env";

const Agora = (props) => {
  const [videoCall, setVideoCall] = useState(false);
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  const rtcProps = {
    appId: "d6e13da34fff4129920d20c457137f5a",
    channel: `${props.idPsy}${props.idClient}`,
    tokenUrl: agoraTokenUrl,
  };
  const rtmProps = {
    username: String(new Date().getTime()).slice(-6),
    displayUsername: true,
    tokenUrl: agoraTokenUrl,
  };
  return videoCall ? (
    <div>
      <div
        style={{ display: "flex", width: "100%", height: "calc(100vh - 65px)" }}
      >
        <AgoraUIKit
          rtcProps={rtcProps}
          callbacks={callbacks}
          rtmProps={rtmProps}
        />
      </div>
    </div>
  ) : (
    <button
      onClick={() => setVideoCall(true)}
      className="button button_primary button_l"
    >
      Join
    </button>
  );
};
export default Agora;
