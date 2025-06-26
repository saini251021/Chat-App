import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";
function Logout() {
    return (
        <div>
            <div>
                <button ><AiOutlineLogout className="hover:bg-gray-600 duration-300 ease-in-out cursor-pointer rounded-full text-5xl ml-2 p-2" /></button>
            </div>
        </div>
    )
}

export default Logout
