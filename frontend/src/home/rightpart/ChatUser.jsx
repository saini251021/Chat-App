import React from 'react'
import useGetMessages from '../../context/useGetMessages'
import { UseSocketContext } from '../../context/socketContext';

function ChatUser() {
    const {selectedConversation}= useGetMessages()
    const {socket, onlineUsers}=UseSocketContext();
    const isOnline=onlineUsers.includes(selectedConversation._id)
    console.log("in chat user ",selectedConversation)
    console.log("isOnline",isOnline)
    return (
        <div className='flex space-x-6 items-center justify-center bg-gray-800 hover:bg-gray-600 duration-300'>
            <div className={`avatar avatar-${isOnline? "online":""}`}>
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-xl'>{selectedConversation ? selectedConversation.name : "hi"}</h1>
                <span className='text-sm'>{isOnline ? "Online":"offline"}</span>
            </div>
        </div>
    )
}
export default ChatUser