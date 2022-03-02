import React, { useEffect, useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'; 

const EditStudent = () => {
    const[feedback,setFeedback] = useState([]);
    const[name,setName] = useState("")
    const[surname,setSurname] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[confirmPassword,setConfirmPassword] = useState("")
    const[selectedClass,setSelectedClass] = useState("")
    const[students, setStudents] = useState([])
    const[selectedStudent, setSelectedStudent] = useState(null)

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

    const fetchData = async (e) => {
        axios.get("http://localhost:8090/api/users").then(res=>{
            const options = res.data.map(u=>{
                return {value: u.userId, label: u.email}
            })
            setStudents(options)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const updateStudentHandler = async (e) => {
        e.preventDefault()
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> updateStudentHandler(e)}>
    <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                    <Select onChange={(e)=>{setSelectedStudent(e)}} options={students} placeholder="Uczeń"/>
            </Form.Group>
        </Row>
        {selectedStudent?(<>
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
                <FloatingLabel controlId="floatingPassword" label="Tytuł">
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
                Edytuj ucznia
            </Button> 
        </div>
        </>):null}
    </Form>
</div>
  )
}

export default EditStudent