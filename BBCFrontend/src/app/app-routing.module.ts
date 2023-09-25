import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{PaymentfailureComponent} from './paymentfailure/paymentfailure.component'
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { WalletComponent } from './wallet/wallet.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import {PaymentoptionsComponent} from './paymentoptions/paymentoptions.component'
//import { AuthGaurdService } from './auth-gaurd.service';
import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
const routes: Routes = [
 
  {path:'login',component:LoginComponent},
  {path:'paymentsuccess',component:PaymentSuccessComponent},
  { path: 'payment-failure', component: PaymentfailureComponent },
  {path:'wallet',component:WalletComponent},
  {path:'debit-card',component:DebitcardComponent},
  {path:'creditcard',component:CreditcardComponent},
  {path:'view-details', component:ViewDetailsComponent},
  {path:'previous-bills',component:ViewDetailsComponent},
 {path:'dash-board',component:DashBoardComponent},
 {path:'confirmation',component:ConfirmationComponent},
 {path:'paymentoptions',component:PaymentoptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
