package com.project.library;

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
class AuthorIntegrationTest {

 @LocalServerPort
 int port;

 @BeforeEach
 void beforeEach() {
  RestAssured.port = port;
 }

 @Test
 @DisplayName("Creating author happy path")
 void creatingAuthorHappyPath() {
  given().accept(ContentType.JSON).body("{" +
                  "\"name\":\"name\"," +
                  "\"surname\":\"surname\"," +
                  "\"nationality\":\"nationality\"" +
                  "}")
          .contentType(ContentType.JSON)
          .when().post("/authors")
          .then().log().everything().statusCode(HttpStatus.SC_OK)
          .body("name", equalTo("name"))
          .body("surname", equalTo("surname"))
          .body("nationality", equalTo("nationality"));
 }
}
