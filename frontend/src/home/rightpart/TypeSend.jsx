import React from 'react'
<input type="text" placeholder="Type here" className="input" />
import { IoSendSharp } from "react-icons/io5";

function TypeSend() {
    return (
        <div className="flex text-center space-x-2 h-[8vh]">
            <div className="w-[70%]">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                />
            </div>
            <button className="btn btn-primary p-2">
                <IoSendSharp className="text-2xl" />
            </button>
        </div>
    )
}

export default TypeSend
