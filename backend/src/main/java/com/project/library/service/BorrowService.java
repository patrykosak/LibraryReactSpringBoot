package com.project.library.service;

import com.project.library.entity.Borrow;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BorrowService {
    public Borrow saveBorrow(Borrow borrow);

    public List<Borrow> fetchBorrowList();

    public List<Borrow> fetchAppUserBorrowList(Long readerId);

    public Borrow fetchBorrowById(Long borrowId);

    public void deleteBorrowById(Long borrowId);

    public Borrow updateBorrow(Long borrowId, Borrow borrow);

    Page<Borrow> fetchPaginatedBorrowList(int pageSize, int pageNumber, String status);
}
