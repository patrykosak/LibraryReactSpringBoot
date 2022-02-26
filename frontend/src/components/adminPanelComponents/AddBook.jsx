import React, { useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'; 

const AddBook = () => {
    const[feedback,setFeedback] = useState([])
    const[ISBN, setISBN] = useState("")
    const[title, setTitle] = useState("")
    const[relaseYear, setRelaseYear] = useState(2000)
    const[amonut, setAmount] = useState(1)
    const[url, setUrl] = useState("")
    const[description, setDescription] = useState("")

    const addBookHandler = async (e) => {
        e.preventDefault()
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> addBookHandler(e)}>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="ISBN">
                    <Form.Control  onChange={(e) => setISBN(e.target.value)} type="text" placeholder="ISBN" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Tytuł">
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Tytuł" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Liczba książek">
                    <Form.Control onChange={(e) => setAmount(e.target.value)}  type="text" placeholder="Rok Liczba książek" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="link do zdjęcia okładki">
                    <Form.Control onChange={(e) => setUrl(e.target.value)}  type="text" placeholder="link do zdjęcia okładki" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Opis książki">
                    <Form.Control onChange={(e) => setDescription(e.target.value)}  type="text" placeholder="Opis książki" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Rok wydania">
                    <Form.Control onChange={(e) => setRelaseYear(e.target.value)}  type="text" placeholder="Rok wydania" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj Książkę
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddBook