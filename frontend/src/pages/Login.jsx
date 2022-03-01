import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        
        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);

        console.log({ username: email, password: password })
        await axios.post("http://localhost:8090/login", params).then(res=>{
            if(res.status===200){
                navigate("/")
            }
                })
    }

  return (
    <div style={{minHeight:"60vh",position:"relative"}} className='color-overlay d-flex justify-content-center align-items-center'>
        
       
        <Form onSubmit={()=>{handleLogin()}} style={{border:"3px solid blue"}} className='rounded p-4 p-sm-3'>
        <h1> Zaloguj się</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Hasło</Form.Label>
    <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Hasło" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Zaloguj się
  </Button>
</Form>
</div>
  )
}

export default Login