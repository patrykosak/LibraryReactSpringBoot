import React, { useEffect, useState } from 'react'
import { Row, Form, Alert,Button,Col } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select';


const DeleteAuthor = () => {
    const[authors,setAuthors] = useState([])
    const[feedback,setFeedback] = useState([])
    const[disabledButton,setDisabledButton] = useState(true)

    const deleteAuthorHandler = async (e) => {
        e.preventDefault()
        
    }

    const selectAuthorHandler = () => {

    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> deleteAuthorHandler(e)}>
        <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectAuthorHandler(e)} options={authors} placeholder="Autor" />
                    </Col>
                </Row>
                {feedback}
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-danger" type="submit" disabled={disabledButton}>
                            Usuń autora
                        </Button>
                    </div>
    </Form>
</div>
  )
}

export default DeleteAuthor