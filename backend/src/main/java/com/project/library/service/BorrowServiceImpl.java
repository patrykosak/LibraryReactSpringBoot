package com.project.library.service;

import com.project.library.entity.Borrow;
import com.project.library.repository.BorrowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class BorrowServiceImpl implements BorrowService {

    @Autowired
    private BorrowRepository borrowRepository;

    @Override
    public Borrow saveBorrow(Borrow borrow) {
       return borrowRepository.save(borrow);
    }

    @Override
    public List<Borrow> fetchBorrowList() {
        return borrowRepository.findAll();
    }

    @Override
    public List<Borrow> fetchAppUserBorrowList(Long readerId) {
        return borrowRepository.findAllByReaderUserId(readerId);
    }

    @Override
    public Borrow fetchBorrowById(Long borrowId) {
        return borrowRepository.findById(borrowId).get();
    }

    @Override
    public void deleteBorrowById(Long borrowId) {
        borrowRepository.deleteById(borrowId);
    }

    @Override
    public Borrow updateBorrow(Long borrowId, Borrow borrow) {
        Borrow borrowDB = borrowRepository.findById(borrowId).get();

        if(Objects.nonNull(borrow.getBorrowDate())){
            borrowDB.setBorrowDate(borrow.getBorrowDate());
        }
        if(Objects.nonNull(borrow.getDeadline())){
            borrowDB.setDeadline(borrow.getDeadline());
        }
        if(Objects.nonNull(borrow.getBook())){
            borrowDB.setBook(borrow.getBook());
        }
        if(Objects.nonNull(borrow.getReader())){
            borrowDB.setReader(borrow.getReader());
        }
        if(Objects.nonNull(borrow.getReturnDate())){
            borrowDB.setReturnDate(borrow.getReturnDate());
        }
        if(Objects.nonNull(borrow.getStatus())&&!"".equalsIgnoreCase(borrow.getStatus())){
            borrowDB.setStatus(borrow.getStatus());
        }

        return borrowRepository.save(borrowDB);
    }


}
