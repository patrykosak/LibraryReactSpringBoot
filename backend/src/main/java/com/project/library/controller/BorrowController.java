package com.project.library.controller;

import com.project.library.entity.Borrow;
import com.project.library.service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BorrowController {

    @Autowired
    private BorrowService borrowService;

    @PostMapping("/borrows")
    public Borrow saveBorrow(@RequestBody Borrow borrow) {
        return borrowService.saveBorrow(borrow);
    }

    @GetMapping("/borrows/all")
    public List<Borrow> fetchBorrowList(){
        return borrowService.fetchBorrowList();
    }

    @GetMapping("/borrows")
    public Page<Borrow> fetchPaginatedBorrowList(@RequestParam(required = false, defaultValue = "30") int pageSize,
                                                 @RequestParam(required = false, defaultValue = "0") int pageNumber,
                                                 @RequestParam(required = false, defaultValue = "") String status,
                                                 @RequestParam(required = false, defaultValue = "") String searchQuery
    ){
        return borrowService.fetchPaginatedBorrowList(pageSize, pageNumber, status, searchQuery);
    }

    @GetMapping("/borrows/user/{id}")
    public List<Borrow> fetchAppUserBorrowList(@PathVariable("id") String email){
        return borrowService.fetchAppUserBorrowList(email);
    }

    @GetMapping("/borrows/{id}")
    public Borrow fetchBorrowById(@PathVariable("id") Long borrowId){
        return borrowService.fetchBorrowById(borrowId);
    }

    @DeleteMapping("/borrows/{id}")
    public String deleteBorrowById(@PathVariable("id") Long borrowId){
        borrowService.deleteBorrowById(borrowId);
        return "Borrow deleted succesfully";
    }

    @PutMapping("/borrows/{id}")
    public Borrow updateBorrow(@PathVariable("id") Long borrowId, @RequestBody Borrow borrow){
        return borrowService.updateBorrow(borrowId, borrow);
    }
}
