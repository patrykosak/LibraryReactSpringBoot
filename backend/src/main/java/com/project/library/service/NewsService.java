package com.project.library.service;

import com.project.library.entity.News;

import java.util.List;

public interface NewsService {
    News saveNews(News news);

    List<News> fetchNewsList();
}
