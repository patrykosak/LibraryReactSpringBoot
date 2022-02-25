import React, { useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col } from 'react-bootstrap'
import axios from 'axios'


const AddAuthor = () => {
    const[name, setName] = useState("")
    const[surname, setSurname] = useState("")
    const[nationality, setNationality] = useState("")

    const addAuthorHandler = async (e) =>{
        e.preventDefault();

        const newAuthor = {
            name: name,
            surname: surname,
            nationality: nationality
        }

        await axios.post("http://localhost:8090/authors", newAuthor).then((res)=>{
            console.log(res)
        })

    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> addAuthorHandler(e)}>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Imię">
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Imię" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Nazwisko">
                    <Form.Control onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Nazwisko" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Narodowość">
                    <Form.Control onChange={(e) => setNationality(e.target.value)} type="text" placeholder="Narodowość" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj autora
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddAuthor