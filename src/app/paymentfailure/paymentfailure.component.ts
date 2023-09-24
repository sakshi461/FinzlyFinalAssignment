import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paymentfailure',
  templateUrl: './paymentfailure.component.html',
  styleUrls: ['./paymentfailure.component.css']
})
export class PaymentfailureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToHome() {
    // Navigate to the home page or any other relevant page
    this.router.navigate(['/dash-board']); // Replace 'previous-bills' with the actual route path
 
}
}
