import React, { useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'

const AddPublishingHouse = () => {
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const[feedback,setFeedback] = useState([])

    const AddPublishingHouseHandler = async (e) => {
        e.preventDefault();

        const newPublishingHouse = {
            name: name,
            city: city
        }

        axios.post("http://localhost:8090/publishinghouses", newPublishingHouse).then((res)=>{
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Wydawnictwo zostało dodane!
                </Alert>
            )
        else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się dodać wydawnictwa!
                </Alert>
            )
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                Nie udało się dodać wydawnictwa!
            </Alert>
        )
        
        })
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> AddPublishingHouseHandler(e)}>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Nazwa wydawnictwa">
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Nazwa wydawnictwa" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Miasto">
                    <Form.Control onChange={(e) => setCity(e.target.value)} type="text" placeholder="Miasto" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj Wydawnictwo
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddPublishingHouse