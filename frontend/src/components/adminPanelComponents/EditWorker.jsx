import React, { useEffect, useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'; 


const EditWorker = () => {
    const[feedback,setFeedback] = useState([]);
    const[name,setName] = useState("")
    const[surname,setSurname] = useState("")
    const[email,setEmail] = useState("")
    const[workers, setWorkers] = useState([])
    const[selectedWorker, setSelectedWorker] = useState(null)
    const[disabledButton,setDisabledButton] = useState(true)

    const fetchData = async () => {
        await axios.get("http://localhost:8090/api/users?role=WORKER").then(res=>{
            const options = res.data.map((w)=>{
                return {value: w.email, label: w.email, name: w.name, surname: w.surname }
            })
            setWorkers(options)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const updateWorkerHandler = async (e) => {
        e.preventDefault()

        const updatedWorker = {
            name: name,
            surname: surname,
            email: email
        }

        axios.put(`http://localhost:8090/api/user/update/${selectedWorker.value}`,updatedWorker).then(res=>{
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Pracownik został zedytowany!
                </Alert>
            )
        else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się zedytować pracownika!
                </Alert>
            )
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                Nie udało się zedytować pracownika!
            </Alert>
        )
    })
    }

    const selectWorkerHandler = (e) => {
        setSelectedWorker(e)
        setName(e.name)
        setSurname(e.surname)
        setEmail(e.value)
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> updateWorkerHandler(e)}>
    <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                    <Select onChange={(e)=>{selectWorkerHandler(e)}} options={workers} placeholder="Pracownik"/>
            </Form.Group>
        </Row>
        {selectedWorker?(<>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Imię">
                    <Form.Control value={name} onChange={(e) => {setName(e.target.value);setDisabledButton(false)}} type="text" placeholder="Imię" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Nazwisko">
                    <Form.Control value={surname} onChange={(e) => {setSurname(e.target.value);setDisabledButton(false)}} type="text" maxLength={50} placeholder="Nazwisko" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Email">
                    <Form.Control value={email} onChange={(e) => {setEmail(e.target.value);setDisabledButton(false)}} min={0} type="email" placeholder="Email" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit" disabled={disabledButton}>
                Edytuj pracownika
            </Button> 
        </div>
        </>):null}
    </Form>
</div>
  )
}

export default EditWorker