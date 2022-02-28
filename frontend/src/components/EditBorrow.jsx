import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Alert  } from "react-bootstrap";
import Select from 'react-select';

const EditBorrow = ({borrowId,fetchData}) => {
    const[feedback, setFeedback] = useState([]);
    const[status, setStatus] = useState("")
    
    const updateBorrow = async (e) => {
        e.preventDefault();

        const updatedBorrow = {
            status: status
        }

        axios.put(`http://localhost:8090/borrows/${borrowId}`, updatedBorrow).then(res=>{
            fetchData()
        })

    }

    const options = [
        { value:1, label:"w trakcie realizacji",},
        {value:2, label:"wypożyczona"},
        {value:3, label:"zwrócona"}
    ]

  return (
    <Form onSubmit={(e)=>updateBorrow(e)}>
         {feedback}
      <Form.Group className="m-1">
      <Select
                  
                  onChange={(e) => setStatus(e.label)}
                  options={options}
                  placeholder={"status"}
                />
                 </Form.Group>
      <Button
        onClick={(e)=>updateBorrow(e)}
        className="m-1 w-100"
        variant="success"
        type="submit"
        block
      >
        zmień status
      </Button>
    </Form>
  )
}

export default EditBorrow