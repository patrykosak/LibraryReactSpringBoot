import React, { useEffect, useState } from 'react'
import { Row, Form, Alert,Button,Col } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select';


const DeleteStudent = () => {
    const[feedback,setFeedback] = useState([])
    const[disabledButton, setDisabledButton] = useState(true)
    const[selectedStudent, setSelectedStudent] = useState(null)
    const[students, setStudents] = useState([])

    const fetchData = async (e) => {
        axios.get("http://localhost:8090/api/users").then(res=>{
            const options = res.data.map(u=>{
                return {value: u.userId, label: u.email}
            })
            setStudents(options)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const deleteStudentHandler = async (e) => {
        e.preventDefault()

        await axios.delete(`http://localhost:8090/api/user/delete/${selectedStudent.value}`).then(res=>{
            console.log(res)
            if (res.status === 200)
            setFeedback(
                <Alert variant="success">
                    Uczeń został usunięty!
                </Alert>
            )
        else
            setFeedback(
                <Alert variant="danger">
                    Nie udało się usunąć ucznia!
                </Alert>
            )
    }).catch((e) => {
        console.log(e)
        setFeedback(
            <Alert variant="danger">
                Nie udało się usunąć ucznia!
            </Alert>
        )
        })
    }

  return (
      <div className="m-3">
    <Form onSubmit={(e)=> deleteStudentHandler(e)}>
    <Row className="mb-3">
        <Col xs={6} md={6}>
                        <Select onChange={(e) => {setSelectedStudent(e); setDisabledButton(false)}} options={students} placeholder="Uczeń" />
                    </Col>
                </Row>
        {feedback}
        <div className="d-flex justify-content-end">
            <Button className="ps-4 pe-4" variant="outline-primary" type="submit" disabled={disabledButton}>
                Usuń ucznia
            </Button> 
        </div>
    </Form>
</div>
  )
}

export default DeleteStudent