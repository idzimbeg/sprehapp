import React, { useState } from "react";
import CurrentDate from "../component/CurrentDate";

import "./ChatRoom.css";
import useChat from "../useChat";

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat({ roomId });
  const [newMessage, setNewMessage] = useState([]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room">
      <div className="chat-room-container">
        <h1 className="room-name">Room: {roomId}</h1>
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, id) => (
              <li
                key={id}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {" "}
                {message.body}
                <CurrentDate />
              </li>
            ))}
          </ol>
        </div>
        <div className="conversational-item">
          <textarea
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="..."
            className="new-message-input-field"
          />
          <button onClick={handleSendMessage} className="send-message-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
