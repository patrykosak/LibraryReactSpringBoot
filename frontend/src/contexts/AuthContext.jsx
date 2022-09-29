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
    const[roles, setRoles] = useState(null)
    const[email,setEmail] = useState(null)

    const navigate = useNavigate()

    const loginUser = (aTokens, userDetails) => {
        setAuthTokens(aTokens)
        setUser(jwt_decode(userDetails))
        setRoles(jwt_decode(userDetails).roles)
        setEmail(jwt_decode(userDetails).sub)
        localStorage.setItem('authTokens',JSON.stringify(aTokens))
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        setRoles(null)
        setEmail(null)
        localStorage.removeItem('authTokens')
        navigate("/")
    }

    const updateToken = async () => {
        console.log('Update token called')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens?.refresh_token}`
        }

        await axios.get("http://localhost:8090/api/token/refresh",{headers:headers}).then(res=>{
        if(res.status === 200){
        setAuthTokens(res.data)
        setUser(jwt_decode(res.data.access_token))
        setRoles(user.roles)
        setEmail(user.sub)
        localStorage.setItem('authTokens',JSON.stringify(res.data))
        }
        else{
            setAuthTokens(null)
            setUser(null)
            setRoles(null)
            setEmail(null)
            localStorage.removeItem('authTokens')
        }
    }).catch((e)=>{
        setAuthTokens(null)
            setUser(null)
            setRoles(null)
            setEmail(null)
            localStorage.removeItem('authTokens')
    })
    if(loading){
        setLoading(false)
    }
    }

    const contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        roles: roles,
        email: email
    }

    useEffect(()=>{

        if(loading){
            updateToken()
        }

        const minutes = 1000 * 60 * 15
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
