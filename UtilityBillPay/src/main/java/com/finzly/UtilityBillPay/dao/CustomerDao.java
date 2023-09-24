package com.finzly.UtilityBillPay.dao;

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
public class CustomerDao {

	@Autowired
	SessionFactory factory;
	
	public Customer   getCustomerById(int customerID)
	{
		Session session = factory.openSession();
		return session.get(Customer.class, customerID);
	}

	public String AddCustomer(Customer customer) {
		Session session = factory.openSession();
		session.save(customer);
		session.beginTransaction().commit();
		return "Account Inserted in to table";
	}

	public List<Customer> getAllCustomer() {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Customer.class);
		return criteria.list();
	
		}

	public List<Invoice> getBillsByBillDuration(String billDuration) {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Invoice.class);
	    criteria.add(Restrictions.eq("billDuration", "billDuration"));
        return criteria.list();//		
	
	}

	
	
}
