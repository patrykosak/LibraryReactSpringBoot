package com.project.library.controller;

import com.project.library.entity.News;
import com.project.library.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewsController {

    @Autowired
    private NewsService newsService;

    @PostMapping("/news")
    public News saveNews(@RequestBody News news){
        return newsService.saveNews(news);
    }

}
