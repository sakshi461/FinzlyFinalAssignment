package com.finzly.UtilityBillPay.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.UtilityBillPay.dao.TransactionDao;
import com.finzly.UtilityBillPay.entity.Transaction;

@Service
public class TransactionService {

    @Autowired
    TransactionDao transactiondao;

    // Get all transactions by payment method
    public List<Transaction> getAllTransactionByPaymentMethod(String paymentMethod) 
    {
        return transactiondao.getAllTransactionByPaymentMethod(paymentMethod);
    }

    // Get all transactions by payment status
    public List<Transaction> getAllTransactionByPaymentStatus(String paymentStatus) 
    {
        return transactiondao.getAllTransactionByPaymentStatus(paymentStatus);	
    }

    // Get a transaction by its reference number
    public Transaction getAllTransactionByreferenceNo(long referenceNo)
    {
        return transactiondao.getAllTransactionByreferenceNo(referenceNo);
    }
}
