import React, { useContext, useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import AuthContext from '../../contexts/AuthContext'

const AddNews = () => {
    const[feedback, setFeedback] = useState([])
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");

    const clearNotification = () =>{
        setFeedback([])
    }

    const {email} = useContext(AuthContext)

    const addNewsHandler = async (e) => {
        e.preventDefault()

        const newPost ={
            title: title,
            content: content,
            creator: {
                email: email
            }
        }

        axios.post("http://localhost:8090/news",newPost).then(res=>{
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Post została dodany!
                </Alert>
            )
        else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się dodać posta!
                </Alert>
            )
            const myTimeout = setTimeout(clearNotification, 5000);
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                Nie udało się dodać posta!
            </Alert>
        )
        const myTimeout = setTimeout(clearNotification, 5000);
        })


    }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> addNewsHandler(e)}>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Tytuł">
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Tytuł" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Treść">
                    <Form.Control style={{height: "250px"}} as="textarea" rows={6} onChange={(e) => setContent(e.target.value)}  type="text" placeholder="Treść"/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                Dodaj post
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default AddNews