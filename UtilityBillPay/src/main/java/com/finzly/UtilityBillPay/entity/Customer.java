package com.finzly.UtilityBillPay.entity;

import java.util.Date;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {

    @Id
    private int customerID;
    private String customerName;
    private String customerEmail;
    private String customerContact;
    private double unitConsumption;
    private int billID;
    private Date billDueDate;
    private String billDuration;

    // Default constructor
    public Customer() {
        super();
    }

    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerContact() {
        return customerContact;
    }

    public void setCustomerContact(String customerContact) {
        this.customerContact = customerContact;
    }

    public double getUnitConsumption() {
        return unitConsumption;
    }

    public void setUnitConsumption(double unitConsumption) {
        this.unitConsumption = unitConsumption;
    }

    public int getBillID() {
        return billID;
    }

    public void setBillID(int billID) {
        this.billID = billID;
    }

    public Date getBillDueDate() {
        return billDueDate;
    }

    public void setBillDueDate(Date billDueDate) {
        this.billDueDate = billDueDate;
    }

    public String getBillDuration() {
        return billDuration;
    }

    public void setBillDuration(String billDuration) {
        this.billDuration = billDuration;
    }

    // Parameterized constructor
    public Customer(int customerID, String customerName, String customerEmail, String customerContact,
            double unitConsumption, int billID, Date billDueDate, String billDuration) {
        super();
        this.customerID = customerID;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerContact = customerContact;
        this.unitConsumption = unitConsumption;
        this.billID = billID;
        this.billDueDate = billDueDate;
        this.billDuration = billDuration;
    }

    @Override
    public String toString() {
        return "Customer [customerID=" + customerID + ", customerName=" + customerName + ", customerEmail="
                + customerEmail + ", customerContact=" + customerContact + ", unitConsumption=" + unitConsumption
                + ", billID=" + billID + ", billDueDate=" + billDueDate + ", billDuration=" + billDuration + "]";
    }
}
