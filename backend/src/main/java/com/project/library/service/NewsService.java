package com.project.library.service;

import com.project.library.entity.News;

import java.util.List;

public interface NewsService {
    News saveNews(News news);

    List<News> fetchNewsList();

    News fetchNewsById(Long newsId);

    void deleteNewsById(Long newsId);

    News updateNews(Long newsId, News news);
}
