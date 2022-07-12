package com.project.library.service;

import com.project.library.entity.Category;

import java.util.List;

public interface CategoryService {
    Category saveCategory(Category category);

    List<Category> fetchCategoryList();

    void deleteCategoryById(Long categoryId);

    Category updateCategory(Long categoryId, Category category);
}
