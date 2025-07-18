import React, { useEffect } from 'react'
import { UseSocketContext } from './socketContext'
import useConversation from '../Zustand/useConversation.js'
import sound from "../assets/notification.mp3"

const useGetSocketMessage=() =>{
    const {socket}=UseSocketContext()
    const {messages, setMessage}=useConversation()

    useEffect(()=>{
        socket.on("newMessage",(data)=>{
            const notification = new Audio(sound);
            notification.play();
            setMessage([...messages,data])
        });
        return ()=>{
            socket.off("newMessage");
        };
    },[socket, messages, setMessage])
    
}

export default useGetSocketMessage