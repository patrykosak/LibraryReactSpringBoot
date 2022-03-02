package com.project.library.controller;

import com.project.library.entity.News;
import com.project.library.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NewsController {

    @Autowired
    private NewsService newsService;

    @PostMapping("/news")
    public News saveNews(@RequestBody News news){
        return newsService.saveNews(news);
    }

    @GetMapping("/news")
    public List<News> fetchNewsList(){
        return newsService.fetchNewsList();
    }

    @GetMapping("/news/{id}")
    public News fetchNewsById(@PathVariable("id") Long newsId){
        return newsService.fetchNewsById(newsId);
    }

    @DeleteMapping("/news/{id}")
    public String deleteNewsById(@PathVariable("id") Long newsId){
        newsService.deleteNewsById(newsId);
        return "News deleted succesfully!";
    }

}
