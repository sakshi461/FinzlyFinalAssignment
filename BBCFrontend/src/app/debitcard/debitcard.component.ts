import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.component.html',
  styleUrls: ['./debitcard.component.css']
})
export class DebitcardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  GotoConfirmation(){
    this.router.navigate(['/confirmation']);
  }

}
