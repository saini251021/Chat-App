import React, { useEffect, useRef } from 'react'
import MessageComp from './MessageComp'
import useGetMessages from '../../context/useGetMessages.jsx'
import Loading from '../../components/loading.jsx';

function Messages() {
    const { loading, messages } = useGetMessages();
    // console.log("in message jsx ", messages)

    const lastMesRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            if (lastMesRef.current) {
                lastMesRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100)
    }, [messages])
    return (
        <div
            className="my-2 flex-1 no-scrollbar overflow-y-auto"
            style={{ maxHeight: "calc(89vh - 8vh)" }}
        >
            {loading ? (
                <Loading />
            ) : (
                messages.length > 0 &&
                messages.map((Memo) => {
                    // console.log("Memeo", Memo)
                    return <div key={Memo._id} ref={lastMesRef}> <MessageComp  Memo={Memo} /></div>
                    
                })
            )}
            {!loading && messages.length === 0 && (
                <div>
                    <p className="text-center mt-[20%]">
                        Say! Hi to start the conversation
                    </p>
                </div>
            )}
        </div>

    )
}

export default Messages
