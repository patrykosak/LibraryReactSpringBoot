import React, { useEffect, useState } from 'react'
import { Row, Form, FloatingLabel,Button,Col,Alert } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'; 

const EditNews = () => {
  const[feedback, setFeedback] = useState([])
  const[title, setTitle] = useState("");
  const[content, setContent] = useState("");
  const[newses, setNewses] = useState([])
  const[selectedNews, setSelectedNews] = useState(null)
  const[disabledButton,setDisabledButton] = useState(true)

  const fetchData = async () => {
    await axios.get("http://localhost:8090/news").then((res)=>{
      const options = res.data.map((n)=>{
        return {value: n.newsId, label: n.title, content: n.content}
      })
      setNewses(options)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  const updateNewsHandler = async (e) =>{
    e.preventDefault()

    const updatedNews = {
      title: title,
      content: content
    }

    await axios.put(`http://localhost:8090/news/${selectedNews.value}`,updatedNews).then(res=>{
      if (res.status === 200)
        setFeedback(
            <Alert variant="success">
                Post został zedytowany!
            </Alert>
        )
    else
        setFeedback(
            <Alert variant="danger">
                Nie udało się zedytować wpisu!
            </Alert>
        )
}).catch((e) => {
    console.log(e)
    setFeedback(
        <Alert variant="danger">
            Nie udało się zedytować wpisu!
        </Alert>
    )
})
  }

  const selectNewsHandler = (e) => {
    setSelectedNews(e)
    setTitle(e.label)
    setContent(e.content)
  }

  return (
    <div className="m-3">
    <Form onSubmit={(e)=> updateNewsHandler(e)}>
    <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => selectNewsHandler(e)} options={newses} placeholder="Posty" />
                    </Col>
                </Row>
                {selectedNews?(<>
        <Row className="mb-3">
        {feedback}
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Tytuł">
                    <Form.Control value={title} onChange={(e) => {setTitle(e.target.value);setDisabledButton(false)}} type="text" placeholder="Tytuł" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Treść">
                    <Form.Control value={content} style={{height: "250px"}} as="textarea" rows={6} onChange={(e) => {setContent(e.target.value);setDisabledButton(false)}}  type="text" placeholder="Treść"/>
                </FloatingLabel>
            </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit" disabled={disabledButton}>
                Edytuj post
            </Button> 
        </div>
        </>)
                :null}
    </Form>
</div>
  )
}

export default EditNews