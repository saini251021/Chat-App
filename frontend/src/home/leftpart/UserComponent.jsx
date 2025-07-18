import React from 'react'
import useConversation from '../../Zustand/useConversation.js'
import { UseSocketContext } from '../../context/socketContext.jsx';


function UserComponent({ user }) {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const {socket, onlineUsers}=UseSocketContext();
    const isOnline=onlineUsers.includes(user._id)

    return (
        <div
            className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""
                }`}
            onClick={() => setSelectedConversation(user)}
        >
            <div className='flex space-x-4 px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
                <div className={`avatar avatar-${isOnline?"online":""}`}>                    
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>{user.name}</h1>
                    <span>{user.email}</span>
                </div>
            </div>
        </div>
    )
}

export default UserComponent
