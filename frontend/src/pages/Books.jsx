import React,{useState, useEffect} from 'react'
import axios from 'axios'
const Books = () => {
    const [books,setBooks] = useState([]);
    
    const fetchBooks = async() => {
        await axios.get("http://localhost:8090/books").then((response)=>{
            setBooks(response.data)
            console.log(books)
        })
    }
    useEffect(()=>{
        fetchBooks()
    },[])
  return (
    <div>Books</div>
  )
}

export default Books