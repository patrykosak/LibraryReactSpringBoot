package com.project.library.repository;

import com.project.library.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepository extends JpaRepository<Book,String> {
    Page<Book> findByTitleContaining(String title, Pageable pageable);
    Page<Book> findByTitleContainingAndCategory_NameEquals(String title, String category, Pageable pageable);
    Page<Book> findByCategoryName( String category, Pageable pageable);
    Page<Book> findByTitleContainingAndPublishingHouseEquals(String title, String publishingHouse, Pageable pageable);
    Page<Book> findByTitleContainingAndCategoryEqualsAndPublishingHouseEquals(String title, String category, String publishingHouse, Pageable pageable);
}
