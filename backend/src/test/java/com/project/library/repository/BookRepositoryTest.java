package com.project.library.repository;

import com.project.library.entity.Author;
import com.project.library.entity.Book;
import com.project.library.entity.Category;
import com.project.library.entity.PublishingHouse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BookRepositoryTest {

    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private PublishingHouseRepository publishingHouseRepository;

    @Test
    public void saveBook(){

        Category category = new Category(2L,"History");

        categoryRepository.save(category);

        Author author = Author.builder()
                .name("Piotr")
                .surname("Zychowicz")
                .nationality("Polska")
                .build();

        authorRepository.save(author);

        PublishingHouse publishingHouse = PublishingHouse.builder()
                .name("Zodiak")
                .city("Warszawa")
                .build();

        publishingHouseRepository.save(publishingHouse);

        Book book = Book.builder()
                .ISBN("AAAAAAAAAAABA")
                .title("Obłęd 44")
                .author(author)
                .category(category)
                .publishingHouse(publishingHouse)
                .releaseYear(2014)
                .description("Polskie Państwo Podziemne nie zdało egzaminu, twierdzi autor Paktu Ribbentrop-Beck, książki, która zachwiała świadomością historyczną Polaków. Swoje koncepcje, zamiast na realiach, PPP oparło na złudzeniach i pobożnych życzeniach. Obłędny rozkaz wydany w 1944 roku oddziałom Armii Krajowej, by w ramach akcji \"Burza\" pomagały wkraczającej do Polski Armii Czerwonej, równał się wręcz kolaboracji z wrogiem. Dowództwo AK bowiem wydało w ten sposób swoich żołnierzy w ręce sowieckiej bezpieki. Tysiące z nich zapłaciły za to najwyższą cenę.")
                .url("https://s.lubimyczytac.pl/upload/books/4924000/4924576/809502-352x500.jpg")
                .amount(10)
                .build();

        bookRepository.save(book);
    }

}