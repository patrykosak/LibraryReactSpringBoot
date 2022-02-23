import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Form, Alert,Button,Col,FloatingLabel } from 'react-bootstrap'
import Select from 'react-select';

const EditCategory = () => {
    const [categories, setCategories] = useState([])    
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [name,setName] = useState("")

    const fetchCategories = async () => {
        axios.get("http://localhost:8090/categories").then(res=>{
           const options = res.data.map((c)=>{
                return {value: c.categoryId, label:c.name }
            })
            setCategories(options)
        })
    }

    const updateCategory = async (e)=>{
        e.preventDefault()

        const updatedCategory = {
            name: name
        }

        axios.put(`http://localhost:8090/categories/${selectedCategory.value}`,updateCategory).then((res)=>{

        })
    }

    useEffect(()=>{
        fetchCategories()
    },[])

    const selectCategoryHandler = (e) =>{
        setSelectedCategory(e)
    }

    return (
     <div className="m-3">
    <Form onSubmit={(e)=> updateCategory(e)}>
        <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectCategoryHandler(e)} options={categories} placeholder="Kategoria" />
                    </Col>
                </Row>
                
                {selectedCategory ? (<>
                    <Row className="mb-3">
                        <h6>Kategoria</h6>
                        <hr />
                    <Form.Group as={Col} xs={12} md={12} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa kategorii">
                            <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nazwa kategorii" required />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                            Edytuj kategorie
                        </Button>
                    </div>
                </>) : null}
    </Form>
</div>
  )
}

export default EditCategory