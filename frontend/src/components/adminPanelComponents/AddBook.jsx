import React, { useEffect, useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'; 

const AddBook = () => {
    const[feedback,setFeedback] = useState([])
    const[ISBN, setISBN] = useState("")
    const[title, setTitle] = useState("")
    const[relaseYear, setRelaseYear] = useState(2000)
    const[amonut, setAmount] = useState(1)
    const[url, setUrl] = useState("")
    const[description, setDescription] = useState("")
    const[categories, setCategories] = useState([])
    const[authors, setAuthors] = useState([])
    const[publishingHouses, setPublishingHouses] = useState([])
    const[selectedAuthor, setSelectedAuthor] = useState([])
    const[selectedCategory, setSelectedCategory] = useState([])
    const[selectedPublishingHouse, setSelectedPublishingHouse] = useState([])

    const fetchData = async () => {
        await axios.get("http://localhost:8090/authors").then(res=>{
            const options = res.data.map((a)=>{
                return {value: a.authorId, label: a.name + " " + a.surname}
            })
            setAuthors(options)
        })

        await axios.get("http://localhost:8090/categories").then(res=>{
            const options = res.data.map((c)=>{
                return {value: c.categoryId, label: c.name}
            })
            setCategories(options)
        })

        await axios.get("http://localhost:8090/publishinghouses").then(res=>{
            const options = res.data.map((p)=>{
                return {value: p.publishingHouseId, label: p.name}
            })
            setPublishingHouses(options)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const addBookHandler = async (e) => {
        e.preventDefault()
    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> addBookHandler(e)}>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="ISBN">
                    <Form.Control onChange={(e) => setISBN(e.target.value)} minLength={13} maxLength={13} type="text" placeholder="ISBN" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Tytuł">
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" maxLength={50} placeholder="Tytuł" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Liczba książek">
                    <Form.Control onChange={(e) => setAmount(e.target.value)} min={0} type="number" placeholder="Rok Liczba książek" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="link do zdjęcia okładki">
                    <Form.Control onChange={(e) => setUrl(e.target.value)}  type="url" placeholder="link do zdjęcia okładki" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Rok wydania">
                    <Form.Control onChange={(e) => setRelaseYear(e.target.value)} min={1800} max={2022} type="number" placeholder="Rok wydania" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Opis książki">
                    <Form.Control style={{height: "250px"}} as="textarea" rows={6} onChange={(e) => setDescription(e.target.value)}  type="text" placeholder="Opis książki"/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                    <Select onChange={(e)=>{setSelectedAuthor(e)}} options={authors} placeholder="Autor"/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                    <Select onChange={(e)=>{setSelectedCategory(e)}} options={categories} placeholder="Kategoria"/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                    <Select onChange={(e)=>{setSelectedPublishingHouse(e)}} options={publishingHouses} placeholder="Wydawnictwo"/>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj Książkę
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddBook