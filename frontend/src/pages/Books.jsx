import React,{useState, useEffect} from 'react'
import axios from 'axios'
import BookList from '../components/BookList';
import { Row,Col } from 'react-bootstrap';
import Filters from '../components/Filters';

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
    <Row>
        <Col xs={4}><Filters /></Col>
        <Col xs={8}><BookList books={books}/></Col>
    </Row>
  )
}

export default Books