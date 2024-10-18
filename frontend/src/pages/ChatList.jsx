import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatBox from '../components/chatBox';
import './ChatList.css';
import Chat from '../API/chatRequests';

function ChatList() {
    const location = useLocation();
    const user = location.state?.user; // Access the user object from the state

    const [details, setDetails] = useState([]);

    const getChats = async () => {
        try {
            if (!user) {
                console.log("No user data found.");
                return;
            }
            const res = await Chat.post(`/fetchchats/${{id: user.id }}`); // Pass the user ID correctly
            setDetails(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        if (user) {
            console.log("User data:", user); // Check if the user data is available
            getChats(); // Fetch chats if user data is present
        }
    }, []);
    
    return (
        <div>
            {details && details.map((e, index) => (
                <ChatBox key={index} {...e} />
            ))}
        </div>
    );
}

export default ChatList;
