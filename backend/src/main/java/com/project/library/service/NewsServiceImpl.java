package com.project.library.service;

import com.project.library.entity.News;
import com.project.library.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService{

    @Autowired
    private NewsRepository newsRepository;

    @Override
    public News saveNews(News news) {
        return newsRepository.save(news);
    }

    @Override
    public List<News> fetchNewsList() {
        return newsRepository.findAll();
    }

    @Override
    public News fetchNewsById(Long newsId) {
        return newsRepository.findById(newsId).get();
    }

    @Override
    public void deleteNewsById(Long newsId) {
        newsRepository.deleteById(newsId);
    }


}
