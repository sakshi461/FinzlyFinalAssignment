import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  GotoConfirmation(){
    this.router.navigate(['/confirmation']);
  }
}
