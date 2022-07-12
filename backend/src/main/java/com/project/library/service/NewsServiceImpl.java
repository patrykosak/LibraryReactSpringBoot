package com.project.library.service;

import com.project.library.entity.News;
import com.project.library.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
public class NewsServiceImpl implements NewsService{

    private NewsRepository newsRepository;

    public NewsServiceImpl(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @Override
    public News saveNews(News news) {
        news.setDate(LocalDate.now());
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

    @Override
    public News updateNews(Long newsId, News news) {
        News newsDb = newsRepository.findById(newsId).get();

        if(Objects.nonNull(news.getTitle())&&!"".equalsIgnoreCase(news.getTitle())){
            newsDb.setTitle(news.getTitle());
        }
        if(Objects.nonNull(news.getContent())&&!"".equalsIgnoreCase(news.getContent())){
            newsDb.setContent(news.getContent());
        }

        return newsRepository.save(newsDb);
    }


}
