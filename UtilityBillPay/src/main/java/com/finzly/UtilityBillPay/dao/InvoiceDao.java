package com.finzly.UtilityBillPay.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.finzly.UtilityBillPay.entity.Customer;
import com.finzly.UtilityBillPay.entity.Invoice;

@Repository
public class InvoiceDao {

	@Autowired
	SessionFactory factory;
	
	@Autowired
	CustomerDao customerdao;
	
	public Invoice   getAllInvoicesbyId(int invoiceId) 
	{
		Session session = factory.openSession();
		return session.get(Invoice.class, invoiceId);

	}

	
	public Invoice getAllInvoicesbyCustomerId(int customerID)
	{
		Session session = factory.openSession();
		return session.get(Invoice.class, customerID);
}

	public Invoice getAllInvoiceByBillid(int billID) {
		Session session = factory.openSession();
		return session.get(Invoice.class, billID);
		
	}
	
	

}
