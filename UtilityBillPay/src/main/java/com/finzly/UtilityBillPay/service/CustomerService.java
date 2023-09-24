package com.finzly.UtilityBillPay.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.finzly.UtilityBillPay.dao.CustomerDao;
import com.finzly.UtilityBillPay.entity.Customer;
import com.finzly.UtilityBillPay.entity.Invoice;

@Service
public class CustomerService {

    @Autowired
    CustomerDao customerdao;

    // Get a customer by their ID
    public Customer getCustomerById(int customerID) {
        return customerdao.getCustomerById(customerID);
    }

    // Add a new customer
    public String AddCustomer(Customer customer) {
        return customerdao.AddCustomer(customer);
    }

    // Get a list of all customers
    public List<Customer> getAllCustomer() {
        return customerdao.getAllCustomer();
    }

    // Get a list of invoices by bill duration
    public List<Invoice> getBillsByBillDuration(String billDuration) {
        return customerdao.getBillsByBillDuration(billDuration);
    }
}
