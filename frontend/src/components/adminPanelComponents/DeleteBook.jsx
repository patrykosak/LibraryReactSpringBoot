import React, { useEffect, useState } from 'react'
import { Row, Form, Alert,Button,Col } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select';

const DeleteBook = () => {
    const [disabledButton, setDisabledButton] = useState(true)
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState([])
    const [feedback, setFeedback] = useState(null)
  
    const deleteBook = async (e) => {
        e.preventDefault()
    }

    const selectBookHandler = () => {
        
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