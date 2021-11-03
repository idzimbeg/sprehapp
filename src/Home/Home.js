import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = ({ onIdSubmit }) => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const idRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    onIdSubmit(idRef.current.value);
    console.log(idRef);
  }

  return (
    <div className="center">
      <h1>Welcome to Sprehapp</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <input
            type="text"
            //   placeholder="Room Name"
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-input-filed"
            required="required"
          />
          <span>Room Name</span>
        </div>
        <div className="inputbox">
          <input
            type="text"
            ref={idRef}
            className="text-input-filed"
            required="required"
          />
          <span>Username</span>
        </div>
        <Link to={`/${roomName}`} className="inputbox">
          <button type="button" onClick={onIdSubmit}>
            Join Room
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
