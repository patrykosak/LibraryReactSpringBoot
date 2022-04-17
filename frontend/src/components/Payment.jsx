import React, { useEffect, useRef, useState } from 'react'

const Payment = () => {

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
                            value: 650
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
    <div>
        <h2>Jeśli chcesz wspomóc funkcjonowanie naszej biblioteki, zachęcamy do dowolnych wpłat na zakup nowych książek.</h2>
        <br />
        <h2>Dane do wpłaty:</h2>
        <h5><b>Numer konta:</b> 4234 8900 0001 2139 4356 67</h5>


        <div ref={paypal}>

        </div>
    </div>
  )
}

export default Payment