package com.finzly.UtilityBillPay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finzly.UtilityBillPay.entity.Customer;
import com.finzly.UtilityBillPay.entity.Invoice;
import com.finzly.UtilityBillPay.service.InvoiceService;

@RestController
@RequestMapping("/Invoice")
public class InvoiceController {

	/*
	 * @Author Sakshi Patel 
	 */
	@Autowired
	InvoiceService invoiceservice;
	
	@GetMapping("getAllInvoicesbyId/{invoiceId}")
	public Invoice  getAllInvoicesbyId(@PathVariable int  invoiceId)
	{
		return invoiceservice.getAllInvoicesbyId(invoiceId);
	}
	
	
	@GetMapping("getAllInvoicesbyCustomerId/{customerID}")
	public Invoice getAllInvoicesbyCustomerId(@PathVariable int customerID)
	{
		return invoiceservice.getAllInvoicesbyCustomerId(customerID);
	}
	
	@GetMapping("/getAllBillsByBillid/{billID}")
	public Invoice getAllInvoiceByBillid(@PathVariable int billID)
	{
		return invoiceservice.getAllInvoiceByBillid(billID);
	}
	
	

}
