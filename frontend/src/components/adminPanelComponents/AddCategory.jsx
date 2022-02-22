import React, { useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col } from 'react-bootstrap'
import axios from 'axios'

const AddCategory = () => {
    const [name, setName] = useState("")

    const addCategory = async (e) =>{

        const newCategory =
        {
            name: name
        }

        await axios.post("http://localhost:8090/categories", newCategory).then(()=>console.log(name))

    }

  return (
    <div className="m-3">
    <Form onSubmit={()=> addCategory()}>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Nazwa kategorii">
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Nazwa kategorii" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj kategorie
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddCategory