package com.project.library.service;

import com.project.library.entity.Book;
import com.project.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class BookServiceImpl implements BookService{

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> fetchBookList() {
        return bookRepository.findAll();
    }

    @Override
    public Book fetchBookByISBN(String isbn) {
        return bookRepository.findById(isbn).get();
    }

    @Override
    public void deleteBookByISBN(String isbn) {
        bookRepository.deleteById(isbn);
    }

    @Override
    public Book updateBook(String isbn, Book book) {
        Book bookDB = bookRepository.findById(isbn).get();

        if(Objects.nonNull(book.getTitle())&& !"".equalsIgnoreCase(book.getTitle())){
            bookDB.setTitle(book.getTitle());
        }
        if(Objects.nonNull(book.getUrl())&& !"".equalsIgnoreCase(book.getUrl())){
            bookDB.setUrl(book.getUrl());
        }
        if(Objects.nonNull(book.getAmount())){
            bookDB.setAmount(book.getAmount());
        }
        if(Objects.nonNull(book.getAcquisitionDate())){
            bookDB.setAcquisitionDate(book.getAcquisitionDate());
        }
        if(Objects.nonNull(book.getAuthor())){
            bookDB.setAuthor(book.getAuthor());
        }
        if(Objects.nonNull(book.getCategory())){
            bookDB.setCategory(book.getCategory());
        }
        if(Objects.nonNull(book.getPublishingHouse())){
            bookDB.setPublishingHouse(book.getPublishingHouse());
        }

        return bookRepository.save(bookDB);
    }

    @Override
    public Page<Book> fetchPaginatedBookList(int pageSize, int pageNumber,String searchQuery) {
        Pageable page = PageRequest.of(pageNumber, pageSize);
        if(searchQuery.equals(""))
        {
            return bookRepository.findAll(page);
        }
       else{
           return bookRepository.findByTitleContaining(searchQuery, page);
        }
    }
}
