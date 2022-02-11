package com.project.library.controller;

import com.project.library.entity.Author;
import com.project.library.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @PostMapping("/authors")
    public Author saveAuthor(@RequestBody Author author){
        return authorService.saveAuthor(author);
    }

    @GetMapping("/authors")
    public List<Author> fetchAuthorList(){
        return authorService.fetchAuthorList();
    }

    @GetMapping("/authors/{id}")
    public Author fetchAuthorById(@PathVariable("id") Long authorId){
        return authorService.fetchAuthorById(authorId);
    }
}
