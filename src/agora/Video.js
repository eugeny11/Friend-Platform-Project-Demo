import { AgoraVideoPlayer } from "agora-rtc-react";

// import { useState, useEffect } from "react";

export default function Video(props) {
  const { users, tracks } = props;
  return (
    <>
      <div id="local_videos">
        <AgoraVideoPlayer
          className="vid"
          videoTrack={tracks[1]}
          style={{ height: "600px", width: "100%" }}
        />
      </div>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <div id="videos">
                <AgoraVideoPlayer
                  className="vid"
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "600px", width: "100%" }}
                />
              </div>
            );
          } else return null;
        })}
    </>
  );
}
