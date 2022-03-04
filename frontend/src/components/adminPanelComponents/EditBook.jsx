import React, { useEffect, useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'; 

const EditBook = () => {
    const[feedback,setFeedback] = useState([])
    const[ISBN, setISBN] = useState("")
    const[title, setTitle] = useState("")
    const[releaseYear, setReleaseYear] = useState(2000)
    const[amount, setAmount] = useState(1)
    const[url, setUrl] = useState("")
    const[description, setDescription] = useState("")
    const[books, setBooks] = useState([])
    const[categories, setCategories] = useState([])
    const[authors, setAuthors] = useState([])
    const[publishingHouses, setPublishingHouses] = useState([])
    const[selectedBook, setSelectedBook] = useState(null)
    const[selectedAuthorId, setSelectedAuthorId] = useState()
    const[selectedCategoryId, setSelectedCategoryId] = useState()
    const[selectedPublishingHouseId, setSelectedPublishingHouseId] = useState()
    const[selectedPublishingHouseName, setSelectedPublishingHouseName] = useState()
  
    const fetchData = async () => {
        await axios.get("http://localhost:8090/books/all").then(res=>{
            const options = res.data.map((b)=>{
                //console.log(b)
                return {value: b.isbn, label: b.title, amount: b.amount, releaseYear: b.releaseYear, url: b.url, description: b.description, authorId: b?.author?.authorId, categoryId: b?.category?.categoryId, categoryName: b?.category?.name, publishingHouseId: b?.publishingHouse?.publishingHouseId}
            })
            setBooks(options)
        })

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


    const updateBook = async (e) => {
        e.preventDefault()
    }
  
    const selectBookHandler = (e) => {
        setSelectedBook(e)
        console.log(e)
        setISBN(e.value)
        setTitle(e.label)
        setAmount(e.amount)
        setUrl(e.url)
        setReleaseYear(e.releaseYear)
        setDescription(e.description)
        setSelectedAuthorId(e.authorId)
        setSelectedCategoryId(e.categoryId)
        setSelectedPublishingHouseId(e.publishingHouseId)
    }

    return (
    <div className="m-3">
    <Form onSubmit={(e)=> updateBook(e)}>
    <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectBookHandler(e)} options={books} placeholder="Książka" />
                    </Col>
                </Row>
                {selectedBook ? (
                    <>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="ISBN">
                    <Form.Control onChange={(e) => setISBN(e.target.value)} value={ISBN} minLength={13} maxLength={13} type="text" placeholder="ISBN" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Tytuł">
                    <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="text" maxLength={50} placeholder="Tytuł" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Liczba książek">
                    <Form.Control onChange={(e) => setAmount(e.target.value)} min={0} value={amount} type="number" placeholder="Rok Liczba książek" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="link do zdjęcia okładki">
                    <Form.Control onChange={(e) => setUrl(e.target.value)} value={url}  type="url" placeholder="link do zdjęcia okładki" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Rok wydania">
                    <Form.Control onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear} min={1800} max={2022} type="number" placeholder="Rok wydania" required/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Opis książki">
                    <Form.Control style={{height: "250px"}} as="textarea" rows={6} value={description} onChange={(e) => setDescription(e.target.value)}  type="text" placeholder="Opis książki"/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                    <Select onChange={(e)=>{setSelectedAuthorId(e.value)}}  defaultValue={selectedAuthorId} options={authors} placeholder="Autor"/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridNamess">
                    <Select onChange={(e)=>{setSelectedCategoryId(e.value)}} defaultInputValue={selectedCategoryId} options={categories} placeholder="Kategoria"/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridNames">
                    <Select onChange={(e)=>{setSelectedPublishingHouseId(e.value)}} defaultValue={selectedPublishingHouseId} options={publishingHouses} placeholder="Wydawnictwo"/>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Edytuj Książkę
            </Button> 
        </div> 
        </>):null}
    </Form>
</div>
  )
}

export default EditBook