import React, { useEffect, useState } from 'react'
import AppCarousel from '../components/AppCarousel'
import News from '../components/News'
import axios from 'axios'

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
    <div>
       <AppCarousel />
       {newses.map((news, index)=>{
         return <News key={index} news={news} />
       })}
    </div>
  )
}

export default MainPage