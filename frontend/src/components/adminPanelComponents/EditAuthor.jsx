import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Form, Alert,Button,Col,FloatingLabel } from 'react-bootstrap'
import Select from 'react-select';


const EditAuthor = () => {
    const[feedback, setFeedback] = useState([])
    const[authors, setAuthors] = useState([])
    const[selectedAuthor, setSelectedAuthor] = useState(null)
    const[name, setName] = useState("")
    const[surname, setSurname] = useState("")
    const[nationality, setNationality] = useState("")
    const[disabledButton, setDisabledButton] = useState(true)

    const updateAuthor = async (e) => {
        e.preventDefault()
    }

    const selectAuthorHandler = (e) => {

    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> updateAuthor(e)}>
        <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectAuthorHandler(e)} options={authors} placeholder="Autor" />
                    </Col>
                </Row>
                
                {selectedAuthor ? (<>
                    <Row className="mb-3">
                        <h6>Autor</h6>
                        <hr />
                        {feedback}
                    <Form.Group as={Col} xs={12} md={12} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa kategorii">
                            <Form.Control onChange={(e) => {setName(e.target.value); setDisabledButton(false)}} value={name} type="text" placeholder="Nazwa kategorii" required />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-primary" type="submit" disabled={disabledButton}>
                            Edytuj autora
                        </Button>
                    </div>
                </>) : null}
    </Form>
</div>
  )
}

export default EditAuthor