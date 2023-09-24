import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent  {

  constructor(private router: Router) { }//dependency injection
  selectedPaymentMethod: string | null = null;

   selectCreditCard() {
    this.router.navigate(['/creditcard'], { queryParams: { type: 'credit' } });
  }

  selectDebitCard() {
    this.router.navigate(['/debit-card'], { queryParams: { type: 'debit' } });
  }

  selectWallet() {
    this.router.navigate(['/wallet'], { queryParams: { type: 'wallet' } });
  }

}
