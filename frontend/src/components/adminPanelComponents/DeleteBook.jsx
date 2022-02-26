import React, { useEffect, useState } from 'react'
import { Row, Form, Alert,Button,Col } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select';

const DeleteBook = () => {
    const [disabledButton, setDisabledButton] = useState(true)
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState([])
    const [feedback, setFeedback] = useState(null)
  
    const fetchData = async () => {
        await axios.get("http://localhost:8090/books/all").then((res)=>{
            const options = res.data.map((b)=>{
                return {value: b.isbn, label: b.title}
            })
            setBooks(options)
        })
    }

    useEffect(()=>{
        fetchData()
    })

    const deleteBook = async (e) => {
        e.preventDefault()

        axios.delete(`http://localhost:8090/books/${selectedBook.value}`).then(res=>{
            console.log(res)
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Książka została usunięta!
                </Alert>
            )
        else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się usunąć książki!
                </Alert>
            )
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                                    Istnieją wypożyczenia tej książki!
                    Najpierw usuń te wypożyczenia
            </Alert>
        )
        })
    }

    const selectBookHandler = (e) => {
        setSelectedBook(e)
        setDisabledButton(false)
        setFeedback([])
    }

    return (
    <div className="m-3">
    <Form onSubmit={(e)=> deleteBook(e)}>
        <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectBookHandler(e)} options={books} placeholder="Książka" />
                    </Col>
                </Row>
                {feedback}
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-danger" type="submit" disabled={disabledButton}>
                            Usuń książkę
                        </Button>
                    </div>
    </Form>
</div>
  )
}

export default DeleteBook