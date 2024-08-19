import React from "react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="input"
      />
      <Link to={`/chat/${roomName}`} className="button button_primary button_m">
        Join room
      </Link>
    </div>
  );
};

export default Chat;
