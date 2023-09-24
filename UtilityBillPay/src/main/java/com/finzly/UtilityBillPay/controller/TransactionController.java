package com.finzly.UtilityBillPay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finzly.UtilityBillPay.entity.Transaction;
import com.finzly.UtilityBillPay.service.TransactionService;

@RestController
@RequestMapping("transaction")
public class TransactionController {

    @Autowired
    TransactionService transactionservice;

    // Get all transactions by payment method
    @GetMapping("getAllTransactionByPaymentMethod/{paymentMethod}")
    public List<Transaction> getAllTransactionByPaymentMethod(@PathVariable String paymentMethod) {
        return transactionservice.getAllTransactionByPaymentMethod(paymentMethod);
    }

    // Get all transactions by payment status
    @GetMapping("getAllTransactionByPaymentStatus/{paymentStatus}")
    public List<Transaction> getAllTransactionByPaymentStatus(@PathVariable String paymentStatus) {
        return transactionservice.getAllTransactionByPaymentStatus(paymentStatus);
    }

    // Get a transaction by its reference number
    @GetMapping("getAllTransactionByReferenceNo/{referenceNo}")
    public Transaction getAllTransactionByreferenceNo(@PathVariable long referenceNo) {
        return transactionservice.getAllTransactionByreferenceNo(referenceNo);
    }
    
}
