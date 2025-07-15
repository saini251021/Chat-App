import React, { useEffect, useState } from 'react'
import useConversation from '../Zustand/useConversation'
import axios from 'axios'
const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessage, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const res = await axios.get(`http://localhost:4002/message/prev/${selectedConversation._id}`,{ withCredentials: true })
                    setMessage(res.data)
                    setLoading(false)
                    // console.log("selectedConversation", selectedConversation)
                }
                catch (error) {
                    console.log("Error in getting messages : " + error)
                    setLoading(false)
                }
            }
        }
        getMessage()
    },[selectedConversation, setMessage])
    return {loading, messages, selectedConversation}
}

export default useGetMessages
