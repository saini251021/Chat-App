import React from 'react';

function MessageComp({ Memo }) {
    const authUser= JSON.parse(localStorage.getItem("user"))
    const itsMe= Memo.senderId === authUser.user._id;

    // console.log("Memo.senderId", Memo.senderId)
    const chatName=itsMe? "chat-end":"chat-start";
    const chatColor= itsMe? "bg-blue-500" :"bg-gray-800"
    const createdAt = new Date(Memo.createdAt)
    const formattedTime= createdAt.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    })

    return (
        <>        
            <div>
                <div className='p-4'>
                    <div className={`chat ${chatName}`}>
                        <div className={`chat-bubble text-white ${chatColor}`}>{Memo.message}</div>  
                        <div className='chat-footer'>{formattedTime}</div>                        
                    </div>
                    
                    {/* <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default MessageComp
