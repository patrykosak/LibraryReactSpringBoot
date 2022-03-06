import React,{useState, useEffect} from 'react'
import axios from 'axios'
import BookList from '../components/BookList';
import { Row,Col } from 'react-bootstrap';
import Filters from '../components/Filters';
import AppPagination from '../components/AppPagination';
import { Loading } from '../components/Loading';
import SearchBar from '../components/SearchBar';
import Select from 'react-select'

const Books = () => {
    const [books,setBooks] = useState([]);
    const [info,setInfo] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [searchQuery,setSearchQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const [filteringCategory, setFilteringCategory] = useState("")
    const [filteringPublishingHouse, setFilteringPublishingHouse] = useState("")
    const [booksPerPage, setBooksPerPage] = useState(15)

    const options = [
        {value: 15, label:15},
        {value: 30, label:30},
        {value: 45, label:45}
      ]

    const fetchBooks = async() => {
        await axios.get(`http://localhost:8090/books?pageNumber=${pageNumber}&pageSize=${booksPerPage}&searchQuery=${searchQuery}&category=${filteringCategory}&publishingHouse=${filteringPublishingHouse}`).then((response)=>{
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
      <Row>
          <Col className="col-lg-3 col-12"></Col>
          <Col className='col-lg-8 col-12'>      <SearchBar style={"input-group  mt-3 mx-4 w-100"} pHolder="Szukaj książki" setSearchQuery={setSearchQuery} /></Col>
      </Row>

    <Row>
        <Col className="col-lg-3 col-12">
            <Filters setFilteringCategory={setFilteringCategory} setFilteringPublishingHouse={setFilteringPublishingHouse} />
            <h5 className='text-center mx-5'>Liczba książek na stronę</h5>
            <Select className='mx-5 w-75' options={options} placeholder={booksPerPage}/>
            </Col>
        <Col className="mx-4 col-lg-8 col-12">
            <BookList books={books}/>
        <AppPagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
        </Col>
    </Row>
    

    </>
  )
}

export default Books