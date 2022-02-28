package com.project.library.service;

import com.project.library.entity.Borrow;

import java.util.List;

public interface BorrowService {
    public Borrow saveBorrow(Borrow borrow);

    public List<Borrow> fetchBorrowList();

    public List<Borrow> fetchAppUserBorrowList(Long readerId);

    public Borrow fetchBorrowById(Long borrowId);
}
