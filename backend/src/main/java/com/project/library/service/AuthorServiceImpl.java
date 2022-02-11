package com.project.library.service;

import com.project.library.entity.Author;
import com.project.library.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

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

    @Override
    public void deleteAuthorById(Long authorId) {
        authorRepository.deleteById(authorId);
    }

    @Override
    public Author updateAuthor(Long authorId, Author author) {
        Author authorDB = authorRepository.findById(authorId).get();

        if(Objects.nonNull(author.getName())&& !"".equalsIgnoreCase(author.getName())){
            authorDB.setName(author.getName());
        }
        if(Objects.nonNull(author.getSurname())&& !"".equalsIgnoreCase(author.getSurname())){
            authorDB.setSurname(author.getSurname());
        }
        if(Objects.nonNull(author.getNationality())&& !"".equalsIgnoreCase(author.getNationality())){
            authorDB.setNationality(author.getNationality());
        }

        return authorRepository.save(authorDB);
    }
}
