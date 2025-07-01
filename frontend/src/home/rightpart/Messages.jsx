import React from 'react'
import MessageComp from './MessageComp'

function Messages() {
    return (
        <div className='my-2 flex-1 no-scrollbar overflow-y-auto' style={{maxHeight: "calc(89vh - 8vh)"}}>
            <MessageComp/>
            <MessageComp/>
            <MessageComp/>
            <MessageComp/>
            <MessageComp/>
            <MessageComp/>
            <MessageComp/>
            <MessageComp/>

            <MessageComp/>
            <MessageComp/>
            <MessageComp/>


           
            <MessageComp/>

        </div>
    )
}

export default Messages
