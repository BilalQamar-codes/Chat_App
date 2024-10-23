import React from "react";
import "./chatBox.css";
import img from "../images/img.jpeg";

function ChatBox({chatId, chatName, latestMessage, chatMembers, onClick }) {
  const id = chatId;
  const users = chatMembers;
  // console.log(users);
  return (
    <div className="chat-container" onClick={onClick}>
      <div className="img">
        <img src="" alt="Chat" />
      </div>
      <div className="details">
        <div className="name">{chatName}</div>
        {latestMessage && <div className="last-message">{latestMessage}</div>}
      </div>
    </div>
  );
}

export default ChatBox;
