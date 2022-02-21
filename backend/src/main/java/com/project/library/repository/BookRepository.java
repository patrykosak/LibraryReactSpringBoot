package com.project.library.repository;

import com.project.library.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepository extends JpaRepository<Book,String> {
    Page<Book> findByTitleContaining(String title, Pageable pageable);
}
