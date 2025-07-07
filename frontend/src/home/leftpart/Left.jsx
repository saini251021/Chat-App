import React from 'react'
import Search from './Search';
import User from './User';
import Logout from './Logout';

function Left() {
  return (
    <div className="w-[30%] bg-black text-gray-300">
        <Search/>
        <div className='flex-1overflow-y-auto'
        style={{ minHeight: "calc(78vh - 8vh)" }}>
          <User/>
        </div>
        <Logout/>
    </div>
  )
}

export default Left;