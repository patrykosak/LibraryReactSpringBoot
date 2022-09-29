package com.project.library;

import com.project.library.entity.Book;
import com.project.library.entity.Category;
import com.project.library.service.BookService;
import com.project.library.service.CategoryService;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.apache.http.HttpStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.annotation.DirtiesContext;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class BookIntegrationTest {

    @LocalServerPort
    int port;

    @Autowired
    private BookService bookService;

    @BeforeEach
    void beforeEach() {
        RestAssured.port = port;
    }

    @Test
    @DisplayName("Fetching books happy path")
    void fetchingBooksHappyPath() {
        bookService.saveBook(Book.builder()
                        .amount(5)
                        .title("New book")
                        .ISBN("AAAAAAAAAAAAA")
                        .description("desc")
                        .url("https://www.youtube.com/")
                        .releaseYear(2015)
                .build());
        given().accept(ContentType.JSON).body("")
                .contentType(ContentType.JSON)
                .when().get("/books")
                .then().log().everything().statusCode(HttpStatus.SC_OK)
                .body("content.get(0).title", equalTo("New book"))
                .body("content.get(0).isbn", equalTo("AAAAAAAAAAAAA"))
                .body("content.get(0).description", equalTo("desc"))
                .body("content.get(0).url", equalTo("https://www.youtube.com/"))
                .body("content.get(0).releaseYear", equalTo(2015))
                .body("content.get(0).amount", equalTo(5))
                .body("totalElements", equalTo(1));
    }

}
