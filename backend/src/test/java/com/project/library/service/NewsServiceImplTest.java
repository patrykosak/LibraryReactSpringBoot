package com.project.library.service;

import com.project.library.entity.AppUser;
import com.project.library.entity.News;
import com.project.library.entity.Role;
import com.project.library.repository.NewsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class NewsServiceImplTest {

    @Mock
    private NewsRepository newsRepository;
    private NewsServiceImpl underTest;

    @BeforeEach
    void beforeEach() {
        underTest = new NewsServiceImpl(newsRepository);
    }

    @Test
    void shouldAddNews() {
        AppUser appUser = new AppUser("welik2@tlen.pl","Patryk","Osak","patryk123","IV B", List.of(new Role(1L, "ROLE_USER")));

        News news = News.builder()
                .newsId(1L)
                .content("Content")
                .title("Title")
                .creator(appUser)
                .build();

        underTest.saveNews(news);

        ArgumentCaptor<News> newsArgumentCaptor = ArgumentCaptor.forClass(News.class);

        verify(newsRepository).save(newsArgumentCaptor.capture());

        News capturedNews = newsArgumentCaptor.getValue();

        assertThat(capturedNews).isEqualTo(news);
    }

    @Test
    void shouldReturnNewsList() {
        underTest.fetchNewsList();

        verify(newsRepository).findAll();
    }

    @Test
    void shouldDeleteNewsById() {
        underTest.deleteNewsById(1L);

        verify(newsRepository).deleteById(1L);
    }
}