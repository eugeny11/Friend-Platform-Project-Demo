import { useState } from "react";
import { useClient } from "./settings";

export default function Controls(props) {
  console.log("Agora controls");
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  const btnClassName = "button button_primary button_s";

  return (
    <>
      <button className={btnClassName} onClick={() => mute("audio")}>
        {trackState.audio ? "micOn" : "micOff"}
      </button>

      <button
        className={btnClassName}
        color={trackState.video ? "primary" : "secondary"}
        onClick={() => mute("video")}
      >
        {trackState.video ? "VideoOn" : "VideoOff"}
      </button>

      <button className={btnClassName} onClick={() => leaveChannel()}>
        Leave
      </button>
    </>
  );
}
