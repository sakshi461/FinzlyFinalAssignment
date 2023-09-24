package com.finzly.UtilityBillPay.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Invoice {
     @Id
	private int invoiceId;
	
	@ManyToOne
	@JoinColumn(name="customerid_fk")
	private Customer customer;
	
	private double amountDue;
	private double totalAmount;
	private boolean isCash=true;
	
	public Invoice() {
		super();
	}
	
	public Invoice(int invoiceId, Customer customer, double amountDue, double totalAmount, boolean isCash) {
		super();
		this.invoiceId = invoiceId;
		this.customer = customer;
		this.amountDue = amountDue;
		this.totalAmount = totalAmount;
		this.isCash = isCash;
	}
	
	public Customer getCustomer() {
		return customer;
	}
	
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public double getAmountDue() {
		return amountDue;
	}
	
	public void setAmountDue(double amountDue) {
		this.amountDue = amountDue;
	}
	
	public double getTotalAmount() {
		return totalAmount;
	}
	
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
	
	@Override
	public String toString() {
		return "Invoice [id=" + invoiceId + ", customer=" + customer + ", amountDue=" + amountDue + ", totalAmount="
				+ totalAmount + ", isCash=" + isCash + "]";
	}
	
	
	
}
