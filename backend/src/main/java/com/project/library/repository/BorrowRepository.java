package com.project.library.repository;

import com.project.library.entity.Borrow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BorrowRepository extends JpaRepository<Borrow, Long> {
    public List<Borrow> findAllByReaderUserId(Long readerId);
}
