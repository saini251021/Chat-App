import React from 'react'
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <div className='px-6 py-4'>
      <form action="">
        <div className='flex space-x-3'>
            <label className="border-[1px] p-3 rounded-lg flex items-center gap-2 w-[80%]">
                <input type="text" className='grow outline-none ' required placeholder="Search" />
            </label>
            <button ><FaSearch className="hover:bg-gray-600 duration-300 ease-in-out rounded-full text-5xl p-2"/></button>
        </div>
      </form>
    </div>
  )
}

export default Search
