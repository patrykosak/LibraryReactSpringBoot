import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const BookDetails = () => {

    const {roles} = useContext(AuthContext)
    const navigate = useNavigate();
    const[book, setBook] = useState([])
    const [show, setShow] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      if(roles){
      setShow(true)
      }
      else{
        navigate("/login")
      }
    };

    const {email} = useContext(AuthContext)

    const params = useParams();

    const handleBorrow = async () => {
      
      const current = new Date();
      const date = `${current.getDate()}/0${current.getMonth()+1}/${current.getFullYear()}`;

      const borrow = {
        status: "W trakcie realizacji",
         reader: {
            email: email
         },
        book: {
          isbn: params.id
        }
      }
      console.log(borrow)
      
      await axios.post("http://localhost:8090/borrows",borrow).then(res=>{
        console.log(res)
      })
      }
    

    const fetchBook = async () => {
        await axios.get(`http://localhost:8090/books/${params.id}`).then(res=>{
        setBook(res.data)
        if(res.data.amount>=1){
          setDisabledButton(false)
        }
        })
    }

    useEffect(()=>{
        fetchBook()
    },[])

  return (
    <div  style={{minHeight:"75vh"}} className="m-4">
    <Row>
        <Col xs={12} md={3}>
        <img
      src={book.url}
      className='img-thumbnail'
      alt='...'
      style={{ maxWidth: 'inherit' }}
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
            <Button onClick={()=>{handleShow()}} className='w-25' disabled={disabledButton}>Wypożycz</Button>
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
          <Button variant="primary" onClick={handleBorrow}>
            Wypożycz
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
  )
}

export default BookDetails