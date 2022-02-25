import React, { useEffect, useState } from 'react'
import { Row, Form, Alert,Button,Col } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select';


const DeleteAuthor = () => {
    const[authors,setAuthors] = useState([])
    const[feedback,setFeedback] = useState([])
    const[disabledButton,setDisabledButton] = useState(true)
    const[selectedAuthor, setSelectedAuthor] = useState([])

    const fetchData = async () => {
        await axios.get("http://localhost:8090/authors").then(res=>{
            const options = res.data.map((a)=>{
                return {value: a.authorId, label: a.name + " " + a.surname}
            })
            setAuthors(options)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const deleteAuthorHandler = async (e) => {
        e.preventDefault()
        
        await axios.delete(`http://localhost:8090/authors/${selectedAuthor.value}`).then(res=>{
            console.log(res)
        })
    }

    const selectAuthorHandler = (e) => {
        setSelectedAuthor(e)
        setDisabledButton(false)
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