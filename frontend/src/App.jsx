import React, { useState } from "react"
import Left from "./home/leftpart/Left"
import Right from "./home/rightpart/Right"
import "./index.css"
import SignUp from "./components/signUp"
import Login from "./components/login"
import { useAuth } from "./context/Authprovider"
import { Navigate, Route, Routes } from "react-router-dom"
import Loading from "./components/loading"
import { Toaster } from 'react-hot-toast';




function App() {
  const [authUser, setAuthUser] = useAuth()
  // console.log("Auth User:", authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? (
          // <div className="flex h-screen">
          //   <Left />
          //   <Right />
          // </div>
          <div className="drawer lg:drawer-open">
            <input
              id="my-drawer-2"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content flex flex-col items-center justify-center">
              <Right />
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu w-80 min-h-full bg-black text-base-content">
                <Left />
              </ul>
            </div>
          </div>
        ) : (<Navigate to={"/login"} />)} />

        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
      </Routes>
      {/* <Loading/> */}
      <Toaster />
    </>

  )
}
export default App
