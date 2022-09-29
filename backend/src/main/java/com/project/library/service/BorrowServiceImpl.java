package com.project.library.service;

import com.project.library.entity.Book;
import com.project.library.entity.Borrow;
import com.project.library.repository.BorrowRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
@Slf4j
public class BorrowServiceImpl implements BorrowService {

    @Autowired
    private BorrowRepository borrowRepository;

    @Autowired
    private BookService bookService;

    @Override
    @Transactional
    public Borrow saveBorrow(Borrow borrow) {
        borrow.setBorrowDate(LocalDate.now());
        Book book = bookService.fetchBookByISBN(borrow.getBook().getISBN());
        if(book.getAmount()>=1) {
            book.setAmount(book.getAmount() - 1);
        bookService.updateBook(book.getISBN(),book);
        }
        return borrowRepository.save(borrow);
    }

    @Override
    public List<Borrow> fetchBorrowList() {
        return borrowRepository.findAll();
    }

    @Override
    public List<Borrow> fetchAppUserBorrowList(String email) {
        return borrowRepository.findAllByReaderEmail(email);
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
            Book book = bookService.fetchBookByISBN(borrowDB.getBook().getISBN());
            LocalDate today = LocalDate.now();
            if(borrow.getStatus().equalsIgnoreCase("Wypożyczona")){
                borrowDB.setDeadline(today.plusDays(14));
            }
            else if(borrow.getStatus().equalsIgnoreCase("Zwrócona")){
                borrowDB.setReturnDate(today);
                book.setAmount(book.getAmount()+1);
                bookService.saveBook(book);
            }
            borrowDB.setStatus(borrow.getStatus());
        }

        return borrowRepository.save(borrowDB);
    }

    @Override
    public Page<Borrow> fetchPaginatedBorrowList(int pageSize, int pageNumber, String status, String searchQuery) {
        Pageable page = PageRequest.of(pageNumber, pageSize);
        if(status.equalsIgnoreCase("")&&searchQuery.equalsIgnoreCase(""))
        return borrowRepository.findAll(page);
        else if(!status.equalsIgnoreCase("")&&searchQuery.equalsIgnoreCase(""))
            return borrowRepository.findByStatus(status,page);
        else if(status.equalsIgnoreCase("")&&!searchQuery.equalsIgnoreCase(""))
            return borrowRepository.findByBookTitleContainingOrReaderNameContainingOrReaderSurnameContainingOrReaderEmail(searchQuery,searchQuery,searchQuery,searchQuery,page);
        else
            return borrowRepository.findByStatusAndBookTitleContainingOrReaderNameOrReaderSurnameContainingOrReaderEmailContaining(status,searchQuery,searchQuery,searchQuery,searchQuery,page);
    }


}
