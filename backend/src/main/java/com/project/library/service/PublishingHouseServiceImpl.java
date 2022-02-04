package com.project.library.service;

import com.project.library.entity.PublishingHouse;
import com.project.library.repository.PublishingHouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PublishingHouseServiceImpl implements PublishingHouseService {

    @Autowired
    private PublishingHouseRepository publishingHouseRepository;

    @Override
    public PublishingHouse savePublishingHouse(PublishingHouse publishingHouse) {
        return publishingHouseRepository.save(publishingHouse);
    }
}
