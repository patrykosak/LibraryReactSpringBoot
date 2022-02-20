import React,{useState, useEffect} from 'react'
import axios from 'axios'
import BookList from '../components/BookList';
import { Row,Col } from 'react-bootstrap';
import Filters from '../components/Filters';
import AppPagination from '../components/AppPagination';

const Books = () => {
    const [books,setBooks] = useState([]);
    const [info,setInfo] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const fetchBooks = async() => {
        await axios.get(`http://localhost:8090/books?pageNumber=${pageNumber}`).then((response)=>{
            setBooks(response.data.content)
            setInfo(response.data)
            console.log(response.data)
        })
    }
    useEffect(()=>{
        fetchBooks()
    },[pageNumber])
  return (
      <>
    <Row>
        <Col xs={4}><Filters /></Col>
        <Col xs={8}><BookList books={books}/></Col>
    </Row>
    <AppPagination info={info}/>
    </>
  )
}

export default Books