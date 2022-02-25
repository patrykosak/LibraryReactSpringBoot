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
        axios.get("http://localhost:8090/publishinghouses").then((res)=>{
            const options = res.data.map((p)=>{
                return {value: p.publishingHouseId, label: p.name}
            })
            setPublishingHouses(options)
        })
    }  
    
    useEffect(()=>{
        fetchData()
    },[])


    const DeletePublishingHouseHandler = async (e) =>{
        e.preventDefault()

        axios.delete(`http://localhost:8090/publishinghouses/${selectedPublishingHouse.value}`).then((res)=>{
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Wydawnictwo zostało usunięte!
                </Alert>
            )
        else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się usunąć wydawnictwa!
                </Alert>
            )
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                                    Istnieją książki tego wydawnictwa!
                    Najpierw usuń te książki
            </Alert>
        )
        })
    }

    const selectPublishingHouseHandler = (e) => {
        setSelectedPublishingHouse(e)
        setDisabledButton(false)
        setFeedback(null)
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