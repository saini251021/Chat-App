import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import { CiMenuFries } from "react-icons/ci";
import useConversation from "../../Zustand/useConversation.js";
import { useAuth } from "../../context/Authprovider.jsx";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className='bg-slate-900 text-gray-300'>
              <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost drawer-button lg:hidden absolute left-5 mt-3"
              >
                <CiMenuFries className="text-white text-xl" />
              </label>
              <Chatuser />
              <div className='flex-1 overflow-y-auto'
                style={{ minHeight: "calc(88vh - 8vh)" }}>
                <Messages />
              </div>
              <Typesend />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  // console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.name}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};