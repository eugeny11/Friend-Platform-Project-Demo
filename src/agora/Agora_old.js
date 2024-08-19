import { useState } from "react";

import VideoCall from "./VideoCall";

function Agora() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="content successfull-fill">
      <div>
        {inCall ? (
          <VideoCall setInCall={setInCall} />
        ) : (
          <button
            onClick={() => setInCall(true)}
            className="button button_primary button_l"
          >
            Join Call
          </button>
        )}
      </div>
    </div>
  );
}

export default Agora;
