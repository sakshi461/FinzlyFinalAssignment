import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { transaction } from '../model/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  obj:any=<transaction>{};

  constructor(private router : Router,private service:HttpService) { }

  gotoDashboard(){
    this.router.navigate(['/dash-board']);
   
  }
  
  ngOnInit(): void {
  }

}
