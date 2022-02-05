package com.project.library.controller;

import com.project.library.entity.Category;
import com.project.library.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/categories")
    public Category saveCategory(@RequestBody Category category){
        return categoryService.saveCategory(category);
    }

    @GetMapping("/categories")
    public List<Category> fetchCategoryList(){
        return categoryService.fetchCategoryList();
    }

    @DeleteMapping("/categories/{id}")
    public String deleteCategoryById(@PathVariable("id") Long categoryId){
        categoryService.deleteCategoryById(categoryId);
        return "Category deleted succesfully!!";
    }

    @PutMapping("/categories/{id}")
    public Category updateCategory(@PathVariable("id") Long categoryId, @RequestBody Category category){
        return categoryService.updateCategory(categoryId,category);
    }
}
