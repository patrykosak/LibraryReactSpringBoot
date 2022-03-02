package com.project.library.repository;

import com.project.library.entity.Borrow;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BorrowRepository extends JpaRepository<Borrow, Long> {
    public List<Borrow> findAllByReaderUserId(Long readerId);
    Page<Borrow> findByStatus(String status, Pageable pageable);
}
