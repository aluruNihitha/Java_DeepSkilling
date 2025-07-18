package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

    @GetMapping("/loans/{loanNumber}")
    public String getLoanDetails(@PathVariable String loanNumber) {
        
        return "Loan Details for Loan Number: " + loanNumber;
    }
}
