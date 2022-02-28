package com.project.library.controller;

import com.project.library.entity.Borrow;
import com.project.library.service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BorrowController {

    @Autowired
    private BorrowService borrowService;

    @PostMapping("/borrows")
    public Borrow saveBorrow(@RequestBody Borrow borrow){
        return borrowService.saveBorrow(borrow);
    }
}
