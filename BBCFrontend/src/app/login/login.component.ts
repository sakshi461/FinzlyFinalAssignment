// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  customer = {
    customerId: '',
  };
  enteredOTP = '';

  constructor(private router: Router,private service:HttpService) {}

  isCustomerIdValid(): boolean {
    const customerId = this.customer.customerId;
    return !isNaN(Number(customerId)) && customerId.length <= 5;
  }

  isOTPNumeric(): boolean {
    return !isNaN(Number(this.enteredOTP));
  }

  hasSpaces(input: string): boolean {
    return input.includes(' ');
  }


  sendotp(){
    alert("12345");
  }

  login(customerid:any){
    console.log("entered")
      this.service.login(customerid).subscribe((response)=>{
        console.log(response);
          if(response==="Valid user"){
            sessionStorage.setItem("id",customerid)
            this.router.navigate(['/dash-board'])
          }
          else{
            alert("Invalid user");
          }
      })
      
  }
}
