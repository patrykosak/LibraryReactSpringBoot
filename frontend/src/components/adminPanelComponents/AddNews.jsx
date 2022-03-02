import React, { useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'

const AddNews = () => {
    const[feedback, setFeedback] = useState([])
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");

    const addNewsHandler = async (e) => {
        e.preventDefault()


    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> addNewsHandler(e)}>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Tytuł">
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Tytuł" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Treść">
                    <Form.Control style={{height: "250px"}} as="textarea" rows={6} onChange={(e) => setContent(e.target.value)}  type="text" placeholder="Treść"/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj post
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddNews