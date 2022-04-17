import React, { useEffect, useRef, useState } from 'react'
import {Row, Form, FloatingLabel,Col} from "react-bootstrap"
const Payment = () => {

const [amount, setAmount] = useState(1)

const paypal = useRef()

useEffect(()=>{
    window.paypal.Buttons({
        createOrder: (data,actions, err) => {
            return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        descrpition: "Wsparcie biblioteki szkolnej",
                        amount: {
                            currency:"PLN",
                            value: document.getElementById('amount').value
                        }
                    }
                ]
            })
        },
        onApprove: async (data,actions) =>{
            const order = await (actions.order.capture())
            console.log("Successfull order: " + order )
        },
        onError: (err) => {
            console.log(err)
        }
    }).render(paypal.current)
},[])

    return (
    <div className='m-5'>
        <h2>Jeśli chcesz wspomóc funkcjonowanie naszej biblioteki, zachęcamy do dowolnych wpłat na zakup nowych książek.</h2>
        <br />

        <Row className="d-flex mt-5 justify-content-center align-items-center">
            <Form.Group as={Col} xs={12} md={7} controlId="formGridName">
                <FloatingLabel controlId="floatingPassword" label="Kwota">
                    <Form.Control id="amount" onChange={(e) => {setAmount(e.target.value);}} type="number" placeholder="Kwota" required/>
                </FloatingLabel>
            </Form.Group>
            </Row>

        <div className='d-flex mt-5 justify-content-center align-items-center' ref={paypal}></div>
    </div>
  )
}

export default Payment