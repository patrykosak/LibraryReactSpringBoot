package com.project.library.repository;

import com.project.library.entity.PublishingHouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublishingHouseRepository extends JpaRepository<PublishingHouse,Long> {
}
