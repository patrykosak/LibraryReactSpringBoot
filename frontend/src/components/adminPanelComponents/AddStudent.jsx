import React, { useEffect, useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'; 

const AddStudent = () => {
    const[feedback,setFeedback] = useState([]);
    const[name,setName] = useState("")
    const[surname,setSurname] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[confirmPassword,setConfirmPassword] = useState("")
    const[selectedClass,setSelectedClass] = useState("")

    const clearNotification = () =>{
        setFeedback([])
    }


    const options = [
        {value:1, label:"1A"},
        {value:2, label:"1B"},
        {value:3, label:"2A"},
        {value:4, label:"2B"},
        {value:5, label:"3A"},
        {value:6, label:"3B"},
        {value:7, label:"4A"},
        {value:8, label:"4b"},
        {value:9, label:"5A"},
        {value:10, label:"5B"},
        {value:11, label:"6A"},
        {value:12, label:"6B"},
        {value:13, label:"7A"},
        {value:14, label:"7B"},
        {value:15, label:"8A"},
        {value:16, label:"8B"}

    ]

    const addStudentHandler = async (e) => {
        e.preventDefault();

        const newStudent = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            schoolClass: selectedClass
        }

        axios.post("http://localhost:8090/api/user/save", newStudent).then(res=>{
            
        if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Uczeń został dodany!
                </Alert>
            )
            else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się dodać ucznia!
                </Alert>
            )
            const myTimeout = setTimeout(clearNotification, 5000);
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                 Uczeń o podanym emailu już istnieje!
            </Alert>
        )
        const myTimeout = setTimeout(clearNotification, 5000);
        })
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> addStudentHandler(e)}>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Imię">
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Imię" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Nazwisko">
                    <Form.Control onChange={(e) => setSurname(e.target.value)} type="text" maxLength={50} placeholder="Nazwisko" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Email">
                    <Form.Control onChange={(e) => setEmail(e.target.value)} min={0} type="email" placeholder="Email" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Hasło">
                    <Form.Control onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Hasło" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Potwierdź hasło">
                    <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Potwierdź hasło" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                    <Select onChange={(e)=>{setSelectedClass(e.label)}} options={options} placeholder="Klasa"/>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj ucznia
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddStudent