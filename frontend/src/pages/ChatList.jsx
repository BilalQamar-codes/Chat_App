import React from 'react';
import ChatBox from '../components/chatBox';
import './ChatList.css';

function ChatList() {
    const details = {
        img: "D:\\Projects\\Chat App\\Chat_App\\frontend\\src\\images\\img.jpeg", 
        name: "Sheraz", 
        latestMessege: "hello"
    };
    
    return (
        <div className='chatlist'>
            <div className="chats">
                <input type="text" className='search' placeholder="Search..." />
                <ChatBox {...{details}} />
            </div>
            <div className="chatarea">
                <div className='messages'></div>
                <div className='type-message'>
                    <input type="text" title='message-box' className='message-box' placeholder="Type a message..." />
                </div>
            </div>
        </div>    
    );
}

export default ChatList;
