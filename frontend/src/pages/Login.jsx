import React from 'react'
import { Form,Button } from 'react-bootstrap'

const Login = () => {
  return (
    <div style={{minHeight:"60vh",position:"relative"}} className='color-overlay d-flex justify-content-center align-items-center'>
        
       
        <Form style={{border:"3px solid blue"}} className='rounded p-4 p-sm-3'>
        <h1> Zaloguj się</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Hasło</Form.Label>
    <Form.Control type="password" placeholder="Hasło" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Zaloguj się
  </Button>
</Form>
</div>
  )
}

export default Login