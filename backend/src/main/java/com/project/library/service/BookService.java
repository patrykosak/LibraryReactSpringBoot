package com.project.library.service;

import com.project.library.entity.Book;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BookService {
    Book saveBook(Book book);

    List<Book> fetchBookList();

    Book fetchBookByISBN(String isbn);

    void deleteBookByISBN(String isbn);

    Book updateBook(String isbn, Book book);

    Page<Book> fetchPaginatedBookList(int pageSize, int pageNumber, String searchQuery, String category, String publishingHouse);
}
