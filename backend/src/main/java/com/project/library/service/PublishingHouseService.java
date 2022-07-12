package com.project.library.service;

import com.project.library.entity.PublishingHouse;

import java.util.List;

public interface PublishingHouseService {
    PublishingHouse savePublishingHouse(PublishingHouse publishingHouse);

    List<PublishingHouse> fetchPublishingHouseList();

    PublishingHouse fetchPublishingHouseById(Long publishingHouseId);

    void deletePublishingHouseById(Long publishingHouseId);

    PublishingHouse updatePublishingHouse(Long publishingHouseId, PublishingHouse publishingHouse);
}
