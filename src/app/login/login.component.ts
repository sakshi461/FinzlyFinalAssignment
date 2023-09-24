import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent {
  model = {
    customerid: '',
  };
  enteredOTP = ''; 

  constructor(private router: Router) {}

  isCustomerIdValid(): boolean {
    const customerid = this.model.customerid;
    return !isNaN(Number(customerid)) && customerid.length <= 5;
  }
  isOTPNumeric(): boolean {
    return !isNaN(Number(this.enteredOTP));
}
hasSpaces(input: string): boolean {
  return input.includes(' ');
}

  onSubmit(loginForm: any) {
    const fixedOTP = '123456';
    const enteredOTP = this.enteredOTP;
  
    // Check if enteredOTP is numeric
    if (!isNaN(Number(enteredOTP))) {
      if (enteredOTP === fixedOTP) {
        // OTP is correct, perform the login action
        console.log('Login successful');
        this.router.navigate(['/dash-board']);
      } else {
        // OTP is incorrect, show an error message or take appropriate action
        console.log('Invalid OTP. Please try again.');
      }
    } else if (this.hasSpaces(this.enteredOTP)) {
      alert('OTP cannot contain spaces.');
  } else {
      // OTP is not numeric, show an error message
      console.log('OTP must be numeric.');
    }
  }
  
  gotoDashBoard()
  {
    this.router.navigate(['/dash-board']); // Replace 'previous-bills' with the actual route path

  }
  }
