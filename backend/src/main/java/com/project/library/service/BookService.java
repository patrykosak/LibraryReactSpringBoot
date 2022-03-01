package com.project.library.service;

import com.project.library.entity.Book;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BookService {
    public Book saveBook(Book book);

    public List<Book> fetchBookList();

    public Book fetchBookByISBN(String isbn);

    public void deleteBookByISBN(String isbn);

    public Book updateBook(String isbn, Book book);

    public Page<Book> fetchPaginatedBookList(int pageSize, int pageNumber, String searchQuery, String category, String publishingHouse);
}
