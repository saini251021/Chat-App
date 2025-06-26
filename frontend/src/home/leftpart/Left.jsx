import React from 'react'
import Search from './Search';
import User from './User';
import Logout from './Logout';

function Left() {
  return (
    <div className="w-[30%] bg-black text-gray-300">
        <Search/>
        <User/>
        <Logout/>
    </div>
  )
}

export default Left;