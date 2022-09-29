package com.project.library.controller;

import com.project.library.entity.Category;
import com.project.library.service.CategoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class CategoryControllerTest {

    @Autowired
    MockMvc mvc;

    @MockBean
    CategoryService categoryService;

    @Test
    void saveCategory() throws Exception {

        when(categoryService.saveCategory(any(Category.class)))
                .thenReturn(new Category(1L, "History"));

        MockHttpServletRequestBuilder request = post("/categories")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{}");

        MvcResult mvcResult = mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.categoryId", equalTo(1)))
                .andExpect(jsonPath("$.name", equalTo("History")))
                .andReturn();

    }

    @Test
    void fetchCategoryList() throws Exception {
        when(categoryService.fetchCategoryList())
                .thenReturn(List.of(new Category(1L, "History"), new Category(2L, "Sport")));

        MockHttpServletRequestBuilder request = get("/categories");

        MvcResult mvcResult = mvc.perform(request)
                .andExpect(status().isOk())
                //.andExpect(jsonPath("$.categoryId[0]",equalTo(1)))
                //.andExpect(jsonPath("$.name[0]",equalTo("History")))
                .andReturn();
    }

    @Test
    void deleteCategoryById() throws Exception {
        when(categoryService.deleteCategoryById(any(Long.class)))
                .thenReturn("Category deleted successfully!!");

        MockHttpServletRequestBuilder request = delete("/categories/1");

        MvcResult mvcResult = mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(content().string("Category deleted successfully!!"))
                .andReturn();
    }

    @Test
    void updateCategory() throws Exception {
        when(categoryService.updateCategory(1L, new Category(1L, "History")))
                .thenReturn(new Category(1L, "History"));

        MockHttpServletRequestBuilder request = put("/categories/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{}");

        MvcResult mvcResult = mvc.perform(request)
                .andExpect(status().isOk())
                //.andExpect(jsonPath("$.categoryId", equalTo(1)))
                //.andExpect(jsonPath("$.name", equalTo("History")))
                .andReturn();
    }

}