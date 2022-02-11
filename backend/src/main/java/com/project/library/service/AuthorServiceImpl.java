package com.project.library.service;

import com.project.library.entity.Author;
import com.project.library.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    @Override
    public Author saveAuthor(Author author) {
        return authorRepository.save(author);
    }

    @Override
    public List<Author> fetchAuthorList() {
        return authorRepository.findAll();
    }

    @Override
    public Author fetchAuthorById(Long authorId) {
        return authorRepository.findById(authorId).get();
    }
}
