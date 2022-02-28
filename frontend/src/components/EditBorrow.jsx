import React, { useState } from 'react'
import { Button, Form, Alert  } from "react-bootstrap";
import Select from 'react-select';

const EditBorrow = () => {
    const[feedback, setFeedback] = useState([]);
    const[status, setStatus] = useState("")
    
    const updateBorrow = async () => {
        
    }

    const options = [
        { value:1, label:"w trakcie realizacji",},
        {value:2, label:"wypożyczona"},
        {value:3, label:"zwrócona"}
    ]

  return (
    <Form onSubmit={updateBorrow}>
         {feedback}
      <Form.Group className="m-1">
      <Select
                  
                  onChange={(e) => setStatus(e.label)}
                  options={options}
                  placeholder={"status"}
                />
                 </Form.Group>
      <Button
        onClick={updateBorrow}
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