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
    const [searchQuery,setSearchQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const [filteringCategory, setFilteringCategory] = useState("")
    const [filteringPublishingHouse, setFilteringPublishingHouse] = useState("")

    const fetchBooks = async() => {
        await axios.get(`http://localhost:8090/books?pageNumber=${pageNumber}&pageSize=2&searchQuery=${searchQuery}&category=${filteringCategory}&publishingHouse=${filteringPublishingHouse}`).then((response)=>{
            setIsLoading(false)
            setBooks(response.data.content)
            setInfo(response.data)
            console.log(response.data)
        })

    }
    useEffect(()=>{
        fetchBooks()
    },[pageNumber, searchQuery, filteringCategory, filteringPublishingHouse])

    if(isLoading) return <Loading />

    return (
      <>
      <SearchBar style="input-group  mt-3 m-auto w-50" pHolder="Szukaj książki" setSearchQuery={setSearchQuery} />
    <Row>
        <Col className="col-lg-3 col-12"><Filters setFilteringCategory={setFilteringCategory} setFilteringPublishingHouse={setFilteringPublishingHouse} /></Col>
        <Col className="mx-4 col-lg-8 col-12"><BookList books={books}/></Col>
    </Row>
    <AppPagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
    </>
  )
}

export default Books