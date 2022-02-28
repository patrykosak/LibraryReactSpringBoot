import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const BookDetails = () => {
    const[book, setBook] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <Col xs={12} md={3}>
        <img
      src={book.url}
      className='img-thumbnail'
      alt='...'
      style={{ maxWidth: '24rem' }}
    />
        </Col>
        <Col xs={12} md={9}>
            <div className='d-flex justify-content-center'>
            <h1>{book.title}</h1>
            </div>
            <hr/>
            <h5>ISBN: {book.isbn}</h5>
            <h5>Rok wydania: {book.releaseYear}</h5>
            <h5>Liczba dostępnych książek: {book.amount}</h5>
            <h5>Kategoria: {book?.category?.name}</h5>
            <h5>Autor: {book?.author?.name + " " + book?.author?.surname}</h5>
            <h5>Wydawnictwo: {book?.publishingHouse?.name}</h5>
            <div className='d-flex justify-content-center mt-4'>
            <p>{book.description}</p>
            </div>
            <div className='d-flex justify-content-end mt-3'>
            <Button onClick={()=>{handleShow()}} className='w-25'>Wypożycz</Button>
            </div>
        </Col>
        </Row>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wypożyczenie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Czy na pewno chcesz wypożyczyć tę książkę?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Wypożycz
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
  )
}

export default BookDetails