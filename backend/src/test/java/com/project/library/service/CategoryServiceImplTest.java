package com.project.library.service;

import com.project.library.entity.Category;
import com.project.library.repository.CategoryRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class CategoryServiceImplTest {

    @Mock
    private CategoryRepository categoryRepository;
    private CategoryServiceImpl underTest;

    @BeforeEach
    void beforeEach() {
        underTest = new CategoryServiceImpl(categoryRepository);
    }

    @Test
    void shouldAddCategory() {
        Category category = new Category(1L,"History");

        underTest.saveCategory(category);

        ArgumentCaptor<Category> categoryArgumentCaptor = ArgumentCaptor.forClass(Category.class);

        verify(categoryRepository).save(categoryArgumentCaptor.capture());

        Category capturedCategory = categoryArgumentCaptor.getValue();

        assertThat(capturedCategory).isEqualTo(category);
    }

    @Test
    void shouldReturnCategoryList() {
        underTest.fetchCategoryList();

        verify(categoryRepository).findAll();
    }

    @Test
    void shouldDeleteCategoryById() {
        underTest.deleteCategoryById(1L);

        verify(categoryRepository).deleteById(1L);
    }
}