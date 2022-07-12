package com.project.library.service;

import com.project.library.entity.Category;
import com.project.library.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CategoryServiceImpl implements CategoryService{

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category saveCategory(Category category) {
        Category categoryDB = categoryRepository.findByName(category.name);
        if(Objects.nonNull(categoryDB)){
            return categoryDB;
        }
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> fetchCategoryList() {
        return categoryRepository.findAll();
    }

    @Override
    public void deleteCategoryById(Long categoryId) {
        categoryRepository.deleteById(categoryId);
    }

    @Override
    public Category updateCategory(Long categoryId, Category category) {
        Category categoryDB = categoryRepository.findById(categoryId).get();

        if(Objects.nonNull(category.getName()) && !"".equalsIgnoreCase(category.getName())){
            categoryDB.setName(category.getName());
        }
        return categoryRepository.save(categoryDB);
    }
}
