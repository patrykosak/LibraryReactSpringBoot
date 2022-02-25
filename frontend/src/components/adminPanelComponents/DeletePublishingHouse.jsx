import React, { useEffect, useState } from 'react'
import { Row, Form, Alert,Button,Col } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select';


const DeletePublishingHouse = () => {
    const[feedback,setFeedback] = useState([])
    const[disabledButton, setDisabledButton] = useState(true)
    const[selectedPublishingHouse, setSelectedPublishingHouse] = useState(null)
    const[publishingHouses, setPublishingHouses] = useState([])
    
    const fetchData = async () => {

    }  
    


    const DeletePublishingHouseHandler = async (e) =>{
        e.preventDefault()
    }

    const selectPublishingHouseHandler = () => {

    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> DeletePublishingHouseHandler(e)}>
        <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectPublishingHouseHandler(e)} options={publishingHouses} placeholder="Wydawnictwo" />
                    </Col>
                </Row>
                {feedback}
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-danger" type="submit" disabled={disabledButton}>
                            Usuń wydawnictwo
                        </Button>
                    </div>
    </Form>
</div>
  )
}

export default DeletePublishingHouse