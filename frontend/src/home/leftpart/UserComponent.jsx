import React from 'react'

function UserComponent() {
    return (
        <div className='flex space-x-4 px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
            <div className="avatar avatar-online">
                <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
            <div>
                <h1 className='font-bold'>navjot</h1>
                <span>nav@dev.com</span>
            </div>
        </div>
    )
}

export default UserComponent
