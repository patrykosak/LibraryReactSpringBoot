import React, { useEffect, useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'; 

const DeleteNews = () => {
    const[feedback, setFeedback] = useState([])
    const[newses, setNewses] = useState([])
    const[selectedNews, setSelectedNews] = useState(null)
    const[disabledButton,setDisabledButton] = useState(true)

    const deleteNewsHandler = async (e) => {
        e.preventDefault();


    }

    const selectNewsHandler = (e) => {
        
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> deleteNewsHandler(e)}>
    <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectNewsHandler(e)} options={newses} placeholder="Posty" />
                    </Col>
                </Row>
        {feedback}
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit" disabled={disabledButton}>
                Usuń post
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default DeleteNews