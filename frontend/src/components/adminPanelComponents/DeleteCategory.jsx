import React, { useEffect, useState } from 'react'
import { Row, Form, Alert,Button,Col } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select';

const DeleteCategory = () => {
    const [disabledButton, setDisabledButton] = useState(true)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [feedback, setFeedback] = useState(null)
    const fetchCategories = async () =>{

        axios.get("http://localhost:8090/categories").then((res)=>{
            const options = res.data.map((c) => {
                return { value: c.categoryId, label: c.name}
            })
            setCategories(options)
        })

    }

    useEffect(()=>{
        fetchCategories();
    },[])


    const deleteCategory = async (e) =>{
        e.preventDefault()
        await axios.delete(`http://localhost:8090/categories/${selectedCategory.value}`).then((res)=>
        {
            console.log(res)
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Kategoria została usunięta!
                </Alert>
            )
        else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się usunąć kategorii!
                </Alert>
            )
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                                    Istnieją książki z tej kategorii!
                    Najpierw usuń te książki
            </Alert>
        )
    })
}


    const selectCategoryHandler = (e) =>{
        console.log(e)
        setSelectedCategory(e)
        setDisabledButton(false)
        setFeedback(null)
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> deleteCategory(e)}>
        <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectCategoryHandler(e)} options={categories} placeholder="Kategoria" />
                    </Col>
                </Row>
                {feedback}
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-danger" type="submit" disabled={disabledButton}>
                            Usuń kategorię
                        </Button>
                    </div>
    </Form>
</div>
  )
}

export default DeleteCategory