import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
   obj:any={};
  

  constructor(private router : Router,private service:HttpService) { }

  ngOnInit(): void {
  }

  ViewDetails(){
    this.router.navigate(['/view-details']);
  
}
goToPreviousBills() {
this.router.navigate(['/previousbills'])  
  }

goToPayment() {
  this.router.navigate(['/payment-options']); // Replace 'payment' with the actual route path
}
}
