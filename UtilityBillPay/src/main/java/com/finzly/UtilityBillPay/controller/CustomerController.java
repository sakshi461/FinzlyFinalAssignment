package com.finzly.UtilityBillPay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.finzly.UtilityBillPay.entity.Customer;
import com.finzly.UtilityBillPay.entity.Invoice;
import com.finzly.UtilityBillPay.service.CustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerController {
    
    @Autowired
    CustomerService customerservice;

    // Endpoint to add a new customer
    @PostMapping("AddUser")
    public String AddCustomer(@RequestBody Customer customer) {
        return customerservice.AddCustomer(customer);
    }

    // Endpoint to get all customers
    @GetMapping("getAllCustomer") 
    public List<Customer> getAllCustomer() {
        return customerservice.getAllCustomer();
    }

    // Endpoint to get a customer by ID
    @GetMapping("/getCustomerById/{customerID}")
    public Customer getCustomerById(@PathVariable int customerID) {
        return customerservice.getCustomerById(customerID);
    }

    // Endpoint to get invoices by bill duration
    @GetMapping("getBillsByBillDuration/{billDuration}")
    public List<Invoice> getBillsByBillDuration(@PathVariable String billDuration) {
        return customerservice.getBillsByBillDuration(billDuration);
    }
}
