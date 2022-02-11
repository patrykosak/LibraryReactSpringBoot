package com.project.library.service;

import com.project.library.entity.Author;

import java.util.List;

public interface AuthorService {
    public Author saveAuthor(Author author);

    public List<Author> fetchAuthorList();

    public Author fetchAuthorById(Long authorId);
}
