import React, { useEffect, useState } from 'react'
import AppCarousel from '../components/AppCarousel'
import News from '../components/News'
import axios from 'axios'
import Chat from '../components/Chat'

const MainPage = () => {
  const[newses,setNewses] = useState([])

  const fetchData = async () => {
    await axios.get("http://localhost:8090/news").then(res=>{
      setNewses(res.data)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div  style={{minHeight:"75vh"}}>
       <AppCarousel />
       {newses.map((news, index)=>{
         return <News key={index} news={news} />
       })}
       <Chat />
    </div>
  )
}

export default MainPage