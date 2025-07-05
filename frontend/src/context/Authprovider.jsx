import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext= createContext();


//all components defined in our app are termed as children over here
const Authprovider=({children})=>{ 
    const initialUserState=Cookies.get('jwt') || localStorage.getItem("ChatApp");

    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : null);   
    return(
        <AuthContext.Provider value={[ authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export default Authprovider;
export const useAuth=()=>useContext(AuthContext);