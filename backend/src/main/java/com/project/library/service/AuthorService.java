package com.project.library.service;

import com.project.library.entity.Author;

import java.util.List;

public interface AuthorService {
    Author saveAuthor(Author author);

    List<Author> fetchAuthorList();

    Author fetchAuthorById(Long authorId);

    void deleteAuthorById(Long authorId);

    Author updateAuthor(Long authorId, Author author);
}
