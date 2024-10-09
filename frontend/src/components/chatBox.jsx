import React from 'react'
import './chatBox.css'
import img from '../images/img.jpeg'

function ChatBox(params) {
    console.log(params.details)
    return(
        <div className='chat-container'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <var />
            <div className='details'>
                <div className="name">
                    {params.details.name}
                </div>
                <div className="last-messege">
                    {params.details.latestMessege}
                </div>
            </div>
        </div>
    )
}

export default ChatBox;