package com.project.library.controller;

import com.project.library.entity.Author;
import com.project.library.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @PostMapping("/authors")
    public Author saveAuthor(@RequestBody Author author){
        return authorService.saveAuthor(author);
    }
}
