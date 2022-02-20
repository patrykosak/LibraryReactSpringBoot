import React from 'react'
import { Card,Button,Col } from 'react-bootstrap'
import styles from './Cards.module.css'

const BookCard = ({book}) => {
  return (
      <Col xs={4}>
    <Card style={{borderRadius: "10px", border: "3px solid #0b5ed7" }} className={" mb-4"}>
  <Card.Img style={{borderRadius:"10px"}} variant="top" src={book.url} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
  )
}

export default BookCard