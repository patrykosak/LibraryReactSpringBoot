import React, {createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const[user, setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    const[authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const[loading,setLoading] = useState(true)
    const[roles, setRoles] = useState([])

    const navigate = useNavigate()

    const loginUser = (aTokens, userDetails) => {
        setAuthTokens(aTokens)
        setUser(jwt_decode(userDetails))
        setRoles(user.roles)
        localStorage.setItem('authTokens',JSON.stringify(aTokens))
        console.log(user)
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        setRoles(null)
        localStorage.removeItem('authTokens')
        navigate("/")
    }

    const updateToken = async () => {
        console.log('Update token called')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.refresh_token}`
        }

        await axios.get("http://localhost:8090/api/token/refresh",{headers:headers}).then(res=>{
        if(res.status === 200){
        setAuthTokens(res.data)
        setUser(jwt_decode(res.data.access_token))
        setRoles(user.roles)
        localStorage.setItem('authTokens',JSON.stringify(res.data))
        }
        else{
            setAuthTokens(null)
            setUser(null)
            localStorage.removeItem('authTokens')
        }
    })
    }

    const contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        roles: roles
    }

    useEffect(()=>{


        const minutes = 1000 * 60 * 9
       let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        },minutes)
        return () => clearInterval(interval)

    },[authTokens,loading])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
} 
