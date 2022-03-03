import React, {createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode"
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const[authTokens, setAuthTokens] = useState(null)


    const loginUser = (aTokens, userDetails) => {
        setAuthTokens(aTokens)
        setUser(jwt_decode.apply(userDetails))
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
