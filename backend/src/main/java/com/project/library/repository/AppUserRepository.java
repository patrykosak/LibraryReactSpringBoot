package com.project.library.repository;

import com.project.library.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByEmail(String email);
    void deleteByEmail(String email);
    List<AppUser> findByRoles(String role);
}
