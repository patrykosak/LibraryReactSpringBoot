import React from "react";
import BookCard from "./BookCard"

const BookList = ({books}) => {
  return (
    <>
      {books.map((book) => {
        return <BookCard book={book} key={book.isbn}/>;
      })}
    </>
  );
};

export default BookList;
