import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from '../../context/userGetAllUsers';
import useConversation from '../../Zustand/useConversation.js';
import toast from 'react-hot-toast';
function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    })

    // console.log("conversation",conversation);
    // console.log("search",search);

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("User not found");
      setSearch("");
    }

  }


  return (
    <div className='h-10vh'>
      <div className='px-6 py-4'>
        <form onSubmit={handleSubmit}>
          <div className='flex space-x-3'>
            <label className=" border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button ><FaSearch className="hover:bg-gray-600 duration-300 ease-in-out rounded-full text-5xl p-2" /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search
