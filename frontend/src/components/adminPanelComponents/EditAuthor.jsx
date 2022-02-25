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

    const fetchData = async () => {
        await axios.get("http://localhost:8090/authors").then((res)=>{
            const options = res.data.map((a)=>{
                return {value: a.authorId, label: a.name + " " + a.surname, name: a.name, surname: a.surname, nationality: a.nationality}
            })
            setAuthors(options)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const updateAuthor = async (e) => {
        e.preventDefault()

        const updatedAuthor = {
            name: name,
            surname: surname,
            nationality: nationality
        }

        axios.put(`http://localhost:8090/authors/${selectedAuthor.value}`,updatedAuthor).then((res)=>{
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Autor został zedytowany!
                </Alert>
            )
        else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się zedytować autora!
                </Alert>
            )
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                Nie udało się zedytować autora!
            </Alert>
        )
        })
    }

    const selectAuthorHandler = (e) => {
        setSelectedAuthor(e)
        setName(e.name)
        setSurname(e.surname)
        setNationality(e.nationality)
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
                        <FloatingLabel controlId="floatingPassword" label="Imię">
                            <Form.Control onChange={(e) => {setName(e.target.value); setDisabledButton(false)}} value={name} type="text" placeholder="Imię" required />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={12} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwisko">
                            <Form.Control onChange={(e) => {setSurname(e.target.value); setDisabledButton(false)}} value={surname} type="text" placeholder="Nazwisko" required />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={12} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Narodowość">
                            <Form.Control onChange={(e) => {setNationality(e.target.value); setDisabledButton(false)}} value={nationality} type="text" placeholder="Narodowość" required />
                        </FloatingLabel>
                    </Form.Group>
                </Row >
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