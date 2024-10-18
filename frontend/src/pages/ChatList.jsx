import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import ChatBox from "../components/chatBox";
import "./ChatList.css";
import Chat from "../API/chatRequests";

function ChatList() {
  const location = useLocation();
  const user = location.state?.user; // Access the user object from the state

  const [details, setDetails] = useState(null);
  const [messages, setMessages] = useState(null);

  const getChats = async () => {
    try {
      if (!user) {
        console.log("No user data found.");
        return;
      }
      const res = await Chat.post(`/fetchchats/${user._id}`);
      console.log(res.data);
      setDetails(res.data); // Set the details state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChats(); // Fetch chats if user data is present
  }, [user]);

  return (
    <div className="chatlist"> {/* Main container with 'chatlist' class */}
      <div className="chats"> {/* Chat list container */}
        <div className="header">
            <h1>Chats</h1>
            <div>{<IoSend/>}</div>
        </div>
        <input type="text" className="search" placeholder="Search chats..." /> {/* Search bar */}
        {details &&
          details.map((e, index) => (
            <ChatBox
              key={index}
              chatName={e.chatName}
              latestMessage={e.latestMessage}
              chatMembers={e.users}
              chatId={e._id}
            />
          ))}
      </div>
      <div className="chatarea"> {/* Chat area container */}
        <div className="messages"> {/* Messages container */}
            {messages||<p>Select a chat to start messaging</p>}
        </div>
        {messages && <div className="type-message"> {/* Message input area */}
            <textarea
                className="message-box"
                placeholder="Type a message..."
            />
            <button className="send-btn">{<IoSend size="1.7em"/>}</button>
        </div>}
      </div>
    </div>
  );
}

export default ChatList;
