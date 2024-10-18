import React from "react";
import "./chatBox.css";
import img from "../images/img.jpeg";

function ChatBox(params) {
  const details = params.details;
  return (
    <div className="chat-container">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <var />
      <div className="details">
        <div className="name">{details.name}</div>
        {details.lastMessege}&&{<div className="last-messege">{details.latestMessege}</div>}
      </div>
    </div>
  );
}

export default ChatBox;
