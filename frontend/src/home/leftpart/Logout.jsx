import React, { useState } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from "react-hot-toast"

function Logout() {
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await axios.post("http://localhost:4002/user/logout", {}, { withCredentials: true });
            localStorage.removeItem("user");
            console.log("logout res", response.data);
            Cookies.remove("jwt"); 
            setLoading(false); // Only works if cookie is accessible (non-HttpOnly)
            
            toast.success("logged out successfully")
            window.location.reload()
        } catch (error) {
            console.log("logout error", error);
        }
    }

    return (
        <div className='h-8vh bg-slate-800'>
            <div>
                <button onClick={handleLogout}><AiOutlineLogout className="hover:bg-gray-600 duration-300 ease-in-out cursor-pointer rounded-full text-5xl ml-2 p-2" /></button>
            </div>
        </div>
    )
}

export default Logout
