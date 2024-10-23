import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import ChatBox from "../components/chatBox";
import "./ChatList.css";
import Chat from "../API/chatRequests";
import Message from "../components/message";

function ChatList() {
  const location = useLocation();
  const user = location.state?.user; // Access the user object from the state

  const [details, setDetails] = useState(null);
  const [messages, setMessages] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null); // State for selected chat ID

  const getChats = async () => {
    try {
      if (!user) {
        console.log("No user data found.");
        return;
      }
      const res = await Chat.post(`/fetchchats/${user._id}`);
      setDetails(res.data); // Set the details state
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      const res = await Chat.get(`/fetchmessages/${chatId}`);
      setMessages(res.data); // Update the messages state
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  };

  const handleChatClick = (chatId) => {
    setSelectedChatId(chatId); // Set the selected chat ID
    fetchMessages(chatId); // Fetch messages for the selected chat
  };

  useEffect(() => {
    getChats(); // Fetch chats if user data is present
  }, [user]);

  return (
    <div className="chatlist"> {/* Main container with 'chatlist' class */}
      <div className="chats"> {/* Chat list container */}
        <div className="header">
          <h1>Chats</h1>
          <div><IoSend /></div>
        </div>
        <input type="text" className="search" placeholder="Search chats..." /> {/* Search bar */}
        {details ?
          (details.map((e, index) => (
            <ChatBox
              key={e._id}
              chatName={e.chatName}
              latestMessage={e.latestMessage}
              chatMembers={e.users}
              chatId={e._id}
              onClick={() => handleChatClick(e._id)} // Handle click on ChatBox
            />
          ))):(<p>send message to start chat</p>)}
      </div>
      <div className="chatarea"> {/* Chat area container */}
        <div className="messages"> {/* Messages container */}
          {messages ? (
            messages.map((msg, idx) => (
              <Message
                key={idx}
                message={msg.message}
                time={msg.timestamp}
              />
            ))
          ) : (
            <p>Select a chat to start messaging</p>
          )}
        </div>
        {selectedChatId && (
          <div className="type-message"> {/* Message input area */}
            <textarea
              className="message-box"
              placeholder="Type a message..."
            />
            <button className="send-btn"><IoSend size="1.7em" /></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatList;
