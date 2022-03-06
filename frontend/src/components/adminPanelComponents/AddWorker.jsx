import React, { useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'

const AddWorker = () => {
    const[feedback,setFeedback] = useState([]);
    const[name,setName] = useState("")
    const[surname,setSurname] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[confirmPassword,setConfirmPassword] = useState("")

    const clearNotification = () =>{
        setFeedback([])
    }

    const addWorkerHandler = async (e) => {
        e.preventDefault()

        if(password===confirmPassword){

        const newWorker = {
            name: name,
            surname: surname,
            email: email,
            password: password
        }

        await axios.post("http://localhost:8090/api/user/worker/save",newWorker).then(res=>{
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Pracownik został dodany!
                </Alert>
            )
            else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się dodać pracownika!
                </Alert>
            )
            const myTimeout = setTimeout(clearNotification, 5000);
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                 Użytkownik o podanym emailu już istnieje!
            </Alert>
        )
        const myTimeout = setTimeout(clearNotification, 5000);
        })
    
    }
    else{
        setFeedback(
            <Alert variant="danger">
               Hasła nie są takie same
            </Alert>
        )
    }
    }

  return (
      <div className="m-3">
    <Form onSubmit={(e)=> addWorkerHandler(e)}>
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
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj pracownika
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddWorker