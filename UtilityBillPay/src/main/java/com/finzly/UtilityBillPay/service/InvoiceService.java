package com.finzly.UtilityBillPay.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.UtilityBillPay.dao.InvoiceDao;
import com.finzly.UtilityBillPay.entity.Invoice;

@Service
public class InvoiceService {

    @Autowired
    InvoiceDao invoicedao;

    // Get an invoice by its ID
    public Invoice getAllInvoicesbyId(int invoiceId) {
        return invoicedao.getAllInvoicesbyId(invoiceId);
    }

    // Get all invoices by customer ID
    public Invoice getAllInvoicesbyCustomerId(int customerID) {
        return invoicedao.getAllInvoicesbyCustomerId(customerID);	
    }

    // Get an invoice by its bill ID
    public Invoice getAllInvoiceByBillid(int billID) {
        return invoicedao.getAllInvoiceByBillid(billID);
    }
}
