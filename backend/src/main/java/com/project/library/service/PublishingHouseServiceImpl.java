package com.project.library.service;

import com.project.library.entity.PublishingHouse;
import com.project.library.repository.PublishingHouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

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

    @Override
    public void deletePublishingHouseById(Long publishingHouseId) {
        publishingHouseRepository.deleteById(publishingHouseId);
    }

    @Override
    public PublishingHouse updatePublishingHouse(Long publishingHouseId, PublishingHouse publishingHouse) {
        PublishingHouse publishingHouseDB = publishingHouseRepository.findById(publishingHouseId).get();

        if(Objects.nonNull(publishingHouse.getName())&& !"".equalsIgnoreCase(publishingHouse.getName())){
            publishingHouseDB.setName(publishingHouse.getName());
        }
        if(Objects.nonNull(publishingHouse.getCity())&& !"".equalsIgnoreCase(publishingHouse.getCity())){
            publishingHouseDB.setCity(publishingHouse.getCity());
        }
        return publishingHouseRepository.save(publishingHouseDB);
    }
}
