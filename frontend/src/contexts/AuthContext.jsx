import React, {createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode"

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const[authTokens, setAuthTokens] = useState(null)


    const loginUser = (aTokens, userDetails) => {

        //localStorage.getItem('authTokens')
        setAuthTokens(aTokens)
        setUser(jwt_decode(userDetails))
        localStorage.setItem('authTokens',JSON.stringify(aTokens))
        console.log(user)
    }

    const contextData = {
        user: user,
        loginUser: loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
} 
