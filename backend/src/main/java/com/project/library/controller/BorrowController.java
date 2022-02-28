package com.project.library.controller;

import com.project.library.entity.Borrow;
import com.project.library.service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BorrowController {

    @Autowired
    private BorrowService borrowService;

    @PostMapping("/borrows")
    public Borrow saveBorrow(@RequestBody Borrow borrow){
        return borrowService.saveBorrow(borrow);
    }

    @GetMapping("/borrows")
    public List<Borrow> fetchBorrowList(){
        return borrowService.fetchBorrowList();
    }

    @GetMapping("/borrows/user/{id}")
    public List<Borrow> fetchAppUserBorrowList(@PathVariable("id") Long readerId){
        return borrowService.fetchAppUserBorrowList(readerId);
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
}
