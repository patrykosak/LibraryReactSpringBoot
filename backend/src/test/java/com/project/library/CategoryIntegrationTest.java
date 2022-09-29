package com.project.library;

import com.project.library.entity.Category;
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
class CategoryIntegrationTest {

    @LocalServerPort
    int port;

    @Autowired
    private CategoryService categoryService;

    @BeforeEach
    void beforeEach() {
        RestAssured.port = port;
    }

    @Test
    @DisplayName("Creating category happy path")
    void creatingCategoryHappyPath() {
        given().accept(ContentType.JSON).body("{\"name\":\"name\"}")
                .contentType(ContentType.JSON)
                .when().post("/categories")
                .then().log().everything().statusCode(HttpStatus.SC_OK)
                .body("name", equalTo("name"));
    }

    @Test
    @DisplayName("Fetching categories happy path")
    void fetchingCategoriesHappyPath() {
        categoryService.saveCategory(new Category(1L,"name"));
        given().accept(ContentType.JSON).body("")
                .contentType(ContentType.JSON)
                .when().get("/categories")
                .then().log().everything().statusCode(HttpStatus.SC_OK)
                .body("get(0).name", equalTo("name"));
    }

}
