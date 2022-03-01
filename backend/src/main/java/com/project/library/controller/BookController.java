package com.project.library.controller;

import com.project.library.entity.Book;
import com.project.library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/books")
    public Book saveBook(@RequestBody Book book){
        return bookService.saveBook(book);
    }

    @GetMapping("/books/all")
    public List<Book> fetchBookList(){
        return bookService.fetchBookList();
    }

    @GetMapping("/books")
    public Page<Book> fetchPaginatedBookList(@RequestParam(required = false, defaultValue = "30") int pageSize,
                                             @RequestParam(required = false, defaultValue = "0") int pageNumber,
                                             @RequestParam(required = false, defaultValue = "") String searchQuery,
                                             @RequestParam(required = false, defaultValue = "") String category,
                                             @RequestParam(required = false, defaultValue = "") String publishingHouse){
        return bookService.fetchPaginatedBookList(pageSize, pageNumber, searchQuery, category, publishingHouse);
    }

    @GetMapping("/books/{isbn}")
    public Book fetchBookByISBN(@PathVariable("isbn") String ISBN){
        return bookService.fetchBookByISBN(ISBN);
    }

    @DeleteMapping("/books/{isbn}")
    public String deleteBookByISBN(@PathVariable("isbn") String ISBN){
        bookService.deleteBookByISBN(ISBN);
        return "Book deleted succesfully!!";
    }

    @PutMapping("/books/{isbn}")
    public Book updateBook(@PathVariable("isbn      ") String ISBN, @RequestBody Book book){
        return bookService.updateBook(ISBN, book);
    }
}
