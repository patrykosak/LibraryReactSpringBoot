package com.project.library.service;

import com.project.library.entity.Category;

import java.util.List;

public interface CategoryService {
    public Category saveCategory(Category category);

    public List<Category> fetchCategoryList();
}
