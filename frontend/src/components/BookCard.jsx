import React from 'react'
import { Card,Button,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const BookCard = ({book}) => {

  const navigate = useNavigate()

  const bookDetailsHandler = () => {
    navigate(`details/${book.isbn}`)
  }

  return (
      <Col xs={4}>
    <Card style={{borderRadius: "10px", border: "3px solid #0b5ed7" }} className={" mb-4"}>
  <Card.Img style={{borderRadius:"10px"}} variant="top" src={book.url} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      {book.description?.substr(0,200)}
    </Card.Text>
    <div className='d-flex justify-content-center'>
    <Button className='w-100' onClick={()=>bookDetailsHandler()} variant="primary">Szczegóły</Button>
    </div>
  </Card.Body>
</Card>
</Col>
  )
}

export default BookCard