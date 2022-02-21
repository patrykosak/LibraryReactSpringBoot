import React,{useState, useEffect} from 'react'
import axios from 'axios'
import BookList from '../components/BookList';
import { Row,Col } from 'react-bootstrap';
import Filters from '../components/Filters';
import AppPagination from '../components/AppPagination';
import { Loading } from '../components/Loading';
import SearchBar from '../components/SearchBar';

const Books = () => {
    const [books,setBooks] = useState([]);
    const [info,setInfo] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const fetchBooks = async() => {
        await axios.get(`http://localhost:8090/books?pageNumber=${pageNumber}&pageSize=2`).then((response)=>{
            setBooks(response.data.content)
            setInfo(response.data)
            setIsLoading(false)
            console.log(response.data)
        })
    }
    useEffect(()=>{
        fetchBooks()
    },[pageNumber])

    if(isLoading) return <Loading />

    return (
      <>
      <SearchBar />
    <Row>
        <Col xs={4}><Filters /></Col>
        <Col xs={8}><BookList books={books}/></Col>
    </Row>
    <AppPagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
    </>
  )
}

export default Books