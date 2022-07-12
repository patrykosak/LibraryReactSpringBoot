package com.project.library.service;

import com.project.library.entity.Borrow;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BorrowService {
    Borrow saveBorrow(Borrow borrow);

    List<Borrow> fetchBorrowList();

    List<Borrow> fetchAppUserBorrowList(String email);

    Borrow fetchBorrowById(Long borrowId);

    void deleteBorrowById(Long borrowId);

    Borrow updateBorrow(Long borrowId, Borrow borrow);

    Page<Borrow> fetchPaginatedBorrowList(int pageSize, int pageNumber, String status, String searchQuery);
}
