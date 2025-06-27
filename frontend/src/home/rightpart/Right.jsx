import React from 'react'
import ChatUser from './ChatUser';
import Messages from './Messages';
import TypeSend from './TypeSend';

function Right() {
  return (
    <div className='w-[70%] bg-slate-900 text-gray-300'>
      <ChatUser/>
      <Messages/>
      <TypeSend/>
    </div>
  )
}

export default Right;