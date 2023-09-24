package com.finzly.UtilityBillPay.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finzly.UtilityBillPay.entity.Invoice;
import com.finzly.UtilityBillPay.entity.Transaction;

@Repository
public class TransactionDao {

	@Autowired
	SessionFactory factory;
	public List<Transaction> getAllTransactionByPaymentMethod(String paymentMethod) {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Transaction.class);
		criteria.add(Restrictions.eq("paymentMethod", "paymentMethod"));
        return criteria.list();		
	
	}

	public List<Transaction> getAllTransactionByPaymentStatus(String paymentStatus) {
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Transaction.class);
		criteria.add(Restrictions.eq("paymentStatus", "paymentStatus"));
        return criteria.list();		
	}

	public Transaction getAllTransactionByreferenceNo(long  referenceNo) {
		Session session = factory.openSession();
		return session.get(Transaction.class, referenceNo);

	}

}
