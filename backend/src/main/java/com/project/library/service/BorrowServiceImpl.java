package com.project.library.service;

import com.project.library.entity.Borrow;
import com.project.library.repository.BorrowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BorrowServiceImpl implements BorrowService {

    @Autowired
    private BorrowRepository borrowRepository;

    @Override
    public Borrow saveBorrow(Borrow borrow) {
       return borrowRepository.save(borrow);
    }
}
