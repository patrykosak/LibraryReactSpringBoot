package com.project.library.service;

import com.project.library.entity.PublishingHouse;

import java.util.List;

public interface PublishingHouseService {
    public PublishingHouse savePublishingHouse(PublishingHouse publishingHouse);

    public List<PublishingHouse> fetchPublishingHouseList();

    public PublishingHouse fetchPublishingHouseById(Long publishingHouseId);
}
