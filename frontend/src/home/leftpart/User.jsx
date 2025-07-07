import React from 'react'
import UserComponent from './UserComponent'
import useGetAllUsers from '../../context/userGetAllUsers'

function User() {
    const [allUsers, loading] = useGetAllUsers();
    console.log("all users in user component", allUsers)

    return (
        <div >
            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md '>
                Messages
            </h1>
            <div className='my-2 flex-1 no-scrollbar overflow-y-auto' style={{ maxHeight: "calc(78vh - 8vh)" }} >
                {allUsers.map((user, index) => (
                    <UserComponent key={index} user={user} />
                ))}
            </div>
        </div>
    )
}

export default User
