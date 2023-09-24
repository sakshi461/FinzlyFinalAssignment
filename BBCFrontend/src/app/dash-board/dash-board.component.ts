import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  ViewDetails(){
  this.router.navigate(['/view-details']);
  }
  goToPreviousBills() {
    this.router.navigate(['/previous-bills']); // Replace 'previous-bills' with the actual route path
  }
  
  goToPayment() {
    this.router.navigate(['/payment-options']); // Replace 'payment' with the actual route path
  }
  
}
