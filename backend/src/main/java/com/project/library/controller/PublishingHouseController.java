package com.project.library.controller;

import com.project.library.entity.PublishingHouse;
import com.project.library.service.PublishingHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PublishingHouseController {

    @Autowired
    private PublishingHouseService publishingHouseService;

    @PostMapping("/publishinghouses")
    public PublishingHouse savePublishingHouse(@RequestBody PublishingHouse publishingHouse){
        return publishingHouseService.savePublishingHouse(publishingHouse);
    }

    @GetMapping("/publishinghouses")
    public List<PublishingHouse> fetchPublishingHouseList(){
        return publishingHouseService.fetchPublishingHouseList();
    }

    @GetMapping("/publishinghouses/{id}")
    public PublishingHouse fetchPublishingHouseById(@PathVariable("id") Long publishingHouseId){
        return publishingHouseService.fetchPublishingHouseById(publishingHouseId);
    }

}
