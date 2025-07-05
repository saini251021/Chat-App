import React, { useState } from "react"
import Left from "./home/leftpart/Left"
import Right from "./home/rightpart/Right"
import "./index.css"
import SignUp from "./components/signUp"
import Login from "./components/login"
import { useAuth } from "./context/Authprovider"
import { Navigate, Route, Routes } from "react-router-dom"
function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log("Auth User:", authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={authUser? (<div className="flex h-screen">
          <Left />
          <Right />
        </div>) : (<Navigate to={"/login"}/>)} />

        <Route path="/signup" element={authUser? <Navigate to="/"/>:<SignUp /> }/>
        <Route path="/login" element={authUser? <Navigate to="/"/>:<Login/>} />
      </Routes>
      
    </>

  )
}
export default App
