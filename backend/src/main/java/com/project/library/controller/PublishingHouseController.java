package com.project.library.controller;

import com.project.library.entity.PublishingHouse;
import com.project.library.service.PublishingHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublishingHouseController {

    @Autowired
    private PublishingHouseService publishingHouseService;

    @PostMapping("/publishinghouses")
    public PublishingHouse savePublishingHouse(@RequestBody PublishingHouse publishingHouse){
        return publishingHouseService.savePublishingHouse(publishingHouse);
    }

}
