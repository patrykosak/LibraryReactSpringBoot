import React from 'react'
import { Card,Button,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const BookCard = ({book}) => {

  const navigate = useNavigate()

  const bookDetailsHandler = () => {
    navigate(`details/${book.isbn}`)
  }

  return (
      <Col className="mb-4" xs={4}>
    <Card style={{borderRadius: "10px",height:"100%", border: "3px solid #0b5ed7", width:"100%" }}>
  <Card.Img style={{borderRadius:"10px"}} variant="top" src={book.url} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      <div>
      {book.description?.substr(0,200)}
      </div>
    </Card.Text>
    <div className='d-flex justify-content-center'>
    <Button style={{bottom:"20px"}} className='m-3 w-100' onClick={()=>bookDetailsHandler()} variant="primary">Szczegóły</Button>
    </div>
  </Card.Body>
</Card>
</Col>
  )
}

export default BookCard