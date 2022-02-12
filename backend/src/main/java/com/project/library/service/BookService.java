package com.project.library.service;

import com.project.library.entity.Book;

import java.util.List;

public interface BookService {
    public Book saveBook(Book book);

    public List<Book> fetchBookList();

    public Book fetchBookByISBN(String isbn);

    public void deleteBookByISBN(String isbn);

    public Book updateBook(String isbn, Book book);
}
