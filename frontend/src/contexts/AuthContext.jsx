import React, {createContext, useState, useEffect} from 'react'

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const[authTokens, setAuthTokens] = useState(null)

    const loginUser = async (e) => {
        let response
    }

    const contextData = {
        user
    }

    return(
        <AuthContext.Provider value={{'name':'patryk'}}>
            {children}
        </AuthContext.Provider>
    )
} 
