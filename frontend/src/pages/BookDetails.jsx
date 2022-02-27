import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const BookDetails = () => {
    const[book, setBook] = useState([])

    const params = useParams();

    const fetchBook = async () => {
        await axios.get(`http://localhost:8090/books/${params.id}`).then(res=>{
        setBook(res.data)
        })
    }

    useEffect(()=>{
        fetchBook()
    },[])
  return (
    <div className="m-4">
    <Row>
        <Col xs={12} md={5}>
        <img
      src={book.url}
      className='img-thumbnail'
      alt='...'
      style={{ maxWidth: '24rem' }}
    />
        </Col>
        <Col xs={12} md={7}>
            <h1>{book.title}</h1>
        </Col>
        </Row>
        </div>
  )
}

export default BookDetails