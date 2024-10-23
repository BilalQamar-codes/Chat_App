import React from 'react'

function Message({message,time}) {
  return (
    <div>
      <p>{message}</p>
      <p>{time}</p>
    </div>
  )
}

export default Message
