import React from "react";
import BookCard from "./BookCard"
import { Row,Col } from "react-bootstrap";

const BookList = ({books}) => {
  return (
    <Row className="mt-4">
      {books.map((book) => {
        return <BookCard book={book} key={book.isbn}/>;
      })}
    </Row>
  );
};

export default BookList;
