import React from 'react'

function ChatUser() {
    return (
        <div className='flex space-x-6 items-center justify-center bg-gray-800 hover:bg-gray-600 duration-300'>
            <div className="avatar avatar-online">
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-xl'>navjot</h1>
                <span className='text-sm'>Online</span>
            </div>
        </div>
    )
}
export default ChatUser