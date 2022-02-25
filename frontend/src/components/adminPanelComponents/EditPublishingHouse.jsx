import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Form, Alert,Button,Col,FloatingLabel } from 'react-bootstrap'
import Select from 'react-select';


const EditPublishingHouse = () => {
    const[selectedPublishingHouse, setSelectedPublishingHouse] = useState(null)
    const[feedback, setFeedback] = useState([])
    const[publishinghouses, setPublishinghouses] = useState([])
    const[name, setName] = useState("")
    const[city, setCity] = useState("")

    const updatePublishingHouse = async (e) =>{

    }

    const fetchData = async () => {
        await axios.get("http://localhost:8090/publishinghouses").then((res)=>{
            const options = res.data.map((p)=>{
                return {value: p.publishingHouseId, label: p.name}
            })
            setPublishinghouses(options)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const selectCategoryHandler = (e) =>{
        setSelectedPublishingHouse(e)
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> updatePublishingHouse(e)}>
        <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectCategoryHandler(e)} options={publishinghouses} placeholder="Wydawnictwo" />
                    </Col>
                </Row>
                
                {selectedPublishingHouse ? (<>
                    <Row className="mb-3">
                        <h6>Wydawnictwo</h6>
                        <hr />
                        {feedback}
                    <Form.Group as={Col} xs={12} md={12} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa wydawnictwa">
                            <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nazwa wydawnictwa" required />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                            Edytuj wydawnictwo
                        </Button>
                    </div>
                </>) : null}
    </Form>
</div>
  )
}

export default EditPublishingHouse