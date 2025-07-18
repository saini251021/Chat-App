import React, { useState } from 'react'
<input type="text" placeholder="Type here" className="input" />
import { IoSendSharp } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.jsx';

function TypeSend() {
    const [message, setMessage] = useState('')
    const { loading, sendMessage } = useSendMessage()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await sendMessage(message)
        setMessage("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex text-center space-x-2 h-[8vh] pl-5 ">
                <div className="w-[80%] text-black">
                    <input
                        value={message}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary p-2">
                    <IoSendSharp className="text-2xl" />
                </button>
            </div>
        </form>
    )
}

export default TypeSend
