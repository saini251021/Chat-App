import { createContext, useEffect, useState } from "react";
import { useAuth } from "./Authprovider";
import io from "socket.io-client";
import { useContext } from "react";
const socketContext = createContext()

// it is a hook
export const useSocketContext=()=>{
    return useContext(socketContext)
}

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers]=useState([])
    const [authUser] = useAuth()

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:4002", {
                query: {
                    userId: authUser.user._id,
                },
                credentials: true
            });
            setSocket(socket)
            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users)
            });
            return()=> socket.close();
        }
        else {
            if (socket){
                socket.close();
                setSocket(null)
            }
        }
    }, [authUser]);

    return (
        <socketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </socketContext.Provider>
    )
};

export default SocketProvider