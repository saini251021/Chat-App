import React, { useState } from 'react'
import useConversation from '../Zustand/useConversation.js'
import axios from 'axios'
const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessage, selectedConversation } = useConversation()
    const sendMessage= async (message) => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    // console.log("message : ", message)
                    const res = await axios.post(`http://localhost:4002/message/send/${selectedConversation._id}`,{message}, { withCredentials: true })
                    setMessage([...messages,res.data.newMessage])
                    setLoading(false);
                    // console.log("message send successfully",res.data)
                }
                catch (error) {
                    console.log("Error in sending messages : " + error)
                    setLoading(false)
                }
            }
        }
    return {loading, sendMessage}
}

export default useSendMessage