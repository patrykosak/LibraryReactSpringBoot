package com.project.library.service;

import com.project.library.entity.PublishingHouse;
import com.project.library.repository.PublishingHouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublishingHouseServiceImpl implements PublishingHouseService {

    @Autowired
    private PublishingHouseRepository publishingHouseRepository;

    @Override
    public PublishingHouse savePublishingHouse(PublishingHouse publishingHouse) {
        return publishingHouseRepository.save(publishingHouse);
    }

    @Override
    public List<PublishingHouse> fetchPublishingHouseList() {
        return publishingHouseRepository.findAll();
    }

    @Override
    public PublishingHouse fetchPublishingHouseById(Long publishingHouseId) {
        return publishingHouseRepository.findById(publishingHouseId).get();
    }
}
